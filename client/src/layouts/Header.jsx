import React from "react";
import MPRLogo from "../assets/mpr.jpg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="sticky left-0 right-0 top-0 bg-white z-20 transition duration-150 ease-out">
            <div className=" border-b">
                <div className="px-2 py-5 max-w-[1280px] mx-auto flex justify-between">
                    <Link to={'/'}>
                        <img className="w-[55px]" src={MPRLogo} alt="Mprlogo" />
                        <span className="font-bold select-none">Masagana Print Republik</span>
                    </Link>
                    <div className="text-2xl flex gap-3">
                        <a href="https://www.facebook.com/MASAGANAPRINTREPUBLIK">
                            <i className="bx bxl-facebook-square text-[#1877f2]"></i>
                        </a>

                        <a href="mailto:MaganaPR@gmail.com">
                            <i className="bx bxl-gmail text-red-600"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center font-[400] p-3 tablet:hidden">
                <ul className="flex gap-6 text-lg uppercase">
                    <li><Link to={'/'}>Homepage</Link></li>
                    <li><Link to={'/shop'}>Products</Link></li>
                    <li><a href="#services">Services that we offer</a></li>
                    <li><Link to="/lookbook">Look Book</Link></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>About us</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
