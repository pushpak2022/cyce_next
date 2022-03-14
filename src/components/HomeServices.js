import PropTypes from "prop-types"
import React from "react"
import styles from "./HomeServices.module.scss"

const HomeServices = ({ serviceSpacing }) => {
  return (
    <div className={`${styles.voopoService} ${serviceSpacing === "minusMargin" ? styles.servicePosition : "ptb--60"}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.voopoServiceWrapper}>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 md__mt--40 sm__mt--40">
                  <div className={styles.service}>
                    <h2>1. Define</h2>
                    <p>Simply tell us the current apps you use.</p>
                    <p>
                      Let us do the <b>connecting</b> on your behalf in your best interest.
                    </p>
                    <p>
                      Your business is unique and we tailor your workflows to fit perfectly, with a well-tested
                      solution.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 md__mt--40 sm__mt--40">
                  <div className={styles.service}>
                    <h2>2. Deploy</h2>
                    <p>Have it work with your existing process automatically.</p>
                    <p>Let us worry about the maintenance, the technology.</p>
                    <p>Say good-bye to any manual data-entry and know that we have your back!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeServices.propTypes = {
  serviceSpacing: PropTypes.string
}

export { HomeServices }
