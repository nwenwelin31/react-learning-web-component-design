import React from 'react';
import home from './home.PNG';

export default function Home() {
    return (
        <div className='container d-flex mt-5' id="home">
            <div className='col-md-6'>
                <h1 className='display-2 font-weight-bold'><b>Promote Your Products by Colorlib</b></h1>
                <div class="card-body mt-5 mb-5">
                    <p className='text-secondary'>Another cool free html css template by <span className='text-primary'>Colorlib</span> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                </div>

                <div class="card-body">
                    <a href="#features" class="btn btn-outline-primary rounded-pill p-3"><small>SEE FEATURES</small></a>
                    <a href="#price" class="btn btn-outline-primary mx-2 rounded-pill p-3"><small>PRICING</small></a>
                </div>
            </div>

            <div className='col-md-6'>
            <img src={home} alt=''></img>
            </div>
        </div>
    )
}
