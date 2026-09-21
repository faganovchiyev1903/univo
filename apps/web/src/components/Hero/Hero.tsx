import { Link } from "react-router-dom";

import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Built for students
          </span>

          <h1 className="hero__title">
            Everything students need,
            <span> in one place.</span>
          </h1>

          <p className="hero__description">
            Study smarter, connect with your community and discover
            opportunities — all from one simple platform.
          </p>

          <div className="hero__actions">
            <Link to="/register" className="hero__primary">
              Get started
              <span>↗</span>
            </Link>

            <Link to="/explore" className="hero__secondary">
              Explore UNIVO
            </Link>
          </div>

          <div className="hero__note">
            <span>✦</span>
            Designed around student life
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-top">
              <div>
                <span>Your student space</span>
                <h2>Good morning 👋</h2>
              </div>

              <div className="hero__avatar">U</div>
            </div>

            <div className="hero__stats">
              <div>
                <strong>12</strong>
                <span>Materials</span>
              </div>

              <div>
                <strong>8</strong>
                <span>Connections</span>
              </div>
            </div>

            <div className="hero__progress">
              <div className="hero__progress-header">
                <span>Web Development</span>
                <strong>72%</strong>
              </div>

              <div className="hero__progress-bar">
                <span />
              </div>
            </div>
          </div>

          <div className="hero__floating hero__floating--top">
            💬
            <span>24 new discussions</span>
          </div>

          <div className="hero__floating hero__floating--bottom">
            ✨
            <span>New opportunity</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;