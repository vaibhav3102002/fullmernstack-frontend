import React from 'react'
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className='section home-section'>
            <h1>404</h1>
            <h4>Page does not exist</h4>
            <Link to='/' >
                <button className="btn btn-primary">Back to Home</button>
            </Link>
            
        </section>
    )
}

export default Error
