import React from "react";

const Footer = () => {
    const dateYear = new Date().getFullYear();

    return (
        <div className="max-w-[1280px] mx-auto">
            <div className="my-5">
                <h2 className="text-3xl uppercase my-2">Contact</h2>
                <div className="my-2">
                    <p>Telephone no. (044) 8120040</p>
                    <p>Mobile no. 09393629966</p>
                </div>

                <div>
                    <span className="">#344 Purok 5, Masagana, Pandi, Bulacan</span>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d481.9823692967226!2d120.9373682359625!3d14.88916327107395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1705633654553!5m2!1sen!2sph"
                    width="100%"
                    height="450"
                    style={{border: "0"}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="flex justify-center mt-7">
                <div className="text-center">
                    <span>Copyright &copy; {dateYear} Masagana Print Republik. All Rights Reserved</span>
                    <div>
                        <span>
                            Developed by{" "}
                            <a href="https://jeffcodesign.vercel.app/">
                                <span className="text-blue-400">Jefcodesign</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
