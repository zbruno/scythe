import React from 'react';
import Alerts from './alert';
import Header from './header';
import Sidebar from './sidebar';

const Layout = ({ children }) => (
  <section>
    <Alerts />
    <Header />
    <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
      <Sidebar />
      {children}
    </div>
  </section>
);

export default Layout;
