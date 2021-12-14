import React, { Fragment } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"

import "normalize.css"
import "../assets/css/main.css"

const Layout = props => {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      {props.children}
      <Footer />
    </Fragment>
  )
}

export default Layout
