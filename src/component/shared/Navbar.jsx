
import React from "react";
import navLogo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm border-y p-4 border-blue-950">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/exercises" >Workout</Link>
            </li>
            <li>
              <Link href="/my-plans" >My Plan</Link>
            </li>
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-2">
          <Image
            src={navLogo}
            alt="FitLog logo"
            width={40}
            height={40}
          />
          <span className="font-bold text-xl">FITLOG</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/exercises">Workout</Link>
          </li>
          <li>
            <Link href="/my-plans">My Plan</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <Link href="/my-plans" className="btn btn-ghost">
          Plan
        </Link>

        <Link href="/saved" className="btn btn-ghost">
          Saved
        </Link>
      </div>
    </div>
  );
};

export default Navbar;