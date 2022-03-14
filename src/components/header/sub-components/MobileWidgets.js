import { PropTypes } from "prop-types"
import React from "react"
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaPhone, FaRegEnvelope, FaLinkedin } from "react-icons/fa"

const MobileWidgets = ({ styles }) => {
  return (
    <div className={styles.offcanvasWidgetArea}>
      <div className={styles.offCanvasContactWidget}>
        <div className={styles.headerContactInfo}>
          <ul className={styles.headerContactInfoList}>
            <li>
              <FaRegEnvelope /> <a href="mailto:support@pod.io">support@pod.io</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className={styles.offCanvasWidgetSocial}>
        <a href="https://www.linkedin.com/company/19127748" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/Opticorio" target="_blank" rel="noopener noreferrer" title="Twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/pod.io" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/pod.io" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaFacebookF />
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  )
}
MobileWidgets.propTypes = {
  styles: PropTypes.object
}

export default MobileWidgets
