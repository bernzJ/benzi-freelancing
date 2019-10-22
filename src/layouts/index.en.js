import React, { lazy, Suspense } from "react"
import { Link } from "react-router-dom"
import { CardColumns, Container } from "react-bootstrap"

import Layout from "../components/layout"
import { routes } from "../routes/index"
import Card from "../components/card"

const IndexEn = (props) => {
  const blogPosts = routes.projects.blogs;
  return (
    <Layout {...props} title="Benzi's Freelancing - Home" description="som fuck wit" tags="test, sometag">
      <Container fluid={true}>
        <CardColumns>
          {
            blogPosts.sort(post => post.featured === true).sort((a, b) => a.date - b.date).map((post, i) => {
              let current = post.localized.en
              return <Card key={i} extractedKey={i} title={current.title} description={current.description} thumbnail={post.thumbnail} slug={post.slug} featured={post.featured} date={post.date} />
            })
          }
        </CardColumns>
      </Container>
    </Layout>
  )
}

export default IndexEn