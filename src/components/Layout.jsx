import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
const Layout = ({children}) => {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
  
  export default Layout;