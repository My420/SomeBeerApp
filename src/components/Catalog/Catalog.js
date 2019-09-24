import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import ProductList from '../ProductList/ProductList';
import GridItemCard from '../GridItemCard/GridItemCard';
import IconLoadingSvg from '../IconLoadingSvg/IconLoadingSvg';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import styles from './Catalog.module.scss';
import getCatalogBeerData from '../../ActionCreator/getCatalogBeerData';
import CatalogFilter from '../CatalogFilter/CatalogFilter';
import LoadStatusSwitcher from '../LoadStatusSwitcher/LoadStatusSwitcher';
import CatalogPagination from '../CatalogPagination/CatalogPagination';

class Catalog extends React.Component {
  componentDidMount() {
    const { getCatalogData, options } = this.props;
    getCatalogData(options);
  }

  componentDidUpdate(prevProps) {
    const { options: prevOpt } = prevProps;
    const { options: currentOpt } = this.props;
    if (prevOpt !== currentOpt) {
      const { getCatalogData, options } = this.props;
      getCatalogData(options);
    }
  }

  render() {
    // eslint-disable-next-line no-console
    console.log('render ========== Catalog');
    const {
      history,
      options,
      isLoaded,
      isLoading,
      isError,
      errorMessage,
      data
    } = this.props;

    const isDataEmpty = data.size === 0;

    const LoadingComponent = () => {
      return (
        <div className={styles.loader}>
          <IconLoadingSvg color="#e69e63" />
        </div>
      );
    };

    const ErrorComponent = () => {
      return (
        <div className={styles.error}>
          <ErrorMsg errorMsg={errorMessage} />
        </div>
      );
    };

    const DataComponent = () => {
      return <ProductList data={data} ProductCard={GridItemCard} />;
    };

    return (
      <React.Fragment>
        <CatalogFilter value={options} history={history} />
        <LoadStatusSwitcher
          isLoading={isLoading}
          isError={isError}
          isLoaded={isLoaded}
          LoadingComponent={LoadingComponent}
          ErrorComponent={ErrorComponent}
          DataComponent={DataComponent}
        />
        {!isDataEmpty && <CatalogPagination options={options} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoaded: store.catalog.isLoaded,
    isLoading: store.catalog.isLoading,
    isError: store.catalog.isError,
    errorMessage: store.catalog.errorMessage,
    data: store.catalog.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCatalogData: options => {
      dispatch(getCatalogBeerData(options));
    }
  };
};

Catalog.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(List).isRequired,
  getCatalogData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);
