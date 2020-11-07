import React, { Component } from 'react'

import Card from "element/Card"

import Button from "element/Button"

import Header from "parts/Header"

import JSONSearch from 'json/itemSearchNull.json'
import HeaderBrowsePage from "parts/HeaderBrowsePage"

import NotFound from "assets/images/icons/Not_found.svg"

export default class Explorer extends Component {

    onClickBack = (event) => {
        console.log(event)
    }

    render() {
        return (
            <>
                <Header {...this.props} ></Header>
                <HeaderBrowsePage {...this.props} ></HeaderBrowsePage>
                {
                    JSONSearch.result.length !== 0 ? (
                        <>
                            <section className="container-fluid">
                                <div className="row">
                                    <div className="col-12  mt-3 mb-3 ">
                                        <span className="text-large text-gray font-weight-bold">{JSONSearch.count} Result</span>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        JSONSearch.result.map((item, index) => {
                                            return (
                                                <div className="col-6 col-sm-4 col-md-2" key={index}>
                                                    <Card imgSrc={item.url_image} name={item.name} price={item.price} crossPrice={item.cross_price} discount={item.discount} starRating={item.star} category={item.category} slug={item.slug}></Card>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </section>
                        </>
                    ) : (
                        <>
                            <div className="col-12 d-flex flex-column justify-content-center align-content-center" style={{ height: "50vh" }}>
                                <img src={NotFound} alt={"not found"}/>
                                <h2 className="text-orange font-weight-bold text-center">Produk Tidak Tersedia</h2>
                                <Button type="button" className="btn btn-primary w-100 text-white font-weight-bold p-2 " onClick={this.onClickBack}>Kembali</Button>
                            </div>
                        </>
                    )
                }
            </>
        )
    }
}
