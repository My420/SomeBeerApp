export const SHOP_NAME = 'Some Beer Shop';

export const LINK = {
  HOME: '/',
  CATALOG: '/catalog',
  ROULETTE: '/roulette',
  ABOUT: '/about',
  FAVORITE: '/favorite',
  CART: '/cart'
};

export const NAVIGATION_LINKS = [
  [LINK.HOME, 'Home'],
  [LINK.CATALOG, 'Catalog'],
  [LINK.ROULETTE, 'Roulette!'],
  [LINK.FAVORITE, 'Favorite'],
  [LINK.ABOUT, 'About'],
  [LINK.CART, 'Cart']
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

export const AUTHOR = 'Klinovitsky Aleksey';

export const POPULAR_BEER__GET_REQUEST = 'POPULAR_BEER__GET_REQUEST';
export const POPULAR_BEER__GET_SUCCESS = 'POPULAR_BEER__GET_SUCCESS';
export const POPULAR_BEER__GET_FAILURE = 'POPULAR_BEER__GET_FAILURE';

export const API_HOST = 'https://api.punkapi.com/v2/';

export const POPULAR_BEER_AMOUNT = 8;

export const LOAD_ERROR_MESSAGE =
  'Could not download data, please refresh the page';

export const ERROR_TITLE = 'Oops! Something went wrong.';
export const ERROR_ACTION = 'Please refresh page or try again later.';
