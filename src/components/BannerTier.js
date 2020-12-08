import React from 'react'
import solarbanner from '../img/solarbanner.png'
import logo from '../img/logo.png'
import installed from '../img/installed.png'
import installations from '../img/installations.png'
import production from '../img/production.png'


function SolarStrip(){
    return(
        <React.Fragment>
            <div className="strip__wrapper">
                <div className="strip__wrapper--logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="strip__wrapper--item">
                    <div>
                        <img src={installed} alt=""/>
                        <h3>708102</h3>
                        <span>Solar Panels Installed</span>
                    </div>
                </div>
                <div className="strip__wrapper--item">
                    <div>
                        <img src={installations} alt=""/>
                        <h3>211.65 MW</h3>
                        <span>Number of Installations</span>
                    </div>
                </div>
                <div className="strip__wrapper--item">
                    <div>
                        <img src={production} alt=""/>
                        <h3>223860 kW / Day</h3>
                        <span>Energy Production</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SolarStrip