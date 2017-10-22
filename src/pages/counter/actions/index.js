import * as AT from '../../../constants';

export function incrementCatCount() {
  return {
    type: AT.INCREMENT_COUNT
  }
}

export function decrementCatCount() {
  return {
    type: AT.DECREMENT_COUNT
  }
}
