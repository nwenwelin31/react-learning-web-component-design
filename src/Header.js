import React from 'react'

export default function Header() {
    return (
        <div>

            <nav className="col-md-12 col-ms-12 card shadow border-0 navbar navbar-expand-sm navbar-light fixed-top">
                <div className="container-fluid" style={{ paddingLeft: '9%', paddingRight: '9%' }}>
                    <a className="navbar-brand" href="#"><strong>Launch</strong><small className='text-primary'>.</small></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#home"><small>Home</small></a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <small>Dropdown</small>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#features"><small>Features</small></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#price"><small>Pricing</small></a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#about"><small>About</small></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact"><small>Contact</small></a>
                            </li>
                        </ul>
                    </div>

                    <form className="form-inline my-lg-0">
                        <a className="btn btn-outline-dark my-sm-0 rounded-pill" type="submit"><small>Sign in</small></a>
                        <a className="btn btn-primary mx-2 my-sm-0 rounded-pill" type="submit"><small>Register</small></a>
                    </form>

                </div>

            </nav>

        </div>
    );
}
