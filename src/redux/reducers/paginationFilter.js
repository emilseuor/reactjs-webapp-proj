import { SET_PAGINATION } from "../actionTypes";

const initialState = 0;

const paginationFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGINATION: {
      return action.payload.page;
    }
    default: {
      return state;
    }
  }
};

export default paginationFilter;
