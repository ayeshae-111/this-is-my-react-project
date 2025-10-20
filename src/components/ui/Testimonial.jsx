import React from 'react'
import "./Testimonial.css";
function Testimonial() {
  return (
    <div>
      <section className="testimonial-section">
        <h1 className="testimonial-heading">Testimonials</h1>

        <div className="testimonial-content">
          <img
            src="./public/person_4.jpg.webp"
            alt="Roger Spears"
            className="testimonial-img"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            sapien vel justo elementum vestibulum. Nullam euismod lectus nec
            nunc volutpat, sit amet efficitur nunc viverra."
          </p>
          <h3 className="testimonial-name">Roger Spears</h3>
        </div>
      </section>

      <section className="block-section">
        <h1 className="block-heading">Blog Posts</h1>

        <div className="block-container">
          <div className="block-card">
            <img
              src="./public/img_1.jpg.webp"
              alt="Block Image 1"
              className="block-image"
            />
            <h2 className="block-title">Make Your Business More Profitable</h2>
            <p className="block-meta">
              Hambrook · January 18, 2019 ·{" "}
              <a href="#" className="news-link">
                News
              </a>
            </p>

            <p className="block-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nobis debitis culpa minus dolor? Repudiandae quam a pariatur
              veritatis doloribus ab optio omnis nulla sint accusamus! Sint
              error harum nesciunt?
            </p>
            <a href="#" className="continue-reading">
              Continue Reading
            </a>
          </div>

          <div className="block-card">
            <img
              src="./public/img_2.jpg.webp"
              alt="Block Image 2"
              className="block-image"
            />
            <h2 className="block-title">Make Your Business More Profitable</h2>
            <p className="block-meta">
              James Phelps · January 18, 2019 ·{" "}
              <a href="#" className="news-link">
                News
              </a>
            </p>
            <p className="block-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              id nesciunt aperiam qui sit voluptatibus? Provident sint dolore
              eligendi. Quo, adipisci. Quibusdam odit tenetur consectetur
              provident doloribus id quis sapiente?
            </p>
            <a href="#" className="continue-reading">
              Continue Reading
            </a>
          </div>

          <div className="block-card">
            <img
              src="./public/img_3.jpg.webp"
              alt="Block Image 3"
              className="block-image"
            />
            <h2 className="block-title">Make Your Business More Profitable</h2>
            <p className="block-meta">
              James Phelps · January 18, 2019 ·{" "}
              <a href="#" className="news-link">
                News
              </a>
            </p>
            <p className="block-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              dignissimos fugit iste dolore voluptatibus iusto, nobis aperiam
              veniam culpa molestiae quos laudantium ab cum facere accusamus
              adipisci et natus eveniet.
            </p>
            <a href="#" className="continue-reading">
              Continue Reading
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonial