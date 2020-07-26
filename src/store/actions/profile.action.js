// Action types
export const SET_PROFILE = 'SET_PROFILE';

// Action creators
export function setProfile(profile) {
  return { type: SET_PROFILE, profile };
}
