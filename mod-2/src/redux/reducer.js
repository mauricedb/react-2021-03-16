import { actionTypes } from './actions';

export function reducer(state = { jokes: [] }, action) {
  switch (action.type) {
    case actionTypes.loadJokes:
      return { ...state, jokes: action.payload };
    case actionTypes.deleteJoke:
      return {
        ...state,
        jokes: state.jokes.filter((joke) => joke.id !== action.payload),
      };
    default:
      return state;
  }
}
