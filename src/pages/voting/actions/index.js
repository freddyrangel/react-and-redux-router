import * as AT from '../../../constants';

export function fetchCatImage() {
  return function(dispatch, getState, { isomorphicFetch }) {

    dispatch({ type: AT.FETCH_CAT_DATA_PENDING });

    const params = { api_key: AT.API_KEY };

    return isomorphicFetch(AT.CAT_IMAGE_URL, params)
      .then((data) => {
        dispatch({
          type: AT.FETCH_CAT_DATA_SUCCESS,
          payload: data
        });
      })
      .catch((error) => {
        dispatch({
          type: AT.FETCH_CAT_DATA_FAILED,
          error: true,
          payload: error
        })
      });
  }
}

export function upvote() {
  return function(dispatch, getState, dependencies) {
    voteCatImage(dispatch, getState, dependencies, 10);
  }
}

export function downvote() {
  return function(dispatch, getState, dependencies) {
    voteCatImage(dispatch, getState, dependencies, 1);
  }
}

function voteCatImage(dispatch, getState, {isomorphicFetch}, score) {

  dispatch({ type: AT.CAT_VOTE_PENDING });

  const state = getState();
  const url = state.catData.url;

  const params = {
    api_key  : AT.API_KEY,
    method   : 'POST',
    mode     : 'no-cors',
    image_id : url,
    score
  };

  return isomorphicFetch('http://thecatapi.com/api/images/vote', params)
    .then((data) => {
      dispatch({
        type: AT.CAT_VOTE_SUCCESS,
        payload: data
      })
      dispatch(fetchCatImage());
    })
    .catch((error) => {
      dispatch({
        type: AT.CAT_VOTE_FAILED,
        error: true,
        payload: error
      })
    });
};
