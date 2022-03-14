import React from "react"
import Button from "./UI/button"
import styles from "./HomeServices2.module.scss"

const HomeServices2 = () => {
  return (
    <div className="voopo__best__service bg--white ptb--110  poss--relative area__text">
      <div className="container">
        <div className={"row col-12"} style={{ paddingBottom: "35px" }}>
          <div className={"col-3 " + styles.serviceTitle}>
            <h2>Beautiful Forms ...</h2>
          </div>
          <div className={"col-9"} style={{ border: "1px dashed lightgray" }}>
            <img style={{ width: "100%" }} src={require("../assets/images/client-step-3.png").default} />
          </div>
        </div>
        <div className={"row col-12"} style={{ paddingBottom: "35px" }}>
          <div className={"col-3 " + styles.serviceTitle}>
            <h2>Easy & Secure Payments ...</h2>
          </div>
          <div className={"col-9"} style={{ border: "1px dashed lightgray" }}>
            <img style={{ width: "100%" }} src={require("../assets/images/client-step-4.png").default} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-8 col-md-5 col-lg-4">
            <div className={styles.serviceTitle}>
              <h2>The tools you need</h2>
              <h3>The tools you want</h3>
              <p>The process you&apos;ve imagined -- the things you wish your developers could have done for you...</p>
              <Button
                type="link"
                text="FREE Consultation"
                url="/contact"
                btnStyle="white"
                options={{ forgetAppUrl: true }}
              />
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="row">
              <div className="col-12 col-lg-12 col-xl-6 sm__mt--40">
                <div className={styles.bestService}>
                  <div
                    className={styles.icon}
                    style={{
                      background: `url(${require("../assets/images/icons/bg.png")}) no-repeat scroll left top`
                    }}
                  >
                    <img
                      src={require("../assets/images/icons/flow.svg").default}
                      style={{ maxHeight: "48px", maxWidth: "48px" }}
                    />
                  </div>
                  <div className={styles.content}>
                    <h2>All On YOUR Website</h2>
                    <p>Let us build powerful widgets and have them run on your site, and own it!</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12 col-xl-6 sm__mt--40">
                <div className={styles.bestService}>
                  <div
                    className={styles.icon}
                    style={{
                      background: `url(${require("../assets/images/icons/bg.png")}) no-repeat scroll left top`
                    }}
                  >
                    <img
                      src={require("../assets/images/icons/smart.svg").default}
                      style={{ maxHeight: "48px", maxWidth: "48px" }}
                    />
                  </div>
                  <div className={styles.content}>
                    <h2>Smart Submission Manager</h2>
                    <p>Manage all the data flowing in and out of your pipeline so you won&apos;t miss a beat!</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12 col-xl-6 sm__mt--40">
                <div className={styles.bestService}>
                  <div
                    className={styles.icon}
                    style={{
                      background: `url(${require("../assets/images/icons/bg.png")}) no-repeat scroll left top`
                    }}
                  >
                    <img
                      src={require("../assets/images/icons/inte.svg").default}
                      style={{ maxHeight: "48px", maxWidth: "48px" }}
                    />
                  </div>
                  <div className={styles.content}>
                    <h2>Notifications + Communications</h2>
                    <p>
                      Send notification emails, automate data into your CRM, set up a custom sequence, you name it. Be
                      able to do it all without having to pay any extra!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12 col-xl-6 sm__mt--40">
                <div className={styles.bestService}>
                  <div
                    className={styles.icon}
                    style={{
                      background: `url(${require("../assets/images/icons/bg.png")}) no-repeat scroll left top`
                    }}
                  >
                    <img
                      src={require("../assets/images/icons/reporting.svg").default}
                      style={{ maxHeight: "48px", maxWidth: "48px" }}
                    />
                  </div>
                  <div className={styles.content}>
                    <h2>Advance Reporting</h2>
                    <p>Get insights to your business. Know your numbers.</p>
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

export { HomeServices2 }
