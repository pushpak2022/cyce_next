import React, { useEffect } from "react"
import styles from "./EarlyAccessForm.module.scss"
import Button from "../../../components/UI/button"
import contactThumb from "../../../assets/images/about/contact.png"

const EarlyAccessForm = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/shell.js"
    document.body.appendChild(script)

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "8274841",
          formId: "282a86cc-49fa-48c3-9648-804e08f881a2",
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
            <div className={styles.EarlyAccessForm}>
              <h2>Get Early Access</h2>
              <span id="hubspotForm"></span>
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

export default EarlyAccessForm
