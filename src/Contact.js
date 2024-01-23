import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TiWorld } from "react-icons/ti";

export default function Contact() {
    return (
        <div className='container' id='contact'>
            <div className='text-center mb-4 mt-5'>
                <h4 className='display-6'>Get In Touch</h4>
                <p className='text-secondary'>Far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='row mt-5'>
                <div className='col-md-8'>
                    <form>
                        <div class="row mb-4">
                            <div class="col-md-5 ">
                                <div>
                                    <label class="form-label text-secondary">First name</label>
                                    <input type="text" class="form-control border-top-0 border-start-0 border-end-0" />
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div>
                                    <label class="form-label text-secondary" for="form6Example2">Last name</label>
                                    <input type="text" id="form6Example2" class="form-control border-top-0 border-start-0 border-end-0" />
                                </div>
                            </div>
                        </div>

                        <div class="mb-4 col-md-10">
                            <label class="form-label text-secondary" for="form6Example5">Email Address</label>
                            <input type="email" id="form6Example5" class="form-control border-top-0 border-start-0 border-end-0" />
                        </div>

                        <div class="mb-4 col-md-10">
                            <label class="form-label text-secondary" for="form6Example7">Message</label>
                            <textarea class="form-control border-top-0 border-start-0 border-end-0" id="form6Example7" rows="4"></textarea>
                        </div>

                        <button type="button" class="btn btn-primary mb-4 rounded-pill p-3"><small>SEND MESSAGE</small></button>
                    </form>
                </div>
                <div className='col-md-4'>
                    <p>Contact Info</p>
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
