import React, { lazy, Suspense } from "react"
import { Link } from "react-router-dom"
import { CardColumns, Container } from "react-bootstrap"

import Layout from "../components/layout"
import { routes } from "../routes/index"
import Card from "../components/card"

const IndexFr = (props) => {
  const blogPosts = routes.projects.blogs;
  return (
    <Layout {...props} title="Benzi's programmeur - Accueil" description="quelquechose ici" tags="salut, chat">
      <Container fluid={true}>
        <CardColumns>
          {
            blogPosts.sort(post => post.featured === true).sort((a, b) => a.date - b.date).map((post, i) => {
              let current = post.localized.fr
              return <Card key={i} extractedKey={i} title={current.title} description={current.description} thumbnail={post.thumbnail} slug={post.slug} featured={post.featured} date={post.date} />
            })
          }
        </CardColumns>
      </Container>
    </Layout>
  )
}

export default IndexFr