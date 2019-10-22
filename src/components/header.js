import React from "react"
import { NavLink, Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import PropTypes from "prop-types"
import { FormattedMessage, FormattedHTMLMessage, useIntl } from "react-intl"
import styled from "styled-components"

import logo from "../assets/logo.svg"
import { routes } from "../routes/index"

const Header = (props) => {
  const { formatMessage: f } = useIntl();
  let { lang, title, description, tags } = props
  return <div>
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `title`,
          content: title,
        }
      ]
        .concat(
          tags.length > 0
            ? {
              name: `keywords`,
              content: typeof tags == "string" || tags instanceof String ? tags : tags.join(`, `),
            }
            : []
        )}
    />
    <WhiteNavbar collapseOnSelect expand="lg">
      <NavLink to={`/${lang}${routes.index.slug}`}>
        <Navbar.Brand>
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt={f({ id: "altLogoText" })}
          />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <StyledNavLink className="nav-link" activeStyle={{ borderTopColor: "#222222", }} to={`/${lang}${routes.index.slug}`}>
            <FormattedMessage id="home" />
          </StyledNavLink>
          <StyledNavLink className="nav-link" activeStyle={{ borderTopColor: "#222222", }} to={`/${lang}${routes.projects.slug}`}>
            <FormattedMessage id="projects" />
          </StyledNavLink>
        </Nav>
      </Navbar.Collapse>
    </WhiteNavbar>
  </div>

}

const WhiteNavbar = styled(Navbar)`
background-color: #fff;
`

const StyledNavLink = styled(NavLink)`
&&& {
    border-top: solid 4px #fff;
    padding-top: 25px;
    padding-left: 0;
    padding-right: 0;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 25px;
    color: #222222;
}
`

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  tags: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
}



export default Header;