import {
  SET_REPOS,
  SET_FILTERED_REPOS,
  SET_TYPE_FILTER_VALUE,
  SET_LANGUAGE_FILTER_VALUE,
  SET_SEARCH_TEXT,
} from '../actions/repositories.action';

const initialState = {
  repos: [],
  filteredRepos: [],
  searchText: '',
  type: 'All',
  language: 'All',
};

export default function repositoriesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_REPOS:
      return { ...state, repos: [...action.data] };
    case SET_FILTERED_REPOS:
      return { ...state, filteredRepos: [...action.data] };
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.value };
    case SET_TYPE_FILTER_VALUE:
      return { ...state, type: action.value };
    case SET_LANGUAGE_FILTER_VALUE:
      return { ...state, language: action.value };
    default:
      return state;
  }
}
