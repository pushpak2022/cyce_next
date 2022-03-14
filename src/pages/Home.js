import React, { Fragment } from "react"
import LayoutOne from "../layouts"
import { HeroSlider } from "../components/HeroSlider"
import { HomeServices } from "../components/HomeServices"
import { HomeFeature } from "../components/HomeFeature"
import { HomeServices2 } from "../components/HomeServices2"
import SoftwareDownloadOne from "../containers/software-downloads/software-download-one"
import TestimonialOne from "../containers/testimonials/testimonial-one"
import { Title } from "../components/Title"
import ReactPixel from "react-facebook-pixel"

const Home = () => {
  return (
    <Fragment>
      <Title />
      <LayoutOne>
        {/* hero slider */}
        <HeroSlider />
        {/* service */}
        <HomeServices />
        {/* feature */}
        <HomeFeature />
        {/* service with text */}
        <HomeServices2 />
        {/* software download */}
        <SoftwareDownloadOne />
        {/* testimonials */}
        <TestimonialOne />
        {/* pricing table */}
        {/* <PricingTableOne /> */}
        {/* product grid */}
        {/*<ProductGrid /> */}
        {/* blog grid */}
        {/*<BlogGrid /> */}
      </LayoutOne>
    </Fragment>
  )
}

export { Home }
