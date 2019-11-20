import React from 'react';
import PropTypes from 'prop-types';
import styles from './GridItemCard.module.scss';
import GridCardControl from './GridCardControl/GridCardControl';
import GridCardLink from './GridCardLink/GridCardLink';

class GridItemCard extends React.Component {
  state = { isDescriptionOpen: false };

  showDescription = () => {
    this.setState({ isDescriptionOpen: true });
  };

  hideDescription = () => {
    this.setState({ isDescriptionOpen: false });
  };

  toggleDescription = () => {
    const { isDescriptionOpen } = this.state;
    this.setState({ isDescriptionOpen: !isDescriptionOpen });
  };

  addEndListener = (node, done) =>
    node.addEventListener('transitionend', done, false);

  render() {
    const { data } = this.props;
    const { isDescriptionOpen } = this.state;

    return (
      <div className={styles.card}>
        <GridCardLink
          data={data}
          isDescriptionOpen={isDescriptionOpen}
          onCursorEnter={this.showDescription}
          onCursorLeave={this.hideDescription}
        />
        <GridCardControl
          data={data}
          isDescriptionOpen={isDescriptionOpen}
          onToggleButtonClick={this.toggleDescription}
        />
      </div>
    );
  }
}

GridItemCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default GridItemCard;
