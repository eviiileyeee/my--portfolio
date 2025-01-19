import React from "react";

const HeroSection = () => {
    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/eviiileyeee", "_blank");
    };

    return (
        <section className="firstSection" id="home">
            <div className="leftSection">
                <div>
                    Hi, I'm
                    <span className="pink">Harendra...</span>
                    <div> a computer science student<br /> Who loves</div>
                    <span id="element"></span>
                </div>
                <div className="social-media-icon">
                    <ul className="social_icons">
                        <li>
                            <a href="https://www.facebook.com/jeatu.raja.9?mibextid=ZbWKwL" aria-label="Facebook">
                                <span className="fa fa-facebook"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.x.com/hpsbundela" aria-label="Twitter">
                                <span className="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a onClick={handleInstagramClick} aria-label="Instagram">
                                <span className="fa fa-instagram"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/harendra-pratap-singh-bundela?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn">
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="rightSection">
                <img onClick={handleInstagramClick} 
                src="https://harendra.netlify.app/assets/p.jpg"   alt="Profile" />
            </div>
        </section>
    );
}

export default HeroSection;
