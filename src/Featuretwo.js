import React from 'react';
import services from './services.webp';
import { BsAppIndicator } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";
import './features.css';

export default function Featuretwo() {
  return (
    <div className='features text-bg-light p-5'>
        <div className='container d-flex'>
          <div className='card border-0 shadow col-md-7'>
              <img src={services} alt=''></img>
          </div>
          <div className='col-md-5 mx-5'>
              <div className='row'>
                  <div className='col-6 col-sm-2'>
                      <button className='btn btn-info text-white'><BsAppIndicator /></button>

                  </div>
                  <div class="col-10 col-sm-10">
                      <h4>Grow Your Business</h4>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-6 col-sm-2'>
                      <button className='btn btn-warning text-white'><BsArrowRepeat /></button>

                  </div>
                  <div class="col-10 col-sm-10">
                      <h4>Build Products</h4>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-6 col-sm-2'>
                      <button className='btn btn-danger'><BsBriefcase /></button>

                  </div>
                  <div class="col-10 col-sm-10">
                      <h4>Success Every Day</h4>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-6 col-sm-2'>
                      <button className='btn btn-primary'><BsCollection /></button>

                  </div>
                  <div class="col-10 col-sm-10">
                      <h4>Bring Ideas to Life</h4>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
              </div>
              
          </div>
    </div>
    </div>
    
  )
}
