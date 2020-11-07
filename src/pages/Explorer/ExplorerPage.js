import React, { Component } from 'react'

import Header from "parts/Header"
import JSONLanding from 'json/landingPage.json'
import HeaderLandingPage from "parts/HeaderLandingPage"

export default class Explorer extends Component {
    render() {
        return (
            <>
                <Header {...this.props} ></Header>
                <HeaderLandingPage {...this.props} ></HeaderLandingPage>
                <section className="container-fluid">
                    {
                        JSONLanding.category.map((item, index) => {
                            return (
                                <div className="row">
                                    <div className="col-12 mt-4 mb-4">
                                        <h4 className="text-orange font-weight-bold d-inline-block">{item.name}</h4>
                                    </div>
                                    {
                                        item.category_child.map((item, index) => {
                                            return (
                                                <div className="col-3 col-sm-2 col-md-2 d-flex flex-column">
                                                    <img src={item.url_image} alt={`category-${index}`} className="mb-2" />
                                                    <p className="text-caption-medium text-gray-500 text-center">{item.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }

                </section>
            </>
        )
    }
}
