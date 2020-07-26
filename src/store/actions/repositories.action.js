// Action types
export const SET_REPOS = 'SET_REPOS';
export const SET_FILTERED_REPOS = 'SET_FILTERED_REPOS';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SET_TYPE_FILTER_VALUE = 'SET_TYPE_FILTER_VALUE';
export const SET_LANGUAGE_FILTER_VALUE = 'SET_LANGUAGE_FILTER_VALUE';

// Action creators
export function setRepos(data) {
  return { type: SET_REPOS, data };
}

export function setFilteredRepos(data) {
  return { type: SET_FILTERED_REPOS, data };
}

export function setSearchText(value) {
  return { type: SET_SEARCH_TEXT, value };
}

export function setTypeFilterValue(value) {
  return { type: SET_TYPE_FILTER_VALUE, value };
}

export function setLanguageFilterValue(value) {
  return { type: SET_LANGUAGE_FILTER_VALUE, value };
}
