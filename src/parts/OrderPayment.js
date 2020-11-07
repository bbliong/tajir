import React from 'react';

import Button from "../element/Button";

import IconCreditCard from "../assets/images/icons/Credit Card_active.svg";
import IconBankActive from "../assets/images/icons/Bank_active.svg";

const OrderPayment = () => {
    return (
        <>
            <div className={"list-items d-flex flex-column m-4 justify-content-center"} style={{height : "50vh"}}>
                <Button type={"link"} className={"d-flex mb-4"} href={"/account/detail"}>
                    <img src={IconCreditCard} alt={"user_icon"} className={"mr-4 icon-profile"}/>
                    <h4 className="text-orange font-weight-bold mb-0">Bayar di tempat</h4>
                </Button>
                <Button type={"link"} className={"d-flex mb-4"} href={"/order"}>
                    <img src={IconBankActive} alt={"bag_icon"} className={"mr-4 icon-profile"}/>
                    <h4 className="text-orange font-weight-bold">Bank Transfer</h4>
                </Button>
            </div>
        </>
    );
};

export default OrderPayment;