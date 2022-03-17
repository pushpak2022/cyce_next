import React, { useEffect } from "react"
import ReactGA from "react-ga"
import ReactPixel from "react-facebook-pixel"
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom"
import ScrollToTop from "./helpers/ScrollToTop"
import { Home } from "./pages/Home"
import About from "./pages/About"
import { PricingEarlyAccess } from "./pages/PricingEarlyAccess"
import Contact from "./pages/Contact"
import Start from "./pages/Start"
import NotFound from "./pages/NotFound"
import TermsOfUse from "./pages/TermsOfUse"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import { hotjar } from "react-hotjar"
import HomeNew from "./pages/HomeNew"
import AboutNew from "./pages/AboutNew"
import PricingNew from "./pages/PricingNew"
import FaqNew from "./pages/FaqNew"
import ContactNew from "./pages/ContactNew"

const App = () => {
  let location = useLocation()

  useEffect(() => {
    hotjar.initialize(1963145, 6)
    ReactGA.initialize("UA-176594703-1", { debug: false })
    ReactGA.pageview(window.location.pathname)
    ReactPixel.init("506153443292962")
    ReactPixel.pageView()
  }, [location])

  return (
    <ScrollToTop>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
        <Route path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
        <Route path={`${process.env.PUBLIC_URL + "/pricing"}`} component={PricingEarlyAccess} />
        <Route path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
        <Route path={`${process.env.PUBLIC_URL + "/start"}`} component={Start} />
        <Route path={process.env.PUBLIC_URL + "/not-found"} component={NotFound} />
        <Route path={process.env.PUBLIC_URL + "/terms"} component={TermsOfUse} />
        <Route path={process.env.PUBLIC_URL + "/privacy"} component={PrivacyPolicy} />
        <Route exact path={`${process.env.PUBLIC_URL + "/_home"}`} component={HomeNew} />
        <Route exact path={`${process.env.PUBLIC_URL + "/_about"}`} component={AboutNew} />
        <Route exact path={`${process.env.PUBLIC_URL + "/_pricing"}`} component={PricingNew} />
        <Route exact path={`${process.env.PUBLIC_URL + "/_faq"}`} component={FaqNew} />
        <Route exact path={`${process.env.PUBLIC_URL + "/_contact"}`} component={ContactNew} />
        <Route exact component={NotFound} />
      </Switch>
    </ScrollToTop>
  )
}

export default App
