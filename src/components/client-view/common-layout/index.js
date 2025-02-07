"use client";
import { usePathname } from "next/navigation";
import Navbar from "../navbar";
import Footer from "../footer";

export default function CommonLayout({ children }) {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/admin" ? <Navbar /> : null}
      {children}
      <Footer />
    </>
  );
}
