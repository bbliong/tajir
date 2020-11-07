import React from 'react';
import propTypes from "prop-types"
import "./index.scss"

import Star from "element/Star"
import Button from "element/Button"

const Card = (props) => {
    return (
        <>
            <div className="card h-100" style={{  maxWidth: 200 }}>
            <Button type="link" href={`/product/${props.category}/${props.slug}`} ><img className="card-img-top" src={props.imgSrc} alt={props.name} />
                <div className="card-body pb-1 align-left">
                    <h5 className="text-orange font-weight-bold">{props.name}</h5>
                     
                   {
                       props.starRating && (
                        <Star className="mt-1" value={props.starRating} width={16} height={16} spacing={2} />
                       )
                   }
                    <p className="text font-weight-bold text-primary mt-1 mb-1">IDR {props.price}</p>
                    {props.discount && (
                         <span>
                            <p className="text-caption-medium text-gray-500 d-inline-block mr-2"><s>{props.crossPrice}</s></p>
                            <p className="text-caption-large text-red d-inline-block">{props.discount} Off</p>
                        </span>
                    )}
                   
                </div>
                </Button>
            </div>
        </>
    );
}

export default Card;


Card.defaultProps = {
    imgSrc: "/images/item/default.png",
    name: "Default Item",
    price: 0,
    discount: "25%",
    crossPrice: 0,
    starRating: 5
}

Card.propTypes = {
    imgSrc: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    discount: propTypes.string,
    crossPrice: propTypes.number,
    starRating: propTypes.number
}