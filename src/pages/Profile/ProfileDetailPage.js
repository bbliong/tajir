import React, {Component} from 'react';

import HeaderPage from "parts/HeaderPage";

import JSONProfile from "json/profileDetail.json"

import RawDate from "utils/RawDate";
import Button from "../../element/Button";
import IconGender from "../../assets/images/icons/Gender_active.svg";
import IconDate from "../../assets/images/icons/Date_active.svg";
import IconEmail from "../../assets/images/icons/Message_active.svg";
import IconPhone from "../../assets/images/icons/Gender_active.svg";
import IconPassword from "../../assets/images/icons/Password_active.svg";
import IconRight from "../../assets/images/icons/Right.svg";

class ProfileDetailPage extends Component {
    render() {
        const birth = RawDate(JSONProfile.birth)

        return (
            <>
                <HeaderPage {...this.props} title={"Profile"} onBackClicked={this.props.history.goBack}></HeaderPage>
                <section className={"container-fluid"}>
                   <div className={"row ml-2 mt-4"}>
                        <div className={"col-12 profile-header d-flex align-items-center mb-3"}>
                            <img className="img-profile" alt={`img-profile`} src={JSONProfile.profile_url_image}/>
                            <span>
                                <p className="text-orange text-large font-weight-bold mb-1">{`${JSONProfile.first_name} ${JSONProfile.last_name}`}</p>
                                <p className="text-large text-gray-500  mb-1">{`Member ${RawDate(JSONProfile.created_at).year}`}</p>
                            </span>
                        </div>
                        <div className={"col-12"}>

                        </div>
                    </div>
                    <div className={"row ml-2 mt-4"}>
                        <Button type={"link"} className={"d-flex justify-content-between mb-4 mr-3 w-100 "} href={"/account/detail"}>
                              <span className={"d-flex align-items-center"}>
                                    <img src={IconGender} alt={"user_icon"} className={"mr-2 icon-profile"}/>
                                    <h5 className="text-orange font-weight-bold mb-0">Jenis Kelamin</h5>
                              </span>
                            <span  className={"d-flex align-items-center"}>
                               <p className="text-medium text-gray-500 mb-0">{JSONProfile.gender}</p>
                                <img src={IconRight} alt={"go_to"} className={" icon-profile"}/>
                            </span>
                        </Button>
                        <Button type={"link"} className={"d-flex justify-content-between mb-4 mr-3 w-100 "} href={"/account/detail"}>
                              <span className={"d-flex align-items-center"}>
                                    <img src={IconDate} alt={"user_icon"} className={"mr-2 icon-profile"}/>
                                    <h5 className="text-orange font-weight-bold mb-0">Tanggal lahir</h5>
                              </span>
                            <span  className={"d-flex align-items-center"}>
                               <p className="text-medium text-gray-500 mb-0">{`${birth.day}-${birth.month}-${birth.year}`}</p>
                                <img src={IconRight} alt={"go_to"} className={" icon-profile"}/>
                            </span>
                        </Button>
                        <Button type={"link"} className={"d-flex justify-content-between mb-4 mr-3 w-100 "} href={"/account/detail"}>
                              <span className={"d-flex align-items-center"}>
                                    <img src={IconEmail} alt={"user_icon"} className={"mr-2 icon-profile"}/>
                                    <h5 className="text-orange font-weight-bold mb-0">Email</h5>
                              </span>
                            <span  className={"d-flex align-items-center"}>
                               <p className="text-medium text-gray-500 mb-0">{JSONProfile.email}</p>
                                <img src={IconRight} alt={"go_to"} className={" icon-profile"}/>
                            </span>
                        </Button>
                        <Button type={"link"} className={"d-flex justify-content-between mb-4 mr-3 w-100 "} href={"/account/detail"}>
                              <span className={"d-flex align-items-center"}>
                                    <img src={IconPhone} alt={"user_icon"} className={"mr-2 icon-profile"}/>
                                    <h5 className="text-orange font-weight-bold mb-0">Nomor Telepon</h5>
                              </span>
                            <span  className={"d-flex align-items-center"}>
                               <p className="text-medium text-gray-500 mb-0">{JSONProfile.phone_number}</p>
                                <img src={IconRight} alt={"go_to"} className={" icon-profile"}/>
                            </span>
                        </Button>
                        <Button type={"link"} className={"d-flex justify-content-between mb-4 mr-3 w-100 "} href={"/account/detail"}>
                              <span className={"d-flex align-items-center"}>
                                    <img src={IconPassword} alt={"user_icon"} className={"mr-2 icon-profile"}/>
                                    <h5 className="text-orange font-weight-bold mb-0">Ganti Password</h5>
                              </span>
                            <span  className={"d-flex align-items-center"}>
                               <p className="text-medium text-gray-500 mb-0">*******************</p>
                                <img src={IconRight} alt={"go_to"} className={" icon-profile"}/>
                            </span>
                        </Button>
                    </div>
                </section>
            </>
        );
    }
}

export default ProfileDetailPage;
