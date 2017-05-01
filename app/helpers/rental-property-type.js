import Ember from 'ember';

const communityPropTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
]

export function rentalPropertyType([type]) {
  return "nyah"
}

export default Ember.Helper.helper(rentalPropertyType);
