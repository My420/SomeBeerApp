import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Container from '../Container/Container';
import { NAVIGATION_LINKS, DEVICE_NUMBER } from '../../utils/constants';
import withResize from '../HOC/ResizeWrapper/ResizeWrapper';
import IconCrossCss from '../IconCrossCss/IconCrossCss';
import IconMenuCss from '../IconMenuCss/IconMenuCss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    const { deviceNumber } = this.props;
    this.state = { isMenuOpen: !(deviceNumber < DEVICE_NUMBER.MPC) };
  }

  componentWillReceiveProps(nextProps) {
    const { deviceNumber } = this.props;
    if (deviceNumber !== nextProps.deviceNumber) {
      if (nextProps.deviceNumber < DEVICE_NUMBER.MPC) {
        this.setState({ isMenuOpen: false });
      } else {
        this.setState({ isMenuOpen: true });
      }
    }
  }

  toggleMenu = evt => {
    evt.preventDefault();
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  render() {
    // eslint-disable-next-line no-console
    console.log('render ===== Header');
    const { deviceNumber } = this.props;
    const { isMenuOpen } = this.state;
    return (
      <header className={styles.header}>
        <Container className={styles.inner}>
          {isMenuOpen ? <Navigation links={NAVIGATION_LINKS} /> : null}
        </Container>
        {deviceNumber < DEVICE_NUMBER.MPC ? (
          <Button onClick={this.toggleMenu} className={styles.button}>
            {isMenuOpen ? <IconCrossCss /> : <IconMenuCss />}
          </Button>
        ) : null}
      </header>
    );
  }
}

Header.propTypes = {
  deviceNumber: PropTypes.oneOf([
    DEVICE_NUMBER.MOBILE,
    DEVICE_NUMBER.TABLET,
    DEVICE_NUMBER.LPC,
    DEVICE_NUMBER.MPC
  ]).isRequired
};

export default withResize(Header);
