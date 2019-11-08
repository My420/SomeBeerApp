import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import styles from './RoulettePage.module.scss';
import Main from '../Main/Main';
import Container from '../Container/Container';
import IconLoadingSvg from '../IconLoadingSvg/IconLoadingSvg';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import LoadStatusSwitcher from '../LoadStatusSwitcher/LoadStatusSwitcher';
import getRouletteData from '../../ActionCreator/getRouletteData';
import RoulettePanel from '../RoulettePanel/RoulettePanel';
import { SHOP_NAME } from '../../utils/constants';
import withResize from '../ResizeContext/ResizeWrapper';

export class RoulettePage extends React.Component {
  componentDidMount() {
    const { getData, isLoaded } = this.props;
    if (!isLoaded) {
      getData();
    }
  }

  changeRouletteData = () => {
    const { getData } = this.props;
    getData();
  };

  render() {
    // eslint-disable-next-line no-console
    console.log('render ============================ RoulettePage');

    const {
      isLoaded,
      isLoading,
      isError,
      errorMessage,
      data,
      browserWidthRatio
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
      return (
        <RoulettePanel
          key={browserWidthRatio}
          data={data}
          changeData={this.changeRouletteData}
        />
      );
    };

    return (
      <Main className={styles.main}>
        <Container className={styles.container}>
          <h2 className={styles.name}>
            <span className={styles.shopName}>{SHOP_NAME}</span>
            <span className={styles.pageName}>Roulette!</span>
          </h2>
          <p className={styles.slogan}>We will decide which beer you get!</p>
          <LoadStatusSwitcher
            isLoading={isLoading}
            isError={isError}
            isLoaded={isLoaded}
            LoadingComponent={LoadingComponent}
            ErrorComponent={ErrorComponent}
            DataComponent={DataComponent}
          />
        </Container>
      </Main>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoaded: store.roulette.isLoaded,
    isLoading: store.roulette.isLoading,
    isError: store.roulette.isError,
    errorMessage: store.roulette.errorMessage,
    data: store.roulette.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(getRouletteData());
    }
  };
};

RoulettePage.propTypes = {
  browserWidthRatio: PropTypes.number.isRequired,
  isLoaded: PropTypes.bool.isRequired, // form connect
  isLoading: PropTypes.bool.isRequired, // form connect
  isError: PropTypes.bool.isRequired, // form connect
  errorMessage: PropTypes.string.isRequired, // form connect
  data: PropTypes.instanceOf(List).isRequired, // form connect
  getData: PropTypes.func.isRequired // form connect
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withResize(RoulettePage));
