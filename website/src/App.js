import React from "react";
import NavBar from "./Navbar";
import CardSection from "./CardSection";
import AppSection from "./AppSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AppSection />
      <CardSection />
      <Footer />
    </div>
  );
};

export default App;
