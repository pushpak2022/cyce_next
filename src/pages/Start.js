import React, { Fragment, useEffect } from "react"
import LayoutOne from "../layouts"
import Breadcrumb from "../components/UI/breadcrumb"
import EarlyAccessForm from "../containers/contact/early-access-form"
import { Title } from "../components/Title"
import ReactPixel from "react-facebook-pixel"

const Start = () => {
  useEffect(() => {
    ReactPixel.track("Lead")
  }, [])

  return (
    <Fragment>
      <Title />
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="FREE Consultation" />
        {/* contact form */}
        <EarlyAccessForm />
      </LayoutOne>
    </Fragment>
  )
}

export default Start
