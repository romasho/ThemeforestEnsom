import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ScrollToTop } from '@/components/ScrollToTop';
import { ROUTE_NAMES } from '@/constants';
import Loader from '@/components/Loader';

const Home = lazy(() => import('@/pages/Home'));
const Solutions = lazy(() => import('@/pages/Solutions'));
const Services = lazy(() => import('@/pages/Services'));
const Contacts = lazy(() => import('@/pages/Contacts'));
const Blog = lazy(() => import('@/pages/Blog'));
const Solution = lazy(() => import('@/pages/Solution'));
const Service = lazy(() => import('@/pages/Service'));
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const OurTeam = lazy(() => import('@/pages/OurTeam'));
const TeamMember = lazy(() => import('@/pages/TeamMember'));
const FAQs = lazy(() => import('@/pages/FAQs'));
const News = lazy(() => import('@/pages/News'));
const NotFound = lazy(() => import('@/pages/404'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTE_NAMES.HOME} element={<Home />} />
          <Route path={ROUTE_NAMES.SOLUTIONS} element={<Solutions />} />
          <Route path={ROUTE_NAMES.SOLUTION} element={<Solution />} />
          <Route path={ROUTE_NAMES.SERVICES} element={<Services />} />
          <Route path={ROUTE_NAMES.SERVICE} element={<Service />} />
          <Route path={ROUTE_NAMES.CONTACTS} element={<Contacts />} />
          <Route path={ROUTE_NAMES.BLOG} element={<Blog />} />
          <Route path={ROUTE_NAMES.ABOUT_US} element={<AboutUs />} />
          <Route path={ROUTE_NAMES.OUR_TEAM} element={<OurTeam />} />
          <Route path={ROUTE_NAMES.TEAM_MEMBER} element={<TeamMember />} />
          <Route path={ROUTE_NAMES.FAQS} element={<FAQs />} />
          <Route path={ROUTE_NAMES.NEWS} element={<News />} />
          <Route path={ROUTE_NAMES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
