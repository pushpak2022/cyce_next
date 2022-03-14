import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo/pod_logo.svg"
import styles from "./Logo.module.scss"

const LogoWhite = () => {
  return (
    <div className={styles.logo}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img src={logo} alt="pod" className={styles.imgFluid} /> pod
      </Link>
    </div>
  )
}

export default LogoWhite
