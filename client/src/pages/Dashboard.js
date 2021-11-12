import React from "react";
import init from '../utils/materializeInit';
import StockList from '../components/StockList';

const Dashboard = () => {
    init();
    const tabOptions = ["SP500", "8BALL", "MYLIST"]
    return (
        <div class="section">
        <div id="dashboardMain" class="row">
            <div class="col s8 teal darken-4">
    more stuff
            </div>
            <div id="dashboardRSBar" class="col s4 teal lighten-4">
                <ul class="tabs teal lighten-3">
                    {tabOptions.map(option => <li class="tab col s4"><a href={`#${option}`} class="active">{`${option}`}</a></li>)}
                </ul>
                {tabOptions.map(option => <div id={`${option}`} class="col s4 teal lighten-4"><StockList>{`${option}`}</StockList></div>)}
            </div>
        </div>
    </div>
    );
}

export default Dashboard;