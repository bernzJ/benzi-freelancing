import React, { lazy, Suspense } from "react"
import { Link } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import { connect } from "react-redux"

const Index = (props) => {
  const Layout = lazy(() => import(`../layouts/index.${props.languageReducer.code}.js`))
  return (
    <Suspense fallback={<Spinner animation="grow" />}>
      <Layout {...props} />
    </Suspense>
  )
}

export default connect((state) => ({ ...state }))(Index)