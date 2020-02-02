import React from 'react'
import styled from '@emotion/styled'

// import { IconInstagram } from '../icons/IconsOfSocial'


const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  background-color: rgba(100, 100, 100, 0.2);
`

const List = styled.ul`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.text};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a 
          href="https://www.instagram.com/mr_avocado_nvk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/instagram.svg" alt="instagram"></img>
        </a>
      </Item>
      <Item>
        <a
          href="https://github.com/buugaaga"
          target="_blank"
          rel="noopener noreferrer"
        >
          misteravocado.ru
        </a>
        {' '}
        {' '}
        <a
          href="https://github.com/buugaaga"
          target="_blank"
          rel="noopener noreferrer"
        >
          понравилось приложение?
        </a>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
