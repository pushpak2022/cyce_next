import React from "react"
import { Link } from "react-router-dom"

import LOGO_PNG from "./../../assets/images2/logo.png"

export default function Footer() {
  return (
    <div className="Footer--Root">
      <div className="footer__container">
        <div className="company__links">
          <div className="company_block">
            <img src={LOGO_PNG} alt="logo" className="logo_img" />
            <div className="company__title">
              <p className="fs-inter">Pod</p>
              <p>Making Your Business Unique</p>
            </div>
          </div>
          <div className="links_block">
            <div>
              <p className="link__title">Company</p>
              <ul className="link__list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="link__title">Connect</p>
              <ul className="link__list">
                <li>
                  <a href="#">support@xxx.io</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Headquarters: Los Angeles, CA</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="link__title">Follow up</p>
              <ul className="link__list">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rights">
          <p className="fs-inter">Copyright © Pod. 2020. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
