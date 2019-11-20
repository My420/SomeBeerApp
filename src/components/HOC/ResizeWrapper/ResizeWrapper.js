import React from 'react';
import calcBrowserWidthRatio from '../../../utils/calcBrowserWidthRatio';

const withResize = WrappedComponent => {
  class ResizeWrapper extends React.Component {
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
      return (
        <WrappedComponent
          {...this.props}
          browserWidthRatio={browserWidthRatio}
        />
      );
    }
  }

  ResizeWrapper.displayName = `ResizeWrapper(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;
  return ResizeWrapper;
};

export default withResize;
