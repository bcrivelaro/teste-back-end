import { GET_VISITS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_VISITS:
      return {
        ...state,
        visits: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
