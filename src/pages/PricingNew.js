import React from "react"
import { BsFillCheckCircleFill, BsCircle } from "react-icons/bs";
import Layout from "./../components/Common/Layout"



import PRICING_IMAGE from "./../assets/images2/pricing_image.png";
import GRAY_LOGO from "./../assets/images2/gray_logo.png";

export default function Pricing() {
  const [pricing, setPricing] = React.useState("free");
  return (
    <Layout>
      <div className="Pricing--Root">
      <div className="header__call">
        <div className="header__titles">
          <h2 className="title">
            Integrate and Automate apps you already use for camp.
          </h2>
          <p className="desc">No more manual work, no more uncertainty.</p>
        </div>
        <div className="header__graphics">
          <img src={PRICING_IMAGE} alt="pricing" className="pricing_image" />
        </div>
        <div className="border__logo">
          <img src={GRAY_LOGO} alt="pricing" className="logo" />
        </div>
      </div>
      <div className="pricing__content">
        <h2 className="pricing__title">Simple, transparent pricing</h2>
        <p className="pricing__desc">No contracts. No suprise fees.</p>

        <div className="table__scetion">
          <div className="section__left">
            <div className="head">
              <div>
                <h5 className="title">Free Plan</h5>
                <p className="desc">Inclusive of the followings:</p>
              </div>
              <div>
                <div className="badge__freee">Free Setup</div>
              </div>
            </div>
            <div className="list">
              <div className="list__item">
                <div>
                  <p>Automations</p>
                </div>
                <div>
                  <p>100 Automations / month</p>
                  <BsFillCheckCircleFill className="chk__icon" />
                </div>
              </div>
              <div className="list__item">
                <div>
                  <p>Number of Workflows</p>
                </div>
                <div>
                  <p>Unlimited</p>
                  <BsFillCheckCircleFill className="chk__icon" />
                </div>
              </div>
              <div className="list__item">
                <div>
                  <p>Number of Apps</p>
                </div>
                <div>
                  <p>Unlimited</p>
                  <BsFillCheckCircleFill className="chk__icon" />
                </div>
              </div>
              <div className="list__item">
                <div>
                  <p>Multi-Step Automations</p>
                </div>
                <div>
                  <BsFillCheckCircleFill className="chk__icon" />
                </div>
              </div>
              <div className="list__item">
                <div>
                  <p>Auto Replay (beta)</p>
                </div>
                <div>
                  <BsFillCheckCircleFill className="chk__icon" />
                </div>
              </div>
              <div className="list__item">
                <div>
                  <p>Connections via Webhooks</p>
                </div>
                <div>
                  <BsFillCheckCircleFill className="chk__icon" />
                </div>
              </div>
              <div className="list__item">
                <div>
                  <p>Unlimited Users and Staff</p>
                </div>
                <div>
                  <BsFillCheckCircleFill className="chk__icon" />
                </div>
              </div>
              <div className="list__item">
                <div>
                  <p>Unlimited Traffic</p>
                </div>
                <div>
                  <BsFillCheckCircleFill className="chk__icon" />
                </div>
              </div>
              <div className="list__item">
                <div>
                  <p>Unlimited Support</p>
                </div>
                <div>
                  <BsFillCheckCircleFill className="chk__icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="section__right">
            <div
              style={{ marginTop: 0 }}
              onClick={() => setPricing("free")}
              className={`plan__block ${pricing === "free" ? "selected" : ""}`}>
              <div>
                {pricing === "free" ? (
                  <BsFillCheckCircleFill className="circle__check" />
                ) : (
                  <BsCircle className="circle" />
                )}
                <span className="title">Free Plan</span>
              </div>
              <div>
                <p className="price">$0</p>
                <p className="price__per">/month</p>
              </div>
              <div></div>
            </div>
            <div
              onClick={() => setPricing("basic")}
              className={`plan__block ${
                pricing === "basic" ? "selected" : ""
              }`}>
              <div>
                {pricing === "basic" ? (
                  <BsFillCheckCircleFill className="circle__check" />
                ) : (
                  <BsCircle className="circle" />
                )}
                <div className="basic">
                  <span className="title">Basic Plan</span>
                  <span className="badge">Recommended</span>
                </div>
              </div>
              <div>
                <p className="price">$20</p>
                <p className="price__per">/month</p>
              </div>
            </div>
            <div
              onClick={() => setPricing("pro")}
              className={`plan__block ${pricing === "pro" ? "selected" : ""}`}>
              <div>
                {pricing === "pro" ? (
                  <BsFillCheckCircleFill className="circle__check" />
                ) : (
                  <BsCircle className="circle" />
                )}
                <span className="title">Pro Plan</span>
              </div>
              <div>
                <p className="price">$50</p>
                <p className="price__per">/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose__plan">
        <button className="btn btn-primary">Choose Plan</button>
      </div>
    </div>
    </Layout>
  )
}
