import React, { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import person from './person.avif';
import './news.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function News() {
    useEffect(()=>{
        Aos.init( {duration:5000, once:'true',})
        
      },[])
    return (
        <div className='news bg-light'>
             <div className='container'>
            <div className='text-center mb-4'>
                <h3 className='fs-2'>Our News</h3>
                <p className='text-secondary'>Far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='row justify-content-between d-flex mt-5'>
                <div className='card border-0 p-4' style={{ width:'32%'}}>
                    <div class="d-flex">
                        <div>
                            <img src={person} alt="Image" className="rounded-circle" width={60} height={60}></img>
                        </div>
                        <div className='mx-4'>
                            <label class="d-block fs-6">Posted by James</label>
                            <span class="d-block text-secondary fs-5">Jun 14, 2020</span>

                        </div>
                    </div>
                    <div className='mt-3 mb-3'>
                        <small className='text-secondary'>Digital Service, 4 min read</small>
                    </div>
                    <div>
                        <p className='text fs-4'>Far far away behind the word mountains far from the countries</p>
                        <a href='' className='text-dark fs-4'><FaArrowRightLong /></a>
                    </div>
                </div>  
                <div className='card border-0 p-4' style={{ width:'32%'}}>
                    <div class="d-flex">
                        <div>
                            <img src={person} alt="Image" className="rounded-circle" width={60} height={60}></img>
                        </div>
                        <div className='mx-4'>
                            <label class="d-block fs-6">Posted by Khan</label>
                            <span class="d-block text-secondary fs-5">Jun 14, 2020</span>

                        </div>
                    </div>
                    <div className='mt-3 mb-3'>
                        <small className='text-secondary'>Digital Service, 4 min read</small>
                    </div>
                    <div>
                        <p className='text fs-4'>Far far away behind the word mountains far from the countries</p>
                        <a href='' className='text-dark fs-4'><FaArrowRightLong /></a>
                    </div>
                </div>
                <div className='card border-0 p-4' style={{ width:'32%'}}>
                    <div class="d-flex">
                        <div>
                            <img src={person} alt="Image" className="rounded-circle" width={60} height={60}></img>
                        </div>
                        <div className='mx-4'>
                            <label class="d-block fs-6">Posted by Rob</label>
                            <span class="d-block text-secondary fs-5">Jun 14, 2020</span>

                        </div>
                    </div>
                    <div className='mt-3 mb-3'>
                        <small className='text-secondary'>Digital Service, 4 min read</small>
                    </div>
                    <div>
                        <p className='text fs-4'>Far far away behind the word mountains far from the countries</p>
                        <a href='' className='text-dark fs-4'><FaArrowRightLong /></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    )
}
