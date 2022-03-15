import React from "react"
import styles from "./HomeFeature.module.scss"

const HomeFeature = () => {
  return (
    <div className={`${styles.voopoBusiness} bg--cart-4 ptb--110`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-xl-7">
            <div className={styles.thumb}>
              <img style={{ width: "100%" }} src={require("../assets/images/client-step-2.png").default} />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-5 sm__mt--40">
            <div className={styles.content}>
              <h2>Make Your Business Unique Again!</h2>
              <p className={styles.firstDesc}>Feel like you&apos;re treated with a template?</p>
              <p>
                pod understands that your business is unique, so we take the time to understand you and tailor your
                forms to actually fit.
              </p>
              <p>
                While you may have been prescribed with cookie-cutter tools before; working with pod is like having your
                own team of designers, developers, strategist. Except you don&apos;t have to spend nearly as much.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HomeFeature }
