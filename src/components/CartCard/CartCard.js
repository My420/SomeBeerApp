import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CartCard.module.scss';
import Button from '../Button/Button';

/* changeAmount, deleteCard */

const CartCard = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log('render ==================== CartCard');

  const { amount, item } = data;
  const { image_url: url, name, id } = item;

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
          <Button className={styles.decrease}>
            <span className="visually-hidden">decrease</span>-
          </Button>
          <span className={styles.amount}>{amount}</span>
          <Button className={styles.increase}>
            <span className="visually-hidden">increase</span>+
          </Button>
        </div>

        <Button className={styles.delete}>
          <span className="visually-hidden">delete</span>delete
        </Button>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
  // changeAmount: PropTypes.func.isRequired,
  // deleteCard: PropTypes.func.isRequired
};

export default CartCard;
