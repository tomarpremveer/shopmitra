import { SIGN_IN, SIGN_OUT } from "../types/Index";
const INITIAL_STATE = {
  isSignedIn: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
