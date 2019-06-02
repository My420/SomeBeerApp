import React from 'react';
import calcDeviceNumber from '../../../utils/calcDeviceNumber';

const withResize = WrappedComponent => {
  return class ResizeWrapper extends React.Component {
    state = {
      deviceNumber: calcDeviceNumber(document.documentElement.clientWidth)
    };

    componentDidMount() {
      window.addEventListener('resize', this.onBrowserSizeChange);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onBrowserSizeChange);
    }

    onBrowserSizeChange = evt => {
      const newBrowserWidth = evt.target.innerWidth;
      const newNumber = calcDeviceNumber(newBrowserWidth);
      const { deviceNumber } = this.state;
      if (newNumber !== deviceNumber) {
        this.setState({ deviceNumber: newNumber });
      }
    };

    render() {
      const { deviceNumber } = this.state;
      // eslint-disable-next-line no-console
      console.log('render ===== ResizeWrapper');
      return <WrappedComponent {...this.props} deviceNumber={deviceNumber} />;
    }
  };
};

export default withResize;
