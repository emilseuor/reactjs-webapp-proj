import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { addToCart, loadUserHistory } from "../redux/actions";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "hover" : false
    };
  }

  changeHover = () => {
    this.setState({"hover": !this.state.hover });
  };

//const Item = ({ item, redeem, addToCart, loadUserHistory }) => (
  render() {
    let itembtn_text ="Redeem";

    if(this.props.item.incart){
      itembtn_text = "Redeemed!"

    } else if(!this.props.redeem.can && !this.props.item.incart){
      itembtn_text = "Need "+ this.props.redeem.missing + " more";
    }else{

      if(this.state.hover){
        itembtn_text = "Redeem now";
      }else{
        itembtn_text = "Redeem";
      }
    }

    return (
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3 item">
            <div className={cx({
                  "card shadow-sm": true,
                  "claimed" : this.props.item.incart,
                  "disabled": !this.props.redeem.can && !this.props.item.incart
                })}
                >
              {
                this.props.item.img === "" 
                ? <svg className="bd-placeholder-img card-img-top" width="100%" height="212" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={this.props.item.title} preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>{this.props.item.name}</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">{this.props.item.name}</text>
                </svg>
                : <img src={this.props.item.img} className="card-img-top" alt="..."></img>
              }
              <div className="card-body">
                <span className="horizontal-separator"></span>
                <p className="card-text category">
                  {this.props.item.category}
                </p>
                <p className="card-text item-name">
                  {this.props.item.name}
                </p>
              </div>
              <span
                className={cx({
                  "item__text": true,
                  "item__text--completed": this.props.item.incart
                })}
              >
              </span>
              <div className="hover-details">
                <div className="details-centered">
                  <p className="price-details">{this.props.item.cost} <img src="./icons/coin.svg" alt="cost"/></p>
                  <button className="redeem" onMouseEnter={() => this.changeHover() } onMouseLeave ={()=> this.changeHover()} 
                onClick={() => {
                    if(this.props.redeem.can || (!this.props.redeem.can && this.props.item.incart)){
                      this.props.loadUserHistory({ id: this.props.item.id, incart: this.props.item.incart, cost: this.props.item.cost });
                      this.props.addToCart(this.props.item.id);
                    }
                  } 
                  }>{itembtn_text}</button>
                </div>
            </div>
            </div>
          </div>
        );
      }
    }

export default connect(
  null,
  { addToCart, loadUserHistory }
)(Item);
