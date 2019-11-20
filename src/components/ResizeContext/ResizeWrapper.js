import React from 'react';
import ResizeContext from './resizeContext';

const withResize = WrappedComponent => {
  function ResizeWrapper(props) {
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
