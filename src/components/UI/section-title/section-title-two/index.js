import PropTypes from "prop-types"
import React from "react"
import styles from "./SectionTitleTwo.module.scss"

const SectionTitleTwo = ({ color }) => {
  return (
    <div className={styles.sectionTitle2}>
      <span className={color && color === "white" ? "text-white" : ""}>pod</span>
      <h2 className={color && color === "white" ? "text-white" : ""}>NUM 2</h2>
    </div>
  )
}

SectionTitleTwo.propTypes = {
  color: PropTypes.string
}

export default SectionTitleTwo
