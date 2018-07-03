import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import AboutUsPage from '../components/AboutUsPage';
import ServicesPage from '../components/ServicesPage';
import ApplyNowPage from '../components/ApplyNowPage';
import PillarsHomePage from '../components/PillarsHomePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


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
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;

//hash takes you to part of page such as contact us
