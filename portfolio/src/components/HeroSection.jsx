import React from "react";
import MyImage from "../assets/p.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import HeroText from "./HeroText";


const HeroSection = () => {
    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/eviiileyeee", "_blank");
    };


    return (
        <section
            id="home"
            className="flex flex-col-reverse md:flex-coloumn items-center justify-between px-6 md:px-16 py-12 bg-gray-50 text-gray-800"
        >
            <div className="flex justify-center items-center h-64 w-full">
                <div className="perspective-1000">
                    <div className="cube">
                        {/* Faces of the cube */}
                        <div className="face front bg-blue-500">Javascript</div>
                        <div className="face back bg-blue-600">React</div>
                        <div className="face left bg-blue-700">Node</div>
                        <div className="face right bg-blue-800">MongoDB</div>
                        <div className="face top bg-blue-900">HTML5</div>
                        <div className="face bottom bg-blue-400">CSS3</div>
                    </div>
                </div>
            </div>

            {/* Left Section */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">
                    Hi, I'm <span className="text-pink-500">Harendra...</span>
                </h1>
                <p className="text-lg mb-6">
                    A computer science student <br /> Who loves
                    <span id="element" className="font-semibold"><HeroText /> </span>
                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center md:justify-start gap-6 mt-4">
                    <a
                        href="https://www.facebook.com/jeatu.raja.9?mibextid=ZbWKwL"
                        aria-label="Facebook"
                        className="text-gray-600 hover:text-blue-600 transition"
                    >
                        <FaFacebookF size={24} />
                    </a>
                    <a
                        onClick={handleInstagramClick}
                        aria-label="Instagram"
                        className="text-gray-600 hover:text-pink-500 transition cursor-pointer"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/harendra-pratap-singh-bundela?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        aria-label="LinkedIn"
                        className="text-gray-600 hover:text-blue-700 transition"
                    >
                        <FaLinkedinIn size={24} />
                    </a>
                    <a
                        href="https://github.com"
                        aria-label="GitHub"
                        className="text-gray-600 hover:text-black transition"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 flex justify-center">
                <img
                    src={MyImage}
                    alt="Harendra"
                    className="rounded-full w-64 h-64 object-cover shadow-md"
                />
            </div>
        </section>

    );
};

export default HeroSection;
