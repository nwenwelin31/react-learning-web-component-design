import React from 'react';
import { BsAppIndicator } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";


export default function Featurethree() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row mt-3 '>
                <div className='col-md-3'>
                    <div className='col-6 col-sm-2 mt-4 mb-4'>
                        <button className='btn btn-info text-white'><BsAppIndicator /></button>
                    </div>
                    <div class="col-10 col-sm-10">
                        <h4>Grow Your Business</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='col-6 col-sm-2 mt-4 mb-4'>
                        <button className='btn btn-warning text-white'><BsArrowRepeat /></button>
                    </div>
                    <div class="col-10 col-sm-10">
                        <h4>Build Products</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                    
                </div>
                <div className='col-md-3'>
                    <div className='col-6 col-sm-2 mt-4 mb-4'>
                        <button className='btn btn-danger'><BsBriefcase /></button>
                    </div>
                    <div class="col-10 col-sm-10">
                        <h4>Success Every Day</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                    
                </div>
                <div className='col-md-3'>
                    <div className='col-6 col-sm-2 mt-4 mb-4'>
                        <button className='btn btn-primary'><BsCollection /></button>
                    </div>
                    <div class="col-10 col-sm-10">
                        <h4>Bring Ideas to Life</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
