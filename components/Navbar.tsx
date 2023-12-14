"use client"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* logo */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* lg menu */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="navlinks" >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* login button  */}
      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* small screen menu */}
      <GiHamburgerMenu className='inline-block cursor-pointer lg:hidden text-green-50' fontSize={27}  onClick={() => setToggle((prev) => !prev)} />
      <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-green-50 absolute top-12 right-2 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <GiHamburgerMenu className='inline-block cursor-pointer lg:hidden text-green-50' fontSize={27}  onClick={() => setToggle((prev) => !prev)} />
          <ul className="list-none flex justify-end items-start flex-1 flex-col text-white">
            {NAV_LINKS.map((link ,index) => (
            <Link href={link.href} key={link.key} className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-black ${index === NAV_LINKS.length - 1 ? "mb-0" : "mb-4"}`} 
            onClick={() => ( 
              setToggle(false)
              )}
            >
              {link.label}
            </Link>
            ))}
          </ul>
      </div>

    </nav>
  )
}

export default Navbar