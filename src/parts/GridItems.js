import React from 'react';

import Card from "element/Card"

const GridItems = (props) => {
    return (
        <>
            <div className="container-fluid mt-5  mb-5">
                <div className="row">
                    {
                        props.data.map((item, index) => {
                            return (
                                <div className="col-6 col-sm-4 col-md-2" key={index}>
                                    <Card imgSrc={item.url_image} name={item.name} price={item.price} crossPrice={item.cross_price} discount={item.discount} starRating={item.star} category={item.category} slug={item.slug}></Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default GridItems;
