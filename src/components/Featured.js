import React from 'react'
import featuredImg from '../img/home.png'

function FeaturedProd() {
    return (
        <React.Fragment>
            <div className="featured grid">
                <div className="featured--desc">
                    <div>
                        <h3>Solar Home 400 Sku: pro-0007</h3>
                    </div>
                    <div className="pricetag">
                        <span>$400.00</span>
                    </div>
                    <div>
                        <button>View Details</button>
                    </div>
                </div>
                <div className="featured--img">
                    <img src={featuredImg} alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default FeaturedProd