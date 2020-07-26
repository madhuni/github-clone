import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './RepositoriesActions.widget.scss';
import { debounce } from '../../services/utility.service';
import SearchInput from '../../components/SearchInput/SearchInput';
import {
  setFilteredRepos,
  setTypeFilterValue,
  setSearchText,
  setLanguageFilterValue,
} from '../../store/actions/repositories.action';
import CustomSelect from '../../components/CustomSelect/CustomSelect.component';

export default function RepositoriesActionsWidget() {
  const { repos, searchText, type, language } = useSelector(
    (state) => state.repos
  );
  const dispatch = useDispatch();

  // Options for available Repo types
  const typesFilterOptions = [
    'All',
    'Public',
    'Private',
    'Sources',
    'Forks',
    'Archived',
  ];
  // Options for available languages
  const languageFilterOptions = Array.from(
    new Set([
      'All',
      ...repos.map((repo) => repo.language).filter((lang) => lang !== null),
    ])
  );
  // Debounced function
  let debouncedFunc;

  // Search Functions
  const filterBySearchText = (repositories, text) => {
    return repositories.filter((repo) =>
      repo.name.toLowerCase().includes(text.toLowerCase())
    );
  };

  const filterByRepoType = (repositories, repoType) =>
    repositories.filter((repo) => {
      switch (repoType) {
        case 'All':
          return repo;
        case 'Public':
          return !repo.private;
        case 'Private':
          return repo.private;
        case 'Sources':
          return !repo.fork;
        case 'Forks':
          return repo.fork;
        case 'Archived':
          return repo.archived;
        default:
          return repo;
      }
    });

  const filterByRepoLanguage = (repositories, lang) => {
    return repositories.filter((repo) => {
      if (lang === 'All') {
        return repo;
      }
      return repo.language === lang;
    });
  };

  // User input handler
  const onKeyUpHandler = (e) => {
    e.persist();

    if (!debouncedFunc) {
      debouncedFunc = debounce(() => {
        const search = e.target.value;
        const filteredReposByName = filterBySearchText(
          filterByRepoLanguage(filterByRepoType(repos, type), language),
          search
        );
        dispatch(setSearchText(search));
        dispatch(setFilteredRepos(filteredReposByName));
      }, 500);
    }

    debouncedFunc();
  };

  const onTypeFilter = (value) => {
    const filteredDataWithType = filterByRepoType(
      filterByRepoLanguage(filterBySearchText(repos, searchText), language),
      value
    );
    dispatch(setTypeFilterValue(value));
    dispatch(setFilteredRepos(filteredDataWithType));
  };

  const onLanguageFilter = (value) => {
    const filteredDataWithLanguage = filterByRepoLanguage(
      filterByRepoType(filterBySearchText(repos, searchText), type),
      value
    );
    dispatch(setLanguageFilterValue(value));
    dispatch(setFilteredRepos(filteredDataWithLanguage));
  };

  return (
    <div className="actions-container">
      <SearchInput
        placeholder="Find a repository..."
        onKeyUpHandler={onKeyUpHandler}
      />
      <CustomSelect
        text="Type"
        options={typesFilterOptions}
        selectHandler={onTypeFilter}
      />
      <CustomSelect
        text="Language"
        options={languageFilterOptions}
        selectHandler={onLanguageFilter}
      />
    </div>
  );
}
