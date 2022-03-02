import React from "react";
import Header from "./components/Header";
import InfoCard from "./components/InfoBox";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <InfoCard />
      <section className="section"></section>
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
