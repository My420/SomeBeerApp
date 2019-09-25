import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './Parameters.module.scss';
import animation from './animation.module.css';
import withToggle from '../../HOC/ToggleWrapper/ToggleWrapper';
import InputFields from './InputFields/InputFields';
import Button from '../../Button/Button';

const Parameters = ({ options, onPropertyChange, isOpen, toggleState }) => {
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

export default withToggle(Parameters);
