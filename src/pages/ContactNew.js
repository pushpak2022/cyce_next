import React from "react"
import { BsTelephone } from "react-icons/bs"
import { FaRegEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FiMapPin } from "react-icons/fi"
import Layout from "./../components/Common/Layout"

const ContactNew = () => {
  return (
    <Layout>
      <div className="Contact--Root">
        <div className="left">
          <h3 className="title">Connect With Us</h3>
          <p className="desc">Any questions or feedback? Schedule a call with us!</p>
          <div className="contact__details">
            <div className="item">
              <p>
                <BsTelephone className="icon" />
                626-111-6473 (Text only)
              </p>
            </div>
            <div className="item">
              <p>
                <FaRegEnvelope className="icon" />
                suppro@pod.io
              </p>
            </div>
            <div className="item">
              <p>
                <FiMapPin className="icon" />
                Los Angeles, CA
              </p>
            </div>
          </div>
          <div className="social__icons">
            <div className="icon__box">
              <FaFacebookF />
            </div>
            <div className="icon__box">
              <FaInstagram />
            </div>
            <div className="icon__box">
              <FaLinkedinIn />
            </div>
            <div className="icon__box">
              <FaRegEnvelope />
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </Layout>
  )
}

export default ContactNew
