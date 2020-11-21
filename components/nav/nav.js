import React from "react";
import {
  withNavigationContext,
  Link,
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
            <small>{`<3`}</small>
          </div>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            Главная
          </Link>
          <Link
            className={slug === "page-two" ? "selected" : null}
            href="/page-two"
          >
            Утро
          </Link>
          <Link
            className={slug === "page-three" ? "selected" : null}
            href="/page-three"
          >
            Озеро
          </Link>
          <Link
            className={slug === "page-four" ? "selected" : null}
            href="/page-four"
          >
            Возвращение
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
