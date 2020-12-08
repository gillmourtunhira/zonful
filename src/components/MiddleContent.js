import React from 'react'
import zimbabwe from '../img/zimbabwe.png'
import review from '../img/review.png'
import retailer from '../img/retailer.png'
import sunking from '../img/sunking.png'

function MiddleContent(){
    return(
        <React.Fragment>
        <div className="middle__header">
            <h2>Why Most Zimbabweans Prefer Zonful Energy?</h2>
        </div>
        <div className="blobs">
            <div>
                <img src={zimbabwe} alt=""/>
                <article className="blobs--title">
                    <h4>Zimbabwe's Largest</h4>
                    <h6>Solar Company</h6>
                </article>
            </div>
            <div>
            <img src={review} alt=""/>
                <article className="blobs--title">
                    <h4></h4>
                    <h6>Only Solar Provider With <b>200k </b> + Five Star Reviews</h6>
                </article>
            </div>
            <div>
                <img src={retailer} alt=""/>
                <article className="blobs--title">
                    <h4>Most Trusted</h4>
                    <h6>Solar Retailer</h6>
                </article>
            </div>
            <div>
            <img src={sunking} alt=""/>
                <article className="blobs--title">
                    <h4>Sunking</h4>
                    <h6>Greenlight Partner</h6>
                </article>
            </div>
        </div>
        </React.Fragment>
    )
}

export default MiddleContent