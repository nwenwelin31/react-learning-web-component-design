import React from 'react';
import { FaCheck } from "react-icons/fa6";
import person from './person.avif';
import services from './services.webp';
import './features.css';

export default function Services() {
    return (
        <div className='features'>
            <div className='container d-flex'>
                <div className='card border-0 col-md-5 px-5'>
                    <span className='text-primary'><small>DIGITAL SERVICES</small></span>
                    <h4 className='display-6'>Selling Digital <br/>Services</h4>
                    <div class="card-body text-secondary">
                        <p class="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                        <i className='text-primary'><FaCheck /> </i> There live the blind texts
                        <br /><br />
                        <i className='text-primary'><FaCheck /> </i> Far far away behind the word
                    </div>
                    <div class="card-body">
                        <p class="card-text"><i>“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</i></p>
                    </div>
                    <div class="row m-4">
                        <div className='col-6 col-sm-2'>
                            <img src={person} alt="Image" className="rounded-circle" width={60} height={50}></img>
                        </div>
                        <div class="col-8 col-sm-8">
                            <label class="d-block">James Anderson</label>
                            <small class="d-block">Facebook, Product Lead</small>

                        </div>
                    </div>
                </div>
                <div className='card border-0 shadow col-md-7'>
                    <img src={services} alt=''></img>
                </div>

            </div>
        </div>

    );
}
