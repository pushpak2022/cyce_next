import React, { Fragment, useEffect } from "react"
import LayoutOne from "../layouts"
import Breadcrumb from "../components/UI/breadcrumb"
import ContactForm from "../containers/contact/contact-form"
import { Title } from "../components/Title"
import ReactPixel from "react-facebook-pixel"

const Contact = () => {
  useEffect(() => {
  }, [])

  return (
    <Fragment>
      <Title />
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Connect With Us" />
        {/* contact form */}
        {/* <ContactForm /> */}
        <h5 style={{ textAlign: "center", margin: "50px 0" }}>
          Limited Time Offer: Want a 20% discount and a gift? Text Carl @ 626-466-6473 and say hi :)
        </h5>
        <div
          className="calendly-inline-widget"
          style={{ minWidth: "320px", height: "630px", backgroundColor: 'red' }}
        ></div>
        {/* contact map */}
        {/*<ContactMap />*/}
      </LayoutOne>
    </Fragment>
  )
}

export default Contact
