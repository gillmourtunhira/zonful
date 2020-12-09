import React from 'react'

import eep from '../img/partners/eep.jpg'
import kiva from '../img/partners/kiva.png'
import gogla from '../img/partners/gogla.png'
import aecf from '../img/partners/aecf.png'
import ecocash from '../img/partners/ecocash.png'

function Partners(){
    return(
        <React.Fragment>
            <div className="partners">
                <div className="partners--heading">
                    <h3>Our Partners</h3>
                    <div className="partners--wrapper">
                        <div>
                            <img src={eep} alt=""/>
                        </div>
                        <div>
                            <img src={kiva} alt=""/>
                        </div>
                        <div>
                            <img src={gogla} alt=""/>
                        </div>
                        <div>
                            <img src={aecf} alt=""/>
                        </div>
                        <div>
                            <img src={ecocash} alt=""/>
                        </div>
                    </div>
                    <div className="partners--navigation">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Partners