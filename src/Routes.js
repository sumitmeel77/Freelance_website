import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import About from "./containers/about";
import Services from "./containers/services";
import Image from "./containers/image";
import Process from "./containers/process";
import Videos from "./containers/videos";
import Clients from "./containers/clients";
import Testimonials from "./containers/testimonials";
import Pricing from "./containers/pricing";
import Contact from "./containers/contact";

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/services">
                    <Services />
                </Route>
                <Route exact path="/process">
                    <Process />
                </Route>
                <Route exact path="/image">
                    <Image />
                </Route>
                <Route exact path="/videos">
                    <Videos />
                </Route>
                <Route exact path="/clients">
                    <Clients />
                </Route>
                <Route exact path="/testimonials">
                    <Testimonials />
                </Route>
                <Route exact path="/pricing">
                    <Pricing />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route>
                    <NotFound exact path="/NotFound" />
                </Route>
            </Switch>
        </HashRouter>
    );
}