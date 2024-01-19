import React from "react";
import MPRLogo from "../assets/mpr.jpg";

const Header = () => {
    return (
        <div>
            <div className=" border-b">
                <div className="px-2 py-5 max-w-[1280px] mx-auto flex justify-between">
                    <div>
                        <img className="w-[94px]" src={MPRLogo} alt="Mprlogo" />
                        <span className="font-bold select-none">Masagana Print Republik</span>
                    </div>
                    <div className="text-2xl flex gap-3">
                        <a href="https://www.facebook.com/MASAGANAPRINTREPUBLIK">
                            <i className="bx bxl-facebook-square text-[#1877f2]"></i>
                        </a>

                        <a href="mailto:MaganaPR@gmail.com">
                            <i class="bx bxl-gmail text-red-600"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse px-3">
                <ul className="flex gap-3 text-xl uppercase">
                    <li>Services</li>
                    <li>Contact</li>
                    <li>About us</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
