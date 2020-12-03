import React from 'react'
import FacebookLogo from './fblogo'
import WhatsappLogo from './whatsapplogo'
import logo from '../img/logo.png'

function TopNav() {
    return (
        <React.Fragment>
            <div className="top__nav">
                <div className="top__nav--strip">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="menu__icon">
                        <i class="material-icons">menu</i>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Products</a></li>
                        <li><a href="#">Order Tracking</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="request__quote">
                    <button>Request a Quote</button>
                </div>
                <div className="tollfree">
                    <h4><i class="material-icons">phone_in_talk</i>(+263) 8677 008 555</h4>
                </div>
                {/* <div>
                    <ul>
                        <li><FacebookLogo /></li>
                        <li><WhatsappLogo /></li>
                        <li>Our Products</li>
                    </ul>
                </div> */}
            </div>
        </React.Fragment>
    );
}

export default TopNav