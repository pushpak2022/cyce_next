import React, { Fragment } from "react"
import LayoutOne from "../layouts"
import Breadcrumb from "../components/UI/breadcrumb"
import TermOfUseContainer from "../containers/terms-of-use"
import { Title } from "../components/Title"

const TermsOfUse = () => {
  return (
    <Fragment>
      <Title />
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Terms Of Use" />
        <TermOfUseContainer />
      </LayoutOne>
    </Fragment>
  )
}

export default TermsOfUse
