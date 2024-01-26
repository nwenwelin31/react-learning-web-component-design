import React, { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import person from './person.png';
import './news.css';

export default function News() {
    return (
        // Our News Section
        <div className='news bg-light pb-5'>
            <div className='container'>
                <div className='text-center mb-4'>
                    <h3 className='fs-2'>Our News</h3>
                    <p className='text-secondary'>Far from the countries Vokalia and Consonantia</p>
                </div>
                <div className='row d-flex mt-5'>
                    <div className='card col-md-4 col-sm-10 border-0 p-3'>
                        <div className="row">
                            <div className='col-3'>
                                <img src={person} alt="Image" className="rounded-circle" width={60} height={60}></img>
                            </div>
                            <div className="col-8">
                                <label className="d-block fs-6">Posted by James</label>
                                <span className="d-block text-secondary fs-5">Jun 14, 2020</span>

                            </div>
                        </div>
                        <div className='mt-2 mb-2'>
                            <small className='text-secondary'>Digital Service, 4 min read</small>
                        </div>
                        <div>
                            <p className='text fs-4'>Far far away behind the word mountains far from the countries</p>
                            <a href='' className='text-dark fs-4'><FaArrowRightLong /></a>
                        </div>
                    </div>
                    <div className='card col-md-4 col-sm-10 border-0 p-3'>
                        <div className="row">
                            <div className='col-3'>
                                <img src={person} alt="Image" className="rounded-circle" width={60} height={60}></img>
                            </div>
                            <div className="col-8">
                                <label className="d-block fs-6">Posted by Khan</label>
                                <span className="d-block text-secondary fs-5">Jun 14, 2020</span>

                            </div>
                        </div>
                        <div className='mt-3 mb-3'>
                            <small className='text-secondary'>Digital Service, 4 min read</small>
                        </div>
                        <div>
                            <p className='text fs-4'>Far far away behind the word mountains far from the countries</p>
                            <a href='' className='text-dark fs-4'><FaArrowRightLong /></a>
                        </div>
                    </div>
                    <div className='card col-md-4 col-sm-10 border-0 p-3'>
                        <div className="row">
                            <div className='col-3'>
                                <img src={person} alt="Image" className="rounded-circle" width={60} height={60}></img>
                            </div>
                            <div className="col-8">
                                <label className="d-block fs-6">Posted by Rob</label>
                                <span className="d-block text-secondary fs-5">Jun 14, 2020</span>
                            </div>
                        </div>
                        <div className='mt-2 mb-2'>
                            <small className='text-secondary'>Digital Service, 4 min read</small>
                        </div>
                        <div>
                            <p className='text fs-4'>Far far away behind the word mountains far from the countries</p>
                            <a href='' className='text-dark fs-4'><FaArrowRightLong /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
