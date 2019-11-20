import React from 'react';
import PropTypes from 'prop-types';
import calcBrowserWidthRatio from '../../utils/calcBrowserWidthRatio';
import ResizeContext from './resizeContext';

class ResizeProvider extends React.Component {
  state = {
    browserWidthRatio: calcBrowserWidthRatio(
      document.documentElement.clientWidth
    )
  };

  componentDidMount() {
    window.addEventListener('resize', this.onBrowserSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onBrowserSizeChange);
  }

  onBrowserSizeChange = evt => {
    const newBrowserWidth = evt.target.innerWidth;
    const newRatio = calcBrowserWidthRatio(newBrowserWidth);
    const { browserWidthRatio } = this.state;
    if (newRatio !== browserWidthRatio) {
      this.setState({ browserWidthRatio: newRatio });
    }
  };

  render() {
    const { browserWidthRatio } = this.state;
    const { children } = this.props;
    return (
      <ResizeContext.Provider value={{ browserWidthRatio }}>
        {children}
      </ResizeContext.Provider>
    );
  }
}

ResizeProvider.propTypes = {
  children: PropTypes.node
};

ResizeProvider.defaultProps = {
  children: null
};
export default ResizeProvider;
