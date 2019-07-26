import { Record } from 'immutable';

const BeerDataRecord = Record(
  {
    id: null,
    name: null,
    tagline: null,
    first_brewed: null,
    description: null,
    image_url: null,
    abv: null,
    ibu: null,
    target_fg: null,
    target_og: null,
    ebc: null,
    srm: null,
    ph: null,
    attenuation_level: null,
    volume: {},
    boil_volume: {},
    method: {},
    ingredients: {},
    food_pairing: [],
    brewers_tips: null,
    contributed_by: null
  },
  'BeerDataRecord'
);

export default BeerDataRecord;
