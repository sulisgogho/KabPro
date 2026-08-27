import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import React from 'react';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
