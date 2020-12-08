import React from 'react'
import ReactDOM from 'react-dom'
import {
    Fragment
} from 'react';
import _ from 'lodash'
import './styles.scss'
import TopNav from './components/TopNav'
import SlideContent from './components/TopContent'
import MiddleContent from './components/MiddleContent'
import FeaturedProd from './components/Featured'
import BottomContent from './components/BottomContent'
import NewsTier from './components/BlogTier'
import SolarStrip from './components/BannerTier'
import Testimonies from './components/Testimonies'
import Call from './components/CallTier'
import Partners from './components/PartnersTier'

ReactDOM.render( < TopNav / > , document.querySelector('header'));
ReactDOM.render( < SlideContent / > , document.getElementById("topmain"));
ReactDOM.render( < FeaturedProd / > , document.getElementById("featured"));
ReactDOM.render( < MiddleContent / > , document.getElementById("middletier"));
ReactDOM.render(<BottomContent/>, document.getElementById("bottomtier"));
ReactDOM.render(<NewsTier/>, document.getElementById("newstier"));
ReactDOM.render(<SolarStrip/>, document.getElementById("solarbanner"));
ReactDOM.render(<Testimonies/>, document.getElementById("testimonies"));
ReactDOM.render(<Call/>, document.getElementById("call"));
ReactDOM.render(<Partners/>, document.getElementById("partners"));