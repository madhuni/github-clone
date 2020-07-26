import React, { useEffect, useState } from 'react';

import './UserProfile.widget.scss';
import {
  GoMail,
  GoLocation,
  GoBriefcase,
  GoOrganization,
} from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import UserBio from '../../components/UserBio/UserBio';
import UserInfo from '../../components/UserInfo/UserInfo';
import Button from '../../components/Button/Button';
import UserMetaData from '../../components/UserMetaData/UserMetaData';

import { getUserProfile } from '../../services/api.service';
import { setProfile } from '../../store/actions/profile.action';

export default function UserProfileWidget() {
  const [isLoading, setLoading] = useState(false);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getUserProfile().then((userProfile) => {
      dispatch(setProfile(userProfile));
      setLoading(false);
    });
  }, []);

  return (
    <aside className="user-profile-widget">
      {isLoading && <p className="t-subtitle1">Setting up your profile...</p>}
      {!isLoading && Object.keys(profile).length !== 0 && (
        <>
          {/* User login details */}
          <section className="user-profile__login-details">
            <div className="user-profile__avatar-container">
              <img className="avatar" src={profile.avatar_url} alt="Avatar" />
            </div>
            <UserInfo userName={profile.name} userHandle={profile.login} />
          </section>
          {/* User Bio */}
          <section className="user-profile__bio">
            <UserBio profileBio={profile.bio} />
          </section>
          {/* User's personal meta-data */}
          <section className="user-profile__personal-meta-data">
            <UserMetaData
              type="text"
              isIcon
              icon={<GoBriefcase />}
              text={profile.company}
            />
            <UserMetaData
              type="text"
              isIcon
              icon={<GoLocation />}
              text={profile.location}
            />
            <UserMetaData
              type="text"
              isIcon
              icon={<GoMail />}
              text={profile.email || 'placeholder-email@gmail.com'}
            />
          </section>
          {/* User's Github meta-data */}
          <section className="user-profile__github-meta-data">
            <UserMetaData
              type="link"
              isIcon
              icon={<GoOrganization />}
              value={profile.followers}
              text="Followers"
              url={profile.followers_url}
            />{' '}
            <span>-</span>
            <UserMetaData
              type="link"
              value={profile.following}
              text="Following"
              url={profile.following_url}
            />
          </section>
          {/* Follow button */}
          <section className="user-profile__follow-button-container">
            <Button disabled>Follow</Button>
          </section>
        </>
      )}
    </aside>
  );
}
