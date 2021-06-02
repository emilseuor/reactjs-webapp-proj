import React from "react";
import { connect } from "react-redux";
import { addItem, loadUser } from "../redux/actions";
import {API_TOKEN, API_URL } from "../constants"
import Filters from "./Filters";

class Loader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading_state: {
        user: 0,
        items: 0
      } 
    };

    
  }
componentDidMount(){

  let promise_user = fetch(API_URL+"user/me?token="+API_TOKEN);
  let promise_items = fetch(API_URL+"products?token="+API_TOKEN);

  this.setState({ loading_state: {user: 0, items: 0 }, user_points: 0 });

  promise_user.then(r => r.json()).then(data =>{
    this.props.loadUser({ id: data._id
      , name: data.name
      , points: data.points
      , redeemHistory: []
      , createDate: data.createDate 
    });
    this.setState({ loading_state: {
      user: 1, 
      items: this.state.items 
    }});
      
    }, () => {
      this.setState({ loading_state: {user: 2, items: this.state.items } });  
    }
  );
  promise_items.then(r => r.json()).then(data =>{
    console.log(data);
      data.map(itm => {
        console.log(itm.img.url);
        return this.props.addItem({ 
          id: itm._id, 
          name: itm.name,
          cost: itm.cost, 
          category: itm.category, 
          img: itm.img === undefined ? "" : itm.img.url
        });
      });
      this.setState({ loading_state: {user: this.state.user
        , items: 1 } });
    }, () => {
      this.setState({ loading_state: {user: this.state.user
        , items: 2 } });
    }
  );
}

message(){
  switch(this.state.loading_state.user | this.state.loading_state.items){
    case 0 | 0:
      return <div className="loader alert alert-primary" role="alert">"Loading"</div>;
    case 2 | 1:
      return <div className="loader alert alert-danger" role="alert">Sorry, we can't load your user information at this moment, please try again later!</div>;
    case 1 | 2:
      return <div className="loader alert alert-danger" role="alert">Sorry, we can't load the reward list at this moment, please try again later!</div>;
    case 2 | 2:
      return <div className="loader alert alert-danger" role="alert">Sorry, we can't load the resources at this moment, please try again later!</div>;
    default: 
    return  <div className="loader container">
              <Filters />
            </div>;
  }
}
  render() {
    return (
      this.message()
    );
  }
}

export default connect(
  null,
  { 
    addItem, 
    loadUser 
  }
)(Loader);