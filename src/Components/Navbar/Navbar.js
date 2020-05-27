import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
import NavImg from './NavImg'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='navbar-heading'>
                    <div className='nav-img'>
                        <NavImg />
                    </div>
                    <div className='navbar-heading-text'>
                        <h1>BoyCoder.Tech</h1>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div class="dropdown-divider"></div>
                <div className='navbar-body'>
                    <ul>
                        <li><a href='#home'><i className="fas fa-home"></i> Home</a></li>
                        <li><a href='#about'><i className="fas fa-user"></i> About</a></li>
                        <li><a href='#skill'><i className="fas fa-code"></i> Skill</a></li>
                        <li><a href='#service'><i className="fas fa-lightbulb"></i> Services</a></li>
                        <li><a href='#work'><i className="fas fa-th-large"></i> Works</a></li>
                        <li><a href='#contact'><i className="fas fa-phone-alt"></i> Contacts</a></li>
                    </ul>
                </div>
                <div className='navbar-footer'>
                    <a href="https://www.instagram.com/boycoder.tech/" target="_blank"><i class="fab fa-instagram fa-1x"></i></a>
                    <a href="https://twitter.com/BoycoderT" target="_blank"><i class="fab fa-twitter fa-1x"></i></a>
                    <a href="https://github.com/MuizOwo" target="_blank"><i class="fab fa-github fa-1x"></i></a>
                </div>
                <div className='navbar-footer-2'>
                    <h3>&copy; Boycoder.Tech 2020</h3>  
                </div>
            </div>
        )
    }
}

export default Navbar
