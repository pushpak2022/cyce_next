import { PropTypes } from "prop-types"
import React from "react"
import { Link } from "react-router-dom"

const MobileNavMenu = ({ styles }) => {
  return (
    <nav className={styles.offcanvasNavigation} id="offcanvas-navigation">
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/pricing"}>Pricing</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
MobileNavMenu.propTypes = {
  styles: PropTypes.object
}

export default MobileNavMenu
