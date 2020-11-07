import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


const Category = (props) => {
    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-orange font-weight-bold d-inline-block">{props.title}</h4>
                    </div>
                    <div className="col-md-12 mt-4 pr-0">
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={8}
                            grabCursor={true}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 5,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 8
                                },
                                1024: {
                                    slidesPerView: 10,
                                    spaceBetween: 5
                                }
                            }}>
                            {
                                props.data.map((item, index) => {
                                    return (
                                        item.category_child.map((item, index) => {
                                            return (
                                                <SwiperSlide className="d-flex align-items-start" key={index}>
                                                    <div >
                                                        <img src={item.url_image} alt={`category-${index}`} className="mb-2"/>
                                                        <p className="text-caption-medium text-gray-500">{item.name}</p>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    )
                                })
                            }
                        
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;
