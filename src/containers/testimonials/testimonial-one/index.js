import React, { useEffect, useState } from "react"
import Swiper from "react-id-swiper"
import SectionTitle from "../../../components/UI/section-title/section-title-one"
import testimonialData from "../../../data/testimonials/testimonial-one.json"
import styles from "./TestimonialOne.module.scss"
import TestimonialOneSingle from "../../../components/testimonials/testimonial-one"
import "./navigation.css"

const TestimonialOne = () => {
  const [swiper, setSwiper] = useState(null)

  const params = {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  }

  useEffect(() => {
    setSwiper(document.querySelector(".swiper-container").swiper)
  }, [])

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev()
    }
  }

  return (
    <div className="voopo__testimnial bg--white ptb--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitle title="Proud Of Our Work" text="What Others Have To Say" />
          </div>
        </div>
        <div className="row mt--30">
          <div className="container">
            <div className="row">
              <div className="col-1 mt--120">
                <svg width="24" height="24" viewBox="0 0 26 26" onClick={() => goPrev()}>
                  <path
                    fill="#ff9494"
                    d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <Swiper {...params}>
                  {testimonialData &&
                    testimonialData.map((single, key) => {
                      return <TestimonialOneSingle data={single} key={key} styles={styles} sliderClass="swiper-slide" />
                    })}
                </Swiper>
              </div>
              <div className="col-1 mt--120">
                <svg width="24" height="24" viewBox="0 0 26 26" onClick={() => goNext()}>
                  <path
                    fill="#ff9494"
                    d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialOne
