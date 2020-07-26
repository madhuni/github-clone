import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoRepo } from 'react-icons/go';

import RepoItem from '../../components/RepoItem/RepoItem';

import { getRepoDetails } from '../../services/api.service';
import { setRepos } from '../../store/actions/repositories.action';
import {
  getLanguageColor,
  getFormattedDate,
} from '../../services/utility.service';

import NoContent from '../../assets/images/no-content.svg';
import './UserRepositories.widget.scss';

export default function UserRepositoriesWidget() {
  const [loadingRepos, setLoadingRepos] = useState(false);
  const repos = useSelector((state) => state.repos);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoadingRepos(true);
    getRepoDetails().then((data) => {
      dispatch(setRepos(data));
      setLoadingRepos(false);
    });
  }, []);

  return (
    <section className="repos-widget">
      <header className="header">
        <GoRepo />
        <h6 className="t-h6">Repositories - {repos.length}</h6>
      </header>
      {/* Loading state */}
      {loadingRepos && (
        <p className="loading t-subtitle1">Loading Repositories...</p>
      )}
      {/* No content state */}
      {!repos.length && !loadingRepos && (
        <div className="no-content">
          <img src={NoContent} alt="No content" />
          <p className="t-subtitle1">No Repositories Found!</p>
        </div>
      )}
      {/* Repositories list view */}
      {repos.length > 0 &&
        repos.map(
          ({
            id,
            name,
            html_url: htmlUrl,
            description,
            language,
            forks_count: forksCount,
            license,
            stargazers_count: starsCount,
            updated_at: updatedAt,
            forks_url: forksUrl,
            stargazers_url: starsUrl,
          }) => (
            <RepoItem
              key={id}
              name={name}
              htmlUrl={htmlUrl}
              description={description}
              primaryLanguage={language || ''}
              languageColor={getLanguageColor(language)}
              forksCount={forksCount}
              licenseName={license ? license.name : ''}
              starsCount={starsCount}
              updatedAt={getFormattedDate(updatedAt)}
              forksUrl={forksUrl}
              starsUrl={starsUrl}
            />
          )
        )}
    </section>
  );
}
