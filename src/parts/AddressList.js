import React from 'react';
import Button from "../element/Button";
import IconTrash from "../assets/images/icons/Trash.svg";

function AddressList(props) {

    const onChangeAddress = (event) => {
        console.log(event)
    }
    console.log(props)
    return (

        <>
           <section className={"container-fluid"}>
               <div className={"row m-3"}>
                   {
                       props.data.map((item, index) => {
                           return (
                               <div className={"border-gray  col-12"} key={index}>
                                   <h3 className={"text-orange font-weight-bold"}>{`${item.first_name_receiver} ${item.last_name_receiver}`}</h3>
                                   <p className={"text-large text-gray-500"}>{`${item.address} - ${item.city} - ${item.city}`}</p>
                                   <p className={"text-large text-gray-500"}>{item.phone_number}</p>
                                   <Button type="link"
                                           className={"btn text-white font-weight-bold p-3 btn-primary mr-4"}
                                           href="/account/1/address/1">Edit</Button>

                                   <Button type={"button"} onClick={onChangeAddress}>
                                       <img src={IconTrash} alt="icon_trash"/>
                                   </Button>
                               </div>
                           )
                       })
                   }
               </div>
           </section>
        </>
    );
}

export default AddressList;