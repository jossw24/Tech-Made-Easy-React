import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
const Layout = ({children}) => {
    return (
      <>
        <Navbar />
        <main className="bg-gray-600">{children}</main>
        <Footer />
      </>
    );
  }
  
  export default Layout;