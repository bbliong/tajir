import React from 'react';

import propTypes from "prop-types";

const OrderSummary = (props) => {

    const {items, delivery, total_price} = props

    return (
        <>
            <h4 className={"text-orange font-weight-bold ml-2 mb-3 mt-3"}>Informasi Pembayaran</h4>

            <div className={"detail-payment pl-3 pr-3 pt-3 pb-3 "}>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-gray-700">{`Total Barang (${items.length})`}</p>
                            <p className="text-large text-orange ">{total_price}</p>
                        </span>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-gray-700">{`Pengiriman ${delivery.courier} `}</p>
                            <p className="text-large text-orange ">{delivery.price}</p>
                        </span>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-gray-700">Asuransi</p>
                            <p className="text-large text-orange ">{delivery.assurance}</p>
                        </span>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-orange font-weight-bold">Total Bayar</p>
                            <p className="text-large text-primary font-weight-bold w-50 text-right">{total_price}</p>
                        </span>
            </div>
        </>
    );
};

export default OrderSummary;

OrderSummary.prototype = {
    items: propTypes.object,
    delivery: propTypes.object,
    total_price: propTypes.number,
};
