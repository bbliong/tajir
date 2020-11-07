import React, { Component } from 'react'

import Header from 'parts/Header'
import Category from "parts/Category"
import SliderHero from 'parts/SliderHero'
import SliderDiscount from "parts/SliderDiscount"
import HeaderLandingPage from 'parts/HeaderLandingPage'

import JSONLanding  from 'json/landingPage.json'

export default class LandingPage extends Component {
    render() {

        return (
            <>
                <Header { ...this.props} ></Header>
                <HeaderLandingPage { ...this.props} ></HeaderLandingPage>
                <SliderHero data={JSONLanding.banners} outerClassName="container-fluid h-25"></SliderHero>
                <Category title="Kategori" data={JSONLanding.category}></Category>
                <SliderDiscount title="Kejar Diskon" link="discount" data={JSONLanding.discount}></SliderDiscount>
                <SliderHero outerClassName="container-fluid" data={JSONLanding.recommendation}></SliderHero>
                <SliderDiscount className="mb-3" title="Terpopuler"  data={JSONLanding.populer}></SliderDiscount>
            </>
        )
    }
}
