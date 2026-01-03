import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import SquarePaper from "@components/SquarePaper";
import React from "react";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SquarePaper />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
