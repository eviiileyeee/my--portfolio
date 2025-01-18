import React from "react";

const Navbar = ()=>{
    return(
        <>
          <header>
                <nav class="navbar " id="navBar">
                    <div class="left">Harendra Portfolio</div>
                    <div class="right">
                        <ul>
                            <li><a href="#navBar">Home</a></li>
                            <li><a href="about/index.html">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects"> Projects</a></li>
                            <li><a href="https://contact-harendra.netlify.app/">Contact </a></li>
                        </ul>
                    </div>
                    <div class="mobile-navbar-btn">
                        <ion-icon name="menu-outline" class="mobile-nav-icon"></ion-icon>
                        <ion-icon name="close-outline" class="mobile-nav-icon"></ion-icon>
                    </div>
                </nav>
            </header>
        </>
        );
}

export default Navbar;