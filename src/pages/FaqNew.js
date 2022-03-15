import React from "react"
import Layout from "./../components/Common/Layout"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

import FAQ_IMAGE from "./../assets/images2/faq_image.png"

const QA = [
  {
    q: "What is an automation?",
    a: "An app is a tool or platform you use, such as CampMinder, Google Sheets, etc."
  },
  {
    q: "What if I exceed my automation limit?",
    a: "An app is a tool or platform you use, such as CampMinder, Google Sheets, etc."
  },
  {
    q: "What is an app?",
    a: "An app is a tool or platform you use, such as CampMinder, Google Sheets, etc."
  },
  {
    q: "What is a workflow?",
    a: "An app is a tool or platform you use, such as CampMinder, Google Sheets, etc."
  },
  {
    q: "Want a quick response to your questions?",
    a: "An app is a tool or platform you use, such as CampMinder, Google Sheets, etc."
  }
]

export default function Faq() {
  const [faqList, setFaqList] = React.useState(QA)

  const faqOpen = React.useCallback(
    index => {
      const newList = faqList.map(itm => {
        itm.open = false
        return itm
      })
      newList[index].open = true
      setFaqList(newList)
    },
    [faqList]
  )
  return (
    <Layout>
      <div className="Faqs--Root">
        <div className="graphics__block">
          <img src={FAQ_IMAGE} alt="faq" className="faq_image" />
        </div>
        <div className="faq__block">
          <h2 className="faq_title">Frequently Asked Questions</h2>
          <p className="faq_desc">Everything you need to know about the product.</p>

          <div className="faq__list">
            {faqList.length > 0 &&
              faqList.map((item, index) => {
                return (
                  <div onClick={() => faqOpen(index)} className={`faq__item ${item.open ? "open" : ""}`} key={index}>
                    <div className="faq__question">
                      <h3 className="faq__question_title">
                        {item.q}
                        {(item.open && <BsChevronUp className="chevron" />) || <BsChevronDown className="chevron" />}
                      </h3>
                    </div>
                    <div className="faq__answer">
                      <p className="faq__answer_text">{item.a}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
