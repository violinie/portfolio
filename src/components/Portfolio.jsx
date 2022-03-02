import React from "react";
import PortfolioItem from "./PortfolioItem";
import data from "../data";

export default function Portfolio() {
  const item = data.map((item) => {
    return <PortfolioItem key={item.id} logoUrl={item.logoUrl} hashtags={item.hashtags} imageUrl={item.imageUrl} linkUrl={item.linkUrl} filter={item.filter} />;
  });
  return (
    <section className="portfolio bg-wrapper" id="portfolio">
      <div className="container">
        <h2>My Work</h2>
        <div className="portfolio__gallery">{item}</div>
      </div>
    </section>
  );
}
