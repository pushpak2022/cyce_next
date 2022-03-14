import React, { useEffect } from "react"
import styles from "./ContactForm.module.scss"
import Button from "../../../components/UI/button"
import contactThumb from "../../../assets/images/about/contact.png"

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/shell.js"
    document.body.appendChild(script)

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "8274841",
          formId: "97a1604d-950f-455a-855d-056c69c7b4ec",
          target: "#hubspotForm"
        })
      }
    })
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="voopo__contact ptb--110">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.voopoContactForm}>
              <h2>Let&apos;s Get In Touch :)</h2>
              <span id="hubspotForm"></span>
              {/*<form>
                <div className={styles.singleContactForm}>
                  <input type="text" name="name" placeholder="Full Name" />
                </div>
                <div className={styles.singleContactForm}>
                  <input type="email" name="email" placeholder="E-mail" />
                </div>
                <div className={`${styles.singleContactForm} message`}>
                  <textarea
                    name="message"
                    placeholder="How Can We Help You?"
                    defaultValue={""}
                  />
                </div>
                <div className={styles.contactBtn}>
                  <Button type="button" text="Send" />
                </div>
              </form>*/}
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
            <div className={styles.contactThumb}>
              <img src={contactThumb} alt="pod" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
