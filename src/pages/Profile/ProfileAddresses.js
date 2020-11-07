import React, {Component} from 'react';
import HeaderPage from "../../parts/HeaderPage";
import AddressList from "../../parts/AddressList";

import JSONCheckout from "json/checkoutDefaultList.json"

class ProfileAddresses extends Component {
    render() {
        return (
            <>
                <HeaderPage {...this.props} title={"Addreses"} onBackClicked={this.props.history.goBack}></HeaderPage>
                <AddressList data={JSONCheckout.addresses}></AddressList>
            </>
        );
    }
}

export default ProfileAddresses;