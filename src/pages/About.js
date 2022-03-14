import React, { Fragment, useEffect } from "react"
import LayoutOne from "../layouts"
import Breadcrumb from "../components/UI/breadcrumb"
import AboutContentOne from "../containers/about-contents/about-content-one"
import AboutContentTwo from "../containers/about-contents/about-content-two"
import { Title } from "../components/Title"
import styles from "./Pricing.module.scss"
import ReactPixel from "react-facebook-pixel"

const About = () => {
  useEffect(() => {
    ReactPixel.track("ViewContent")
  }, [])

  return (
    <Fragment>
      <Title />
      <LayoutOne>
        <div className={styles.pricingHeader} />
        <AboutContentOne />
        {/* about content */}
        <AboutContentTwo />
      </LayoutOne>
    </Fragment>
  )
}

export default About
