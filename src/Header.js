import React from 'react'

export default function Header() {
    return (
        <div className='container'>
            <div className='col-md-12'>
            <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">Launch<small className=''>.</small></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#home">Home</a>
                            </li>

                            <li className="nav-item dropdown show">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#price">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <form class="form-inline my-lg-0">
                    <button class="btn btn-outline-primary  my-sm-0 rounded-pill" type="submit">Sign in</button>
                    <button class="btn btn-outline-primary mx-2 my-sm-0 rounded-pill" type="submit">Register</button>
                </form>
            </div>
                </nav>
   
            </div>
        </div>
    );
}
