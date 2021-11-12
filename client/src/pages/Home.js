import React from "react";
import init from "../utils/materializeInit";

const Home = () => {
  init();
  return (
    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="large material-icons">attach_money</i></h2>
              <h5 class="center">New to Investing?</h5>
              <p class="light">We provide all users with easy access to look at basic information on well-earning stocks as well as safe, low-volatility stocks. There's also an option for you track and view stocks with higher volatility with our ever-evolving AI.</p>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="large material-icons">bookmark</i></h2>
              <h5 class="center">Think you know better?</h5>
              <p class="light">Are you an investing Wizard who knows better than me and my AI? That's great! In addition to the default tickers we keep track of for you, you can track your own list as well. If you decide to invest through the application, our AI will only get smarter by learning from your positions.</p>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="large material-icons">timeline</i></h2>
              <h5 class="center">Not looking to Invest?</h5>
              <p class="light">Investing through the application is completely optional. If you are looking to maybe get into investing in the Stock Market, or are just curious for more information, we're here to help whatever your level is.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
