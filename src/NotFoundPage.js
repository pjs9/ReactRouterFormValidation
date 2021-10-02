import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return(
        <div className="home">
            <div className="home-info">
                <p>404</p>
                <h1>Page Not Found</h1>
                <Link to="/"><button>Back to Home</button></Link>
            </div>
        </div>
    );
}

export default NotFoundPage;