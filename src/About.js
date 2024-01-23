import React from 'react'
import about from './about.PNG';
import { FaCheck } from "react-icons/fa6";

export default function About() {
    return (
        <div className='container d-flex' id='about'>
            <div className='card border-0 col-md-7'>
                <img src={about} alt=''></img>
            </div>
            <div className='card border-0 col-md-5'>
                <span className='text-primary'><small>ABOUT</small></span>
                <h4 className='display-6'>About Us</h4>
                
                    <p className='text-secondary'> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                    <p className='text-secondary'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div class="card-body text-secondary">
                    <p><i className='text-primary'><FaCheck /> </i>   There live the blind texts</p>
                    <p><i className='text-primary'><FaCheck /></i>   Far far away behind the word</p>
                    <p><i className='text-primary'><FaCheck /></i>   Far from the countries Vokalia and Consonantia</p>
                </div>
                <div class="card-body row">
                    <span class="col-md-6">
                        <span class="d-block display-5"><strong>59M</strong></span>
                        <span class="d-block">MEMBERS</span>
                    </span>
                    <span class="col-md-6">
                        <span class="d-block display-5"><strong>14</strong></span>
                        <span class="d-block">TEAM</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
