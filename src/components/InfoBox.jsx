import React from "react";

function InfoCard() {
  return (
    <section className="container section__card card info-card">
      <div className="info-card__details">
        <h3 className="info-card__title">Pesonal Details</h3>
        <div className="bor-bottom"></div>
        <div>
          Email: <span className="text--muted">hancacopakova@gmail.com</span>
        </div>
        <div>
          Timezone: <span className="text--muted">UTC+1</span>
        </div>
        <div>
          Languages: <span className="text--muted">Czech, English</span>
        </div>
      </div>
      <div className="info-card__profile">
        <div className="info-card__typed">
          I Am <span className="" data-elements="Web Developer, Gamer"></span>
          <span id="typed" className="typed">
            Web{" "}
          </span>
          <span className="typed-cursor">|</span>
        </div>
        <p>
          My dad taught me how to code when I was a kid, and after a long period of time when life let me to a different field even though I had always been inclined towards
          coding, I'm back at it again. Now, after a few months of self-learning and a few courses, I'm looking for an entry-level job at React.
        </p>
      </div>
    </section>
  );
}

export default InfoCard;
