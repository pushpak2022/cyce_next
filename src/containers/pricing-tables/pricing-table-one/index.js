import PropTypes from "prop-types"
import React from "react"
import SectionTitle from "../../../components/UI/section-title/section-title-one"
import bgImg from "./../../../assets/images/bg/1.jpg"
import headerBgImg from "./../../../assets/images/bg/bg-1.svg"
import styles from "./PricingTableOne.module.scss"
import Button from "../../../components/UI/button"

const PricingTableOne = ({ background }) => {
  return (
    <div
      className="pb--120 bgImg"
      style={background === "none" ? { background: `none` } : { backgroundImage: `url(${bgImg})` }}
    >
      <div
        style={{
          backgroundImage: `url(${headerBgImg})`,
          height: "130px"
        }}
      ></div>
      <div className="container" style={{ paddingTop: "45px" }}>
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle text="UNLIMITED Everything With Premium Support" />
          </div>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              paddingTop: "25px",
              fontSize: "1.3rem"
            }}
          >
            Let Our Experts Help You Setup Your Forms 100% FREE (LIMITED TIME OFFER)
          </div>
        </div>
        <div className="row mt--30">
          <div className="col-12 col-md-4 offset-md-2">
            <div className={`${styles.pricing} active`}>
              <div className={styles.content}>
                <span>Unlimited</span>
                <div className={styles.price}>
                  <p>
                    <sup>$</sup> 499 <sub>/month</sub>
                    <br />
                    <sub>
                      <strike>$100 Setup Fee Waived!</strike>
                    </sub>
                  </p>
                </div>
                <ul>
                  <li>Unlimited Forms</li>
                  <li>Unlimited Views</li>
                  <li>Unlimited Fields</li>
                  <li>Unlimited Users</li>
                  <li>Unlimited Reports</li>
                  <li>Unlimited Custom Domains</li>
                  <li>Unlimited Notifications</li>
                  <li>Unlimited Confirmation Emails</li>
                  <li>Unlimited Redirects</li>
                  <li>Unlimited Discounts/Promocodes</li>
                  <li>Unlimited Locations</li>
                  <li>Unlimited Programs/Sessions/Types</li>
                  <li>Accept Payments</li>
                  <li>0% Transaction Fee</li>
                  <li>Integrations</li>
                  <li>Integrate On Your Site</li>
                  <li>Premium Support</li>
                  <li>File Uploads</li>
                  <li>Custom Form Logic</li>
                  <li>Your Own Logo/Branding</li>
                  <li>Redirects</li>
                  <li>Data Management Backend</li>
                  <li>100% Risk-Free</li>
                </ul>
                <div className="price__btn">
                  <Button type="link" url="/start" text="FREE Consultation" btnStyle="" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className={`${styles.pricing}`}>
              <div className={styles.content}>
                <span>pod Inner-Circle</span>
                <div className={styles.price}>
                  <p>
                    <sup>$</sup> 997 <sub>/month</sub>
                  </p>
                </div>
                <ul>
                  <li>100% Done For You</li>
                  <li>Technical Consultation Hours</li>
                  <li>We build/code Features For You</li>
                  <li>Everything in UNLIMITED</li>
                </ul>
                <div className="price__btn">
                  <Button type="link" url="/contact" text="Connect With Us" btnStyle="light" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

PricingTableOne.propTypes = {
  background: PropTypes.string
}

export default PricingTableOne
