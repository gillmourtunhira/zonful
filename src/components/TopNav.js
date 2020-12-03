import React from 'react'
import FacebookLogo from './fblogo'
import WhatsappLogo from './whatsapplogo'
import logo from '../img/logo.png'

function TopNav() {
    return (
        <React.Fragment>
            <div className="top__nav">
                <div>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div>
                    <ul>
                        <li>info@zonfulenergy.co.zw</li>
                        <li>(+263) 8677 008 555</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><FacebookLogo /></li>
                        <li><WhatsappLogo /></li>
                        <li>Our Products</li>
                    </ul>
                </div>
            </div>
            <div className="main__menu">
                <div className="logo"></div>
                <div className="right__menu"></div>
            </div>
        </React.Fragment>
    );
}

export default TopNav