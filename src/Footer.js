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
    <div className='news bg-light'>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <p className='fs-5'>About Launch.</p>
            <span className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
            <p className='mt-4 mb-4 fs-5'>Connect</p>
            <button className='btn btn-secondary rounded-circle'><FaInstagram /></button>
            <button className='btn btn-secondary rounded-circle m-1'><CiTwitter /></button>
            <button className='btn btn-secondary rounded-circle'><SlSocialFacebook /></button>
            <button className='btn btn-secondary rounded-circle m-1'><SlSocialLinkedin /></button>
            <button className='btn btn-secondary rounded-circle'> <PiPinterestLogoLight /></button>
            <button className='btn btn-secondary rounded-circle m-1'><FaDribbble /></button>
          </div>
          <div className='col-md-2'>
            <p className='fs-5'>Projects</p>
            <div className='text-secondary mt-4'>
              <p><small>La Lega Stadium</small></p>
              <p><small>France Building</small></p>
              <p><small>22 New Homes</small></p>
              <p><small>Manage Center</small></p>
              <p><small>Sports Hall</small></p>
            </div>
          </div>
          <div className='col-md-2'>
            <p className='fs-5'>Services</p>
            <div className='text-secondary mt-4'>
              <p><small>Architect</small></p>
              <p><small>Interior Design</small></p>
              <p><small>Landscape Design</small></p>
              <p><small>Consultancy</small></p>
            </div>
          </div>
          <div className='col-md-2'>
            <p className='fs-5'>Contact</p>
            <div className='text-secondary mt-4'>
              <p><small>43 Raymouth Rd. Baltemoer, London 3910</small></p>
              <p><small>+1(123)-456-7890</small></p>
              <p><small>+1(123)-456-7890</small></p>
              <p><small>info@mydomain.com</small></p>
            </div>
          </div>
        </div>
        <div className='text-center text-secondary mt-5 mb-4'>
        <p><small>Copyright ©2024 All rights reserved | This template is made with by <span className='text-primary'>Colorlib</span></small></p>
        </div>
        </div>
    </div>
  );
}
