import React, { Component } from 'react'
import './Works.css'

export class Works extends Component {
    render() {
        return (
            <div id='work' className='work-wrap'>
                <div className='wrap-work'>
                <h1>Works</h1>
                    <div className='work-1'>
                        <div className='work-1-body-1'>
                            <img src='https://images.unsplash.com/photo-1528254609158-ae7dfaa48ab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                                  heighr='150' width='90%'  />
                        </div>
                        <div className='work-1-body-2'>
                            <img src='https://images.unsplash.com/photo-1533193045359-7855d8ed65f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=765&q=80'
                                  heighr='150' width='90%'  />
                        </div>
                        <div className='work-1-body-3'>
                            <img src='https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
                                  heighr='150' width='90%'  />
                        </div>
                    </div>
                    <div className='work-2'>
                        <div className='work-2-body-1'>
                            <img src='https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                                  heighr='150' width='90%'  />
                        </div>
                        <div className='work-2-body-2'>
                            <img src='https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                                  heighr='150' width='90%'  />
                        </div>
                        <div className='work-2-body-3'>
                            <img src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                                  heighr='150' width='90%'  />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Works
