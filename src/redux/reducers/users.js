import { LOAD_USER, LOAD_USER_HISTORY, REMOVE_USER_HISTORY } from "../actionTypes";

const initialState = {
  user: {
    id: "",
    name:"", 
    points: 0, 
    redeemHistory: [], 
    createDate: new Date()
  }
  
};

function users(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER: {
      const { id, name, points, redeemHistory, createDate } = action.payload;
      return {
        user: {
            id,
            name, 
            points, 
            redeemHistory, 
            createDate
        }
      };
    }
    case LOAD_USER_HISTORY: {
      console.log("LOAD_USER_HISTORY");
      const itm = action.payload.redeemedItem;
      let arr = [];
      let p = state.user.points;
      if(!itm.incart){  
        arr = state.user.redeemHistory;
        arr.push(action.payload.redeemedItem);
        p = p - itm.cost;
      }else{
        arr = state.user.redeemHistory.filter(item => item.id !== itm.id);
        p = p + itm.cost;
      }
      console.log(state.user);
      return {
        user: {
          ...state.user,
          points: p,
          redeemHistory: arr
        }
      };

    }
    case REMOVE_USER_HISTORY: {
      console.log("UNLOAD_USER_HISTORY");      
      return {
        user: {
          ...state,
          redeemHistory: state.redeemHistory
        }
      };
    }

    default:
      return state;
  }
}

export default users;