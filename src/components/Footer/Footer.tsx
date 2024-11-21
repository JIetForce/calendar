import React from "react";

const Footer = () => (
  <footer className="py-4 text-center space-y-1 md:space-y-3 px-4 md:px-0">
    <span className="text-[32px] text-red-primary font-semibold uppercase">
      Logo
    </span>
    <nav>
      {/* TODO:  */}
      <ul className="flex space-x-16 h-full items-center justify-center">
        {["Main", "Events", "Calendar", "FAQ"].map((item) => (
          <li key={item} className="flex items-start h-full font-extralight">
            {item}
          </li>
        ))}
      </ul>
    </nav>
    <div className="container mx-auto px-4 text-gray-primary text-sm font-extralight">
      <p>&copy; 2022 All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
