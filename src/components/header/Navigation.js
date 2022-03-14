import React from "react"
import styles from "./Navigation.module.scss"
import { IoIosArrowDown } from "react-icons/io"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.mainMenu}>
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

export default Navigation
