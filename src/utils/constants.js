export const SHOP_NAME = 'Some Beer Shop';

export const LINK = {
  HOME: '/',
  CATALOG: '/catalog',
  ROULETTE: '/roulette',
  ABOUT: '/about',
  FAVORITE: '/favorite',
  CART: '/cart'
};

export const CART = 'Cart';

export const NAVIGATION_LINKS = [
  [LINK.HOME, 'Home'],
  [LINK.CATALOG, 'Catalog'],
  [LINK.ROULETTE, 'Roulette!'],
  [LINK.FAVORITE, 'Favorite'],
  [LINK.ABOUT, 'About'],
  [LINK.CART, CART]
];

export const BROWSER_WIDTH_RATIO = {
  LPC: 4,
  MPC: 3,
  TABLET_9: 2,
  TABLET_7: 1,
  MOBILE: 0
};

export const BROWSER_MIN_WIDTH = {
  LPC: 1200,
  MPC: 993,
  TABLET_9: 768,
  TABLET_7: 480,
  MOBILE: 320
};

export const SOCIAL_LINK = {
  GITHUB: 'https://github.com/My420',
  EMAIL: 'mailto:klinovitsky.aleksey@gmail.com',
  SKYPE: 'skype:live:klinovitsky.aleksey?chat'
};

export const SEARCH_INPUT_MAX_LENGTH = 40;
export const CATALOG_BEER_AMOUNT = 24;
export const POPULAR_BEER_AMOUNT = 8;
export const ABV_BOTTOM_VALUE = 0;
export const ABV_TOP_VALUE = 99;
export const IBU_BOTTOM_VALUE = 0;
export const IBU_TOP_VALUE = 1200;
export const EBC_BOTTOM_VALUE = 0;
export const EBC_TOP_VALUE = 600;

export const PAGE = 'page';
export const PER_PAGE = 'per_page';
export const BEER_NAME_PROP = 'beer_name';
export const ABV_LESS_PROP = 'abv_lt';
export const ABV_MORE_PROP = 'abv_gt';
export const IBU_LESS_PROP = 'ibu_lt';
export const IBU_MORE_PROP = 'ibu_gt';
export const EBC_LESS_PROP = 'ebc_lt';
export const EBC_MORE_PROP = 'ebc_gt';

export const AUTHOR = 'Klinovitsky Aleksey';

export const APP_LOCAL_STORAGE_FAVORITE_KEY = 'SOME_BEER_APP__FAVORITE';

export const FAVORITE = 'FAVORITE';

export const POPULAR_BEER__GET_REQUEST = 'POPULAR_BEER__GET_REQUEST';
export const POPULAR_BEER__GET_SUCCESS = 'POPULAR_BEER__GET_SUCCESS';
export const POPULAR_BEER__GET_FAILURE = 'POPULAR_BEER__GET_FAILURE';

export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_DELETE_ITEM = 'CART_DELETE_ITEM';
export const CART_SET_ITEM_AMOUNT = 'CART_SET_ITEM_AMOUNT';

export const FAVORITE_ADD_ITEM = 'FAVORITE_ADD_ITEM';
export const FAVORITE_DELETE_ITEM = 'FAVORITE_DELETE_ITEM';

export const API_HOST = 'https://api.punkapi.com/v2/beers';

export const LOAD_ERROR_MESSAGE =
  'Could not download data, please refresh the page';

export const ERROR_TITLE = 'Oops! Something went wrong.';
export const ERROR_ACTION = 'Please refresh page or try again later.';
