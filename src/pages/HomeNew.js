import React from "react"
import { FiMail } from "react-icons/fi"
import { FaRegUserCircle } from "react-icons/fa"
import { RiArrowRightCircleFill } from "react-icons/ri"

import Layout from "./../components/Common/Layout"

import HOME_HEADER_IMAGE from "./../assets/images2/home_header_right.png"
import USER1 from "./../assets/images2/user_pic_1.png"
import USER2 from "./../assets/images2/user_pic_2.png"
import GS from "./../assets/images2/gs.png"
import LEAF from "./../assets/images2/leaf.png"
import ICO1 from "./../assets/images2/icon_1.png"
import ICO2 from "./../assets/images2/icon_2.png"
import ICO3 from "./../assets/images2/icon_3.png"
import ICO4 from "./../assets/images2/icon_4.png"
import ICO5 from "./../assets/images2/icon_5.png"
import LIGHT from "./../assets/images2/light.png"
import VIONE from "./../assets/images2/vector_img_one.png"
import VITWO from "./../assets/images2/vector_img_two.png"
import VBDR from "./../assets/images2/vertical_border.png"
import HBDR from "./../assets/images2/horizontal_border.png"

export default function Home() {
  return (
    <Layout>
      <div className="Home--Root">
        <div className="header__call">
          <div className="left">
            <div className="header__titles">
              <h2 className="title fs-inter">Integrating CampMinder with apps you use.</h2>
              <p className="desc">Connect your apps with CampMinder and automate workflows.</p>
            </div>
            <div className="form__row">
              <div className="input__group">
                <FiMail className="input__icon" />
                <input className="text__input" type="email" placeholder="Your email address" />
              </div>
              <div className="input__group">
                <FaRegUserCircle className="input__icon" />
                <input className="text__input" type="text" placeholder="Your Full Name" />
              </div>
              <button className="btn btn-primary">Sign up</button>
            </div>
            <div className="user__row">
              <div className="users">
                <img src={USER1} alt="user1" />
                <img src={USER2} alt="user2" />
              </div>
              <p className="user__count fs-inter">
                <span>1000+&nbsp;</span>
                Users using this tool
              </p>
            </div>
          </div>
          <div className="right">
            <img src={HOME_HEADER_IMAGE} alt="home_right" />
          </div>
        </div>

        <div className="container__one">
          <div className="left">
            <h3 className="heading">Example Automation Workflow</h3>
            <div className="automations__list">
              <div className="list__bar">
                <div className="box__graphic red">
                  <img src={GS} alt="gs" className="gs" />
                </div>
                <div className="box__typhography">
                  <h4 className="title">Google Sheets</h4>
                  <p className="desc">When a new row is added to a spreadsheet</p>
                </div>
              </div>
              <div className="list__bar">
                <div className="box__graphic blue">
                  <img src={LEAF} alt="leaf" className="leaf" />
                </div>
                <div className="box__typhography">
                  <h4 className="title">CampMinder</h4>
                  <p className="desc">Add or Update a lead</p>
                </div>
              </div>
              <div className="list__bar">
                <div className="box__graphic yellow">
                  <img src={LEAF} alt="leaf" className="leaf" />
                </div>
                <div className="box__typhography">
                  <h4 className="title">CampMinder</h4>
                  <p className="desc">Change enrollment status for a session</p>
                </div>
              </div>
              <img src={VBDR} alt="bdr" className="vertical__border" />
            </div>
          </div>
          <div className="right">
            <h3 className="heading">Enabling you to achieve more with CampMinder</h3>
            <div className="campminder__list">
              <div className="list__bar">
                <img className="icon" src={ICO1} alt="ico1" />
                <p className="desc">Save yourself from entering data into multiple systems.</p>
              </div>
              <div className="list__bar">
                <img className="icon" src={ICO2} alt="ico2" />
                <p className="desc">Safely and securely leverage technology to achieve more.</p>
              </div>
              <div className="list__bar">
                <img className="icon" src={ICO3} alt="ico3" />
                <p className="desc">Save at least 30 minutes each day</p>
              </div>
            </div>
            <div className="current__process">
              <img src={LIGHT} alt="light" className="light" />
              <div className="process">
                <p className="title">Keep your current process</p>
                <p className="desc fs-inter">
                  Pod is simply Plug and Play to make your current process more efficient and effective.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container__two">
          <div className="blocks">
            <div className="block">
              <div className="titles">
                <img src={ICO4} alt="icon" className="icon" />
                <div className="typhography">
                  <p className="title">Define</p>
                  <p className="desc">Simply connect your accounts and let Podsoft automate.</p>
                </div>
              </div>
              <div className="center__image">
                <img src={VIONE} alt="vione" />
              </div>
              <p className="bottom__desc">
                Privacy and data sensitivity is important to us, so we do everything we can to ensure security.
              </p>
            </div>
            <div className="connection">
              <img src={HBDR} alt="hbdr" />
              <RiArrowRightCircleFill className="right" />
            </div>
            <div className="block">
              <div className="titles">
                <img src={ICO5} alt="icon" className="icon" />
                <div className="typhography">
                  <p className="title">Deploy</p>
                  <p className="desc">Let us worry about the maintenance, the technology.</p>
                </div>
              </div>
              <div className="center__image">
                <img src={VITWO} alt="vitwo" />
              </div>
              <p className="bottom__desc">Say good-bye to any manual data-entry and know that we have your back!</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
