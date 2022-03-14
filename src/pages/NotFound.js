import React, { Fragment } from "react"
import LayoutOne from "../layouts"
import NotFoundContent from "../containers/not-found"
import Breadcrumb from "../components/UI/breadcrumb"
import { Title } from "../components/Title"

const NotFound = () => {
  return (
    <Fragment>
      <Title />
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Not Found" />
        <NotFoundContent />
      </LayoutOne>
    </Fragment>
  )
}

export default NotFound
