import React from 'react'

function BottomContent(){
    return(
        <React.Fragment>

            <div className="bottom__content">
                <div className="video__content">
                    <div className="video__content--desc">
                        <h3>Zonful Energy is proud to be a Sunking Greenlight funding partner</h3>
                        <p>
                            We made a commitment to donate a portion of our profits to the Sunking Greenlight foundation, our charity of choice, to help support people experiencing breast cancer right across Zimbabwe.
                        </p>
                        <button>Read More</button>
                    </div>
                    <div className="video__content--vid">
                        <iframe width="600" height="340" src="https://www.youtube.com/embed/0WhVoY3uWaY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}


export default BottomContent