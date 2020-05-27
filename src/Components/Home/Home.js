import React, { Component } from 'react'
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <div id='home' className='home-wrap'>
                <div className='home'>
                    <div className='home-header'>
                        <h1>I'm BoyCoder</h1>
                        <p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    </div>
                    <div className='home-body'>
                        <div className='home-body-1'>
                            <h3><i className="fas fa-th-large"></i> View Portfolio</h3>
                        </div>
                        <div className='home-body-2'>
                        <h2><i class="far fa-envelope"></i> Hire Me </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
