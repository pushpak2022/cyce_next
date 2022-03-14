import React, { useState } from "react"
import { API } from "../api/API"
import { config } from "../config"
import styles from "./HeroSlider.module.scss"
import btnstyles from "./UI/button/Button.module.scss"
import ReactPixel from "react-facebook-pixel"

const imgPath = require("../assets/images/home/hero.svg")
const HeroSlider = () => {
  const [loading, setLoading] = useState(false)
  const [subMsg, setSubMsg] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const createSendinBlueContact = async () => {
    setLoading(true)
    const res = await API.createSendinBlueContact(email, name)
    setSubMsg("Successfully subscribed! See you on the inside!")
    if (res.err) {
      setSubMsg(
        "Whoops looks like something happened and " +
          "we can't subscribe you at this time. Shoot us an email at " +
          "support@pod.io and we'll send you a gift :)"
      )
      console.error("Error creating sendinblue contact", res.err)
    }
    setLoading(false)
  }

  return (
    <div className={`hero-slider ${styles.heroSlider} ${styles.sliderOne}`}>
      <div className="slideActivation">
        <div
          className={`${styles.slide} ${styles.sliderFixedHeight} ${styles.graBg1} swiper-slide d-flex align-items-center`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-6 col-xl-5">
                <div className={`${styles.content}`}>
                  <h1>Automating Data-Entry For Camps</h1>
                  <p>Connect apps like CampMinder / Google Sheets / and any others you want.</p>
                  <div className="row">
                    <div className="col-12 col-lg-9">
                      <label style={{ color: "#fff" }} htmlFor="newsletter-input">
                        Stay up to date with the latest news!
                      </label>
                      <input
                        id="newsletter-input"
                        type="text"
                        className="form-control"
                        placeholder="Your email address"
                        onChange={e => setEmail(e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your full name"
                        onChange={e => setName(e.target.value)}
                      />
                    </div>
                    <div>{subMsg}</div>
                    <br />
                    <div className="col-12 col-lg-6" style={{ display: "flex", alignItems: "flex-end" }}>
                      <button
                        className={btnstyles.voopoBtn + " " + btnstyles.voopoBtnWhite}
                        onClick={() => {
                          ReactPixel.track("Subscribe")
                          createSendinBlueContact()
                        }}
                      >
                        {loading ? "Submitting..." : "Subscribe for FREE"}
                      </button>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-7">
                <div className={styles.slideFrontImg}>
                  <img src={imgPath.default} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeroSlider }
