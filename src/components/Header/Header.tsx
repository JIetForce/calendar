import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto pt-6 flex justify-between h-16 border-b border-red-secondary">
        <span className="text-2xl font-semibold text-red-primary">LOGO</span>
        <nav className="h-full">
          <ul className="flex space-x-16 h-full">
            {["Calendar"].map((item) => (
              <li
                key={item}
                className={`flex items-start h-full ${
                  item === "Calendar" ? "border-b-2 border-red-primary" : ""
                }`}
              >
                <Link className="h-full" href="#">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
