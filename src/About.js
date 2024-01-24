import React from 'react'
import about from './about.PNG';
import { FaCheck } from "react-icons/fa6";

export default function About() {
    return (
        <div className='container d-flex pt-5' id='about'>
            <div className='col-md-7 pt-5'>
                <img src={about} alt=''></img>
            </div>
            <div className='col-md-5 pt-5'>
                <span className='text-primary'><small>ABOUT</small></span>
                <h3 className='fs-2'>About Us</h3>
                    <p className='text-secondary'> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                    <p className='text-secondary'>Separated they <span className='bg-light'>live in Bookmarksgrove right at the coast of the Semantics,</span> a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div class="text-secondary">
                    <p><i className='text-primary'><FaCheck /> </i>   There live the blind texts</p>
                    <p><i className='text-primary'><FaCheck /></i>   Far far away behind the word</p>
                    <p><i className='text-primary'><FaCheck /></i>   Far from the countries Vokalia and Consonantia</p>
                </div>
                <div class="row mt-5">
                    <span class="col-md-6">
                        <span class="d-block display-6"><strong>59M</strong></span>
                        <span class="d-block text-secondary"><small>MEMBERS</small></span>
                    </span>
                    <span class="col-md-6">
                        <span class="d-block display-6"><strong>14</strong></span>
                        <span class="d-block text-secondary"><small>TEAM</small></span>
                    </span>
                </div>
            </div>
        </div>
    )
}
