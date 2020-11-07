import React, { useState } from 'react';

import Button from 'element/Button'
import FilterIcon from "assets/images/icons/Filter_active.svg"
import ShortIconActive from "assets/images/icons/Short_active.svg"
import SearchIconActive from "assets/images/icons/Search_active.svg"


// Elements
import InputText from "element/Form/InputText"

const HeaderBrowsePage = (props) => {

    const [search, setsearch] = useState("")

    const onChangeSearch = (event) => {
        // Do something with search 
        // Move to detail search 
        setsearch(event.target.value)
    }

    return (
        <>
            <div className="container mt-2 mb-2">
                <nav className=" navbar-expand d-md-none d-lg-none d-xl-none">
                    <div className="row container">
                        <div className="col-8 d-flex align-items-center">
                            <InputText inputClassName="pl-5" id="searchBar" name="search" onChange={onChangeSearch} value={search} icons={SearchIconActive} placeholder="Cari Apa" />
                        </div>
                        <div className="col-4 d-flex align-items-center">
                            <div className="">
                                <Button className="nav-link" type="link" href="/favourite">
                                    <img src={FilterIcon} alt="Favourite"></img>

                                </Button>
                            </div>
                            <div className="">
                                <Button className="nav-link" type="link" href="/favourite">
                                    <img src={ShortIconActive} alt="Order"></img>
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default HeaderBrowsePage;
