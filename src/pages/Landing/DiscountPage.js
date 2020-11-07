import React, { Component } from 'react'

import Header from 'parts/Header'
import SliderHero from 'parts/SliderHero'
import GridItems from "parts/GridItems"

import JSONLanding  from 'json/landingPage.json'

export default class DiscountPage extends Component {
    render() {
        return (
            <>  
                 <Header { ...this.props}></Header>
                 <SliderHero data={JSONLanding.banners} outerClassName="container-fluid h-25"></SliderHero>
                 <GridItems data={JSONLanding.discount}></GridItems>
            </>
        )
    }
}
