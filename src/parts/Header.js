import React from 'react'

import Button from 'element/Button'
import BrandIcon from 'parts/IconText'

// Icons

import HomeIcon from "assets/images/icons/Home.svg"
import SearchIcon from "assets/images/icons/Search.svg"
import OrderIcon from "assets/images/icons/Cart.svg"
import DiscountIcon from "assets/images/icons/Offer.svg"
import AccountIcon from "assets/images/icons/User.svg"

import HomeIconActive from "assets/images/icons/Home_active.svg"
import SearchIconActive from "assets/images/icons/Search_active.svg"
import OrderIconActive from "assets/images/icons/Cart_active.svg"
import AccountIconActive from "assets/images/icons/User_active.svg"
import DiscountIconActive from "assets/images/icons/Offer_active.svg"

import CartIcon from "assets/images/icons/Cart.svg"

export default function Header(props) {

    const getNavLinkClassMobile = path => {
        return props.location.pathname === path ? " active" : "";
    }

    const getIconSrc = (path, icon, iconActive) => {
        var isActive = props.location.pathname === path;

        if (!isActive)
            return icon
        else
            return iconActive
    }

    return (
        <header className="spacing-sm">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light">
                    <BrandIcon/>
                    <span className={"position-absolute"} style={{right: 0}}>
                         <Button className="nav-link" type="link" href="/cart">
                              <img src={CartIcon} alt="cart"/>
                         </Button>
                    </span>
                </nav>
                <nav
                    className="navbar navbar-light  navbar-expand d-md-none d-lg-none d-xl-none mt-2 fixed-bottom bg-white">
                    <ul className="navbar-nav nav-justified w-100">
                        <li className={`nav-item ${getNavLinkClassMobile("/")}`}>
                            <Button className="nav-link" type="link" href="/">
                                <img src={getIconSrc("/", HomeIcon, HomeIconActive)} alt="Home"/>
                                <span className="text-gray-600 font-weight-light text-decoration-none">Home</span>
                            </Button>
                        </li>
                        <li className={`nav-item ${getNavLinkClassMobile("/browse")}`}>
                            <Button className="nav-link" type="link" href="/browse">
                                <img src={getIconSrc("/browse", SearchIcon, SearchIconActive)} alt="Pencarian"/>
                                <span className="text-gray-600 font-weight-light text-decoration-none">Pencarian</span>
                            </Button>
                        </li>
                        <li className={`nav-item ${getNavLinkClassMobile("/order")}`}>
                            <Button className="nav-link" type="link" href="/order">
                                <img src={getIconSrc("/order", OrderIcon, OrderIconActive)} alt="Order"/>
                                <span className="text-gray-600 font-weight-light text-decoration-none">Order</span>
                            </Button>
                        </li>
                        <li className={`nav-item ${getNavLinkClassMobile("/discount")}`}>
                            <Button className="nav-link" type="link" href="/discount">
                                <img src={getIconSrc("/discount", DiscountIcon, DiscountIconActive)} alt="Diskon"/>
                                <span className="text-gray-600 font-weight-light text-decoration-none">Diskon</span>
                            </Button>
                        </li>
                        <li className={`nav-item ${getNavLinkClassMobile("/account")}`}>
                            <Button className="nav-link" type="link" href="/account">
                                <img src={getIconSrc("/account", AccountIcon, AccountIconActive)} alt="Akun"/>
                                <span className="text-gray-600 font-weight-light text-decoration-none">Akun</span>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
