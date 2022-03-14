import React from "react";
import "./../../assets/scss/Root.scss"

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}) {
  return (
    <div className="RootLayout">
      <Header />
      <div className="containerbox">
        {children}
      </div>
      <Footer />
    </div>
  );
}
