import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './Parameters.module.scss';
import animation from './animation.module.css';
import withToggle from '../../HOC/ToggleWrapper/ToggleWrapper';
import InputFields from './InputFields/InputFields';
import Button from '../../Button/Button';
import {
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  EBC_LESS_PROP,
  EBC_MORE_PROP,
  PAGE,
  BEER_NAME_PROP
} from '../../../utils/constants';

export const Parameters = ({
  options,
  onPropertyChange,
  isOpen,
  toggleState
}) => {
  const buttonText = isOpen ? 'hide' : 'options';
  return (
    <React.Fragment>
      <Button className={styles.button} onClick={toggleState}>
        <span className={styles.buttonText}>{buttonText}</span>
      </Button>
      <TransitionGroup component={null}>
        {isOpen ? (
          <CSSTransition classNames={{ ...animation }} timeout={300}>
            <div>
              <InputFields
                options={options}
                onPropertyChange={onPropertyChange}
              />
            </div>
          </CSSTransition>
        ) : null}
      </TransitionGroup>
    </React.Fragment>
  );
};

Parameters.propTypes = {
  options: PropTypes.shape({
    [PAGE]: PropTypes.string.isRequired,
    [BEER_NAME_PROP]: PropTypes.string.isRequired,
    [ABV_LESS_PROP]: PropTypes.string.isRequired,
    [ABV_MORE_PROP]: PropTypes.string.isRequired,
    [IBU_LESS_PROP]: PropTypes.string.isRequired,
    [IBU_MORE_PROP]: PropTypes.string.isRequired,
    [EBC_LESS_PROP]: PropTypes.string.isRequired,
    [EBC_MORE_PROP]: PropTypes.string.isRequired
  }).isRequired,
  onPropertyChange: PropTypes.func.isRequired,
  toggleState: PropTypes.func.isRequired, // from HOC
  isOpen: PropTypes.bool.isRequired // from HOC
};

export default withToggle(Parameters);
