import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./assets/scss/style.scss"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

import { config } from "./config"

if (config.alerts) {
  Sentry.init({
    dsn: "https://bad1abe83f324223b71e08f9ff787650@o457843.ingest.sentry.io/5858222",
    release: "pod@" + config.version,
    environment: config.env,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0
  })
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
