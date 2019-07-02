import { createSelector } from 'reselect'
import { get} from 'lodash';
const pageIndex = (state) => state.pageIndex

export const makePageIndex = createSelector(
    pageIndex,
  (pageIndex) => {
     return pageIndex
  }
)
export const makeFeed = createSelector(
    pageIndex,
  (pageIndex) => {
     return {
        feed: get(pageIndex,'pageDate',[]),
        feed_length:  get(pageIndex,'pageDate',[]).length 
     }
  }
)


