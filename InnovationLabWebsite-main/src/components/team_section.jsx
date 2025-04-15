import React from 'react'
import lbData from '../pages/data/lab_assistant.json';


const LabAssistantsSection = () => (
  <section className="relative py-12 md:py-24 px-4">
    <div className="container mx-auto relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-white">Our Lab Assistants</h2>
      
      {/* Cards container */}
      <div className="mb-8 md:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {lbData.map((assistant, index) => (
            <div 
              key={index} 
              className="bg-black rounded-lg shadow-lg overflow-visible transition-transform duration-300 hover:scale-105 flex flex-col items-center pt-16 pb-6 px-6 min-h-[380px]"
            >
              {/* Oversized Circular Image Container */}
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl">
                <img 
                  src="./assets/images/profile.jpg" 
                  alt={assistant.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center w-full mt-2">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{assistant.name}</h3>
                <p className="text-blue-600 text-base mb-3">{assistant.title}</p>
                <p className="text-gray-700 text-sm">{assistant.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Button */}
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
          Meet Our Team
        </button>
      </div>
    </div>
  </section>
);

export default LabAssistantsSection;