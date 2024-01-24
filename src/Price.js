import React from 'react';
import { FaCheck } from "react-icons/fa6";

export default function Price() {
    return (
        <div className='bg-light p-5' id='price'>
            <div className='container col-md-12 p-5'>
                <div className='text-center'>
                <h3 className='fs-2'>Pricing</h3>
                    <p className='text-secondary'>Pricing for everyone. Choose your plan now!</p>
                </div>
                <div className='row m-5'>
                    <div className='col-md-4'>
                        <div class="card border-0 rounded-5">
                            <div class="card-body text-center">
                                <h4 className='m-4'>Free</h4>
                                <h4 className='text-primary display-6'><sup>$</sup>0</h4>
                            </div>
                            <div class="mx-4">
                                <ul className='list-unstyled'>
                                    <li> <i className='text-primary'><FaCheck /></i><span className='text-secondary'>  There live the blind texts</span></li><br/>
                                    <li><i className='text-primary'><FaCheck /> </i><span className='text-secondary'>  Far far away behind the word</span></li><br/>
                                    <li><i className='text-primary'><FaCheck /></i><span className='text-secondary'>  Far from the countries Vokalia and Consonantia</span></li>
                                </ul>  
                            </div>
                            <div class="card-body text-center">
                                <a href="#" class="btn btn-outline-primary rounded-pill"><small>GET STARTED</small></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card shadow border-0 rounded-5">
                            <div class="card-body text-center">
                                <h4 className='m-4'>Standard</h4>
                                <h4 className='text-primary display-6'><sup>$</sup>19.99</h4>
                            </div>
                            <div class="mx-4">
                                <ul className='list-unstyled'>
                                    <li> <i className='text-primary'><FaCheck /></i><span className='text-secondary'>  There live the blind texts</span></li><br/>
                                    <li><i className='text-primary'><FaCheck /> </i><span className='text-secondary'>  Far far away behind the word</span></li><br/>
                                    <li><i className='text-primary'><FaCheck /></i><span className='text-secondary'>  Far from the countries Vokalia and Consonantia</span></li>
                                </ul>  
                            </div>
                            <div class="card-body text-center">
                                <a href="#" class="btn btn-outline-primary rounded-pill"><small>GET STARTED</small></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card shadow border-0 rounded-5">
                            <div class="card-body text-center">
                                <h4 className='m-4'>Premium</h4>
                                <h4 className='text-primary display-6'><sup>$</sup>79.99</h4>
                            </div>
                            <div class="mx-4">
                                <ul className='list-unstyled'>
                                    <li> <i className='text-primary'><FaCheck /></i><span className='text-secondary'>  There live the blind texts</span></li><br/>
                                    <li><i className='text-primary'><FaCheck /> </i><span className='text-secondary'>  Far far away behind the word</span></li><br/>
                                    <li><i className='text-primary'><FaCheck /></i><span className='text-secondary'>  Far from the countries Vokalia and Consonantia</span></li>
                                </ul>  
                            </div>
                            <div class="card-body text-center">
                                <a href="#" class="btn btn-outline-primary rounded-pill"><small>GET STARTED</small></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
