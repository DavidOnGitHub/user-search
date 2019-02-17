import * as Type from '../actions/Type';
import initialState from '../initialState';

export default (state = initialState.user, action) => {
  switch (action.type) {
    case Type.SET_USERS:
      return Object.assign({}, state, { users: action.users });
    default:
      return state;
  }
};
