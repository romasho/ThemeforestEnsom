import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Solutions } from '@/pages/Solutions';
import { Services } from '@/pages/Services';
import { Contacts } from '@/pages/Contacts';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Blog } from '@/pages/Blog';
import { ROUTE_NAMES } from '@/constants';
import { Solution } from '@/pages/Solution';
import { Service } from '@/pages/Service';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTE_NAMES.SOLUTIONS} element={<Solutions />} />
        <Route path="solutions/:userId" element={<Solution />} />
        <Route path={ROUTE_NAMES.SERVICES} element={<Services />} />
        <Route path="services/:userId" element={<Service />} />
        <Route path={ROUTE_NAMES.CONTACTS} element={<Contacts />} />
        <Route path={ROUTE_NAMES.BLOG} element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
