import React from 'react';
import { FaCheck } from "react-icons/fa6";
import person from './person.png';
import services from './services.webp';
import './features.css';

export default function Services() {
    //Selling Digital Services
    return (
        <div className='feature' id='features'>
            <div className='container'>
            <div className='row d-flex justify-content-between'>
                <div className='col-md-5 col-sm-12'>
                    <span className='text-primary' data-aos="fade-up" data-aos-delay="200"><small>DIGITAL SERVICES</small></span>
                    <h3 className='fs-1' data-aos="fade-up" data-aos-delay="100">Selling Digital <br/>Services</h3>
                    <div className="text-secondary mb-2 mt-2" data-aos="fade-up" data-aos-delay="200">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                        <i className='text-primary'><FaCheck /> </i> There live the blind texts
                        <br /><br />
                        <i className='text-primary'><FaCheck /> </i> Far far away behind the word
                    </div>
                    <div className='mt-4' data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                        <p><i>“Separated they <span className='bg-light'>live in Bookmarksgrove right at the coast of the Semantics,</span> a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</i></p>
                    </div>
                    <div className="row">
                        <div className='col-6 col-sm-2' data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                        <img src={person} alt="Profile picture" className="rounded-circle" width={60} height={60} />
                        </div>
                        <div className="col-8 col-sm-6">
                            <label className="d-block">James Anderson</label>
                            <small className="d-block">Facebook, Product Lead</small>
                        </div>
                    </div>
                </div>
                <div className='shadow border-0 col-md-6 col-sm-12 p-2' data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                    <img src={services} alt='' className='img-fluid'/>
                </div>
            </div>
            </div>
        </div>

    );
}
