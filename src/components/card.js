import React from "react"
import styled from "styled-components"
import { Card, CardColumns } from "react-bootstrap"
import PropTypes from "prop-types"

const CardComponent = ({ extractedKey, title, description, thumbnail, slug, featured, date }) => {
  return (
    <Card key={extractedKey}>
      {featured === true ? <Card.Header>Featured</Card.Header> : null}
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{new Date(date).toLocaleDateString()}</Card.Footer>
    </Card>
  )
}

CardComponent.defaultProps = {
  featured: false,
}

CardComponent.propTypes = {
  extractedKey: PropTypes.number.isRequired,
  featured: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
}

export default CardComponent