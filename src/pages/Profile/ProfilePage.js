import React, {Component} from 'react';

import Button from "element/Button"

import Header from "parts/Header";

import IconUser from "assets/images/icons/User_active.svg";
import IconBag from "assets/images/icons/Bag_active.svg";
import IconMaps from "assets/images/icons/Location_active.svg";
import IconPayment from "assets/images/icons/Credit Card_active.svg";

class ProfilePage extends Component {
    render() {
        return (
            <>
                <Header { ...this.props} ></Header>
                <section className={"profile container-fluid"}>
                    <h3 className="mt-4 ml-4 text-orange font-weight-bold mb-0">Akun</h3>
                    <div className={"list-items d-flex flex-column m-4"}>
                        <Button type={"link"} className={"d-flex mb-4"} href={"/account/detail"}>
                            <img src={IconUser} alt={"user_icon"} className={"mr-4 icon-profile"}/>
                            <h4 className="text-orange font-weight-bold mb-0">Profil</h4>
                        </Button>
                        <Button type={"link"} className={"d-flex mb-4"} href={"/order"}>
                            <img src={IconBag} alt={"bag_icon"} className={"mr-4 icon-profile"}/>
                            <h4 className="text-orange font-weight-bold">Pesanan</h4>
                        </Button>
                        <Button type={"link"} className={"d-flex mb-4"} href={"/account/1/address"}>
                            <img src={IconMaps} alt={"maps_icon"} className={"mr-4 icon-profile"}/>
                            <h4 className="text-orange font-weight-bold">Alamat</h4>
                        </Button>
                        <Button type={"link"} className={"d-flex mb-4"} href={"/account/payment"}>
                            <img src={IconPayment} alt={"payment_icon"} className={"mr-4 icon-profile"}/>
                            <h4 className="text-orange font-weight-bold">Pembayaran</h4>
                        </Button>
                    </div>
                </section>
            </>
        );
    }
}

export default ProfilePage;