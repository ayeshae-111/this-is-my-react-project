import React from "react";
import "./About.css";
function About() {
  return (
    <div>
      <section className="about-section">
        <h1 className="about-heading">About Us</h1>

        <div className="about-container">
          <div className="about-image">
            <img src="/man and blocks.svg" alt="About Us Image" />
          </div>

          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Vivamus non malesuada odio. Sed vel eros a urna aliquet
              tincidunt. Curabitur in gravida nisl, vitae suscipit lorem.
            </p>

            <ul className="about-list">
              <li>
                <span className="tick">✔</span> Laborem Anim
              </li>
              <li>
                <span className="tick">✔</span> Ad At Tempore
              </li>
              <li>
                <span className="tick">✔</span> Laborees
              </li>
            </ul>

            <a href="#" className="learn-more-btn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <div className="team-lorem">
        <h1>Our Team</h1>
        <p className="team-lorem-txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nemo!
          Maiores eos, sapiente.
        </p>
      </div>

      <section className="team-section">
        <h1 className="team-heading">Our Team</h1>

        <div className="team-container">
          <div className="first-three-members">
            <div className="team-member">
              <div className="team-img">
                <img src="./public/person_1.jpg.webp" alt="Glo Marina" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="team-info">
                <h4>Glo Marina</h4>
                <span className="role">President</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Pellentesque habitant morbi tristique senectus et
                  netus.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-img">
                <img src="./public/person_2.jpg.webp" alt="John Rooster" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="team-info">
                <h4>John Rooster</h4>
                <span className="role">Marketing</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel sapien non neque lacinia cursus.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-img">
                <img src="./public/person_3.jpg.webp" alt="Will Turner" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="team-info">
                <h4>Will Turner</h4>
                <span className="role">Marketing</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  fermentum, justo in cursus pulvinar, lorem nunc sagittis
                  lorem.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="team-container">
          <div className="last-three-members">
            <div className="team-member">
              <div className="team-img">
                <img src="./public/person_4.jpg.webp" alt="Nicola Stainer" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="team-info">
                <h4>Nicola Stainer</h4>
                <span className="role">Financing</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus bibendum enim vel justo tincidunt fermentum.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-img">
                <img src="./public/person_5.jpg.webp" alt="George Brook" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="team-info">
                <h4>George Brook</h4>
                <span className="role">Founder</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sed quam vel massa dapibus tincidunt.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-img">
                <img src="./public/person_6.jpg.webp" alt="Emily Hopson" />
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="team-info">
                <h4>Emily Hopson</h4>
                <span className="role">Marketing</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam eget justo nec sapien tincidunt cursus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
