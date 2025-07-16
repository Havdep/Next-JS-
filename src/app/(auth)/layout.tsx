"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <>
      <div className="flex flex-col">
        {" "}
        {/* Parent container, stacking nav and children */}
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
          {/* Navigation Links */}
          <div className="flex space-x-4">
            {" "}
            {/* Container for links, making them horizontal */}
            {navLinks.map((link) => {
              const isActive = pathName === link.href && link.href !== "/";
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={
                    isActive ? "text-pink-500 font-bold " : "  text-blue-400"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>{" "}
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
};
export default AuthLayout;
