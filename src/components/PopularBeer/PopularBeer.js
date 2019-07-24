import React from 'react';
import { connect } from 'react-redux';
import styles from './PopularBeer.module.scss';
import downloadPopularBeerData from '../../ActionCreator/downloadPopularBeerData';

class PopularBeer extends React.Component {
  componentDidMount() {
    const { getBeerData, isLoaded } = this.props;
    if (!isLoaded) {
      getBeerData();
    }
  }

  render() {
    // eslint-disable-next-line no-console
    console.log('render ===== PopularBeer', this.props);

    const { isLoading } = this.props;

    return (
      <section className={styles.popular}>
        <h2 className="visually-hidden">Popular Beer</h2>
        {isLoading ? 'loading' : 'data'}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularBeer);
