import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroText = (props) => {
  // Create a reference to attach Typed.js to a DOM element
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    // Typed.js options
    const options = {
        strings: ['Making Websites', 'Backend', 'Frontend', 'JavaScript', 'Development'],
        typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    };

    // Initialize Typed.js on the referenced element
    typedInstance.current = new Typed(typedElement.current, options);

    return () => {
      // Destroy Typed.js instance on component unmount to prevent memory leaks
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <div className=" text-gray-800 text-2xl font-semibold">
      <span ref={typedElement} className="text-blue-400"></span>
    </div>
  );
};

export default HeroText;
