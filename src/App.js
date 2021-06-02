import React from "react";
import Loader from "./components/Loader";

import Header from './layout/header'
import Footer from './layout/footer'
import TopBanner from './layout/TopBanner'
import './css/App.css';

export default function ShopApp() {
  return (
    <div className="shop-app">
      <Header />
      <main>
        <TopBanner title="Electronics"/>
        <Loader />
      </main>
      <Footer />
    </div>
  );
}
