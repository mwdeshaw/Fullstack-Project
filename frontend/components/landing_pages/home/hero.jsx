import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {


    return (
        <div className='big-hero'>
            <div className='hero-img'>
                    <ul className='hero-list'>
                        <li><h1>Your Notes.</h1></li>
                        <li><h1>Organized.</h1></li>
                        <li><h1 className='last-h'>Effortless</h1></li>
                        <li><p>Take notes anywhere. Find information faster. Share ideas with anyone. Meeting notes, web pages, projects, to-do lists—with Notable as your note taking app, nothing falls through the cracks.</p></li>
                        <button className='hero-button'><Link to='/'>TRY IT NOW</Link></button>
                    </ul> 
                <img className='comp' src={window.compURL}/>
            </div>
        </div>
    );
};

export default Hero;