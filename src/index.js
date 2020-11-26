import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import './styles.scss'


function App(){
    return <h1>Hello from Zonful Energy!</h1>
}

function TopNav(){
    return(
        <div>
            <div class="top__nav"></div>
            <div class="main__menu"></div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<TopNav/>, document.querySelector('header'));