import React, { Fragment } from "react"
import LayoutOne from "../layouts"
import Breadcrumb from "../components/UI/breadcrumb"
import PrivacyPolicyContainer from "../containers/privacy-policy"
import { Title } from "../components/Title"

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <Title />
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Privacy & Cookie Policy" />
        <PrivacyPolicyContainer />
      </LayoutOne>
    </Fragment>
  )
}

export default PrivacyPolicy
