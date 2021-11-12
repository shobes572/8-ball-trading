import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import init from "../utils/materializeInit";

import Home from './Home';
import LoginSignup from './Login-Signup';
import NoMatch from './NoMatch';

const Main = () => {
    init();
    return (
        <div>
            <div id="index-banner" class="parallax-container">
                <div class="section no-pad-bot">
                    <div class="container">
                        <br /><br />
                        <h1 class="header center teal-text text-lighten-1">Welcome to 8-Ball Trading!</h1>
                        <br /><br />
                        <div class="row center">
                            <a href="/login" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Login / Signup</a>
                        </div>
                        <br /><br />
                    </div>
                </div>
                <div class="parallax"><img src="./images/Stockpic1.jpg" alt="Unsplashed background img 1" class="responsive-img" /></div>
                </div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={LoginSignup} />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
                <div class="parallax-container valign-wrapper">
                <div class="section no-pad-bot">
                    <div class="container">
                        <div class="row center">
                            {/* eslint-disable-next-line */}
                            <h5 class="header col s12 light"></h5>
                        </div>
                    </div>
                </div>
                <div class="parallax"><img src="./images/Stockpic1.jpg" alt="Unsplashed background img 2" class="responsive-img" /></div>
            </div>
        </div>
    );
}

export default Main;
