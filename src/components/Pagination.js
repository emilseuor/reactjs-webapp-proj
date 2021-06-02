import React from "react";
import { ITEMS_PER_PAGE } from "../constants";


class Pagination extends React.Component {
    render(){
        return(
            <span className="filter-pagination">Page: { (this.props.page * ITEMS_PER_PAGE) + ITEMS_PER_PAGE} of {this.props.items} products</span>
        );
    }
}
export default Pagination;