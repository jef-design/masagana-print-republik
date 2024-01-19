import React from "react";

const Hero = () => {
    return (
        <div className="flex justify-center items-center text-center max-h-[600px] h-screen">
            <div>
                <h1 className="p-2 text-5xl font-bold max-w-[900px]">
                    Express Yourself with Custom Creations - Your Imagination, Our Print.
                </h1>
                <button className="px-5 py-2 mt-2 bg-red-600 text-white rounded-sm uppercase transition duration-150 ease-out hover:ease-in-out hover:bg-black">View Recents Projects</button>
            </div>
        </div>
    );
};

export default Hero;
