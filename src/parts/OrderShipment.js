import React, {useState} from 'react';

import Button from "element/Button";
import InputRadio from "element/Form/InputRadio";

import IconTrash from "assets/images/icons/Trash.svg";

import propTypes from "prop-types";

function OrderShipment(props) {

    const {data, shipments} = props

    const onChangeAddress = (event) => {

    }

    const selectShipment = (event) => {
        let data = shipments[event.target.value]

        let newEvent = {
            "target": {
                "name": event.target.name,
                "value": {
                    "shipment_id": data["id"],
                    "shipment_price": data["price"],
                    "shipment_assurance": data["assurance"]
                }
            }
        }

        props.onChange(newEvent)
    }

    return (
        <>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    {
                        // eslint-disable-next-line eqeqeq
                        data.address.id != null && data.address.id !== 0 ? (
                            <>
                                <div className={"border-blue col-12"}>
                                    <h3 className={"text-orange font-weight-bold"}>{`${data.address.first_name_receiver} ${data.address.last_name_receiver}`}</h3>
                                    <p className={"text-large text-gray-500"}>{`${data.address.address} - ${data.address.city} - ${data.address.city}`}</p>
                                    <p className={"text-large text-gray-500"}>{data.address.phone_number}</p>
                                    <Button type="link"
                                            className={"btn text-white font-weight-bold p-3 btn-primary mr-4"}
                                            href="/account/1/address/1">Edit</Button>

                                    <Button type={"button"} onClick={onChangeAddress}>
                                        <img src={IconTrash} alt="icon_trash"/>
                                    </Button>
                                </div>

                                <h4 className={"text-orange font-weight-bold ml-2 mb-3 mt-4"}>Pilih Pengiriman </h4>

                                <div className={"detail-shipment col-12 pl-0 pr-0"}>

                                    {
                                        shipments.map((item, index) => {
                                            return (
                                                <InputRadio
                                                    changed={selectShipment}
                                                    isSelected={
                                                        data.shipment.shipment_id == item.id
                                                    }
                                                    value={index}
                                                    key={index}
                                                    name="shipment"
                                                    innerClass="w-100 shipment-selection p-2"
                                                >
                                                <span className="w-100 d-flex justify-content-between">
                                                    <p className="text-large text-gray-500">{item.name}</p>
                                                    <p className="text-large text-orange ml-3"> IDR. {item.price}</p>
                                                </span>
                                                </InputRadio>
                                            )
                                        })
                                    }
                                    <span className="w-100 d-flex justify-content-between">
                                            <p className="text-large text-orange font-weight-bold">Total Biaya</p>
                                            <p className="text-large text-blue ml-3"> IDR. 100000</p>
                                        </span>
                                </div>

                            </>
                        ) : (
                            <>
                               <span className={"text-center w-100"}>
                                    <p className={"text-large text-gray-500"}>Anda Belum Memilih Alamat</p>
                                    <Button href={"account/1/address"} type="link"
                                        className="btn btn-primary p-3 mb-3 font-weight-bold text-white w-50"> Pilih Alamat </Button>
                               </span>

                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default OrderShipment;

OrderShipment.prototype = {
    address: propTypes.object,
    shipments: propTypes.array.isRequired,
};
