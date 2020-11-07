import React, { Component } from 'react'

import Star from "element/Star"
import Button from "element/Button"

import HeaderPage from 'parts/HeaderPage'
import SliderHero from 'parts/SliderHero'
import SliderDiscount from 'parts/SliderDiscount'
import Testimonial from "parts/Testimonial"

import InputRadio from "element/Form/InputRadio"

import JSONDetail from "json/itemDetails.json"

import ReactHtmlParser from 'react-html-parser';
import { Swiper, SwiperSlide } from 'swiper/react';

export default class DetailPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            size: "",
            color: ""
        }
    }

    sizeChangeHandler = (event) => {
        console.log(this.state)
        this.setState({
            size: event.target.value
        })
    }

    colorChangeHandler = (event) => {
        console.log(this.state)
        this.setState({
            color: parseInt(event.target.value)
        })
    }


    render() {
        return (
            <>
                <HeaderPage {...this.props} title={JSONDetail.name} onBackClicked={this.props.history.goBack}/>
                <SliderHero outerClassName="container" style={{height: 400}} data={JSONDetail.url_images} imageClassName="featured-img"/>
                <section className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-orange font-weight-bold mt-3">{JSONDetail.name}</h2>

                            {
                                JSONDetail.star && (
                                    <Star className="mt-1" value={JSONDetail.star} width={30} height={30} spacing={2} isBig={true} />
                                )
                            }

                            <h3 className="font-weight-bold text-primary mt-1 mb-1">IDR {JSONDetail.price}</h3>
                            {JSONDetail.discount && (
                                <span>
                                    <p className="text-large text-gray-500 d-inline-block mr-2"><s>{JSONDetail.cross_price}</s></p>
                                    <p className="text-large text-red d-inline-block">{JSONDetail.discount}% Off</p>
                                </span>
                            )}

                            <h3 className="text-orange font-weight-bold mt-3">Pilih Ukuran</h3>
                            <div className="container">
                                <div
                                    className="row ml-2">
                                    {
                                        JSONDetail.size.map((item, index) => {
                                            return (
                                                <InputRadio
                                                    changed={this.sizeChangeHandler}
                                                    isSelected={
                                                        this.state.size === item
                                                    }
                                                    value={item}
                                                    key={index}
                                                    name="size"
                                                    innerClass="option-input"
                                                ><h4 className="font-weight-bold text-orange mb-0">{item}</h4></InputRadio>
                                            )
                                        })
                                    }
                                </div>
                                <h3 className="text-orange font-weight-bold mt-3">Pilih Warna</h3>
                                <div
                                    className="row ml-2">
                                    {
                                        JSONDetail.color.map((item, index) => {
                                            return (
                                                <InputRadio
                                                    innerStyle={{ backgroundColor: item.hex }}
                                                    changed={this.colorChangeHandler}
                                                    isSelected={
                                                        this.state.color === item.id
                                                    }
                                                    key={index}
                                                    name="color"
                                                    value={item.id}
                                                    innerClass="color-option"
                                                ></InputRadio>
                                            )
                                        })
                                    }
                                </div>
                                <h3 className="text-orange font-weight-bold mt-3">Spesifikasi</h3><br />
                                <div>
                                    <h4 className="text-caption text-orange">Deskripsi</h4>
                                    {ReactHtmlParser(JSONDetail.description)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mt-3 mb-2">
                    <div className="row">
                        <div className="col-md-12 mb-3 ml-3 mr-3">
                            <h4 className="text-orange font-weight-bold d-inline-block">Review Produk</h4>
                        {
                            JSONDetail.testimonial.summary && (
                                <Button type="link"  href={`/product/${JSONDetail.category}/${JSONDetail.slug}/testimonial`} className="text-primary float-right font-weight-bold">See More</Button>
                            )
                        }
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={8}
                        grabCursor={true}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            }
                        }}
                    >
                        {JSONDetail.testimonial.child.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    < Testimonial data={item}></Testimonial>
                                </SwiperSlide>
                            )
                        })
                        }
                    </Swiper>
                </section>
                <SliderDiscount title="Produk lain yang anda suka"  data={JSONDetail.recommendation}></SliderDiscount>
            </>
        )
    }
}
