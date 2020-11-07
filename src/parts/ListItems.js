import React from 'react';

import List from "element/List"

const ListItems = (props) => {
    return (
        <>
            <div className="container mt-5  mb-5">
                {
                    props.title && (
                        <h4 className={"text-orange font-weight-bold ml-2 mb-3"}>{props.title}</h4>
                    )
                }

                <div className="row">
                    {
                        props.data.map((item, index) => {
                            return (
                                <div className="col-12 ml-0 mr-0 " key={index}>
                                    <List imgSrc={item.url_image} name={item.name} price={item.price} crossPrice={item.cross_price} discount={item.discount} starRating={item.star} category={item.category} slug={item.slug}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ListItems;
