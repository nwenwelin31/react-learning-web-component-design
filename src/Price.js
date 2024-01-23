import React from 'react';
import { FaCheck } from "react-icons/fa6";

export default function Price() {
    return (
        <div className='bg-light p-5' id='price'>
            <div className='container col-md-12 p-5'>
                <div className='text-center'>
                <h4 className='display-6'>Pricing</h4>
                    <p className='text-secondary'>Pricing for everyone. Choose your plan now!</p>
                </div>
                <div className='row m-5'>
                    <div className='col-md-4'>
                        <div class="card shadow border-0 rounded-5">
                            <div class="card-body text-center">
                                <h4 className=''>Free</h4>
                                <h5>$0</h5>
                            </div>
                            <div class="card-body pl-5 pr-5">
                                <i className='text-primary'><FaCheck /></i><span className='text-secondary'>There live the blind texts</span><br /><br />
                                <i className='text-primary'><FaCheck /> </i><span className='text-secondary'>Far far away behind the word</span><br /><br />
                                <i className='text-primary'><FaCheck /></i><span className='text-secondary'>Far from the countries Vokalia and Consonantia</span><br />
                            </div>
                            <div class="card-body text-center m-3">
                                <a href="#" class="btn btn-outline-primary rounded-pill">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card shadow border-0 rounded-5">
                            <div class="card-body text-center">
                                <h3 class="card-title">Standard</h3>
                                <h4 class="card-text">$19.99</h4>
                            </div>
                            <div class="card-body pl-5 pr-5">
                                <FaCheck />   There live the blind texts<br /><br />
                                <FaCheck />   Far far away behind the word<br /><br />
                                <FaCheck />   Far from the countries Vokalia and Consonantia<br />
                            </div>
                            <div class="card-body text-center m-3">
                                <a href="#" class="btn btn-outline-primary rounded-pill">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card shadow border-0 rounded-5">
                            <div class="card-body text-center">
                                <h3 class="card-title">Premium</h3>
                                <h4 class="card-text">$79.99</h4>
                            </div>
                            <div class="card-body pl-5 pr-5">
                                <FaCheck />   There live the blind texts<br /><br />
                                <FaCheck />   Far far away behind the word<br /><br />
                                <FaCheck />   Far from the countries Vokalia and Consonantia<br />
                            </div>
                            <div class="card-body text-center m-3">
                                <a href="#" class="btn btn-outline-primary rounded-pill">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
