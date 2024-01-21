import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Newsbox from "./components/Newsbox";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewsLetter />
      <Newsbox/>
      <Cards />
      <Footer />
    </>
  );
};

export default App;
