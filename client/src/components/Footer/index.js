import React from "react";

function Footer() {
    return (
        <footer class="page-footer teal">
        <div class="container">
            <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text">About Me</h5>
                <p class="grey-text text-lighten-4">I'm but a humble student trying to make a name for myself in Software Development.  If you like my work, please reach out and connect with me.  I'm open to all feedback and ideas, and opportunities to find work.  Please enjoy this, my first full MERN stack application</p>
            </div>
            <div class="col l3 s12">
                <h5 class="white-text">Contact Me</h5>
                <ul>
                <li><a class="white-text" href="https://www.linkedin.com/in/shobair-abidi/">LinkedIn</a></li>
                <li><a class="white-text" href="mailto:shobair.abidi@gmail.com">Email</a></li>
                <li><a class="white-text" href="https://github.com/shobes572">Github</a></li>
                </ul>
            </div>
            <div class="col l3 s12">
                <h5 class="white-text">Powered By</h5>
                <ul>
                <li><a class="white-text" href="https://materializecss.com/">MaterializeCSS</a></li>
                <li><a class="white-text" href="https://alpaca.markets/">Alpaca</a></li>
                </ul>
            </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
            Made by Shobair Abidi
            </div>
        </div>
        </footer>
    );
}

export default Footer;
