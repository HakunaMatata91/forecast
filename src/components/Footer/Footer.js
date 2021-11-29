import React, { Component } from 'react';
import '../Footer/Footer.scss'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="footer_info">
                        <div className="navbar_footer">
                            <a href="/"> Home </a>
                            <a href="/about"> About </a>
                            <a href="/news"> News </a>
                            <a href="#"> Privacy Policy </a>
                        </div>
                        <p className="footer_text">Copyright © 2021. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
