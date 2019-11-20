import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './Header.module.scss';
import animation from './animation.module.css';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Container from '../Container/Container';
import { NAVIGATION_LINKS } from '../../utils/constants';
import IconCrossCss from '../Icons/IconCrossCss/IconCrossCss';
import IconMenuCss from '../Icons/IconMenuCss/IconMenuCss';

const Header = ({ isOpen, toggleState, isButtonShown }) => {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <TransitionGroup component={null}>
          {isOpen ? (
            <CSSTransition classNames={{ ...animation }} timeout={300}>
              <div>
                <Navigation links={NAVIGATION_LINKS} />
              </div>
            </CSSTransition>
          ) : null}
        </TransitionGroup>
      </Container>
      {isButtonShown ? (
        <Button onClick={toggleState} className={styles.button}>
          {isOpen ? <IconCrossCss /> : <IconMenuCss />}
        </Button>
      ) : null}
    </header>
  );
};

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleState: PropTypes.func.isRequired,
  isButtonShown: PropTypes.bool.isRequired
};

export default Header;
