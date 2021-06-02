import React from "react";
import { connect } from "react-redux";
import { setPage } from "../redux/actions";


class LeftArrow extends React.Component {
    render(){
        return this.props.page > 0
            ? <img onClick={() => {
                this.props.setPage(this.props.page - 1);
              }}
              className="pagination-arrows left-arrow" alt="left arrow" src="./icons/arrow-left.svg" />
            : ""
        ;
    }
}

export default connect(
    null,
    { 
      setPage 
    }
  )(LeftArrow);