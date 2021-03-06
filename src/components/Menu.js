import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { IconHome, IconAbout, IconContacts } from '../icons/IconsOfMenu'

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    margin-right: 1em;
    white-space: nowrap;
    &:first-of-type {
      position: relative;
      display: flex;
      margin: 0;
      flex-basis: 100%;
      div {
        padding-left: 30px;
      }
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.text};
    &:hover {
      color: white;
    }
  }
  .active {
      color: white;
      div svg {
        fill: white;
      }
    }
`

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map( (link, i) => (
            <li key={link.name}>
              <Link to={link.slug} activeClassName="active" >
                { 
                  link.logo === "Home"  ? <div><IconHome /></div> :
                  link.logo === "About" ? <div><IconAbout /></div> : 
                  link.logo === "Contacts" ? <div><IconContacts /></div> : link.name
                }
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
