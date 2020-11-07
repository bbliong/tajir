import React, {Component} from 'react';
import HeaderPage from "../../parts/HeaderPage";

import ListItems from "../../parts/ListItems";

import JSONDetailOrder from "../../json/orderDetail.json"
import FormatDate from "../../utils/FormatDate";
import Button from "../../element/Button";

class OrderDetailHistoryPage extends Component {
    render() {
        return (
            <>
                <HeaderPage {...this.props} title="Detail Pesanan" onBackClicked={this.props.history.goBack}></HeaderPage>
                <section className="container-fluid">
                    <div className={"stepper w-100 h-25 mt-4"}>
                        <ul className="steps">
                            <li className="step step-success">
                                <div className="step-content">
                                    <span className="step-circle">1</span>
                                    <span className="step-text">Konfirmasi</span>
                                </div>
                            </li>
                            <li className="step step-success">
                                <div className="step-content">
                                    <span className="step-circle">2</span>
                                    <span className="step-text">Diproses</span>
                                </div>
                            </li>
                            <li className="step step-success">
                                <div className="step-content">
                                    <span className="step-circle">3</span>
                                    <span className="step-text">Dikirim</span>
                                </div>
                            </li>
                            <li className="step step-success">
                                <div className="step-content">
                                    <span className="step-circle">4</span>
                                    <span className="step-text">Sampai</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={"list-order"}>
                        <ListItems data={JSONDetailOrder.items} title={"Barang"}/>
                    </div>

                    <h4 className={"text-orange font-weight-bold ml-2 mb-3"}>Detail Pengiriman</h4>

                    <div className={"detail-shipment pl-3 pr-3 pt-3 pb-3 border border-gray"}>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-gray-700">Pegiriman</p>
                            <p className="text-large text-gray-500">{FormatDate(JSONDetailOrder.order_at)}</p>
                        </span>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-gray-700">Kurir Pengiriman</p>
                            <p className="text-large text-gray-500">{JSONDetailOrder.courier}</p>
                        </span>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-gray-700">No. Resi</p>
                            <p className="text-large text-gray-500">{JSONDetailOrder.shipment_number}</p>
                        </span>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-gray-700">ALamat</p>
                            <p className="text-large text-gray-500 w-50 text-right">{JSONDetailOrder.address}</p>
                        </span>
                    </div>

                    <h4 className={"text-orange font-weight-bold ml-2 mb-3 mt-3"}>Informasi Pembayaran</h4>

                    <div className={"detail-payment pl-3 pr-3 pt-3 pb-3 "}>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-gray-700">{`Total Barang ( ${JSONDetailOrder.items.length})`}</p>
                            <p className="text-large text-orange ">{JSONDetailOrder.total_price}</p>
                        </span>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-gray-700">Kurir Pengiriman</p>
                            <p className="text-large text-orange ">{JSONDetailOrder.shipment_price}</p>
                        </span>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-gray-700">Metode Pembayaran</p>
                            <p className="text-large text-orange ">{JSONDetailOrder.payment_method}</p>
                        </span>
                        <span className="d-flex justify-content-between">
                            <p className="text-large text-orange font-weight-bold">Total Bayar</p>
                            <p className="text-large text-primary font-weight-bold w-50 text-right">{JSONDetailOrder.total_price}</p>
                        </span>
                    </div>

                    <div className={"col-12"}>
                        <Button type="button"
                                className="btn btn-orange mb-3 p-3 font-weight-bold text-white w-100"> Beli
                            Lagi</Button>
                        <Button type="button"
                                className="btn btn-primary p-3 mb-3 font-weight-bold text-white w-100"> Tanya
                            Saya</Button>
                    </div>
                </section>
            </>
        );
    }
}

export default OrderDetailHistoryPage;