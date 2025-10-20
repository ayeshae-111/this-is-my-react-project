import React from "react";
import "./info.css";
import { FaRecycle } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { AiOutlineCrown } from "react-icons/ai";
import { MdDownloading } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";

function Info() {
  return (
    <>
      <section className="info-section">
        <div className="info-box">
          <FaRecycle className="info-icon" />
          <h4>Marketing Consulting</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis tempor.</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>

        <div className="info-box">
          <IoHome />
          <h4>Market Analysis</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis tempor.</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>

        <div className="info-box">
          <AiOutlineCrown />

          <h4>Easy Purchase</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis tempor.</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>

        <div className="info-box">
          <MdDownloading />

          <h4>Free Updates</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis tempor.</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>

        <div className="info-box">
          <FaRegSmile />

          <h4>100% Satisfied</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis tempor.</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>

        <div className="info-box">
          <FaPlug />
          <h4>Easy Plugin</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis tempor.</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>
      </section>

      <section className="feedback-section">
        <div className="feedback-image">
          <img src="./public/undraw_gift_card_6ekc (1).svg" alt="Feedback Image" />
        </div>
        <div className="feedback-content">
          <h1>Communicate and Get Their Feedback</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lacus at sapien porta porta. Cras feugiat erat vel ante aliquet, a tincidunt nunc ultricies.</p>
        </div>
      </section>

      <section className="feedback-section2">
        <div className="feedback-content2">
          <h1>Communicate and Gather Feedback</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, mauris a ultricies posuere, nunc sapien aliquam ligula, in egestas justo lorem non purus.</p>
        </div>
        <div className="feedback-image2">
          <img src="./public/undraw_metrics_gtu7.svg" alt="Feedback Illustration" />
        </div>
      </section>
    </>
  );
}

export default Info;