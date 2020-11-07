import React, { Component } from 'react'

import Header from 'parts/Header'
import GridItems from "parts/GridItems"
import HeaderPage from 'parts/HeaderPage'

import JSONLanding  from 'json/landingPage.json'

export default class FavouritePage extends Component {
    render() {
        return (
            <>  
                 <Header { ...this.props} ></Header>
                 <HeaderPage { ...this.props} title="Produk Favorit" ></HeaderPage>  
                 <GridItems data={JSONLanding.discount}></GridItems>
            </>
        )
    }
}
