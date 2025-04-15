import React from 'react'

const MissionSection = () => (
    <section className="py-16 bg-trahsparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="./assets/images/about.jpg"
              alt="Innovation Lab Facility" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">About Us</h2>
            <p className="text-lg mb-4">
              We believe that innovation happens at the intersection of disciplines. Our mission is to provide a collaborative environment where students and faculty can work together to solve complex problems using cutting-edge technology and creative thinking.
            </p>
            <p className="text-lg mb-4">
              The Innovation Lab serves as a hub for experimentation, learning, and development. We provide state-of-the-art equipment, expert guidance, and a supportive community to help turn ideas into reality.
            </p>
            <p className="text-lg">
              Through workshops, hackathons, and ongoing projects, we aim to foster a culture of innovation that extends beyond the lab and into the broader community.
            </p>

          </div>
        </div>
      </div>
    </section>
  );

  export default MissionSection;