/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState } from "react"
import axios from "axios"
import MetaTags from "react-meta-tags"
import { Link, useHistory } from "react-router-dom"
import LayoutOne from "../layouts"
import TestimonialOne from "../containers/testimonials/testimonial-one"
import SoftwareDownloadOne from "../containers/software-downloads/software-download-one"

import styles from "./MafiaCity.module.scss"
import bgImg from "../assets/images/bg/bg-2.svg"
import logo from "../assets/images/logo/pod_logo.svg"
import bgImgBanner from "../assets/images/bg/bg-1.svg"

import { config } from "../config"

import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardBody
} from "reactstrap"

const MafiaCity = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [checked, setChecked] = useState(false)

  const [errMsg, setErrMsg] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validate = async () => {
    setErrMsg("Submitting Request...")

    if (!firstName) {
      return setErrMsg("First Name is required.")
    }
    if (!email) {
      return setErrMsg("Email Name is required.")
    }

    try {
      const response = await axios.post(
        `${config.apiUrl}/public/forms/mafia-city-interest-list`,
        {
          firstName,
          lastName,
          email,
          city
        },
        {}
      )

      if (response && response.data) {
        if (response.data.msg === "success") {
          setErrMsg("")
          // hide form and show success with contact fb info
          setSubmitSuccess(true)
        } else {
          setErrMsg(`Unable to join list. ${response.data.msg}`)
        }
      } else {
        return setErrMsg("Unable to join list. Please contact support for help! (1)")
      }
    } catch (err) {
      if (err && err.response && err.response.data && err.response.data.msg) {
        return setErrMsg(`${err.response.data.msg}`)
      }
      return setErrMsg("Unable to join list. Please contact support for help! (2)")
    }
  }

  return (
    <>
      <MetaTags>
        <title>pod | Mafia City</title>
        <meta name="description" content="Automating Your Tedious Processes With Artificial Intelligence." />
      </MetaTags>
      <LayoutOne>
        <div className={styles.prBreadcrumbArea} style={{ backgroundImage: `url(${bgImgBanner})` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`${styles.breadcrumbInner} text-left`}>
                  <h2 className={styles.breadcrumbTitle}></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.padding115}
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            paddingLeft: "10%",
            paddingRight: "10%"
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className={styles.worksInner}>
                  <div className={styles.sectionTitle2}>
                    <span>A Very Personal Gift For You (Secret Page)</span>
                    <h2>Automatically Running Your Farm(s)</h2>
                  </div>

                  <div>
                    <p>
                      Howdy! My name is Carl and I&apos;ve started playing Mafia City a short while back (late 2019). I
                      joined an amazing clan, met a bunch wonderful people, and started to fall in love with the game. I
                      loved the game because I don&apos;t have to sit in front of a computer like many other MMOs and be
                      actively playing (killing monsters/grinding). I can be &quot;playing&quot; without having to spend
                      a tremendous amount of time on it, and carry it around on my phone. Like everyone else, I wanted
                      to get stronger, upgrade my mansion, my buildings, etc -- but then I realized that I keep running
                      out of resource. In the beginning it was cargo and arms, but then metal started becoming a huge
                      issue for me.
                    </p>
                    <br />
                    <p>
                      I started to buy resource packs and gather resources. It felt great at first because I was able to
                      get through several mansion level, but upgrading and becoming strong got expensive quickly. I
                      learned that I was gathering too slow. More importantly, it was taking a lot of time away from me
                      -- time I could have spent doing other things that are way more rewarding.
                    </p>
                    <br />
                    <p>
                      I learned from other players about farm accounts -- farming wasn&apos;t a new concept to me,
                      I&apos;ve been doing this for years in other games; but Mafia City presented me with something
                      very unique. That is you cannot directly transfer resources to your main account, you&apos;d have
                      to rob them from your farm -- which also means other players can rob your farm too. Great, so now
                      I have to learn to protect my farm account too.
                    </p>
                    <br />
                    <p>
                      Long story short, I made a farm account, maxed out cargo skills and investments, and thought that
                      I didn&apos;t have to worry about running out of cargo every again. I thought that I was finally
                      able to free myself from gathering and finally have more time on my main account to play the game.
                      I was wrong :(
                    </p>
                    <br />
                    <p>
                      In order for my farm account to produce a decent amount of cargo, I had to check my account every
                      few hours to keep my troops gathering and make sure I wasn&apos;t attacked by other players. On
                      top of that, I had to make investments, upgrade skills, upgrade production buildings, etc, etc,
                      etc. So now I am like essentially playing 2 accounts, spending way more time that I anticipated on
                      this game. To drive the point home, gathering and farming wasn&apos;t all that interesting.
                      Don&apos;t get me wrong, I loved the resources I was getting out of it (currently at m16 it&apos;s
                      producing about 20Mil cargo/day), but I just didn&apos;t enjoy the frustration of having to manage
                      the account, doing the upgrades on every production building, lining up investments, and looking
                      for tiles to send my troops to gather. What if... what if I can still be collecting those
                      resources that I want without having to run the farm account? What if everything was done for me
                      automatically?
                    </p>
                    <br />
                    <p>
                      I started looking for software out there to see if anything already existed. I wanted something
                      that&apos;s easy to use and 100% safe so I don&apos;t get my farm account(s) banned. I did come
                      across some software, tried them out... and they seem to be either expensive to the point where
                      it's not really worth farming, require a tremendous amount of setup, and sometimes even
                      manipulating the game data (detectable and unsafe). What frustrates me the most is that the
                      settings for a farm account are extremely inefficient, let alone having to run Mafia City on
                      servers, windows, and emulators. I was sharing this with several people, and I was like -- you
                      know what? I&apos;m going to build my own software for farming in Mafia City, and I am going to
                      make it the best freakin' software in the market!
                    </p>
                    <br />
                    <p>
                      And I did... I've started putting the pieces together and testing it for several weeks now and I
                      actually fell in love with doing this. I'm testing this on multiple farms of my own and I have
                      excess resources to share with my clan almost every day. I'm also learning that more and more
                      players in Mafia City want to automate running their farms and I feel like I have a gift to offer
                      the world. I feel super excited just thinking about what this has the potential of becoming!
                    </p>
                    <br />
                    <p>
                      <b>
                        Right now we're still in the very beginning stages of something great. And I want your help...
                        If you are reading this, then you've probably been invited by me personally or someone I trust.
                        I am going to make a web platform (website/online portal) for you to manage your farms. So you
                        don't need to setup any servers, you don't need to install any software on your computer, etc.
                        My goal is to make it as simple as 1, 2, 3... because I'm going to be using this myself too. If
                        you are interested in helping me test my software, then join the interest list below and I'll
                        keep you updated with the most current information.
                      </b>
                    </p>
                    <br />
                    <p>
                      Disclaimer: I'll be paying for the cost of servers and other costs to running the farms, but I
                      plan to do this absolutely FREE as a gift for a few selected people. If there's a lot of demand,
                      then I may open it up to more people to help me cover some costs -- although I probably won't be
                      asking for more than a few dollars.
                    </p>
                    <br />
                    <p>
                      So if you'd like to be a part of my testing group and take advantage of having my software run
                      your farms automatically for you, then join the interest list below before we take this page down.
                    </p>
                  </div>
                  {/* Bottom Section */}
                  <div className={styles.padding115}>
                    {submitSuccess && (
                      <Card className="overflow-hidden">
                        <div className="bg-primary">
                          <div className={styles["text-primary"] + " text-primary text-center p-4"}>
                            <h2 style={{ color: "green" }}>Sucessfully Joined The Interest List.</h2>
                            <p style={{ color: "white", fontSize: "14px" }}>
                              Congratulations and welcome to my world. I am super exicted to be sharing and gifting
                              something this amazing to you. You should be hearing from me within the next few days over
                              email. If you do not, feel free to reach out to me. Meanwhile, feel free to connect with
                              me on facebook:{" "}
                              <a href="https://www.facebook.com/carlngan333/" target="_blank" rel="noreferrer">
                                https://www.facebook.com/carlngan333/
                              </a>
                              <br />
                              Send me a message and let me know you came from Mafia City so I'll accept you. Talk soon
                              :)
                            </p>
                          </div>
                        </div>
                        <CardBody className="p-4"></CardBody>
                      </Card>
                    )}
                    {!submitSuccess && (
                      <Card className="overflow-hidden">
                        <div className="bg-primary">
                          <div className={styles["text-primary"] + " text-primary text-center p-4"}>
                            <h2 style={{ color: "white" }}>Join The Interest List For FREE</h2>
                            <p style={{ color: "white", fontSize: "14px" }}>Stay Current With The Latest News!</p>
                            <Link to="/" className="logo logo-admin">
                              <img
                                src={logo}
                                style={{
                                  padding: "10px",
                                  position: "absolute",
                                  left: "0",
                                  right: "0",
                                  margin: "0px auto",
                                  width: "50px",
                                  height: "50px",
                                  lineHeight: "50px",
                                  background: "white",
                                  borderRadius: "50%",
                                  borderBottom: "2px solid"
                                }}
                                height="40"
                                alt="logo"
                              />
                            </Link>
                          </div>
                        </div>
                        <CardBody className="p-4">
                          <div className="p-3">
                            <form>
                              <div className="form-row">
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="validationDefaultFN">First Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefaultFN"
                                    placeholder="First Name"
                                    required
                                    onChange={e => setFirstName(e.target.value)}
                                    onKeyPress={e => {
                                      if (e.key === "Enter") {
                                        validate()
                                      }
                                    }}
                                  />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="validationDefaultLN">Last Name</label>
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="validationDefaultLN"
                                      placeholder="Last Name"
                                      required
                                      onChange={e => setLastName(e.target.value)}
                                      onKeyPress={e => {
                                        if (e.key === "Enter") {
                                          validate()
                                        }
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-row">
                                <div className="col-md-12 mb-3">
                                  <label htmlFor="city">City # (optional)</label>
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="1138"
                                      id="city"
                                      value={city}
                                      onChange={e => setCity(e.target.value)}
                                      onKeyPress={e => {
                                        if (e.key === "Enter") {
                                          validate()
                                        }
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-row">
                                <div className="col-md-12 mb-3">
                                  <label htmlFor="validationDefaultEmail">
                                    Email (use your real/main email for me to communicate with you)
                                  </label>
                                  <div className="input-group">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text" id="inputGroupPrepend2">
                                        @
                                      </span>
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="validationDefaultEmail"
                                      placeholder="your@email.com"
                                      required
                                      onChange={e => setEmail(e.target.value)}
                                      onKeyPress={e => {
                                        if (e.key === "Enter") {
                                          validate()
                                        }
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* <div className="form-group">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                  id="invalidCheck2"
                                  required
                                  checked={checked}
                                  onChange={() => {
                                    setChecked(!checked)
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="invalidCheck2"
                                >
                                  Agree to{" "}
                                  <a
                                    href="https://www.pod.io/terms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Terms and Conditions
                                  </a>
                                </label>
                              </div>
                            </div> */}
                              <div style={{ color: "red" }}>{errMsg}</div>
                              <div className="d-flex justify-content-center mt-3 login_container">
                                <button
                                  className={styles["btn-primary"] + " btn login_btn"}
                                  type="button"
                                  onClick={() => {
                                    validate()
                                  }}
                                >
                                  Join The Interest List For FREE!
                                </button>
                              </div>
                            </form>
                          </div>
                        </CardBody>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestimonialOne />
        <SoftwareDownloadOne />
      </LayoutOne>
    </>
  )
}

export { MafiaCity }
