import React from 'react';

const Recomendation = () => {
    return (
        <>
             <section className="container-fluid pl-0 pr-0" id="hero">
                <div className="col-md-12 br-10">
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
                        {props.data.banners.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="rounded-lsg">
                                        <img className="" src={item.url_image} alt={item.name} key={`image-banner-$(index)`} />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                        }
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Recomendation;
