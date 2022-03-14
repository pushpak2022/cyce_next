import React from "react"
import styles2 from "../about-content-two/AboutContentTwo.module.scss"
import styles from "./AboutContentOne.module.scss"

const AboutContentOne = () => {
  return (
    <div className={`${styles.voopoAboutArea} position-relative bg--cart-11`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="aboutInner">
              <div className={styles2.sectionTitle2}>
                <h2>Automating Your Current Workflow!</h2>
              </div>
              <p>
                pod is here to make a difference and automate processes that can be done by intelligent computer
                programs so humans can spend their time doing the things they love instead.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutThumb}>
        <img src={require("./../../../assets/images/about/park.svg").default} />
      </div>
    </div>
  )
}

export default AboutContentOne
