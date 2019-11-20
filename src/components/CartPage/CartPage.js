import React from 'react';
import styles from './CartPage.module.scss';
import Main from '../Main/Main';
import Container from '../Container/Container';
import Cart from '../UserCart/UserCart';

const CartPage = () => {
  return (
    <Main className={styles.main}>
      <Container className={styles.container}>
        <section className={styles.cartPage}>
          <h2 className="visually-hidden">Cart</h2>
          <Cart />
        </section>
      </Container>
    </Main>
  );
};

export default CartPage;
