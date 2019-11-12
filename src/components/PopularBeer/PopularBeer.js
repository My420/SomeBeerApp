import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import styles from './PopularBeer.module.scss';
import downloadPopularBeerData from '../../ActionCreator/downloadPopularBeerData';
import ProductList from '../ProductList/ProductList';
import GridItemCard from '../GridItemCard/GridItemCard';
import IconLoadingSvg from '../Icons/IconLoadingSvg/IconLoadingSvg';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import LoadStatusSwitcher from '../LoadStatusSwitcher/LoadStatusSwitcher';

export class PopularBeer extends React.Component {
  componentDidMount() {
    const { getBeerData, isLoaded } = this.props;
    if (!isLoaded) {
      getBeerData();
    }
  }

  render() {
    // eslint-disable-next-line no-console
    console.log('render =============================== PopularBeer');

    const { isLoaded, isLoading, isError, errorMessage, data } = this.props;

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
      <section className={styles.popular}>
        <h2 className="visually-hidden">Popular Beer</h2>
        <LoadStatusSwitcher
          isLoading={isLoading}
          isError={isError}
          isLoaded={isLoaded}
          LoadingComponent={LoadingComponent}
          ErrorComponent={ErrorComponent}
          DataComponent={DataComponent}
        />
      </section>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoaded: store.popularBeer.isLoaded,
    isLoading: store.popularBeer.isLoading,
    isError: store.popularBeer.isError,
    errorMessage: store.popularBeer.errorMessage,
    data: store.popularBeer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBeerData: () => {
      dispatch(downloadPopularBeerData());
    }
  };
};

PopularBeer.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Immutable.List).isRequired,
  getBeerData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularBeer);
