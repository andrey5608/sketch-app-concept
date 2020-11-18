import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import ReactLogo from "../react-logo/react-logo";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          <ReactLogo />
          <div>
            <h1>
              <span>My book</span>
              <span>Slideshow</span>
            </h1>
            <h2>Let me show you something</h2>
            <small>
              {`<3`}
            </small>
          </div>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            index
          </Link>
          <Link
            className={slug === "page-two" ? "selected" : null}
            href="/page-two"
          >
            page 2
          </Link>
          <Link
            className={slug === "page-three" ? "selected" : null}
            href="/page-three"
          >
            page 3
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
