import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TiWorld } from "react-icons/ti";

export default function Contact() {
    //Contact Info Section
    return (
        <div className='container pt-5' id='contact'>
            <div className='text-center mb-4 mt-5'>
                <h3 className='fs-1'>Get In Touch</h3>
                <p className='text-secondary'>Far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='row mt-5'>
                <div className='col-md-8'>
                    <form>
                        <div className="row mb-4">
                            <div className="col-md-5 ">
                                <div>
                                    <label className="form-label text-secondary">First name</label>
                                    <input type="text" className="form-control border-top-0 border-start-0 border-end-0" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div>
                                    <label className="form-label text-secondary" for="form6Example2">Last name</label>
                                    <input type="text" id="form6Example2" className="form-control border-top-0 border-start-0 border-end-0" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 col-md-10">
                            <label className="form-label text-secondary" for="form6Example5">Email Address</label>
                            <input type="email" id="form6Example5" className="form-control border-top-0 border-start-0 border-end-0" />
                        </div>

                        <div className="mb-4 col-md-10">
                            <label className="form-label text-secondary" for="form6Example7">Message</label>
                            <textarea className="form-control border-top-0 border-start-0 border-end-0" id="form6Example7" rows="4"></textarea>
                        </div>

                        <a href=""  className="btn btn-primary rounded-5" type="submit"><small>SEND MESSAGE</small></a>
                    </form>
                </div>
                <div className='col-md-4'>
                    <p className='fs-5'>Contact Info</p>
                    <p><IoLocationSharp /> <span>43 Raymouth Rd. Baltemoer, London 3910</span></p>
                    <p><FaPhoneFlip />  <span> +1(123)-456-7890</span></p>
                    <p><FaPhoneFlip />  <span> +1(123)-456-7890</span></p>
                    <p><MdEmail /><span>  info@mydomain.com</span></p>
                    <p><TiWorld /><span>  https://Colorlib.com/</span></p>
                </div>
            </div>
        </div>
    )
}
