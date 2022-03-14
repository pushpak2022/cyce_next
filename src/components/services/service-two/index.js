import PropTypes from "prop-types"
import React from "react"

const ServiceTwoSingle = ({ data, styles }) => {
  return (
    <div className="col-12 col-lg-12 col-xl-6 sm__mt--40">
      <div className={styles.bestService}>
        <div
          className={styles.icon}
          style={{
            background: `url(${require("./../../../assets/images/icons/" + data.bg)}) no-repeat scroll left top`
          }}
        >
          <img
            src={require("./../../../assets/images/icons/" + data.icon).default}
            style={{ maxHeight: "48px", maxWidth: "48px" }}
          />
        </div>
        <div className={styles.content}>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  )
}

ServiceTwoSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
}

export default ServiceTwoSingle
