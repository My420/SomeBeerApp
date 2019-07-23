import React from 'react';
import styles from './SocialMedia.module.scss';
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroupItem/ListGroupItem';
import IconGithub from '../IconGithub/IconGithub';
import IconEmail from '../IconEmail/IconEmail';
import IconSkype from '../IconSkype/IconSkype';
import { SOCIAL_LINK } from '../../utils/constants';

const socialMedia = [
  {
    title: 'GitHub profile',
    href: SOCIAL_LINK.GITHUB,
    displayedText: <IconGithub pathClass={styles.path} />,
    uniqueModifier: 'github'
  },
  {
    title: 'Email Address',
    href: SOCIAL_LINK.EMAIL,
    displayedText: <IconEmail pathClass={styles.path} />,
    uniqueModifier: 'email'
  },
  {
    title: 'Skype',
    href: SOCIAL_LINK.SKYPE,
    displayedText: <IconSkype pathClass={styles.path} />,
    uniqueModifier: 'skype'
  }
];

const SocialMedia = () => {
  return (
    <ListGroup className={styles.list}>
      {socialMedia.map(elem => {
        const { title, href, displayedText, uniqueModifier } = elem;

        const className = {
          listGroupItem: `${styles.item} ${styles[`item-${uniqueModifier}`]}`,
          link: `${styles.link} ${styles[`link-${uniqueModifier}`]}`
        };

        return (
          <ListGroupItem
            className={className.listGroupItem}
            key={uniqueModifier}
          >
            <a className={className.link} href={href} title={title}>
              {displayedText}
            </a>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default SocialMedia;
