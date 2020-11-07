import React, { Component } from 'react'

import Button from "element/Button"
import InputRadio from "element/Form/InputRadio"

import HeaderPage from "parts/HeaderPage"

import Testimonial from "parts/Testimonial"

import JSONDetail from "json/itemDetails.json"

import { Swiper, SwiperSlide } from 'swiper/react';

import StarImg from "assets/images/icons/star.svg"

export default class TestimonialPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            star: 0,
        }
    }

    onChangeStar = (event) => {
        this.setState({
            star: parseInt(event.target.value)
        })
    }

    countStar = [1, 2, 3, 4, 5]

    onWriteClick = (event) => {
        console.log(event)    
    }

    render() {
        return (
            <>
                <HeaderPage {...this.props} title="Review" ></HeaderPage>
                <section className="container-fluid mt-3 mb-4">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <Swiper
                                slidesPerView={3.6}
                                grabCursor={true}
                                pagination={{ el: '.swiper-pagination', clickable: true }}
                            >
                                <SwiperSlide>
                                    <InputRadio changed={this.onChangeStar} outerClassName="testimonial-star mr-3 float-right font-weight-bold" value={0} isSelected={
                                        this.state.star === 0
                                    } innerClass="star-option">
                                        <p className="text-caption-large">All Review</p>
                                    </InputRadio>
                                </SwiperSlide>
                                {
                                    this.countStar.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <InputRadio changed={this.onChangeStar} outerClassName="testimonial-star float-right font-weight-bold" key={index} value={item} isSelected={
                                                    this.state.star === item
                                                } innerClass="star-option">
                                                    <img src={StarImg}  alt={`star-option-${index}`}/>
                                                    <p className="text-caption-large">{item}</p>
                                                </InputRadio>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                        <div className="col-12">
                            {JSONDetail.testimonial.child.map((item, index) => {
                                return (
                                    < Testimonial key={index} data={item} outerClassName="mb-5"></Testimonial>
                                )
                            })
                            }
                        </div>
                        <div className="col-12">
                            <Button type="button" className="btn btn-primary text-white w-100" onClick={this.onWriteClick}>Write Review</Button>
                        </div>
                    </div>
                </section>

            </>
        )
    }
} 
