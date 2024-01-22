import React from "react";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Services from "../layouts/Services";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <main className="max-w-[1280px] mx-auto px-3">
                <Header />
                <Outlet/>
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default Home;
