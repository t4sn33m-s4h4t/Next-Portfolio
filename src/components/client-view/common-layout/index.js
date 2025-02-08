"use client";
import { usePathname } from "next/navigation";
import Navbar from "../navbar";
import Footer from "../footer";
import ProjectNavbar from "../projectNavbar.jsx";

export default function CommonLayout({ children }) {
  const pathName = usePathname();
 
  if (pathName.startsWith("/admin")) {
    return (
      <>
        {children}
        <Footer />
      </>
    );
  }
 
  const isProjectDetailPage = pathName.startsWith("/projects/") && pathName.split("/").length === 3;

  return (
    <>
      {isProjectDetailPage ? <ProjectNavbar /> : <Navbar />}
      {children}
      <Footer />
    </>
  );
}
