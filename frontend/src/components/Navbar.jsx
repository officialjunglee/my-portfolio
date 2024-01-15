// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mb-4'>
            <div className='border border-slate-600 rounded-md'>
                Hello User
            </div>

            <div className='flex gap-x-4'>
                <Link to='/blog/create'>
                    <button className='nav-button' onClick={() => setLoading(true)}>
                        Post your thoughts
                    </button>
                </Link>
                <Link to='/'>
                    <button className='nav-button'>What are my thoughts?</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
