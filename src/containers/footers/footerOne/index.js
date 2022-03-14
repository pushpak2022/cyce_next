import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { animateScroll } from "react-scroll"
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoMdMail } from "react-icons/io"
import { MdExpandLess } from "react-icons/md"
import styles from "./Footer.module.scss"
import logo from "../../../assets/images/logo/pod_logo.svg"
// import logo from "../../../assets/images/logo/voopo.png";
// import logoDark from "../../../assets/images/logo/v2.png";
import logoDark from "../../../assets/images/logo/pod_logo.svg"

const Footer = ({ footerBg }) => {
  const [scroll, setScroll] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    setTop(100)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    animateScroll.scrollToTop()
  }

  const handleScroll = () => {
    setScroll(window.scrollY)
  }
  return (
    <footer className={`footer-area ${footerBg === "white" ? styles.footer2 : ""}`}>
      <div className={`${styles.footerTop} ${footerBg === "white" ? "bg--cart-7" : "bg--cart-2"}`}>
        <div className="container">
          <div className="row">
            {/* Start Single Widget */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className={styles.singleWidget}>
                <div className={styles.logo}>
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <img src={footerBg === "white" ? logoDark : logo} alt="pod" /> pod
                  </Link>
                </div>
                <div className={styles.content}>
                  <p>Making Your Business Unique Again.</p>
                </div>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-12 col-sm-6 col-lg-2 offset-lg-1 xs__mt--40">
              <div className={styles.singleWidget}>
                <h2 className={styles.ftTitle}>Company</h2>
                <ul className={styles.ftContactLink}>
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
                    <Link to={process.env.PUBLIC_URL + "/terms"}>Terms of Use</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacy"}>Privacy & Cookie Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            {/*<div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12 sm__mt--40 md__mt--40">
              <div className={styles.singleWidget}>
                <h2 className={styles.ftTitle}>Voopo Info</h2>
                <ul className={styles.ftContactLink}>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Why Voopo</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      Voopo Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      VoIP Features
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>FAQ</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>About us</Link>
                  </li>
                </ul>
              </div>
            </div>*/}
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12 sm__mt--40 md__mt--40">
              <div className={styles.singleWidget}>
                <h2 className={styles.ftTitle}>Connect</h2>
                <ul className={styles.ftContactLink}>
                  <li>
                    <a href="mailto:support@pod.io">support@pod.io</a>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
                  </li>
                  <li style={{ color: "white" }}>Headquarters: Los Angeles, CA</li>
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
          </div>
        </div>
      </div>
      <div className={`${styles.copyright}  ${footerBg === "white" ? "bg--cart-8" : "bg--cart-3"}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6">
              <div className={styles.copyrightInner}>
                <p>Copyright © pod. 2020. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className={styles.ftSocialLink}>
                <ul className={styles.socialIcon}>
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/pod.io"}>
                      <IoLogoFacebook />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href={"https://instagram.com/pod.io"}>
                      <IoLogoInstagram />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href={"mailto:support@pod.io"}>
                      <IoMdMail />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <MdExpandLess />
      </button> */}
    </footer>
  )
}

Footer.propTypes = {
  footerBg: PropTypes.string
}

export default Footer
