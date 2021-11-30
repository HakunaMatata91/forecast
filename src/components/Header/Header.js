import React, { Component } from 'react';
import '../Header/Header.scss';
import logo from '../Header/logo.png';
import { Link } from 'react-router-dom';

//hamburger menu for mobile version
class Header extends Component {
     constructor(props) {
       super(props);
       this.state = {
           visible: true
       };
   }
   componentWillMount() {
      
       //if condition -> set state visible false
       const getPageWidth = () => {
           const bodyMax = document.body
               ? Math.max(document.body.scrollWidth, document.body.offsetWidth)
               : 0;
 
           const docElementMax = document.documentElement
               ? Math.max(
                   document.documentElement.scrollWidth,
                   document.documentElement.offsetWidth,
                   document.documentElement.clientWidth
               )
               : 0;
 
           return Math.max(bodyMax, docElementMax);
       };
       let width = getPageWidth();
       this.setState({ visible: width > 414 });
      
 
   }
    render() {
        let visible  = this.state.visible;
    
        return (
            <header>
                <div className="container" >
                    <div className="header_info">
                        <div className="navbar_brand">
                            <a href="/">
                                <img src={logo} className="app_logo" alt="Logo" />
                            </a>
                            <div className="title">Weather Forecast</div>
                        </div>
                        <div className="links" id="links_panel">
                            <div id='slide_nav'>
                                <p id="slide_nav_button" onClick={() => this.setState({ visible: !visible })} >☰</p>
                            </div>
                            <nav className="navbar"  id='slide_menu' style={{ display: (this.state.visible ? 'block' : 'none') }}>
                                <ul >
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#news">News</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default Header;
