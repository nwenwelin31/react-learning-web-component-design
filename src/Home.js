import React from 'react';
import home from './home.PNG';

export default function Home() {
    return (
        <div className='container d-flex' style={{ paddingTop:'10%' }} id="home">
            <div className='row'>
            <div className='col-md-6 col-sm-10 mt-4'>
                <h1 className='display-4'><b>Promote Your Products by Colorlib</b></h1>
                <div class="mt-5 mb-2">
                    <p className='text-secondary'>Another cool free html css template by <span className='text-primary'>Colorlib</span> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                </div>

                <div>
                    <a href="#features" class="btn btn-outline-primary rounded-5"><small>SEE FEATURES</small></a>
                    <a href="#price" class="btn btn-outline-primary mx-2 rounded-5"><small>PRICING</small></a>
                </div>
            </div>

            <div className='col-md-5 col-sm-10'>
                <img src={home} alt='' className='img-fluid'></img>
            </div>
            </div>
        </div>
    )
}
