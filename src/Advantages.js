import React from 'react';
import { BsAppIndicator } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";

export default function Advantages() {
    return (
        <div className='container'>
            <div className='text-center m-5'>
                <h2>Advantage of using our products</h2>
                <p className='text-secondary'>Far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='row m-t-4 mb-4'>
                <div className='col-md-6'>
                    <div className='row'>
                    <div className='col-6 col-sm-2'>
                        <button className='btn btn-info text-white'><BsAppIndicator /></button>

                    </div>
                    <div class="col-10 col-sm-10">
                        <h4>Grow Your Business</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        <span className='text-primary'>Learn More</span>
                    </div>
                    </div>
                    
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                    <div className='col-6 col-sm-2'>
                        <button className='btn btn-warning text-white'><BsArrowRepeat /></button>

                    </div>
                    <div class="col-10 col-sm-10">
                        <h4>Build Products</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        <span className='text-primary'>Learn More</span>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className='row m-t-4 mb-4'>
                <div className='col-md-6'>
                    <div className='row'>
                    <div className='col-6 col-sm-2'>
                        <button className='btn btn-danger'><BsBriefcase /></button>

                    </div>
                    <div class="col-10 col-sm-10">
                        <h4>Success Every Day</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        <span className='text-primary'>Learn More</span>
                    </div>
                    </div>
                    
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                    <div className='col-6 col-sm-2'>
                        <button className='btn btn-primary'><BsCollection /></button>

                    </div>
                    <div class="col-10 col-sm-10">
                        <h4>Bring Ideas to Life</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        <span className='text-primary'>Learn More</span>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
