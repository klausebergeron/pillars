import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import AboutUsPage from '../components/AboutUsPage';
import ServicesPage from '../components/ServicesPage';
import ApplyNowPage from '../components/ApplyNowPage';
import PillarsHomePage from '../components/Home/PillarsHomePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DropboxOAuth from '../components/DropboxOAuth';
import ScrollAnimation from 'react-animate-on-scroll';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PillarsHomePage} exact={true}/>
        <Route path="/apply-now" component={ApplyNowPage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/dropbox-oauth" component={DropboxOAuth} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter;

//hash takes you to part of page such as contact us
