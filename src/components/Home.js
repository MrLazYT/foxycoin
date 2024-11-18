import React from 'react';
import playImage from '../assets/play.png';
import rocketImage from '../assets/rocket.png';

const Home = () => {
  return (
    <section className="home">
      <img src={playImage} alt="Play Icon" className="image-left" />
      <div className="content">
        <h1>FoxyCoin</h1>
        <p>
          Built on the Solana blockchain, FoxyCoin combines community and innovation
          to deliver an exciting and rewarding experience. With a focus on growth and
          opportunity, FoxyCoin is ready to take the crypto world by storm.
        </p>
        <a href="#buy" className="cta-button">Buy Now</a>
      </div>
      <img src={rocketImage} alt="Rocket Icon" className="image-right" />
    </section>
  );
};

export default Home;
