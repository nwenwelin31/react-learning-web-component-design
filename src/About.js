import React from 'react'
import about from './about.PNG';
import { FaCheck } from "react-icons/fa6";

export default function About() {
    return (
        <div className='container d-flex'>
            <div className='card border-0 col-md-7'>
                <img src={about} alt=''></img>
            </div>
            <div className='card border-0 col-md-5'>
                <span className='text-primary'>ABOUT</span>
                <h4 className='display-5'><strong>About Us</strong></h4>
                
                    <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div class="card-body">
                    <FaCheck />   There live the blind texts<br /><br />
                    <FaCheck />   Far far away behind the word<br /><br />
                    <FaCheck />   Far from the countries Vokalia and Consonantia
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
