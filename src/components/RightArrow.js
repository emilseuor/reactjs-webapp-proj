import React from "react";
import { connect } from "react-redux";
import { setPage } from "../redux/actions";


class RightArrow extends React.Component {
    render(){
        return this.props.page < this.props.pages 
            ? <img onClick={() => {
                this.props.setPage(this.props.page + 1);
                console.log(this.props.page);
              }}
              className="pagination-arrows right-arrow" alt="right arrow" src="./icons/arrow-right.svg" />
            : ""
        ; 
    }
}



export default connect(
    null,
    { 
      setPage 
    }
  )(RightArrow);