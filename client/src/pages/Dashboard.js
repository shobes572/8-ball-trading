import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import init from '../utils/materializeInit';

const Dashboard = () => {
    init();
    return (
        <div class="section">
        <div id="dashboardMain" class="row">
            <div class="col s8 teal darken-4">
    more stuff
            </div>
            <div id="dashboardRSBar" class="col s4 teal lighten-4">
                <ul class="tabs teal lighten-3">
                    <li class="tab col s4"><a href="#SP500" class="active">S&P 500</a></li>
                    <li class="tab col s4"><a href="#AIREC">8-Ball AI</a></li>
                    <li class="tab col s4"><a href="#MYLIST">My List</a></li>
                </ul>
                <div id="SP500" class="col s4 teal lighten-4">
    SP500
                </div>
                <div id="AIREC" class="col s4 teal lighten-4">
    AIREC
                </div>
                <div id="MYLIST" class="col s4 teal lighten-4">
    MYLIST
                </div>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;