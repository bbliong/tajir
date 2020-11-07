import React from 'react';
import propTypes from "prop-types"
import "./index.scss"

import Button from "element/Button"
import InputNumber from "element/Form/InputNumber"
import FavouriteIconActive from "../../assets/images/icons/love_active.svg";
import TrashIcon from "../../assets/images/icons/Trash.svg";

const List = (props) => {
    return (
        <>
                <div className="col-12 d-flex mb-3 mr-0 ml-0">
                    <img className="w-25 mr-3" alt={`img-profile`} src={props.imgSrc}/>
                    <div className="w-100 d-flex flex-column justify-content-between">
                         <span className="d-flex justify-content-between ">
                             <p className="text-title text-orange mb-0 w-75">{props.name}</p>
                              <span className="d-flex">
                                        <Button className="" type="link" href="/favourite">
                                            <img src={FavouriteIconActive} alt="Favourite"></img>
                                        </Button>
                                        <Button className="" type="link" href="/favourite">
                                            <img src={TrashIcon} alt="Order"></img>
                                        </Button>
                              </span>
                         </span>
                        <span className="d-flex justify-content-between align-items-center">
                            <p className="text text-large font-weight-bold text-primary mb-0">IDR {props.price}</p>
                         <InputNumber
                             max={30}
                             value={0}
                             name="duration"
                         />
                        </span>
                    </div>
                </div>
        </>
    );
}

export default List;


List.defaultProps = {
    imgSrc: "/images/item/default.png",
    name: "Default Item",
    price: 0,
    discount: "25%",
    crossPrice: 0,
    starRating: 5
}

List.propTypes = {
    imgSrc: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    discount: propTypes.string,
    crossPrice: propTypes.number,
    starRating: propTypes.number
}