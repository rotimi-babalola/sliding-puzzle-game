import { EXAMPLE } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case EXAMPLE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
