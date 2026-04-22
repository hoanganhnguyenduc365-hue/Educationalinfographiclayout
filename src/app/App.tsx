import React from "react";
import { Header } from "./components/Header";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { Section4 } from "./components/Section4";
import { FooterSummary } from "./components/FooterSummary";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-['Montserrat'] overflow-x-hidden">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <FooterSummary />
    </div>
  );
}