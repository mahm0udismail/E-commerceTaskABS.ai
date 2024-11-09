import React from 'react';
import CustomNavbar from './CustomNavbar';

const Layout = ({ children }) => {
  return (
    <div>
      <CustomNavbar />
      <div>{children}</div> {/* The dynamic content will be rendered here */}
    </div>
  );
};

export default Layout;
