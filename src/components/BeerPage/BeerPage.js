import React from 'react';
import PropTypes from 'prop-types';
import { Record } from 'immutable';
import { connect } from 'react-redux';
import BeerItem from '../BeerItem/BeerItem';
import IconLoadingSvg from '../IconLoadingSvg/IconLoadingSvg';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import styles from './BeerPage.module.scss';
import getBeerById from '../../ActionCreator/getBeerById';
import LoadStatusSwitcher from '../LoadStatusSwitcher/LoadStatusSwitcher';

export class BeerPage extends React.Component {
  componentDidMount() {
    const { getBeerData, id } = this.props;
    getBeerData(id);
  }

  render() {
    const {
      history,
      isLoaded,
      isLoading,
      isError,
      errorMessage,
      data
    } = this.props;

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
      return <BeerItem history={history} data={data} />;
    };

    return (
      <React.Fragment>
        <LoadStatusSwitcher
          isLoading={isLoading}
          isError={isError}
          isLoaded={isLoaded}
          LoadingComponent={LoadingComponent}
          ErrorComponent={ErrorComponent}
          DataComponent={DataComponent}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoaded: store.beerItem.isLoaded,
    isLoading: store.beerItem.isLoading,
    isError: store.beerItem.isError,
    errorMessage: store.beerItem.errorMessage,
    data: store.beerItem.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBeerData: id => {
      dispatch(getBeerById(id));
    }
  };
};

BeerPage.propTypes = {
  id: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired, // form connect
  isLoading: PropTypes.bool.isRequired, // form connect
  isError: PropTypes.bool.isRequired, // form connect
  errorMessage: PropTypes.string.isRequired, // form connect
  data: PropTypes.instanceOf(Record).isRequired, // form connect
  getBeerData: PropTypes.func.isRequired // form connect
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerPage);
