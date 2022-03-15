import React from "react"
import PropTypes from "prop-types"
import "./../../assets/scss/Root.scss"

import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children = null }) {
  return (
    <div className="RootLayout">
      <Header />
      <div className="containerbox">{children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
