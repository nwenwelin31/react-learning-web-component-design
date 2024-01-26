import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import person from './person.png';
import './feedback.css';
export default function Feedback() {
  return (
 
      <div className="container" id='feedback'>
        <div className="row">
          <div className='col-md-4'>
            <span className='text-primary'>TESTIMONIALS</span>
            <h4 className='display-6'>Our Customers Feedbck</h4>
            <a href='#' className='btn btn-secondary' data-bs-target="#demo" data-bs-slide="prev"><FaArrowLeft /></a>
            <a href='#' className='btn btn-secondary mx-2' data-bs-target="#demo" data-bs-slide="next"><FaArrowRight /></a>
          </div>
          {/* <!-- Carousel --> */}
          <div id="demo" className="carousel slide col-md-8" data-bs-ride="carousel">
            {/* <!-- Indicators/dots --> */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active bg-primary"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className="bg-primary"></button>
            </div>
            {/* <!-- The slideshow/carousel --> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <p className=""><i>“Separated they <span className='bg-light'>live in Bookmarksgrove right at the coast of the Semantics,</span> a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</i></p>
                    <div className="row">
                      <div className="col-3">
                        <img src={person} alt="Image" className="rounded-circle" width={60} height={60}/>
                      </div>
                      <div className="col-8">
                        <small className="d-block">James Anderson</small>
                        <small className="d-block text-secondary">Facebook, Product Lead</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className=""><i>“Separated they <span className='bg-light'>live in Bookmarksgrove right at the coast of the Semantics,</span> a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</i></p>
                    <div className="row">
                      <div className="col-3">
                        <img src={person} alt="Image" className="rounded-circle" width={60} height={60}/>
                      </div>
                      <div className="col-8">
                        <small className="d-block">James Anderson</small>
                        <small className="d-block text-secondary">Facebook, Product Lead</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <p className=""><i>“Separated they <span className='bg-light'>live in Bookmarksgrove right at the coast of the Semantics,</span> a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</i></p>
                    <div className="row">
                      <div className="col-3">
                        <img src={person} alt="Image" className="rounded-circle" width={60} height={60}/>
                      </div>
                      <div className="col-8">
                        <small className="d-block">James Anderson</small>
                        <small className="d-block text-secondary">Facebook, Product Lead</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className=""><i>“Separated they <span className='bg-light'>live in Bookmarksgrove right at the coast of the Semantics,</span> a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</i></p>
                    <div className="row">
                      <div className="col-3">
                        <img src={person} alt="Image" className="rounded-circle" width={60} height={60}/>
                      </div>
                      <div className="col-8">
                        <small className="d-block">James Anderson</small>
                        <small className="d-block text-secondary">Facebook, Product Lead</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              {/* <!-- Left and right controls/icons --> */}
              <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
 
  )
}


