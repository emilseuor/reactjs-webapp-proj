import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { getItemsByVisibilityFilter, getUserPoints } from "../redux/selectors";

const ItemList = ({ items, userp }) => (
  <div className="row items-list">
    {items && items.length
      ? items.map((item, index) => {
        
        let re = {
          can: true, 
          missing: 0
        };
        if(item.cost > userp){
          re.can = false;
          //Can't redeem
          re.missing = item.cost - userp;
        }
          return <Item key={`itm-${item.id}`} item={item} redeem={re} />;
        })
      : "No todos, yay!"}
  </div>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const items = getItemsByVisibilityFilter(state, visibilityFilter);
  const userp = getUserPoints(state);
  return { items, userp };
};
// export default TodoList;
export default connect(mapStateToProps)(ItemList);
