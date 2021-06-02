import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import paginationFilter from "./paginationFilter";
import items from "./items";
import user from "./users";

export default combineReducers({ items, user, visibilityFilter, paginationFilter });
