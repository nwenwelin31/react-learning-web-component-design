import React from 'react';
import services from './services.webp';
import { BsAppIndicator } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";
import './features.css';

export default function Featuretwo() {
    //explain product with graph
    return (

        <div className='feature bg-light'>
            <div className='container'>
                <div className='row d-flex'>
                    {/* <!-- Carousel --> */}
                    <div id="carousel-example-generic" className="carousel slide col-md-6 order-lg-1 order-2" data-bs-ride="carousel">
                        {/* <!-- Indicators/dots --> */}
                        <ol className="carousel-indicators carousel-indicators-numbers">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active btn btn-primary"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                        {/* <!-- The slideshow/carousel --> */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='col-md-12 col-sm-12'>
                                    <img src={services} alt='' className='img-fluid'/>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='col-md-12 col-sm-12 order-lg-1 order-2'>
                                    <img src={services} alt='' className='img-fluid'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 order-lg-2 order-1'>
                    {/* Grow Your Business */}
                        <div className='ftwo row p-2' data-aos="fade-in-right" data-aos-delay="200" data-aos-duration="800" data-aos-once="true" data-bs-target="#carousel-example-generic" data-bs-slide="prev">
                            <div className='col-4 col-sm-2'>
                                <button className='btn btn-info text-white'><BsAppIndicator /></button>
                            </div>
                            <div className="col-10 col-sm-10">
                                <p>Grow Your Business</p>
                                <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            </div>
                        </div>
                        {/* Build Products */}
                        <div className='ftwo row p-2' data-aos="fade-left" data-aos-delay="200" data-aos-duration="800" data-aos-once="true" data-bs-target="#carousel-example-generic" data-bs-slide="prev">
                            <div className='col-4 col-sm-2'>
                                <button className='btn btn-warning text-white'><BsArrowRepeat /></button>
                            </div>
                            <div className="col-10 col-sm-10">
                                <p>Build Products</p>
                                <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            </div>
                        </div>
                        {/* Success Every Day */}
                        <div className='ftwo row p-2' data-aos="fade-left" data-aos-delay="200" data-aos-duration="800" data-aos-once="true" data-bs-target="#carousel-example-generic" data-bs-slide="next">
                            <div className='col-4 col-sm-2'>
                                <button className='btn btn-danger'><BsBriefcase /></button>
                            </div>
                            <div className="col-10 col-sm-10">
                                <p>Success Every Day</p>
                                <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            </div>
                        </div>
                        {/* Bring Ideas to Life */}
                        <div className='ftwo row p-2' data-aos="fade-left" data-aos-delay="200" data-aos-duration="800" data-aos-once="true" data-bs-target="#carousel-example-generic"data-bs-slide="next">
                            <div className='col-4 col-sm-2'>
                                <button className='btn btn-primary'><BsCollection /></button>
                            </div>
                            <div className="col-10 col-sm-10">
                                <p>Bring Ideas to Life</p>
                                <p className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
