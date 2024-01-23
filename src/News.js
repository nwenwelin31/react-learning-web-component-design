import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import person from './person.avif';
import './news.css'

export default function News() {
    return (
        <div className='news bg-light'>
             <div className='container'>
            <div className='text-center mb-4'>
                <h4 className='display-5'><strong>Our News</strong></h4>
                <p>Far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div class="row mt-2">
                        <div className='col-6 col-sm-2'>
                            <img src={person} alt="Image" className="rounded-circle img-fluid" width={50} height={20}></img>
                        </div>
                        <div class="col-8 col-sm-8">
                            <label class="d-block">Posted by James</label>
                            <small class="d-block">Jun 14, 2020</small>

                        </div>
                    </div>
                    <div className='card-body'>
                        <span>Digital Service, 4 min read</span>
                    </div>
                    <div className="card-body">
                        <p className=''>Far far away behind the word mountains far from the countries</p>
                    </div>
                    <a href='' className='text-dark'><FaArrowRightLong /></a>
                </div>
                <div className='col-md-4'>
                    <div class="row mt-2">
                        <div className='col-6 col-sm-2'>
                            <img src={person} alt="Image" className="rounded-circle img-fluid" width={50} height={20}></img>
                        </div>
                        <div class="col-8 col-sm-8">
                            <label class="d-block">Posted by Khan</label>
                            <small class="d-block">Jun 14, 2020</small>

                        </div>
                    </div>
                    <div className='card-body'>
                        <span>Digital Service, 4 min read</span>
                    </div>
                    <div className="card-body">
                        <p className=''>Far far away behind the word mountains far from the countries</p>
                    </div>
                    <a href='' className='text-dark'><FaArrowRightLong /></a>
                </div>
                <div className='col-md-4'>
                    <div class="row mt-2">
                        <div className='col-6 col-sm-2'>
                            <img src={person} alt="Image" className="rounded-circle img-fluid" width={50} height={20}></img>
                        </div>
                        <div class="col-8 col-sm-8">
                            <label class="d-block">Posted by Rob</label>
                            <small class="d-block">Jun 14, 2020</small>

                        </div>
                    </div>
                    <div className='card-body'>
                        <span>Digital Service, 4 min read</span>
                    </div>
                    <div className="card-body">
                        <p className=''>Far far away behind the word mountains far from the countries</p>
                    </div>
                    <a href='' className='text-dark'><FaArrowRightLong /></a>
                </div>
            </div>
        </div>
        </div>
       
    )
}
