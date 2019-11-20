import React from 'react';
import PropTypes from 'prop-types';
import styles from './Picture.module.scss';
import { BROWSER_MIN_WIDTH } from '../../utils/constants';

const Picture = ({ className, pcSrc, tabletSrc, mobileSrc, alt, ...attr }) => {
  return (
    <picture>
      <source
        media={`(max-width: ${BROWSER_MIN_WIDTH.TABLET_7}px)`}
        srcSet={mobileSrc}
      />

      <source
        media={`(max-width: ${BROWSER_MIN_WIDTH.MPC}px)`}
        srcSet={tabletSrc}
      />
      <img className={className} src={pcSrc} alt={alt} {...attr} />
    </picture>
  );
};

Picture.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  pcSrc: PropTypes.string.isRequired,
  tabletSrc: PropTypes.string.isRequired,
  mobileSrc: PropTypes.string.isRequired
};

Picture.defaultProps = {
  className: `${styles.image}`,
  alt: 'image'
};

export default Picture;
