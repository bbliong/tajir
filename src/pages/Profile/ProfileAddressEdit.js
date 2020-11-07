import React, {Component} from 'react';
import HeaderPage from "../../parts/HeaderPage";
import InputText from "element/Form/InputText";
import Button from "../../element/Button";

class ProfileAddressEdit extends Component {

    state = {
        data: {
                "country": "Indonesia",
                "first_name_receiver": "Aria",
                "last_name_receiver": "samudera",
                "address": "Perumahan taman melati blok fa 39",
                "another_address": "",
                "city": "depok",
                "province": "jawa barat",
                "postal_code": "16517 ",
                "phone_number": "089634555083"
        }
    }

    onChange = (event) => {
        this.setState({
            data : {
                ...this.state.data,
                [event.target.name] : event.target.value
            }
        })
    }

    render() {
        return (
            <>
                <HeaderPage {...this.props} title={"Alamat Pengiriman"} onBackClicked={this.props.history.goBack}></HeaderPage>

                <section className={"container-fluid"}>
                    <div className={"row ml-2 mr-2 mt-3"}>
                         <div className={"col-12"}>
                             <div className={"form-group"}>
                                 <label className={"text-large text-orange font-weight-bold"}>
                                     Negara Wilayah
                                 </label>
                                 <InputText inputClassName="text-gray-600 font-weight-bold"  name="country" onChange={this.onChange} value={this.state.data.country} placeholder="Negara Wilayah" />

                             </div>
                             <div className={"form-group"}>
                                 <label className={"text-large text-orange font-weight-bold"}>
                                     Nama Depan
                                 </label>
                                 <InputText inputClassName="text-gray-600 font-weight-bold"  name="first_name_receiver" onChange={this.onChange} value={this.state.data.first_name_receiver} placeholder="Nama Depan" />

                             </div>
                             <div className={"form-group"}>
                                 <label className={"text-large text-orange font-weight-bold"}>
                                     Nama Belakang
                                 </label>
                                 <InputText inputClassName="text-gray-600 font-weight-bold"  name="last_name_receiver" onChange={this.onChange} value={this.state.data.last_name_receiver} placeholder="Nama Belakang" />

                             </div>
                             <div className={"form-group"}>
                                 <label className={"text-large text-orange font-weight-bold"}>
                                     Alamat
                                 </label>
                                 <InputText inputClassName="text-gray-600 font-weight-bold"  name="address" onChange={this.onChange} value={this.state.data.address} placeholder="Alamat" />

                             </div>
                             <div className={"form-group"}>
                                 <label className={"text-large text-orange font-weight-bold"}>
                                     Alamat 2
                                 </label>
                                 <InputText inputClassName="text-gray-600 font-weight-bold"  name="another_address" onChange={this.onChange} value={this.state.data.another_address} placeholder="Alamat 2" />

                             </div>
                             <div className={"form-group"}>
                                 <label className={"text-large text-orange font-weight-bold"}>
                                     Kota
                                 </label>
                                 <InputText inputClassName="text-gray-600 font-weight-bold"  name="city" onChange={this.onChange} value={this.state.data.city} placeholder="Kota" />

                             </div>
                             <div className={"form-group"}>
                                 <label className={"text-large text-orange font-weight-bold"}>
                                     Kota
                                 </label>
                                 <InputText inputClassName="text-gray-600 font-weight-bold"  name="province" onChange={this.onChange} value={this.state.data.province} placeholder="Provinsi" />

                             </div>
                             <div className={"form-group"}>
                                 <label className={"text-large text-orange font-weight-bold"}>
                                     Kota
                                 </label>
                                 <InputText inputClassName="text-gray-600 font-weight-bold"  name="postal_code" onChange={this.onChange} value={this.state.data.postal_code} placeholder="Kode Pos" />

                             </div>
                             <div className={"form-group"}>
                                 <label className={"text-large text-orange font-weight-bold"}>
                                     Kota
                                 </label>
                                 <InputText inputClassName="text-gray-600 font-weight-bold"  name="phone_number" onChange={this.onChange} value={this.state.data.phone_number} placeholder="Phone Handphone" />
                             </div>
                             <Button type="but ton" className="btn btn-primary p-3 mb-3 font-weight-bold text-white w-100"> Tambahkan Alamat </Button>
                         </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ProfileAddressEdit;