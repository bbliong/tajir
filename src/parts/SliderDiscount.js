import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from 'element/Button';
import Card from 'element/Card'

const SliderDiscount = (props) => {

    return (
        <>
            <div className="container-fluid">
                <div className="row" style={{ marginTop: 50 }}>
                    <div className="col-md-12">
                        <h4 className="text-orange font-weight-bold d-inline-block">{props.title}</h4>
                       {
                           props.link && (
                            <Button type="link" href={props.link} className="text-primary float-right font-weight-bold">See More</Button>
                           )
                       }
                    </div>
                    <div className="col-md-12 mt-1 pr-0">
                        <Swiper
                            slidesPerView={2.2}
                            spaceBetween={8}
                            grabCursor={true}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            breakpoints={{ 
                                640  : {
                                    slidesPerView : 2,
                                    spaceBetween : 10
                                },
                                768 : { 
                                    slidesPerView : 4
                                },
                                1024 : {
                                    slidesPerView : 6,
                                    spaceBetween : 5
                                }
                             }}
                        >
                            {
                                props.data.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Card  imgSrc={item.url_image} name={item.name} price={item.price} crossPrice={item.cross_price} discount={item.discount} category={item.category} slug={item.slug}></Card>
                                        </SwiperSlide>
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

export default SliderDiscount;
