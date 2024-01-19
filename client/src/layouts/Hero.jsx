import React from "react";

const Hero = () => {
    return (
        <div className="flex justify-center items-center text-center max-h-[600px] h-screen">
            <div>
                <h1 className="p-2 text-4xl font-bold max-w-[900px]">
                    Express Yourself with Custom Creations - Your Imagination, Our Print.
                </h1>
                <button className="px-5 py-2 mt-2 bg-black text-white rounded-sm uppercase">View Recents Projects</button>
            </div>
        </div>
    );
};

export default Hero;
