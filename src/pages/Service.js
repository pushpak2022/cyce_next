import React, { Fragment } from "react"
import MetaTags from "react-meta-tags"
import LayoutOne from "../layouts"
import Breadcrumb from "../components/UI/breadcrumb"
import ServiceFour from "../containers/services/service-four"
import ServiceTwo from "../containers/services/service-two"
import PricingTableOne from "../containers/pricing-tables/pricing-table-one"
import TestimonialOne from "../containers/testimonials/testimonial-one"

const Service = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>pod | Service</title>
        <meta name="description" content="Automating Your Tedious Processes With Artificial Intelligence." />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Services" />
        {/* service content */}
        <ServiceFour />
        {/* service with text */}
        <ServiceTwo />
        {/* pricing table */}
        <PricingTableOne />
        {/* testimonials */}
        <TestimonialOne />
      </LayoutOne>
    </Fragment>
  )
}

export default Service
