import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-overlay">
        <nav className="header__nav container">
          <ul className="header__nav-items" id="header__nav-items">
            <li className="nav__item">
              <a href="#" className="nav__link active">
                home
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__hero">
          <img src="./images/introduction-photo.jpeg" className="header__introduction-photo" alt="" />
          <h1>Hana Čopáková</h1>
          <div className="header__subtitle">
            I'm a Passionate <span className="header__subtitle--standout">Junior React Developer</span>
          </div>
          <div>
            <a href="mailto: hancacopakova@gmail.com" className="btn">
              Hire Me
            </a>
            <a href="./copakova-cv.pdf" className="btn" download>
              Download CV{" "}
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
