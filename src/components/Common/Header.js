import React from "react"
import { NavLink } from "react-router-dom"
import { BiHomeAlt } from "react-icons/bi"
import { BsTelephone, BsArrowRight } from "react-icons/bs"
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { AiOutlineDollarCircle, AiOutlineQuestionCircle, AiOutlineRight } from "react-icons/ai"
import { RiMenu5Line } from "react-icons/ri"

import LOGO_PNG from "./../../assets/images2/logo.png"

export default function Header() {
  const smHeader = React.useRef(null)
  const smHeaderBtn = React.useRef(null)

  const toggleSmHeader = () => {
    if (smHeader.current) {
      if (smHeader.current.classList.contains("active")) {
        smHeader.current.classList.remove("active")
        smHeaderBtn.current.classList.remove("active")
      } else {
        smHeader.current.classList.add("active")
        smHeaderBtn.current.classList.add("active")
      }
    }
  }

  React.useEffect(() => {
    if (smHeader.current) {
      smHeader.current.classList.remove("active")
      smHeaderBtn.current.classList.remove("active")
    }
  }, [])

  return (
    <div className="HeaderBar--root">
      <NavLink className="logobox" to="/_home">
        <img src={LOGO_PNG} alt="logo" className="logo_img" />
        <span className="fs-inter logo_text">Pod</span>
      </NavLink>
      <ul className="navs">
        <li>
          <NavLink activeClassName="active" to="/_home">
            <BiHomeAlt className="nav_icon" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/_about">
            <HiOutlineOfficeBuilding className="nav_icon" />
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/_pricing">
            <AiOutlineDollarCircle className="nav_icon" />
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/_faq">
            <AiOutlineQuestionCircle className="nav_icon" />
            FAQs
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/_faq">
            <BsTelephone className="nav_icon" />
            Contact Us
          </NavLink>
        </li>
        <li>
          <button className="btn btn-primary">Get Started</button>
        </li>
      </ul>
      <div className="nav_btn">
        <button ref={smHeaderBtn} onClick={toggleSmHeader} className="btn btn-primary">
          <RiMenu5Line className="normal" />
          <AiOutlineRight className="open" />
        </button>
        <div ref={smHeader} className="navs__sm active">
          <div className="nav__box">
            <div className="links">
              <NavLink className="link" activeClassName="active" to="/_home">
                <BiHomeAlt className="nav_icon" />
                <span>Home</span>
                <BsArrowRight className="arrow_right" />
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/_about">
                <HiOutlineOfficeBuilding className="nav_icon" />
                <span>About Us</span>
                <BsArrowRight className="arrow_right" />
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/_pricing">
                <AiOutlineDollarCircle className="nav_icon" />
                <span>Pricing</span>
                <BsArrowRight className="arrow_right" />
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/_faq">
                <AiOutlineQuestionCircle className="nav_icon" />
                <span>FAQs</span>
                <BsArrowRight className="arrow_right" />
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/_faq">
                <BsTelephone className="nav_icon" />
                <span>Contact Us</span>
                <BsArrowRight className="arrow_right" />
              </NavLink>
            </div>
            <div className="footer">
              <p className="fs-inter">Copyright © pod. 2020. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
