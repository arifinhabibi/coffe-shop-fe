"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="fixed z-20 flex w-full items-center justify-between bg-neutral-200 px-20 py-3">
      {/* logo */}
      <div>
        {/* <Image src={"/image/logo.png"} width={100} height={100} alt="logo" /> */}
        <Link href={"/"}>
          <h1 className="rounded-l-full rounded-r-full bg-amber-800 py-2 pl-4 font-sans font-bold text-white">
            pin{"'"}s{" "}
            <span className="rounded-full border-2 border-white bg-neutral-300 px-2 py-2">
              coffe
            </span>
          </h1>
        </Link>
      </div>
      {/* navigasi */}
      <div className="flex items-center gap-10 text-black">
        <ul className="flex items-center gap-10 font-semibold">
          {/* <Link href={"/"}>Order</Link>
          <Link href={"/"}>Transactions</Link> */}
        </ul>
        {/* user */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Image
                  src={"/image/team-2.jpg"}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-white"
                  alt="user"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="rounded-xl">
                <div className="w-52 rounded-xl border-2 border-white bg-neutral-200 px-5 py-2">
                  <Link href={"/"}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Settings
                    </NavigationMenuLink>
                  </Link>
                  <Link href={"/"}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Logout
                    </NavigationMenuLink>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
