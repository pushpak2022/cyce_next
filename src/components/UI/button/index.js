import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-router-dom"
import { config } from "../../../config"
import styles from "./Button.module.scss"

const Button = ({ type, url, text, btnStyle, options = {} }) => {
  if (type === "link") {
    return (
      <Link
        className={`${styles.voopoBtn} ${btnStyle === "white" ? styles.voopoBtnWhite : ""} ${
          btnStyle === "light" ? styles.voopoBtnLight : ""
        }`}
        to={!options?.forgetAppUrl ? config.appUrl + url : url}
      >
        {text}
      </Link>
    )
  }
  if (type === "button") {
    return (
      <button
        className={`${styles.voopoBtn} ${btnStyle === "white" ? styles.voopoBtnWhite : ""} ${
          btnStyle === "light" ? styles.voopoBtnLight : ""
        }`}
      >
        {text}
      </button>
    )
  }
  if (type === "anchor") {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button
          className={`${styles.voopoBtn} ${btnStyle === "white" ? styles.voopoBtnWhite : ""} ${
            btnStyle === "light" ? styles.voopoBtnLight : ""
          }`}
        >
          {text}
        </button>
      </a>
    )
  }
  return ""
}

Button.propTypes = {
  btnStyle: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
  options: PropTypes.object
}

export default Button
