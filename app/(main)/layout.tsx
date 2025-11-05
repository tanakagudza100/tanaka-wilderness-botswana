import Footer from "@/components/common/Footer";
import Navigation from "@/components/shared/Navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

