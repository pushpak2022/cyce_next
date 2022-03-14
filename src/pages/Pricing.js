import React, { Fragment } from "react"
import LayoutOne from "../layouts"
import TestimonialOne from "../containers/testimonials/testimonial-one"
import SoftwareDownloadOne from "../containers/software-downloads/software-download-one"
import { Title } from "../components/Title"
import { Nav, Tab } from "react-bootstrap"

import styles from "./Pricing.module.scss"
//@todo refactor this into modules
import "./pricing.scss"
import { config } from "../config"

const Pricing = () => {
  return (
    <Fragment>
      <Title />
      <LayoutOne>
        {/* Pricing table */}
        <div className={styles.pricingHeader} />
        <section className={styles.pricing}>
          <div className="container">
            <h1 className={styles.pricingTitle}>
              Join the most caring, customizable <br className="d-none d-lg-block" />
              camp registration platform
            </h1>
            <div className="row">
              <div className="col-12 d-none d-lg-block">
                <table className={styles.pricingTable}>
                  <tbody>
                    <tr>
                      <td className="border-top-0"></td>
                      <td className="border-top-0">
                        <span className={styles.planTitle}>Core</span>
                      </td>
                      <td className={styles.bgThemeSoftPrimary + " selected border-top-0"}>
                        <span className={styles.planTitle}>Pro</span>
                      </td>
                      <td className="border-top-0">
                        <span className={styles.planTitle}>VIP</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0"></td>
                      <td className="border-top-0">
                        <span>Essential registration tools for you, campers, and parents</span>
                      </td>
                      <td className={styles.bgThemeSoftPrimary + " selected border-top-0"}>
                        <span>Effectively manage your backoffice with enhanced integrations</span>
                      </td>
                      <td className="border-top-0">
                        <span>Gain insights into your data so you&apos;re able to make better decisions</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0"></td>
                      <td className="border-top-0">
                        <a
                          className={styles.planBtn + " " + styles.planBtnOutlinePrimary}
                          href={`${config.appUrl}/signup?plan=core`}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Request Early Access
                        </a>
                      </td>
                      <td className={styles.bgThemeSoftPrimary + " selected border-top-0"}>
                        <a
                          className={styles.planBtn + " " + styles.planBtnPrimary}
                          href={`${config.appUrl}/signup?plan=pro`}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Request Early Access
                        </a>
                      </td>
                      <td className="border-top-0">
                        <a
                          className={styles.planBtn + " " + styles.planBtnOutlinePrimary}
                          href={`${config.appUrl}/signup?plan=vip`}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Request Early Access
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <span className={styles.planSubtitle}>Pricing</span>
                      </td>
                      <td className="border-top-0"></td>
                      <td className="border-top-0"></td>
                      <td className="border-top-0"></td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Monthly subscription</span>
                      </td>
                      <td>
                        <div className={styles.fwSemibold + " lh-1"}>
                          <span className={styles.fs3xl}>$249</span>
                          <span className="mb-1">/mo</span>
                        </div>
                      </td>
                      <td>
                        <div className={styles.fwSemibold + " lh-1"}>
                          <span className={styles.fs3xl}>$497</span>
                          <span className="mb-1">/mo</span>
                        </div>
                      </td>
                      <td>
                        <div className={styles.fwSemibold + " lh-1"}>
                          <span className={styles.fs3xl}>$997</span>
                          <span className="mb-1">/mo</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Consultation hours</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>1/mo</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>3/mo</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>6/mo</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Custom features for you</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>None</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>1 minor/mo</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>1 major/mo</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Registrations on your website</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>0% Processing Fee</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>0% Processing Fee</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>0% Processing Fee</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <span className={styles.planSubtitle}>Solutions</span>
                      </td>
                      <td className="border-top-0"></td>
                      <td className="border-top-0"></td>
                      <td className="border-top-0"></td>
                    </tr>
                    <tr>
                      <td>
                        <span>Unlimited Reservations</span>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Unlimited Users and Staff</span>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Unlimited Campers and Parents</span>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Unlimited Programs and Services</span>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Unlimited Traffic</span>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Unlimited Locations</span>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Integrate On Your Site</span>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Discounts and Promocodes</span>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Roster Building</span>
                      </td>
                      <td></td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Family Trees and Relationships</span>
                      </td>
                      <td></td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Advance Scheduling Software</span>
                      </td>
                      <td></td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Staff Shift Manager and Coverage</span>
                      </td>
                      <td></td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Cohort and Progress Tracking</span>
                      </td>
                      <td></td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Automated Email Campaigns</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Custom Data Integration</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Shopify Integration</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Accounts for Campers and Parents</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <svg width="24" height="24" viewBox="0 0 26 26">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          ></path>
                          <path
                            fill="none"
                            d="M8.25 13.25L11.25 15.75L17.75 9.25"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <a
                          className={styles.planBtn + " " + styles.planBtnOutlinePrimary}
                          href={`${config.appUrl}/signup?plan=core`}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Request Early Access
                        </a>
                      </td>
                      <td>
                        <a
                          className={styles.planBtn + " " + styles.planBtnPrimary}
                          href={`${config.appUrl}/signup?plan=pro`}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Request Early Access
                        </a>
                      </td>
                      <td>
                        <a
                          className={styles.planBtn + " " + styles.planBtnOutlinePrimary}
                          href={`${config.appUrl}/signup?plan=vip`}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Request Early Access
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <span className={styles.planSubtitle}>Pricing</span>
                      </td>
                      <td className="border-top-0"></td>
                      <td className="border-top-0"></td>
                      <td className="border-top-0"></td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Monthly subscription</span>
                      </td>
                      <td>
                        <div className={styles.fwSemibold + " lh-1"}>
                          <span className={styles.fs3xl}>$249</span>
                          <span className="mb-1">/mo</span>
                        </div>
                      </td>
                      <td>
                        <div className={styles.fwSemibold + " lh-1"}>
                          <span className={styles.fs3xl}>$497</span>
                          <span className="mb-1">/mo</span>
                        </div>
                      </td>
                      <td>
                        <div className={styles.fwSemibold + " lh-1"}>
                          <span className={styles.fs3xl}>$997</span>
                          <span className="mb-1">/mo</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Consultation hours</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>1/mo</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>3/mo</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>6/mo</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Custom features for you</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>None</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>1 minor/mo</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>1 major/mo</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Registrations on your website</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>0% Processing Fee</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>0% Processing Fee</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>0% Processing Fee</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12 d-block d-lg-none" style={{ paddingLeft: "7vw", paddingRight: "7vw" }}>
                <Tab.Container defaultActiveKey="core">
                  <Nav variant="custom-pills" className="justify-content-center mb-3">
                    <Nav.Item>
                      <Nav.Link eventKey="core">Core</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="pro">Pro</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="vip">VIP</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="core">
                      <div className="text-center">
                        <span className="d-block mb-3">Essential registration tools for you, campers, and parents</span>
                        <a
                          className={styles.planBtn + " " + styles.planBtnPrimary + " mb-3"}
                          href={`${config.appUrl}/signup?plan=core`}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Request Early Access
                        </a>
                      </div>
                      <table className={styles.planTable + " mb-3"}>
                        <tbody>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Monthly subscription</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>
                                <span className={styles.fsLg + " lh-1"}>$249</span>
                                <span>/mo</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Consultation hours</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>1/mo</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Custom features for you</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>None</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Registrations on your website</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>0% Processing Fee </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className={styles.planSubtitle + " mb-3"}>Solutions</div>
                      <span className="d-block mb-3">Unlimited Reservations</span>
                      <span className="d-block mb-3">Unlimited Users and Staff</span>
                      <span className="d-block mb-3">Unlimited Campers and Parents</span>
                      <span className="d-block mb-3">Unlimited Programs and Services</span>
                      <span className="d-block mb-3">Unlimited Traffic</span>
                      <span className="d-block mb-3">Unlimited Locations</span>
                      <span className="d-block mb-3">Integrate On Your Site</span>
                      <span className="d-block mb-3">Discounts and Promocodes</span>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pro">
                      <div className="text-center">
                        <span className="d-block mb-3">
                          Effectively manage your backoffice with enhance integrations
                        </span>
                        <a
                          className={styles.planBtn + " " + styles.planBtnPrimary + " mb-3"}
                          href={`${config.appUrl}/signup?plan=pro`}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Request Early Access
                        </a>
                      </div>
                      <table className={styles.planTable + " mb-3"}>
                        <tbody>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Monthly subscription</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>
                                <span className={styles.fsLg + " lh-1"}>$497</span>
                                <span>/mo</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Consultation hours</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>3/mo</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Custom features for you</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>1 minor/mo</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Registrations on your website</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>0% Processing Fee </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className={styles.planSubtitle + " mb-3"}>Solutions</div>
                      <span className="d-block mb-3">Unlimited Reservations</span>
                      <span className="d-block mb-3">Unlimited Users and Staff</span>
                      <span className="d-block mb-3">Unlimited Campers and Parents</span>
                      <span className="d-block mb-3">Unlimited Programs and Services</span>
                      <span className="d-block mb-3">Unlimited Traffic</span>
                      <span className="d-block mb-3">Unlimited Locations</span>
                      <span className="d-block mb-3">Integrate On Your Site</span>
                      <span className="d-block mb-3">Discounts and Promocodes</span>
                      <span className="d-block mb-3">Roster Building</span>
                      <span className="d-block mb-3">Family Trees and Relationships </span>
                      <span className="d-block mb-3">Advance Scheduling Software </span>
                      <span className="d-block mb-3">Staff Shift Manager and Coverage</span>
                      <span className="d-block mb-3">Cohort and Progress Tracking</span>
                    </Tab.Pane>
                    <Tab.Pane eventKey="vip">
                      <div className="text-center">
                        <span className="d-block mb-3">
                          Gain insights into your data so you&apos;re able to make better decisions
                        </span>
                        <a
                          className={styles.planBtn + styles.planBtnOutlinePrimary + " mb-3"}
                          href={`${config.appUrl}/signup?plan=vip`}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Request Early Access
                        </a>
                      </div>
                      <table className={styles.planTable + " mb-3"}>
                        <tbody>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Monthly subscription</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>
                                <span className={styles.fsLg + " lh-1"}>$997</span>
                                <span>/mo</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Consultation hours</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>6/mo</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Custom features for you</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>1 major/mo</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className={styles.fwSemibold}>Registrations on your website</span>
                            </td>
                            <td>
                              <div className={styles.fwSemibold + " text-end"}>0% Processing Fee </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className={styles.planSubtitle + " mb-3"}>Solutions</div>
                      <span className="d-block mb-3">Unlimited Reservations</span>
                      <span className="d-block mb-3">Unlimited Users and Staff</span>
                      <span className="d-block mb-3">Unlimited Campers and Parents</span>
                      <span className="d-block mb-3">Unlimited Programs and Services</span>
                      <span className="d-block mb-3">Unlimited Traffic</span>
                      <span className="d-block mb-3">Unlimited Locations</span>
                      <span className="d-block mb-3">Integrate On Your Site</span>
                      <span className="d-block mb-3">Discounts and Promocodes</span>
                      <span className="d-block mb-3">Roster Building</span>
                      <span className="d-block mb-3">Family Trees and Relationships </span>
                      <span className="d-block mb-3">Advance Scheduling Software </span>
                      <span className="d-block mb-3">Staff Shift Manager and Coverage</span>
                      <span className="d-block mb-3">Cohort and Progress Tracking</span>
                      <span className="d-block mb-3">Automated Email Campaigns </span>
                      <span className="d-block mb-3">Custom Data Integration</span>
                      <span className="d-block mb-3">Shopify Integration</span>
                      <span className="d-block mb-3">Accounts for Campers and Parents</span>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </section>
        {/* End Pricing Table */}

        {/* testimonials */}
        <TestimonialOne />
        <SoftwareDownloadOne />
      </LayoutOne>
    </Fragment>
  )
}

export { Pricing }
