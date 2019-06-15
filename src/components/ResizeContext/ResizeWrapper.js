import React from 'react';
import ResizeContext from './resizeContext';

const withResize = WrappedComponent => {
  function ResizeWrapper(props) {
    // eslint-disable-next-line no-console
    console.log('render ===== ResizeWrapper');
    return (
      <ResizeContext.Consumer>
        {value => <WrappedComponent {...value} {...props} />}
      </ResizeContext.Consumer>
    );
  }

  ResizeWrapper.displayName = `ResizeWrapper(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ResizeWrapper;
};

export default withResize;
