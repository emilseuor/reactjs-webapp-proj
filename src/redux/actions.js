import { LOAD_USER, LOAD_USER_HISTORY, REMOVE_USER_HISTORY, ADD_ITEM, ADD_TO_CART, SET_FILTER, SET_PAGINATION } from "./actionTypes";

export const addItem = ({ id, name, cost, category, img}) => ({
  type: ADD_ITEM,
  payload: {
    id: id,
    name, 
    cost, 
    category, 
    img
  }
});

export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: { id }
});

export const loadUser = ({ id, name, points, redeemHistory, createDate }) =>({
  type: LOAD_USER,
  payload: {
    id,
    name, 
    points, 
    redeemHistory, 
    createDate
  }
});

export const loadUserHistory = redeemedItem =>({
  type: LOAD_USER_HISTORY,
  payload: {
    redeemedItem
  }
});

export const removeUserHistory = redeemedItem =>({
  type: REMOVE_USER_HISTORY,
  payload: {
    redeemedItem
  }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const setPage = page => ({ 
  type: SET_PAGINATION, 
  payload: { page } 
});
