import { ADD_ITEM, ADD_TO_CART } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

function items (state = initialState, action) {

  switch (action.type) {
    case ADD_ITEM: {
      const { id, name, cost, category, img } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            name, 
            cost, 
            category, 
            img,
            incart: false
          }
        }
      };
    }
    case ADD_TO_CART: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            incart: !state.byIds[id].incart
          }
        }
      };
    }
    default:
      return state;
  }
}

export default items;