import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CartCard.module.scss';
import Button from '../Button/Button';
import IconTrashCan from '../IconTrashCan/IconTrashCan';
import replaceEmptyImageUrl from '../../utils/replaceEmptyImageUrl';

class CartCard extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { data } = this.props;
    const {
      amount,
      item: { id }
    } = data;

    const { data: nextData } = nextProps;
    const { amount: nextAmount, item: nextItem } = nextData;
    const { id: nextId } = nextItem;

    if (amount !== nextAmount || id !== nextId) {
      return true;
    }

    return false;
  }

  onButtonClick = evt => {
    const { action } = evt.currentTarget.dataset;
    const { data, changeAmount, deleteCard } = this.props;
    const {
      item: { id },
      amount
    } = data;

    switch (action) {
      case 'increase':
        changeAmount(id, amount + 1);
        break;
      case 'delete':
        deleteCard(id);
        break;
      case 'decrease': {
        const newAmount = amount - 1;
        if (newAmount === 0) {
          deleteCard(id);
        } else {
          changeAmount(id, newAmount);
        }
        break;
      }
      default:
        break;
    }
  };

  render() {
    // eslint-disable-next-line no-console
    console.log('render ==================== CartCard');
    const { data } = this.props;
    const { item, amount } = data;
    const { image_url: url, name, id } = item;

    return (
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={replaceEmptyImageUrl(url)}
            alt={name}
          />
        </div>
        <div className={styles.nameWrapper}>
          <Link className={styles.name} to={`id/${id}`}>
            {name}
          </Link>
        </div>
        <div className={styles.controlsWrapper}>
          <div className={styles.amountWrapper}>
            <Button
              className={styles.decrease}
              onClick={this.onButtonClick}
              data-action="decrease"
            >
              <span className="visually-hidden">decrease</span>-
            </Button>
            <span className={styles.amount}>{amount}</span>
            <Button
              className={styles.increase}
              onClick={this.onButtonClick}
              data-action="increase"
            >
              <span className="visually-hidden">increase</span>+
            </Button>
          </div>

          <Button
            className={styles.delete}
            onClick={this.onButtonClick}
            data-action="delete"
          >
            <span className="visually-hidden">delete</span>
            <IconTrashCan
              containerClass={styles.deleteContainer}
              pathClass={styles.deletePath}
            />
          </Button>
        </div>
      </div>
    );
  }
}

CartCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  changeAmount: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default CartCard;
