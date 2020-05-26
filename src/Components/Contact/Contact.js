import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import './Contact.css'

export class Contact extends Component {
    render() {
        return (
            <div className="contact-wrap">
                <div className='contact'>
                    <h1>Get In Touch</h1>
                        <div className='row'>
                            <div className="col-4">
                                <div className='contact-info'>
                                    <div className='Phone'>
                                        <h4><i class="fas fa-phone-alt"></i>Phone</h4>
                                        <p>0183867619</p>
                                    </div>
                                    <div className="EmailAddress">
                                        <h4><i class="far fa-envelope"></i>Email Address</h4>
                                        <p>muizowo@gmail.com</p>
                                    </div>
                                    <div className="Location">
                                        <h4><i class="fas fa-map-marker-alt"></i>Location</h4>
                                        <p>Kuala Lumpur, 56100 Gombak</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-8'>
                                <div className='message-info'>
                                    <div className='message-info-header'>
                                        <Form.Control className='name' type="text" placeholder="Name" />
                                        <Form.Control className='email' type="email" placeholder="Email address" />
                                    </div>
                                    <div className="message-info-body">
                                        <Form.Control className="subject" type="text" placeholder="Subject" />
                                        <Form.Control className="subject" as="textarea" rows="3" placeholder="Message"/>
                                    </div>
                                    <div className='Message-button'>
                                        <h4>Submit Message</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Contact
