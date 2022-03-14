import React from "react"
import aboutContentListData from "../../../data/about-content/about-content-two-list.json"
import AboutContentTwoListSingle from "../../../components/about-contents/about-content-two/index.js"
import bgImg from "../../../assets/images/bg/bg-2.svg"
import styles from "./AboutContentTwo.module.scss"

const AboutContentTwo = () => {
  return (
    <div
      className={styles.voopoWorks}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-12">
            <div className={styles.worksInner}>
              <div className={styles.sectionTitle2}>
                <span>I&apos;ve spent 10 years coding...</span>
                <h2>...so you don&apos;t have to</h2>
              </div>
              <div>
                <p>
                  My name is Carl and I&apos;ve been blessed to have worked with software almost my entire life and have
                  been wanting to utilize my knowledge in technology to make a difference.
                </p>
                <br />
                <p>
                  Then I met Coach K (awesome person btw!), owner of a day camp in Los Angeles, and realized that his
                  administrative assistant and team spends hours each day manually entering registration data from
                  emails and google sheets into camp minder and other tools. I was like, wait, there has to be a better
                  way. I mean someone must have attempted to automate this process in the past?
                </p>
                <br />
                <p>
                  Further research only shows that other camp owners and people in the industry face the same problems
                  and are frustrated by the amount of inefficiency there is.
                </p>
                <br />
                <p>
                  What about something like Zapier? Or other tools that focus on integrating different platforms? Not
                  surprising, but most platforms in the education space are simply not supported. And yes, we tried
                  calling them!
                </p>
                <br />
                <p>
                  And that&apos;s exactly what I did, I spent the majority of 2021 building and refining a solution for
                  Coach K and built him a registration system that&apos;s truly unique to how his camp runs, as if a
                  human brain was behind it – automated!
                </p>
                <br />
                <p>
                  Results? We&apos;ve processed over $1million – automatically – in the middle of a pandemic. But more
                  importantly, we gave parents and campers the convenience, the ease, and love they deserve.
                </p>
                <br />
                <p>
                  We were also able to bring so much efficiency to the table, helping Coach K and his team save hours
                  day in and day out, so that he has time to innovate, and focus on making his camp a better place for
                  parents and camps.
                </p>
                <br />
                <p>
                  I feel morally obligated to utilize my knowledge and expertise in technology and make the world a
                  better place, one business at a time.
                </p>
                <br />
                <p> - Carl Ngan</p>
              </div>
            </div>
          </div>
          {/*<div className="col-12 col-md-6 sm__mt--40">*/}
          {/*  <div className={styles.worksList}>*/}
          {/*    {aboutContentListData &&*/}
          {/*      aboutContentListData.map((single, key) => {*/}
          {/*        return <AboutContentTwoListSingle data={single} key={key} styles={styles} />*/}
          {/*      })}*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}

export default AboutContentTwo
