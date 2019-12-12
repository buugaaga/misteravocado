

import React from 'react';
import PropTypes from 'prop-types';


import  Header from './header';
import  Footer  from './footer';
import  SLayout  from './Slayout';

const Layout = ({ children }) => {

  return (
    <SLayout>
      <Header />
      <main>{children}</main>
      <Footer />

    </SLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
