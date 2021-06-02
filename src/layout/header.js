import React from "react";
import { connect } from "react-redux";

import { getUserState } from "../redux/selectors";

const Header = ({ data }) => (
    <header className="site-header sticky-top py-2">
        <nav className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="py-2" href="/home" aria-label="Product">
                <img src="logo.svg" alt="logo" />
            </a>
            <a className="py-10 d-none d-md-inline-block"  href="/home">{ data.user.name } <span className="coins-badge">{ data.user.points } <img src="./icons/coin.svg" alt="coin"/></span></a>
        </nav>
    </header>
  );

const mapStateToProps = state => {
  const data = getUserState(state);
  return { data };
};

export default connect(mapStateToProps)(Header);
