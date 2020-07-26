import { SET_PROFILE } from '../actions/profile.action';

const initialState = {};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return { ...action.profile };
    default:
      return state;
  }
}
