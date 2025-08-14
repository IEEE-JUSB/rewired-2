import React from "react";
import "../assets/timeline.css";
import timeline from "../assets/timeline.svg";
const Timeline = () => {

  return (
    <>
      <div className="container">
        <aside className="sidebar">
          <div className="schedule">
            <div className="schedule-item">
              <span className="time">3:00 PM</span>
              <span>SAMPLE TEXT HERE</span>
            </div>
            <div className="schedule-item">
              <span className="time">3:00 PM</span>
              <span>SAMPLE TEXT HERE</span>
            </div>
            <div className="schedule-item">
              <span className="time">3:00 PM</span>
              <span>SAMPLE TEXT HERE</span>
            </div>
          </div>

          <div className="we-do">
            <div>WE DO</div>
            <div>WEB3</div>
          </div>
        </aside>

        <main className="main-content">
          <div className="glitch-bars">
            <img
              src={timeline}
              alt=""
              style={{ width: "100%", height: "400px", maxWidth: "400px" }}
            />
          </div>
        </main>

        <section className="services">
          <div className="service-item">
            <span className="service-number">01</span>
            <div className="service-icon"></div>
            <div>
              <div>WEB3</div>
              <div>APPLICATIONS</div>
            </div>
          </div>
          <div className="service-item">
            <span className="service-number">02</span>
            <div className="service-icon"></div>
            <div>
              <div>SMART</div>
              <div>CONTRACTS</div>
            </div>
          </div>
          <div className="service-item">
            <span className="service-number">03</span>
            <div className="service-icon"></div>
            <div>AUDITS</div>
          </div>
        </section>

        <footer className="footer">
          <div className="clients-section">
            <h3>CLIENTS / PROJECTS</h3>
            <div className="client-item">
              <div>
                <div className="client-name">VAN ECK</div>
                <div className="client-type">PROTOCOL / MVP DEVELOPMENT</div>
              </div>
              <span className="client-arrow">↗</span>
            </div>
            <div className="client-item">
              <div>
                <div className="client-name">ON1 FORCE</div>
                <div className="client-type">CONTRIBUTOR / MVP DEVELOPMENT</div>
              </div>
              <span className="client-arrow">↗</span>
            </div>
            <div className="client-item">
              <div>
                <div className="client-name">SEKAI GLORY</div>
                <div className="client-type">GAME DEV / WEBSITE / SMART CONTRACT</div>
              </div>
              <span className="client-arrow">↗</span>
            </div>
            <div className="client-item">
              <div>
                <div className="client-name">OCEAN PARK</div>
                <div className="client-type">NFT MARKETPLACE</div>
              </div>
              <span className="client-arrow">↗</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Timeline;
