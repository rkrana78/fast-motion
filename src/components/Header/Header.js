import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark main-menu">
                <h2 className="w-50 px-3 text-light">Fast Motion</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto mr-5">

                        <li className="nav-item">
                            <Link className="nav-link active text-light" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/destination">Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/blog">Blog</Link>
                        </li>

                        <li className="nav-item">
                            <h6 className="nav-link text-light">{loggedInUser.isSignedIn ? loggedInUser.name : <Link className="nav-link text-light btn btn-danger px-2" to="/login">Sign in</Link>}</h6>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;