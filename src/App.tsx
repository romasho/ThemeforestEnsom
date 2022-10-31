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
import { AboutUs } from '@/pages/AboutUs';
import { OurTeam } from '@/pages/OurTeam';
import { TeamMember } from '@/pages/TeamMember';

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
        <Route path={ROUTE_NAMES.ABOUT_US} element={<AboutUs />} />
        <Route path={ROUTE_NAMES.OUR_TEAM} element={<OurTeam />} />
        <Route path={'Our%20Team/:userId'} element={<TeamMember />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
