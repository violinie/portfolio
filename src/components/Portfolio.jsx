import React from "react";

export default function Portfolio() {
  return (
    <section className="container portfolio" id="portfolio">
      <h2>My Work</h2>
      <div className="portfolio__gallery">
        <div className="gallery__item card">
          <a href="https://investuj-do-pole.vercel.app/">
            <img src="https://source.unsplash.com/random/240?invest" alt="" class="gallery__item-img" />
          </a>
        </div>
        <div className="gallery__item card">
          <a href="https://staav.cz/">
            <img src="https://source.unsplash.com/random/240?build" alt="" className="gallery__item-img" />
          </a>
        </div>
        <div className="gallery__item card">
          <a href="https://pizza-veranda.cz">
            <img src="https://source.unsplash.com/random/240?pizza" alt="" className="gallery__item-img" />
          </a>
        </div>
        <div className="gallery__item card">
          <a href="https://www.brightwater.cz/">
            <img src="https://source.unsplash.com/random/240?water" alt="" className="gallery__item-img" />
          </a>
        </div>
        <div className="gallery__item card">
          <a href="https://www.optikacivice.cz">
            <img src="https://source.unsplash.com/random/240?optica" alt="" className="gallery__item-img" />
          </a>
        </div>
        <div className="gallery__item card">
          <a href="https://www.davidcrystal.com">
            <img src="https://source.unsplash.com/random/240?writer" alt="" class="gallery__item-img" />
          </a>
        </div>
        <div className="gallery__item card">
          <a href="https://www.drivewearlens.com">
            <img src="https://source.unsplash.com/random/240?glasses" alt="" className="gallery__item-img" />
          </a>
        </div>
      </div>
    </section>
  );
}
