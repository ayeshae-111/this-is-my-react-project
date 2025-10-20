import React from "react";
import Header from "./components/Header";
import Hero from "./components/ui/Hero";
import Info from "./components/ui/Info";
import About from "./components/ui/About";
import Testimonial from "./components/ui/Testimonial";
import Footer from "./components/ui/Footer";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Info />
      <About />
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;