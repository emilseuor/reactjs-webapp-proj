import { VISIBILITY_FILTERS, ITEMS_PER_PAGE } from "../constants";

export const getItemsState = store => store.items;

export const getUserState = store => store.user;

export const getItemsList = store =>
  getItemsState(store) ? getItemsState(store).allIds : [];

export const getItemById = (store, id) =>
  getItemsState(store) ? { ...getItemsState(store).byIds[id], id } : {};

export const getItems = store =>
  getItemsList(store).map(id => getItemById(store, id));
  
export const getUserPoints = store =>{
  console.log(store);
  return store.user.user.points;
};
export const getTotalCounts = store =>{
  const totalitms = store.items.allIds.length;
  let totalpages = Math.round(totalitms / ITEMS_PER_PAGE);
  
  if(totalitms % ITEMS_PER_PAGE > 0){
    totalpages++;
  }
  return {items: totalitms, pages: totalpages};
};

export const getItemsByVisibilityFilter = (store, visibilityFilter) => {
  const pagenum = store.paginationFilter;
  let allItems = getItems(store);

  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.LOW_PRICE:
      allItems = [...allItems.sort((a,b) => a.cost - b.cost)];
      break;
    case VISIBILITY_FILTERS.HIGH_PRICE:
      allItems = [...allItems.sort((a,b) => b.cost - a.cost)];
      break;
    case VISIBILITY_FILTERS.ALL:
        //All
      break;
    default: 
      break;
  }
  
  let r = allItems.slice(pagenum*ITEMS_PER_PAGE, (pagenum + 1)*ITEMS_PER_PAGE);
  return r;
};

export const getItemsByPage = (store, pagenumber) => {
  const allItems = getItems(store);
//  console.log("call to getItemsByPage");
  return allItems;
};
