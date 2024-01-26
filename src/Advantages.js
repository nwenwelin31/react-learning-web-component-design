import React from 'react';
import { BsAppIndicator } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";

export default function Advantages() {
    //Advantages using products
    return (
        <div className='container'>
            <div className='text-center mt-5 pb-4 col-12 col-sm-12'>
                <h3 className='fs-2'>Advantage of using our products</h3>
                <p className='text-secondary'>Far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='row mt-4 mb-4'>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-3 col-sm-2'>
                            <button className='btn btn-info text-white'><BsAppIndicator /></button>
                        </div>
                        <div className="col-8 col-sm-9">
                            <h5>Grow Your Business</h5>
                            <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <small className='text-primary'>Learn More</small>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-3 col-sm-2'>
                            <button className='btn btn-warning text-white'><BsArrowRepeat /></button>
                        </div>
                        <div className="col-8 col-sm-9">
                            <h5>Build Products</h5>
                            <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <small className='text-primary'>Learn More</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row m-t-4 mb-4'>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-3 col-sm-2'>
                            <button className='btn btn-danger'><BsBriefcase /></button>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h5>Success Every Day</h5>
                            <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <small className='text-primary'>Learn More</small>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-3 col-sm-2'>
                            <button className='btn btn-primary'><BsCollection /></button>
                        </div>
                        <div class="col-8 col-sm-9">
                            <h5>Bring Ideas to Life</h5>
                            <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <small className='text-primary'>Learn More</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
