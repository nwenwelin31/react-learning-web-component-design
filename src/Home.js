import React, { useEffect } from 'react';
import home from './home.PNG';
import Aos from 'aos';

export default function Home() {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='pt-5 mb-5'>
            <div className='container d-flex pt-5' id="home">
                <div className='row'>
                    <div className='col-md-6 col-sm-10 mt-4 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"'>
                        <h1 className='display-2'><b>Promote Your Products by Colorlib</b></h1>
                        <div className="mt-5 mb-2" data-aos="fade-up" data-aos-delay="100">
                            <p className='text-secondary'>Another cool free html css template by <span className='text-primary'>Colorlib</span> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                        </div>

                        <div>
                            <a href="#features" className="btn btn-outline-primary rounded-5"><small>SEE FEATURES</small></a>
                            <a href="#price" className="btn btn-outline-primary mx-2 rounded-5"><small>PRICING</small></a>
                        </div>
                    </div>

                    <div className='col-md-6 col-sm-10' data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                        <img src={home} alt='' className='img-fluid'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
