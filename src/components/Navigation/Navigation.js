import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroupItem/ListGroupItem';
import styles from './Navigation.module.scss';

const Navigation = ({ links }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== Navigation');
  return (
    <nav className={styles.navigation}>
      <ListGroup className={styles.list}>
        {links.map(element => {
          return (
            <ListGroupItem key={element[0]} className={styles.item}>
              <NavLink
                to={element[0]}
                className={styles.link}
                activeClassName={styles.active}
                exact
              >
                {element[1]}
              </NavLink>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </nav>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

export default Navigation;
