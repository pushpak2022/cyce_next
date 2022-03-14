import React from "react"
import Layout from "./../components/Common/Layout"

import ABOUT_IMAGE from "./../assets/images2/about_image.png";
import GRAY_LOGO from "./../assets/images2/gray_logo.png";
import UNSPLASH_IMAGE from "./../assets/images2/unsplash_l3hwxnGJXn8.png";


export default function About() {
  return (
    <Layout>
      <div className="About--Root">
      <div className="header__call">
        <div className="header__titles">
          <h2 className="title">Automating Your Current Workflow!</h2>
          <p className="desc">
            Pod is here to make a difference and automate processes that can be
            done by intelligent computer programs so humans can spend their time
            doing the things they love instead.
          </p>
        </div>
        <div className="header__graphics">
          <img src={ABOUT_IMAGE} alt="pricing" className="about_image" />
        </div>
        <div className="border__logo">
          <img src={GRAY_LOGO} alt="pricing" className="logo" />
        </div>
      </div>
      <div className="about__content">
        <div className="profile__bar">
          <img src={UNSPLASH_IMAGE} alt="POD" className="profile__img" />
          <div className="titles">
            <p className="name fs-inter">Pod </p>
            <p className="position">
              {" "}
              <span>I've spent 10 years coding...</span> &nbsp;
              <br className="br__sm" />
              <span>so you don't have tos</span>
            </p>
          </div>
        </div>
        <div className="profile__desc">
          <p>
            My name is Pod and I've been blessed to have worked with software
            almost my entire life and have been wanting to utilize my knowledge
            in technology to make a difference.
          </p>
          <p>
            Then I met Coach K (awesome person btw!), owner of a day camp in Los
            Angeles, and realized that his administrative assistant and team
            spends hours each day manually entering registration data from
            emails and google sheets into camp minder and other tools. I was
            like, wait, there has to be a better way. I mean someone must have
            attempted to automate this process in the past?
          </p>
          <p>
            Further research only shows that other camp owners and people in the
            industry face the same problems and are frustrated by the amount of
            inefficiency there is.
          </p>
          <p>
            What about something like Zapier? Or other tools that focus on
            integrating different platforms? Not surprising, but most platforms
            in the education space are simply not supported. And yes, we tried
            calling them!
          </p>
          <p>
            And that's exactly what I did, I spent the majority of 2021 building
            and refining a solution for Coach K and built him a registration
            system that's truly unique to how his camp runs, as if a human brain
            was behind it – automated!
          </p>
          <p>
            Results? We've processed over $1million – automatically – in the
            middle of a pandemic. But more importantly, we gave parents and
            campers the convenience, the ease, and love they deserve.
          </p>
          <p>
            We were also able to bring so much efficiency to the table, helping
            Coach K and his team save hours day in and day out, so that he has
            time to innovate, and focus on making his camp a better place for
            parents and camps.
          </p>
          <p>
            I feel morally obligated to utilize my knowledge and expertise in
            technology and make the world a better place, one business at a
            time.
          </p>
        </div>
      </div>
    </div>
    </Layout>
  )
}
