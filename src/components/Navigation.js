import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import $ from 'jquery';


// const MobileNav = (

// );

class Nav extends React.Component {
    constructor(){
        super();
    }

    // Toggling Mobile Nav bar 
    toggleNav = () => {
       $('.mobileNav').toggleClass('showNav')
    };

    render() {
        return (
            <header>
                {/* Hamburger Menu */}
                <i onClick={this.toggleNav} className="fa fa-bars" aria-hidden="true"></i>
                <nav className="mobileNav" ref="navBar">
                    {/* Close Button */}
                    <i className="fa fa-times" aria-hidden="true" onClick={this.toggleNav} ></i>
                    <ul>
                        <li>
                            <NavLink onClick={this.toggleNav} exact to="/" activeClassName="selectedLink"> Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={this.toggleNav} exact to="/Stories" activeClassName="selectedLink">Stories</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={this.toggleNav} exact to="/About" activeClassName="selectedLink">About</NavLink> 
                        </li>
                        <li>
                            <NavLink onClick={this.toggleNav} exact to="/Blog" activeClassName="selectedLink">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={this.toggleNav} exact to="/Contact" activeClassName="selectedLink">Contact</NavLink>
                        </li>
                    </ul>    
                </nav>    
                <nav className="desktop">
                    {/* Linking to Root */}
                    <Link to="/">
                        <h1 style={{paddingLeft: '10px'}}>UnWanted Truth</h1>
                    </Link>
                    <ul>
                        <li>
                        <NavLink
                            // match url exactly - boolean value
                            exact
                            // Path to link to
                            to="/"
                            // Active class for selected link
                            activeClassName="selectedLink"
                        >
                            Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            exact
                            to="/Stories"
                            activeClassName="selectedLink"
                        >
                            Stories
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            exact
                            to="/Blog"
                            activeClassName="selectedLink"
                        >
                            Blog
                        </NavLink>
                        </li>
                          <li>
                        <NavLink
                            exact
                            to="/About"
                            activeClassName="selectedLink"
                        >
                            About
                        </NavLink> 
                        </li>
                        {/*<li>
                        <NavLink
                            exact
                            to="/Contact"
                            activeClassName="selectedLink"
                        >
                            Contact
                        </NavLink>
                        </li>*/}
                    </ul>    
                </nav>
            </header>
        )
    }
}
 
// Nav Component
// const Nav = () => (
    
// );



export default Nav;