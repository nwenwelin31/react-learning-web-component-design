import React from 'react'
import about from './about.PNG';
import { FaCheck } from "react-icons/fa6";
import CountUp from 'react-countup';

export default function About() {
    return (
        // About Us Section
        <div className='container pt-5' id='about'>
            <div className='row d-flex' data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
            <div className='col-md-7 col-sm-12 pt-5'>
                <img src={about} alt='' className='img-fluid'></img>
            </div>
            <div className='col-md-5 col-sm-10 pt-5'>
                <span className='text-primary' data-aos="fade-up" data-aos-once="true"><small>ABOUT</small></span>
                <h3 className='fs-2' data-aos="fade-up" data-aos-once="true" data-aos-delay="100">About Us</h3>
                    <p className='text-secondary' data-aos="fade-up" data-aos-once="true" data-aos-delay="200"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                    <p className='text-secondary' data-aos="fade-up" data-aos-once="true" data-aos-delay="300">Separated they <span className='bg-light'>live in Bookmarksgrove right at the coast of the Semantics,</span> a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div class="text-secondary">
                    <p><i className='text-primary'><FaCheck /> </i>   There live the blind texts</p>
                    <p><i className='text-primary'><FaCheck /></i>   Far far away behind the word</p>
                    <p><i className='text-primary'><FaCheck /></i>   Far from the countries Vokalia and Consonantia</p>
                </div>
                <div className="row mt-5">
                    <span className="col-md-6">
                        <span className="d-block display-6"><strong><CountUp end={59} duration={5}/>M</strong></span>
                        <span className="d-block text-secondary"><small>MEMBERS</small></span>
                    </span>
                    <span className="col-md-6">
                        <span className="d-block display-6"><strong>14</strong></span>
                        <span className="d-block text-secondary"><small>TEAM</small></span>
                    </span>
                </div>
            </div>
            </div>
        </div>
    )
}
