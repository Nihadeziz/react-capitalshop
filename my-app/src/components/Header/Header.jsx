import React from 'react'
import style from './Header.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
const Header = () => {
    return (
        <>
            <div className={style.containerHeader}>
                <div className={style.headerUst}>
                    <div className={style.navUst}>
                        <nav>
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Privacy</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Careers</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={style.wishlist}>
                        <div className={style.yazi}>
                            <p>My Wishlist</p>
                        </div>
                        <div className={style.yazi}>
                            <p>Track Your Order</p>
                        </div>
                        <div className={style.iconBox}>
                            <FaInstagram />
                            <FaFacebook />
                            <FaLinkedin />
                            <FaYoutube />
                            <FaTwitter />
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.mainHeader}>
                <div className={style.logo}>
                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png" alt="logo" />
                </div>
                <div className={style.navbar}>
                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Men</a></li>
                            <li><a href="">Women</a></li>
                            <span className={style.new}>New</span>
                            <li><a href="">Baby Collection</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={style.iconBox2}>
                    <i><CiSearch /></i>
                    <i><GoPerson /></i>
                    <i><CiShoppingCart /></i>
                </div>
            </div>
            <div className={style.menu}>
                <p>Menu <i><FaBars /></i></p>
            </div>
            <div className={style.headerAlt}>
                <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer</p>
                <a href="">Shop Now</a>
            </div>
        </>
    )
}

export default Header