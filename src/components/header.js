
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const Sp = styled.p`
  font-size: 20px;
  color: green;
`;

const Header = () => (
  <header>
    <div>
      <h1>
        
      </h1>
      <Sp>hi babay</Sp>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}



export  default Header;
