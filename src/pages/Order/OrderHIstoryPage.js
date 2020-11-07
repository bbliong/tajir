import React, { Component } from 'react'

import Button from "element/Button"

import JSONOrder from 'json/orderPage.json'

import FormatDate from "utils/FormatDate"
import Header from "../../parts/Header";

export default class DiscountPage extends Component {
    render() {
        return (
            <>
                <Header { ...this.props} ></Header>
                <section className="container-fluid">
                    <h2 className="mt-4 ml-3 text-orange font-weight-bold mb-0">Order</h2>

                    <div className="row mt-5 ml-1 mr-1">
                        {
                            JSONOrder.orders.map((item, index) => {
                                return (
                                    <Button className={"w-100"} type={"link"} key={index} href={`/order/${item.ref_code}`}>
                                        <div className="col-12 mb-4">
                                            <h2 className="text-indigo font-weight-bold mb-4"> {item.ref_code}</h2>
                                            <p className="text-medium text-gray-500"> {`Order At :  ${FormatDate(item.order_at)}`}</p>
                                            <span className="d-flex justify-content-between">
                                            <p className="text-gray-500">Order Status</p>
                                            <p className="text-orange">{item.order_status}</p>
                                        </span>
                                            <span className="d-flex justify-content-between">
                                            <p className="text-gray-500">Items</p>
                                            <p className="text-indigo">{`${item.items.length} items purchased`}</p>
                                        </span>
                                            <span className="d-flex justify-content-between">
                                            <p className="text-gray-500">Price</p>
                                            <p className="text-primary" >{`Rp. ${item.total_price}`}</p>
                                        </span>
                                        </div>
                                    </Button>
                                )
                            })
                        }
                    </div>
                </section>
            </>
        )
    }
}
