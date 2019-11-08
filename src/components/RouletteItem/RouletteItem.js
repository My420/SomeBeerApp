import React from 'react';
import PropTypes from 'prop-types';
import styles from './RouletteItem.module.scss';
import replaceEmptyImageUrl from '../../utils/replaceEmptyImageUrl';

class RouletteItem extends React.PureComponent {
  render() {
    // eslint-disable-next-line no-console
    console.log('render ============= RouletteItem');

    const { url, name, id } = this.props;

    return (
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src={replaceEmptyImageUrl(url)}
          alt={name}
          id={id}
        />
      </div>
    );
  }
}

RouletteItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

RouletteItem.defaultProps = {
  url: ''
};

export default RouletteItem;
