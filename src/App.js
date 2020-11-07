import React from 'react';
import './assets/scss/style.scss'
import {BrowserRouter as Router, Route} from "react-router-dom";
import { createBrowserHistory } from "history";
import LandingPage from 'pages/Landing/LandingPage';
import Example from 'pages/Example';
import DiscountPage from 'pages/Landing/DiscountPage';
import FavouritePage from 'pages/Landing/FavouritePage';
import DetailPage from 'pages/Product/DetailPage';
import TestimonialPage from 'pages/Product/TestimonialPage';
import Explorer from 'pages/Explorer/ExplorerPage';
import ExplorerDetail from 'pages/Explorer/ExplorerDetailPage';
import Order from 'pages/Order/OrderHIstoryPage';
import OrderDetail from 'pages/Order/OrderDetailHistoryPage';
import ProfilePage from "./pages/Profile/ProfilePage";
import ProfileDetailPage from "./pages/Profile/ProfileDetailPage";
import CartPage from "./pages/Order/CartPage";
import ProfileAddresses from "./pages/Profile/ProfileAddresses";
import ProfileAddressEdit from "./pages/Profile/ProfileAddressEdit";


const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
        <Router history={history} basename={process.env.PUBLIC_URL}>
            <Route exact path={"/"} component={LandingPage}/>

            <Route exact path="/product/:category/:id" component={DetailPage} />
            <Route exact path="/product/:category/:id/testimonial" component={TestimonialPage} />

            <Route exact path={"/browse"} component={Explorer}/>
            <Route exact path={"/browse/detail"} component={ExplorerDetail}/>

            <Route exact path={"/order"} component={Order}/>
            <Route exact path={"/order/:id"} component={OrderDetail}/>
            <Route exact path={"/cart"} component={CartPage}/>

            <Route exact path={"/account"} component={ProfilePage}/>
            <Route exact path={"/account/:id"} component={ProfileDetailPage}/>
            <Route exact path={"/account/:id/address"} component={ProfileAddresses}/>
            <Route exact path={"/account/:id/address/:id"} component={ProfileAddressEdit}/>

            <Route path={"/discount"} component={DiscountPage}/>
            
            <Route path={"/favourite"} component={FavouritePage}/>

            <Route path="/example" component={Example} />
        </Router>
    </div>
  );
}

export default App;
