import React, { Fragment } from "react"
import MetaTags from "react-meta-tags"
import LayoutOne from "../layouts"
import Breadcrumb from "../components/UI/breadcrumb"
import ServiceDetailsOne from "../containers/service-details/service-details-one"

const ServiceDetails = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>pod | Service Details</title>
        <meta name="description" content="Automating Your Tedious Processes With Artificial Intelligence." />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Service Details" />
        {/* service details */}
        <ServiceDetailsOne />
      </LayoutOne>
    </Fragment>
  )
}

export default ServiceDetails
