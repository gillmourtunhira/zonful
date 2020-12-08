import React from 'react'

const reporter_name = 'Kudai Makusha'

function NewsTier(){
    return(
        <React.Fragment>
            <div className="news__content">
                <div>
                    <h2>Our News</h2>
                    <div className="news__content--blogs">
                        <div className="blog">
                            <article>
                                <div>
                                    <h3>Press Realese</h3>
                                    <span>by {reporter_name}</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos totam atque fugit laboriosam saepe soluta distinctio error, perspiciatis mollitia quod autem commodi, illo similique quae. Veritatis iusto deleniti doloribus?</p>
                                <button>Read More</button>
                            </article>
                        </div>
                        <div className="blog">
                        <article>
                                <div>
                                    <h3>AFSIA SOLAR AWARDS 2020</h3>
                                    <span>by {reporter_name}</span>
                                </div>
                                <p>Solar companies and solar individuals have responded with great interest to the inaugural AFSIA Solar Awards competition, the African solar...</p>
                                <button>Read More</button>
                            </article>
                        </div>
                        <div className="blog">
                        <article>
                                <div>
                                    <h3>Zonful Energy lights up clinics in fight against Covid-19</h3>
                                    <span>by {reporter_name}</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos totam atque fugit laboriosam saepe soluta distinctio error, perspiciatis mollitia quod autem commodi, illo similique quae. Veritatis iusto deleniti doloribus?</p>
                                <button>Read More</button>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NewsTier