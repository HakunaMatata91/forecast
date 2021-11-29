import React, { Component } from 'react';
import '../Header/Header.scss';
import logo from '../Header/logo.png';
import { Link } from 'react-router-dom';


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
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       windowSize: "",
    //       thumbWidth: 1400,
    //       visible: true
    //     };
    //     this.handleResize = this.handleResize.bind(this);
    //   }
    
    //   handleResize = () => {
    //     const windowSize = window.innerWidth;
    //     const thumbWidth = (windowSize >= 414 );
    //     this.setState(prevState => {
    //       return {
    //         windowSize,
    //         thumbWidth,
    //         visible: false
    //       };
    //     });
    //   };
      
    
    //   componentDidMount() {
    //     window.addEventListener("resize", this.handleResize);
    //   }
    
    //   componentWillUnmount() {
    //     window.removeEventListener("resize", this.handleResize);
    //   }

    render() {
        let visible  = this.state.visible;
    
        return (
            // Link is similar to the HREF link, which allows you to redirect to the specific components based on the specified path.
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
                                    <li><Link to="/news">News</Link></li>
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
