import React, { Fragment, useEffect } from "react"
import LayoutOne from "../layouts"
import TestimonialOne from "../containers/testimonials/testimonial-one"
import SectionTitle from "../components/UI/section-title/section-title-one"
import SoftwareDownloadOne from "../containers/software-downloads/software-download-one"
import { Checkmark } from "../components/Checkmark"
import { Title } from "../components/Title"
import ReactPixel from "react-facebook-pixel"

import styles from "./Pricing.module.scss"
import "./pricing.scss"

import { config } from "../config"

const PricingEarlyAccess = () => {
  const faqs = [
    {
      question: "What is an automation?",
      answer:
        "An automation happens when data is moved from point A to point B. For example if you choose to automatically create a new record in Hubspot everytime a new row is added to a Google Spreadsheet, that would count as an automation."
    },
    {
      question: "What if I exceed my automation limit?",
      answer:
        "If you use more than the limit on your plan, we would ask you to upgrade to the next plan, or you would be billed at a rate of $0.02 per automation above the pro plan. Please contact us for higher volume discounts."
    },
    {
      question: "What is an app?",
      answer: "An app is a tool or platform you use, such as CampMinder, Google Sheets, etc."
    },
    {
      question: "What is a workflow?",
      answer: "A workflow is a plan to automate data between 2 or more apps."
    },
    {
      question: "Want a quick response to your questions?",
      answer: "Txt Carl at 6-6473 :)"
    }
  ]

  useEffect(() => {
    ReactPixel.track("ViewContent")
  }, [])

  return (
    <Fragment>
      <Title />
      <LayoutOne>
        {/* Pricing table */}
        <div className={styles.pricingHeader} />
        <section className={styles.pricing}>
          <div className="container">
            <h1 className={styles.pricingTitle}>
              Integrate and Automate apps you already <br />
              use for camp. <br />
              No more manual work, no more uncertainty.
            </h1>
            <div className="row">
              <div className="col-12">
                <table className={styles.pricingTable}>
                  <tbody>
                    <tr>
                      <td className="border-top-0"></td>
                      <td className="border-top-0">
                        <span className={styles.planTitle}>Free</span>
                      </td>
                      <td className={styles.bgThemeSoftPrimary + " selected border-top-0"}>
                        <span className={styles.planTitle}>Basic</span>
                      </td>
                      <td className="border-top-0">
                        <span className={styles.planTitle}>Pro</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0"></td>
                      <td className="border-top-0">
                        <div className={styles.fwSemibold + " lh-1"}>
                          <span className={styles.fs3xl}>$0</span>
                          <span className="mb-1">/m</span>
                        </div>
                      </td>
                      <td className={styles.bgThemeSoftPrimary + " selected border-top-0"}>
                        <div className={styles.fwSemibold + " lh-1"}>
                          <span className={styles.fs3xl}>$20</span>
                          <span className="mb-1">/m</span>
                        </div>
                      </td>
                      <td className="border-top-0">
                        <div className={styles.fwSemibold + " lh-1"}>
                          <span className={styles.fs3xl}>$50</span>
                          <span className="mb-1">/m</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0"></td>
                      <td className="border-top-0">
                        <a
                          className={styles.planBtn + " " + styles.planBtnOutlinePrimary}
                          // href={`${config.appUrl}/signup?plan=forms`}
                          // target={"_blank"}
                          href="/contact"
                          rel="noreferrer"
                        >
                          Get Started
                        </a>
                      </td>
                      <td className={styles.bgThemeSoftPrimary + " selected border-top-0"}>
                        <a
                          className={styles.planBtn + " " + styles.planBtnPrimary}
                          // href={`${config.appUrl}/signup?plan=formsndata`}
                          // target={"_blank"}
                          href="/contact"
                          rel="noreferrer"
                        >
                          Get Started
                        </a>
                      </td>
                      <td className="border-top-0">
                        <a
                          className={styles.planBtn + " " + styles.planBtnOutlinePrimary}
                          // href={`${config.appUrl}/signup?plan=formsndata`}
                          // target={"_blank"}
                          href="/contact"
                          rel="noreferrer"
                        >
                          Get Started
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Automations</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>100 Automations/m</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>1000 Automations/m</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>2500 automations/m + $0.02/additional</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Number of Workflows</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>Unlimited</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>Unlimited</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>Unlimited</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Number of Apps</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>Unlimited</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>Unlimited</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>Unlimited</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.fwSemibold}>Setup Fee</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>$0</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>$0</span>
                      </td>
                      <td>
                        <span className={styles.fwSemibold}>$0</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Multi-Step Automations</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Auto Replay (beta)</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Connections via Webhooks</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Unlimited Users and Staff</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    {/* <tr className="bg-light">
                      <td>
                        <span>DIY Tool For Small Changes</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Programs / Sessions Logic</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Discount / Promocode Logic</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Sibling Discounts and Multi-sessions</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Parent/Children Relationship Management</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Customizable Options in Registrations</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Unlimited Registrations / Reservations</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr> */}
                    <tr>
                      <td>
                        <span>Unlimited Traffic</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    {/* <tr className="bg-light">
                      <td>
                        <span>Unlimited Campers and Parents</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr> */}
                    <tr>
                      <td>
                        <span>Unlimited Support</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    {/* <tr className="bg-light">
                      <td>
                        <span>Integrate On Your Site</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Roster Building</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Google Sheet Integration</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Excel Integration</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Stripe Integration</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Authorized.NET Integration</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td>
                        <span>Customizable Emails</span>
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Cohort and Progress Tracking</span>
                      </td>
                      <td></td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Custom Data Integration</span>
                      </td>
                      <td></td>
                      <td>
                        <Checkmark />
                      </td>
                    </tr> */}
                    {/*<tr className="bg-light">*/}
                    {/*  <td>*/}
                    {/*    <span>Shopify Integration</span>*/}
                    {/*  </td>*/}
                    {/*  <td></td>*/}
                    {/*  <td>*/}
                    {/*    <Checkmark />*/}
                    {/*  </td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*  <td>*/}
                    {/*    <span>Custom Features for You!</span>*/}
                    {/*  </td>*/}
                    {/*  <td></td>*/}
                    {/*  <td>*/}
                    {/*    <Checkmark />*/}
                    {/*  </td>*/}
                    {/*</tr>*/}
                    <tr>
                      <td></td>
                      <td>
                        <a
                          className={styles.planBtn + " " + styles.planBtnOutlinePrimary}
                          // href={`${config.appUrl}/signup?plan=forms`}
                          // target={"_blank"}
                          href="/contact"
                          rel="noreferrer"
                        >
                          Get Started
                        </a>
                      </td>
                      <td>
                        <a
                          className={styles.planBtn + " " + styles.planBtnPrimary}
                          // href={`${config.appUrl}/signup?plan=formsndata`}
                          // target={"_blank"}
                          href="/contact"
                          rel="noreferrer"
                        >
                          Get Started
                        </a>
                      </td>
                      <td>
                        <a
                          className={styles.planBtn + " " + styles.planBtnOutlinePrimary}
                          // href={`${config.appUrl}/signup?plan=formsndata`}
                          // target={"_blank"}
                          href="/contact"
                          rel="noreferrer"
                        >
                          Get Started
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* End Pricing Table */}

        {/* FAQS */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div style={{ margin: "30px" }}>
              <SectionTitle title="FAQS" />
            </div>
            <div className="accordion" id="accordionExample">
              {faqs.map((faq, i) => {
                return (
                  <div key={faq.question} className="accordion-item">
                    <h2 className="accordion-header" id={`question-${i}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${i}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${i}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${i}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`question-${i}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* testimonials */}
        <TestimonialOne />
        <SoftwareDownloadOne />
      </LayoutOne>
    </Fragment>
  )
}

export { PricingEarlyAccess }
