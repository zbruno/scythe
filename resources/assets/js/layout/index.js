import React from 'react';
import Alerts from './alert';

const Layout = ({ children }) => (
  <section>
    <Alerts />
    {children}
  </section>
);

export default Layout;
