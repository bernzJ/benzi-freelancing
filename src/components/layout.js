import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { getRouteFromPath } from "../routes/index"

const Layout = ({ children, title, description, tags, languageReducer: { code }, match: { path } }) => {
  let route = getRouteFromPath(path)
  return <div>
    <Header route={route} title={title} description={description} tags={tags} lang={code} />
    {children}
  </div>

}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
}


export default Layout