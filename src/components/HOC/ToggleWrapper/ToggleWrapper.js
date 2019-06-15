import React from 'react';

const withToggle = (WrappedComponent, startToggleValue = false) => {
  class ToggleWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: startToggleValue
      };
    }

    toggleState = () => {
      const { isOpen } = this.state;
      this.setState({ isOpen: !isOpen });
    };

    render() {
      // eslint-disable-next-line no-console
      console.log('render ===== ToggleWrapper');
      const { isOpen } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          toggleState={this.toggleState}
          isOpen={isOpen}
        />
      );
    }
  }

  ToggleWrapper.displayName = `ToggleWrapper(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ToggleWrapper;
};

export default withToggle;
