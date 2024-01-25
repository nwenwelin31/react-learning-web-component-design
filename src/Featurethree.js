import React from 'react';
import { BsAppIndicator } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";


export default function Featurethree() {
    //product explain
    return (
        <div className='container mt-5 mb-5'>
            <div className='row mt-3 '>
                <div className='col-md-3'>
                    <div className='col-6 col-sm-2 mt-4 mb-4'>
                        <button className='btn btn-info text-white'><BsAppIndicator/></button>
                    </div>
                    <div className="col-10 col-sm-10">
                        <p>Grow Your Business</p>
                        <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='col-6 col-sm-2 mt-4 mb-4'>
                        <button className='btn btn-warning text-white'><BsArrowRepeat/></button>
                    </div>
                    <div className="col-10 col-sm-10">
                        <p>Build Products</p>
                        <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                    
                </div>
                <div className='col-md-3'>
                    <div className='col-6 col-sm-2 mt-4 mb-4'>
                        <button className='btn btn-danger'><BsBriefcase/></button>
                    </div>
                    <div className="col-10 col-sm-10">
                        <p>Success Every Day</p>
                        <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                    
                </div>
                <div className='col-md-3'>
                    <div className='col-6 col-sm-2 mt-4 mb-4'>
                        <button className='btn btn-primary'><BsCollection/></button>
                    </div>
                    <div className="col-10 col-sm-10">
                        <p>Bring Ideas to Life</p>
                        <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
