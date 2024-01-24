import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import person from './person.avif'; 
import './feedback.css';

export default function Feedback() {
  return (
    <div className='container' id='feedback'>
      <div className='row'>
            <div className='col-md-4'>
                <span className='text-primary'>TESTIMONIALS</span>
                <h4 className='display-6'>Our Customers Feedbck</h4>
                <a href='' className='btn btn-secondary'><FaArrowLeft /></a>
                <a href='' className='btn btn-secondary mx-2'><FaArrowRight /></a>

            </div>
            <div className='col-md-4'>
            <div class="card-body">
                    <p class="card-text"><i>“Separated they <span className='bg-light'>live in Bookmarksgrove right at the coast of the Semantics,</span> a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</i></p>
                </div>
                <div class="row mt-2">
                    <div className='col-6 col-sm-3'>
                    <img src={person} alt="Image" className="rounded-circle" width={60} height={60}></img>
                    </div>  
                    <div class="col-8 col-sm-7">
                        <small class="d-block">James Anderson</small>
                        <small class="d-block text-secondary">Facebook, Product Lead</small>

                    </div>
                </div>
            </div>
            <div className='col-md-4'>
            <div class="card-body">
                    <p class="card-text"><i>“Separated they <span className='bg-light'>live in Bookmarksgrove right at the coast of the Semantics,</span> a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</i></p>
                </div>
                <div class="row mt-2">
                    <div className='col-6 col-sm-3'>
                    <img src={person} alt="Image" className="rounded-circle" width={60} height={60}></img>
                    </div>  
                    <div class="col-8 col-sm-7">
                        <small class="d-block">James Anderson</small>
                        <small class="d-block text-secondary">Facebook, Product Lead</small>

                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}
