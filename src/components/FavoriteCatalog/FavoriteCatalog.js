import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import ProductList from '../ProductList/ProductList';
import GridItemCard from '../GridItemCard/GridItemCard';
import { CATALOG_BEER_AMOUNT } from '../../utils/constants';
import FavoritePagination from './FavoritePagination/FavoritePagination';
import withFavorite from '../HOC/FavoriteWrapper/FavoriteWrapper';

export class FavoriteCatalog extends React.Component {
  state = {
    page: 0
  };

  getPageData = () => {
    const { favoriteData } = this.props;
    const { size } = favoriteData;
    const list = favoriteData.toList();
    if (size <= CATALOG_BEER_AMOUNT) {
      return list;
    }
    const { page } = this.state;
    const startIndex = page === 0 ? page : page * CATALOG_BEER_AMOUNT;
    const endIndex = startIndex + CATALOG_BEER_AMOUNT;

    return list.slice(startIndex, endIndex);
  };

  onUserClick = evt => {
    const { action } = evt.target.dataset;
    const { page } = this.state;
    if (action === 'prev') {
      this.setState({ page: page - 1 });
    } else {
      this.setState({ page: page + 1 });
    }
  };

  render() {
    const {
      favoriteData: { size }
    } = this.props;
    const { page } = this.state;
    const pageAmount = Math.ceil(size / CATALOG_BEER_AMOUNT);
    const isPrevDisabled = page === 0;
    const isNextDisabled = page === pageAmount - 1;
    const data = this.getPageData();

    return (
      <React.Fragment>
        <ProductList data={data} ProductCard={GridItemCard} />
        {size > CATALOG_BEER_AMOUNT ? (
          <FavoritePagination
            isPrevDisabled={isPrevDisabled}
            isNextDisabled={isNextDisabled}
            onUserClick={this.onUserClick}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

FavoriteCatalog.propTypes = {
  favoriteData: PropTypes.instanceOf(Map).isRequired
};

export default withFavorite(FavoriteCatalog);
