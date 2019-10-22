import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { IntlProvider } from "react-intl"

import App from "./components/App"
import * as serviceWorker from "./serviceWorker"
import createStore from "./store/index"
import { getLangFromLocation } from "./data/i18n"
import { en } from "./data/en"
import { fr } from "./data/fr"
import "./assets/font.css"

const messages = {
  en,
  fr
}

var lang = getLangFromLocation(window.location.pathname)
const store = createStore({ languageReducer: { code: lang } })
render(
  <Provider store={store}>
    <IntlProvider locale={lang} messages={messages[lang]}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </Provider >
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
