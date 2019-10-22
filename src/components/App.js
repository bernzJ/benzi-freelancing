import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import jquery from "jquery"
import { connect } from "react-redux"

import { defaultLocale } from "../data/i18n"
import { routes } from "../routes/index"
import Index from "../pages/index"
import Projects from "../pages/projects"

/*const checkLocale = (Comp, props) => locales.find(e => e.code === props.match.params.locale) ?
  <Comp {...props}></Comp> :
  <Redirect to={`${props.match.path.replace(":locale", defaultLocale)}`} />*/

class App extends React.Component {
  /*componentDidMount() {
    window.$ = jquery;
  }*/
  render() {
    //console.log(this.props)
    return (
      <Switch>
        <Route path={routes.index.localized} component={Index} />
        <Route path={routes.projects.localized} component={Projects} />

        <Redirect to={`/${defaultLocale}/`} />
      </Switch>
    )
  }
}


export default App