import React from "react";

import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import CopyrightSection from "./CopyrightSection";
import Footer from "./Footer";
import MasterHead from "./MasterHead";
import NavBar from "./NavBar";
import PortfolioModalSection from "./PortfolioModalSection";
import PortfolioSection from "./PortfolioSection";

const App = () => {
  return (
    <div>
      <NavBar />
      <MasterHead />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <CopyrightSection />
      <PortfolioModalSection />
    </div>
  );
};

export default App;
