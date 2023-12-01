// import React from 'react';
import logo from '../../assets/images/Logo.svg'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header_wrapper container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="https://">Order</a></li>
                        <li><a href="https://">Order Review</a></li>
                        <li><a href="https://">Manage Inventory</a></li>
                        <li><a href="https://">Login</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;