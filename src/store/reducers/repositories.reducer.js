import { SET_REPOS } from '../actions/repositories.action';

const initialState = [];

export default function repositoriesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_REPOS:
      return [...action.data];
    default:
      return state;
  }
}
