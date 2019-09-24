import React from 'react';

const LoadStatusSwitcher = props => {
  const {
    isLoading,
    isError,
    isLoaded,
    LoadingComponent,
    ErrorComponent,
    DataComponent
  } = props;
  return (
    <React.Fragment>
      {isLoading && <LoadingComponent />}
      {!isLoading && isError && <ErrorComponent />}
      {!isLoading && !isError && isLoaded && <DataComponent />}
    </React.Fragment>
  );
};

export default LoadStatusSwitcher;
