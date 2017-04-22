import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <ul>
                <section>
                    {/*<li>About</li>*/}
                    <Link to="/Contact"><li>Contact</li></Link>
                </section>
                <li>
                    <span>&copy; Dominic Farquharson 2017</span>
                </li>
            </ul>
        </footer>
    )
};

export default Footer;