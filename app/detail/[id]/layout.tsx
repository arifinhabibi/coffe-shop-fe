"use client";

import Navbar from "@/components/ui/navbar";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="flex px-20 pt-24">{children}</div>
    </main>
  );
};

export default Layout;
