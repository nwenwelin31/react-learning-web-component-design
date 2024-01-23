import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiPinterestLogoLight } from "react-icons/pi";
import { FaDribbble } from "react-icons/fa";
import './footer.css';

export default function Footer() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
            <p>About Launch.</p>
            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
            <p>Connect</p>
            <button className='btn btn-dark btn-circle'><FaInstagram /></button>
            
            <CiTwitter />
            <SlSocialFacebook />
            <SlSocialLinkedin />
            <PiPinterestLogoLight />
            <FaDribbble />


        </div>
        <div className='col-md-6'>

        </div>
      </div>
    </div>
  )
}
