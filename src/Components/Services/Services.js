import React, { Component } from 'react'
import './Services.css'

export class Services extends Component {
    render() {
        return (
            <div className='service-wrap'>
                <div className='wrap-service'>
                    <h1>Services</h1>
                    <div className='services'> 
                        <div className="service-1">
                            <div className="service-1-body-1">
                                <i className="fas fa-globe"></i>
                                <h4>Development</h4>
                                <p>Lorem ipsum dolor sit amet consectetuer elit.</p>
                            </div>
                            <div className="service-1-body-2">
                                <i class="fas fa-filter"></i>   
                                <h4>Design</h4>
                                <p>Lorem ipsum dolor sit amet consectetuer elit.</p>
                            </div>
                            <div className="service-1-body-3">
                                <i class="fas fa-map-signs"></i>
                                <h4>Advertising</h4>
                                <p>Lorem ipsum dolor sit amet consectetuer elit.</p>
                            </div>
                        </div>
                        <div className="service-2">
                            <div className="service-2-body-1">
                                <i class="fas fa-rocket"></i>
                                <h4>SEO</h4>
                                <p>Lorem ipsum dolor sit amet consectetuer elit.</p>
                            </div>
                            <div className="service-2-body-2">
                                <i class="far fa-edit"></i>
                                <h4>Copywright</h4>
                                <p>Lorem ipsum dolor sit amet consectetuer elit.</p>
                            </div>
                            <div className="service-2-body-3">
                                <i class="far fa-comments"></i>
                                <h4>Support</h4>
                                <p>Lorem ipsum dolor sit amet consectetuer elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
