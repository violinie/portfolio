import React from "react";

export default function PortfolioItem(props) {
  return (
    <div className="gallery__item card">
      <a href={props.linkUrl}>
        <img src={props.imageUrl} className="gallery__item-img" alt="" />
        <img src={props.logoUrl} className="portfolio__logo" alt="" />
        <div>{props.hashtags}</div>
        <div className="filter" style={{ background: props.filter }}></div>
      </a>
    </div>
  );
}
