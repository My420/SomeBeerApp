import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CartCard.module.scss';
import Button from '../Button/Button';
import IconTrashCan from '../IconTrashCan/IconTrashCan';

const CartCard = ({ data, changeAmount, deleteCard }) => {
  // eslint-disable-next-line no-console
  console.log('render ==================== CartCard');

  let { amount } = data;
  const { item } = data;
  const { image_url: url, name, id } = item;

  const onAmountChange = evt => {
    const { action } = evt.target.dataset;

    if (action === 'increase') {
      amount += 1;
      changeAmount(id, amount);
    } else if (action === 'decrease') {
      amount -= 1;
      if (amount === 0) {
        deleteCard(id);
      } else {
        changeAmount(id, amount);
      }
    }
  };

  const onDeleteClick = () => {
    deleteCard(id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={url} alt={name} />
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
            onClick={onAmountChange}
            data-action="decrease"
          >
            <span className="visually-hidden">decrease</span>-
          </Button>
          <span className={styles.amount}>{amount}</span>
          <Button
            className={styles.increase}
            onClick={onAmountChange}
            data-action="increase"
          >
            <span className="visually-hidden">increase</span>+
          </Button>
        </div>

        <Button className={styles.delete} onClick={onDeleteClick}>
          <span className="visually-hidden">delete</span>
          <IconTrashCan
            containerClass={styles.deleteContainer}
            pathClass={styles.deletePath}
          />
        </Button>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  changeAmount: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default CartCard;
