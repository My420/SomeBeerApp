import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './SlideShow.module.scss';
import './animation.css';
import Button from '../Button/Button';
import IconArrowSvg from '../Icons/IconArrowSvg/IconArrowSvg';
import Slide from './Slide/Slide';
import debounce from '../../utils/debounce';

class SlideShow extends React.Component {
  constructor() {
    super();
    this.duration = 1000;
    this.showNextSlide = debounce(this.showNextSlide, this.duration);
    this.showPrevSlide = debounce(this.showPrevSlide, this.duration);
  }

  state = {
    index: 0,
    isForward: true
  };

  showNextSlide = () => {
    const { index } = this.state;
    const { children } = this.props;

    this.setState({
      index: (index + 1) % children.length,
      isForward: true
    });
  };

  showPrevSlide = () => {
    const { index } = this.state;
    const { children } = this.props;

    this.setState({
      index: (index || children.length) - 1,
      isForward: false
    });
  };

  addEndListener = (node, done) =>
    node.addEventListener('transitionend', done, false);

  render() {
    // eslint-disable-next-line no-console
    console.log('render ===== SlideShow');

    const { children } = this.props;
    const { index, isForward } = this.state;

    const slideBoxClassName = `${styles.slideBox} ${
      isForward ? 'forward' : 'backward'
    }`;

    const hiddenSlides = children.filter((elem, i) => {
      if (i === index) {
        return false;
      }
      return true;
    });

    return (
      <section className={slideBoxClassName}>
        <h2 className="visually-hidden">Slogan Galery</h2>
        <Button className={styles.prev} onClick={this.showPrevSlide}>
          <span className="visually-hidden">Prev</span>
          <IconArrowSvg
            direction="left"
            pathClass={styles.arrow}
            containerClass={styles.arrowContainer}
          />
        </Button>
        <TransitionGroup component={null}>
          <CSSTransition
            key={index}
            classNames="slide"
            timeout={this.duration}
            addEndListener={this.addEndListener}
          >
            <div data-slide>
              <Slide component={children[index]} />
            </div>
          </CSSTransition>
        </TransitionGroup>

        <Button className={styles.next} onClick={this.showNextSlide}>
          <span className="visually-hidden">Next</span>
          <IconArrowSvg
            direction="right"
            pathClass={styles.arrow}
            containerClass={styles.arrowContainer}
          />
        </Button>
        <div className={styles.hidden}>{hiddenSlides}</div>
      </section>
    );
  }
}

SlideShow.propTypes = {
  children: PropTypes.node.isRequired
};

export default SlideShow;
