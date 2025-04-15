import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import '../styles/herosection.css'; // Import the CSS file

const HeroSection = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Create a timeline for the animations
    const tl = gsap.timeline({ delay: 4 });

    // Animation for the video/gif to move upward and fade out
    tl.to(videoRef.current, {
      y: -150, // Moves video upwards
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Animation for text to fade in
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.in',
    });
  }, []);

  // Particles setup with your provided options
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="hero-section-wrapper">
      <div className="hero-section">
        {/* Particle background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {
              color: { value: '#000000' },
              opacity: 1,
            },
            fullScreen: { enable: false, zIndex: 0 },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: 'push' },
                onHover: { enable: true, mode: 'repulse' }, // Faster hover interaction
                resize: { enable: true },
              },
              modes: {
                repulse: {
                  distance: 150, // Reacts from a larger area
                  duration: 0.2, // Moves away quicker
                },
              },
            },
            particles: {
              number: { value: 50, density: { enable: true, area: 800 } },
              color: { value: '#ff0000', animation: { h: { enable: true, speed: 20, sync: true } } },
              shape: { type: 'circle' },
              opacity: { value: 0.7 },
              size: { value: { min: 2, max: 5 } },
              move: { enable: true, speed: 2.5 }, // **Increased speed for a more dynamic effect**
              links: { enable: false },
            },
          }}
        />

        {/* Video/GIF that will animate */}
        <div ref={videoRef}>
          <video
            src="./assets/videos/hero_animation.mp4"
            autoPlay
            loop
            muted
          />
          {/* You can replace this with a <img src="your-gif.gif" /> for a GIF */}
        </div>

        {/* Text that appears after video moves out */}
        <div ref={textRef} className="text-content">
          <h1>CSQUARE INNOVATION CENTER</h1>
          <p>Indian Institute of Technology,Palakkad</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
