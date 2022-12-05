import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
      <Link href={'/Home'}>Home</Link>
      <Link href={'/Projects'}>Projects</Link>
   
      </div>
    </>
  );
};

export default NavBar;
