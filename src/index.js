import React from 'react'
import ReactDOM from 'react-dom'
import { Fragment } from 'react';
import _ from 'lodash'
import './styles.scss'
import TopNav from './components/TopNav'
import TopContent from './components/TopContent'
import MiddleContent from './components/MiddleContent';

ReactDOM.render(<TopNav/>, document.querySelector('header'));
ReactDOM.render(<TopContent/>, document.getElementById("topmain"));
ReactDOM.render(<MiddleContent />, document.getElementById("middletier"));