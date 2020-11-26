import React from 'react'
import ReactDOM from 'react-dom'
import { Fragment } from 'react';
import _ from 'lodash'
import './styles.scss'
import TopNav from './components/TopNav'


function App(){
    return <h1>Hello from Zonful Energy!</h1>
}


ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<TopNav/>, document.querySelector('header'));