import './../../pages/index.css';

export const Header = ({ zobrazit }) => {
  return (
    <header id="home">
      <div className="header__content container">
        <div className="site-logo"></div>
        <div className="navigation">
          <button className="nav-btn"></button>
          {!zobrazit ? (
            <nav className="rollout-nav nav-closed">
              <a href="./home">domů</a>
            </nav>
          ) : (
            <nav className="rollout-nav nav-closed">
              <a href="#home">domů</a>
              <a href="#menu">menu</a>
              <a href="#gallery">galerie</a>
              <a href="#contact">kontakt</a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
