import { createSelector } from 'reselect'
import { get  } from 'lodash';
const counter = (state) => state.counter

export const makeCounter =  createSelector(
    counter,
  (counter) => {
     return counter
  }
)


