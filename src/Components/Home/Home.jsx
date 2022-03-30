import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className='text-home'>WelCome To Our MeadDB Restuarent 🍽️</h1>
            <p className='lead text-center'>Go🚶🏻 to <Link to={'/foodrecipe'} className='btn btn-outline-info'>Food Recipe</Link> to See Our Popular Recipes around the 🌍 </p>
        </div>
    );
};

export default Home;