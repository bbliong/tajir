import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderHero = (props) => {
    return (
        <>
            <div className={props.outerClassName + " "} id="hero">
                <div className="row br-10">
                    <div className="col-md-12">
                        <Swiper
                            autoHeight={true}
                            slidesPerView={1}
                            grabCursor={true}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                        >
                            {props.data.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>

                                        <img className={props.imageClassName + " carousel-img"} src={item.url_image} alt={item.name} key={`image-banner-$(index)`} />

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

export default SliderHero;
