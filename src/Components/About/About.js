import React, { Component } from 'react'
import AboutImg from './AboutImg'
import './About.css'

export class About extends Component {
    render() {
        return (
            <div className='about-wrap'>
                <h1>About</h1>
                <div className='wrap-about'>
                    <div className='about-img'>
                        <AboutImg />
                    </div>
                    <div className='about'>
                        <div className='about-text'>
                            <h2>Hello,</h2>
                            <p>I am BoyCoder, web developer from KL, Malaysia. I have rich experience in web site design and building and customization.</p>
                        </div>
                        <div className='about-details'>
                            <div className="about-detail-1">
                                <h3>Name: Muiz Owo</h3>
                                <h3>Location: KL, Malaysia</h3>
                            </div>
                            <div className="about-detail-1">
                                <h3>Birthday: 1st July 1999</h3>
                                <h3>Email: muizowo@gmail.com</h3>
                            </div>
                        </div>
                        <div className='about-button'>
                            <h4><i class="fas fa-cloud-download-alt"></i> Download Cv </h4>
                            <h5><i class="far fa-envelope"></i> Hire Me </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
