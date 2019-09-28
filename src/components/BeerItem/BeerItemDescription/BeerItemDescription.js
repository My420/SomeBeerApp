import React from 'react';
import PropTypes from 'prop-types';
import styles from './BeerItemDescription.module.scss';
import ListGroup from '../../ListGroup/ListGroup';
import ListGroupItem from '../../ListGroupItem/ListGroupItem';
import { ENTER_CHAR_CODE } from '../../../utils/constants';

class BeerItemDescription extends React.Component {
  state = { current: 'Description' };

  onTabCLick = evt => {
    const { tab } = evt.target.dataset;
    const { current } = this.state;
    if (current !== tab) {
      this.setState({ current: tab });
    }
  };

  onKeyPress = evt => {
    const key = evt.charCode;
    if (key === ENTER_CHAR_CODE) {
      this.onTabCLick(evt);
    }
  };

  getFoodDescription = () => {
    const {
      description: { Food: food }
    } = this.props;

    const foodDescription = food.map(elem => {
      return (
        <ListGroupItem className={styles.foodItem} key={elem.slice(0, 8)}>
          {elem}
        </ListGroupItem>
      );
    });

    return <ListGroup className={styles.foodList}>{foodDescription}</ListGroup>;
  };

  getDescription = () => {
    const { description } = this.props;
    const { current } = this.state;
    if (current === 'Food') {
      return this.getFoodDescription();
    }

    return <p className={styles.description}>{description[current]}</p>;
  };

  getTabs = () => {
    const { description } = this.props;
    const { current } = this.state;
    const tabs = Object.keys(description).map(tab => {
      const isActive = tab === current;
      return (
        <ListGroupItem
          className={styles.tabItem}
          key={tab}
          data-tab={tab}
          data-active={isActive}
          onClick={this.onTabCLick}
          onKeyPress={this.onKeyPress}
          tabIndex="0"
        >
          {tab}
        </ListGroupItem>
      );
    });

    return tabs;
  };

  render() {
    return (
      <React.Fragment>
        <ListGroup className={styles.tabList}>{this.getTabs()}</ListGroup>
        {this.getDescription()}
      </React.Fragment>
    );
  }
}

BeerItemDescription.propTypes = {
  description: PropTypes.shape({
    Description: PropTypes.string.isRequired,
    Food: PropTypes.array.isRequired,
    Tips: PropTypes.string.isRequired
  }).isRequired
};

export default BeerItemDescription;
