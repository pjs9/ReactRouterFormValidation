import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className="nav">
            <div className="nav1">
                <h1>PJS</h1>
            </div>
            <div className="space"></div>
            <div className="nav2">
                <ul className="nav-list">
                    <Link to="/signup">
                        <li>Signup</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Nav;