import React, {Component} from 'react';

import Stepper, {
    Numbering,
    Meta,
    MainContent,
    Controller,
} from "element/Stepper";

import HeaderPage from "parts/HeaderPage";
import ListItems from "parts/ListItems";

import OrderShipment from "parts/OrderShipment";
import OrderPayment from "parts/OrderPayment";
import OrderSummary from "parts/OrderSummary";

import JSONCart from "json/orderCart.json";
import JSONCheckout from "json/checkoutDefaultList.json"
import Button from "../../element/Button";


class CartPage extends Component {

    state = {
        data: {
            "address": {
                "id": 1,
                "country": "Indonesia",
                "first_name_receiver": "Aria",
                "last_name_receiver": "samudera",
                "address": "Perumahan taman melati blok fa 39",
                "another_address": "",
                "city": "depok",
                "province": "jawa barat",
                "postal_code": "16517 ",
                "phone_number": "089634555083"
            },
            "shipment": {
                "shipment_id": 1,
                "shipment_price": 0,
                "shipment_assurance": 0
            },
            "payment_method": 1,
            "items": [],
            "current_state": ""
        }
    }

    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }



    render() {
        const {data} = this.state

        const steps = {
            shipment: {
                label: "Pengiriman",
                title: "",
                description: "",
                content: (
                    <>
                        <ListItems data={JSONCart.items}/>
                        <OrderShipment data={data} onChange={this.onChange} addresses={JSONCheckout.addresses}
    shipments={JSONCheckout.shipment}/>
                    </>
                )
            },
            summary: {
                label: "Pembayaran",
                title: "",
                description: "",
                content: (
                    <>
                        <ListItems data={JSONCart.items}/>
                        <OrderSummary delivery={JSONCart.delivery} items={JSONCart.items}
    total_price={JSONCart.total_price}/>
                    </>
                )
            },
            payment: {
                label: "Pembayaran",
                title: "",
                description: "",
                content: (
                    <>
                        <OrderPayment/>
                    </>
                )
            },
        }
        return (
            <>
                <Stepper steps={steps} initialStep="shipment" data={data} history={this.props.history}>
                    {
                        (prevStep, nextStep, CurrentStep, steps) => (

                            <>
                                <HeaderPage {...this.props} title={steps[CurrentStep].label}
    onBackClicked={prevStep}/>

                                <section className={"profile container-fluid"} style={{marginBottom : "100px"}}>

                                    <Meta data={steps} current={CurrentStep}/>

                                    <MainContent data={steps} current={CurrentStep}/>

                                </section>

                                <section className={"container-fluid fixed-bottom"}>
                                    {
                                        CurrentStep === "shipment" && (

                                            <Controller>
                                                <Button type="button"
                                                        onClick={nextStep}
                                                        className="btn btn-primary p-3 mb-3 font-weight-bold text-white w-100"> Lanjut </Button>
                                            </Controller>
                                        )
                                    }

                                    {
                                        CurrentStep === "payment" && (
                                            <Controller>
                                                <Button type="button"
                                                        onClick={nextStep}
                                                        className="btn btn-primary p-3 mb-3 font-weight-bold text-white w-100"> Bayar </Button>
                                            </Controller>
                                        )

                                    }

                                    {
                                        CurrentStep === "summary" && (
                                            <Controller>
                                                <Button type="button"
                                                        onClick={nextStep}
                                                        className="btn btn-primary p-3 mb-3 font-weight-bold text-white w-100"> Bayar </Button>
                                            </Controller>
                                        )

                                    }
                                </section>
                            </>
                        )
                    }
                </Stepper>
            </>
        );
    }
}

export default CartPage;