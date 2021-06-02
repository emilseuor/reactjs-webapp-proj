import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
import ItemList from "./ItemList";
import Pagination from "./Pagination"
import LeftArrow from "./LeftArrow"
import RightArrow from "./RightArrow"
import { getTotalCounts } from "../redux/selectors";

const Filters = ({ activeFilter, pagenumber, count, setFilter }) => {
  return (
    <div>
      <div className="selectors position-relative">
        <LeftArrow page={pagenumber} pages={count.pages} />
        <Pagination page={pagenumber} items={count.items}/>
        <span className="vertical-separator"></span>
        <div className="filters">
          {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
            const currentFilter = VISIBILITY_FILTERS[filterKey];
            return (
              <span
                key={`filter-${currentFilter}`}
                className={cx(
                  "coins-badge filter",
                  currentFilter === activeFilter && "filter-active"
                )}
                onClick={() => {
                  setFilter(currentFilter);
                }}
              >
                { currentFilter === "All" 
                ? "Most recent" 
                : currentFilter  
                }
              </span>
            );
          })}
        </div>
        <RightArrow page={pagenumber} pages={count.pages} />
      </div>
      <ItemList />
      <div className="position-relative">
      <LeftArrow page={pagenumber} pages={count.pages} />
      <Pagination page={pagenumber} items={count.items}/>
      <RightArrow page={pagenumber} pages={count.pages} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const totals = getTotalCounts(state);
  return { 
    activeFilter: state.visibilityFilter,
    pagenumber: state.paginationFilter,
    count: totals 
  };
};

export default connect(
  mapStateToProps,
  { 
    setFilter 
  }
)(Filters);
