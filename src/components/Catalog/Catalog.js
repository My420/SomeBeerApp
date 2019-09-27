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
import {
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  EBC_LESS_PROP,
  EBC_MORE_PROP,
  PAGE,
  BEER_NAME_PROP
} from '../../utils/constants';

export class Catalog extends React.Component {
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
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  options: PropTypes.shape({
    [PAGE]: PropTypes.string.isRequired,
    [BEER_NAME_PROP]: PropTypes.string.isRequired,
    [ABV_LESS_PROP]: PropTypes.string.isRequired,
    [ABV_MORE_PROP]: PropTypes.string.isRequired,
    [IBU_LESS_PROP]: PropTypes.string.isRequired,
    [IBU_MORE_PROP]: PropTypes.string.isRequired,
    [EBC_LESS_PROP]: PropTypes.string.isRequired,
    [EBC_MORE_PROP]: PropTypes.string.isRequired
  }).isRequired,
  isLoaded: PropTypes.bool.isRequired, // form connect
  isLoading: PropTypes.bool.isRequired, // form connect
  isError: PropTypes.bool.isRequired, // form connect
  errorMessage: PropTypes.string.isRequired, // form connect
  data: PropTypes.instanceOf(List).isRequired, // form connect
  getCatalogData: PropTypes.func.isRequired // form connect
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);
