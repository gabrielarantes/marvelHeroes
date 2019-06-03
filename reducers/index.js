//import { combineReducers } from "redux";

const INITIAL_STATE = {
  offset: 0
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_MORE":
      return { ...state, offset: state.offset + 1 };

    default:
      return state;
  }
};

export default reducer;
