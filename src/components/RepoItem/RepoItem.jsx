import React from 'react';
import PropTypes from 'prop-types';
import { GoLaw, GoRepoForked } from 'react-icons/go';
import { MdStarBorder } from 'react-icons/md';

import RepoDetails from '../RepoDetails/RepoDetails';
import Button from '../Button/Button';
import RepoPrimaryLanguage from '../RepoPrimaryLanguage/RepoPrimaryLanguage';
import RepoStars from '../RepoStars/RepoStars';
import RepoForks from '../RepoForks/RepoForks';
import RepoLastUpdate from '../RepoLastUpdate/RepoLastUpdate';
import RepoLicense from '../RepoLicense/RepoLicense';

import './RepoItem.scss';

export default function RepoItem({
  name,
  htmlUrl,
  description,
  primaryLanguage,
  forksCount,
  licenseName,
  starsCount,
  updatedAt,
}) {
  return (
    <div className="repo-item">
      {/* Section for the Repository details */}
      <section className="repo-item__details">
        <RepoDetails name={name} url={htmlUrl} description={description} />
        {/* Meta data about the repository goes here */}
        <div className="repo-item__meta-data">
          <RepoPrimaryLanguage
            languageColor="#f1e05a"
            language={primaryLanguage}
          />
          {starsCount > 0 && (
            <RepoStars icon={<MdStarBorder />} count={starsCount} url="#" />
          )}
          {forksCount > 0 && (
            <RepoForks icon={<GoRepoForked />} count={forksCount} url="#" />
          )}
          {licenseName && <RepoLicense icon={<GoLaw />} name="MIT License" />}
          <RepoLastUpdate lastUpdateDateString={updatedAt} />
        </div>
      </section>
      {/* Section for the Repository actions */}
      <section className="repo-item__actions">
        <Button isIcon icon={<MdStarBorder />} disabled>
          Star
        </Button>
      </section>
    </div>
  );
}

RepoItem.propTypes = {
  name: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
  primaryLanguage: PropTypes.string.isRequired,
  forksCount: PropTypes.number,
  licenseName: PropTypes.string,
  starsCount: PropTypes.number,
  updatedAt: PropTypes.string.isRequired,
};

RepoItem.defaultProps = {
  description: '',
  forksCount: 0,
  licenseName: undefined,
  starsCount: 0,
};
