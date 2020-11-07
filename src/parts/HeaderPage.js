import React from 'react';

import Button from 'element/Button'
import BrandIcon from "parts/IconText"
import SearchIconActive from "assets/images/icons/Search_active.svg"

// Elements
import IconBack from "assets/images/icons/Left.svg"

const HeaderChild = (props) => {

    // const [search, setsearch] = useState("")

    // const onChangeSearch = (event) => {
    //     // Do something with search 
    //     // Move to detail search 
    //     setsearch(event.target.value)
    // }

    const onBackClicked = () =>{
        props.onBackClicked()
    }

    return (
        <header className="spacing-sm bg-white sticky-top">
            <div className="container-fluid mb-2">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light">
                    <BrandIcon />
                </nav>
                <nav className=" navbar-expand d-md-none d-lg-none d-xl-none  ">
                    <div className="row container">
                        <div className="col-9 d-flex align-items-center justify-content-start pl-0 pr-0">
                            <Button className="nav-link pl-0 d-flex" type="button"  onClick={onBackClicked}>
                                <img src={IconBack} alt="Back" />
                                <h4 className="d-inline-block text-orange ml-1 font-weight-bold mb-0">{props.title}</h4>
                            </Button>
                        </div>
                        <div className="col-3 d-flex align-items-center  justify-content-end pl-0 pr-0">
                            <Button className="nav-link d-flex align-items-end" type="link" href="/">
                                <img src={SearchIconActive} alt="Search" />
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default HeaderChild;
