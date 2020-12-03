import React from 'react'
import slide from '../img/slidemin.png'

function SlideContent(){
    return (
        <React.Fragment>
            <div className="main__top">
                <div className="main__top--slider">
                    <img src={slide} alt=""/>
                    <div className="main__top--byline">
                        <h3>Zonful Energy, Solar power to the people</h3>
                        <span>If you are interested in going solar, we have every solar solution for you <i className="material-icons">call_made</i></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SlideContent