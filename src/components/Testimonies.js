import React from 'react'


function Testimonies(){
    return(
        <React.Fragment>
            <div className="testimony">
                <div className="testimony--heading">
                    <h3>Testimonals</h3>
                </div>
                <div className="testimony__block">
                    <div className="testimony__block--item">
                        <div>
                            <p>
                            No problems - we have purchased 3 systems from Zonful Energy - Robert has been great with any problems we encounter - which isn't much - the back up service is great over the phone - I have recommended this company to lots of people - Great work Zonful Energy
                            </p>
                            <div className="testimony__person">
                                <i className="material-icons">person</i>
                                <h4>James Mapepa</h4>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="testimony__block--item">
                    <div>
                            <p>
                            No problems - we have purchased 3 systems from Zonful Energy - Robert has been great with any problems we encounter - which isn't much - the back up service is great over the phone - I have recommended this company to lots of people - Great work Zonful Energy
                            </p>
                            <div className="testimony__person">
                                <i className="material-icons">person</i>
                                <h4>James Mapepa</h4>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="testimony--navigation">
                <div className="left-arrow"><i className="material-icons">arrow_back_ios</i></div>
                <div className="right-arrow"><i className="material-icons">arrow_forward_ios</i></div>
            </div>
        </React.Fragment>
    )
}

export default Testimonies