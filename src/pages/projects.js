import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Layout from "../components/layout"

const Project = (props) => {
  console.log(props);
  return (
    <Layout {...props}>
      <div className="container">
        <h1>Project Page</h1>
        <p>
          tits
            </p>
      </div>
    </Layout>
  )
}

export default connect((state) => ({ ...state }))(Project)