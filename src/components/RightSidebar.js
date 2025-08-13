import React, { useState } from 'react';

export default function RightSidebar({ scrollToSection }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-30 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-lg max-h-[80vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-cover rounded-lg"
              style={{ aspectRatio: '3/4' }}
            />
            <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 text-white text-2xl font-bold hover:text-gray-300 bg-black bg-opacity-75 w-8 h-8 flex items-center justify-center rounded-full"
            >
              ×
            </button>
          </div>
        </div>
      )}
    <div className="bg-white rounded-lg p-6 shadow-sm w-full lg:fixed lg:right-6 lg:top-6 lg:w-[calc((100vw-6rem-3rem)/12*3)] lg:h-[calc(100vh-3rem)] overflow-y-auto" style={{backgroundColor: '#2d2d2d'}}>
      <div className="space-y-6">
        {/* Top Navigation */}
        <div>
          <div className="w-full text-xs font-semibold text-[rgb(244,241,210)] outline-none">
            <hr className="border-[rgb(244,241,210)] mb-2" />
            <span className="block mb-2">
              <a 
                href="#" 
                rel="home-page" 
                onClick={(e) => { e.preventDefault(); scrollToSection('featured-projects'); }}
                className="text-[rgb(244,241,210)] no-underline cursor-pointer"
              >
                ❶ &nbsp;Featured Projects
              </a>
            </span>
            <hr className="border-[rgb(244,241,210)] my-2" />
            <span className="block mb-2">
              <a 
                href="#" 
                rel="home-page" 
                onClick={(e) => { e.preventDefault(); scrollToSection('professional-journey'); }}
                className="text-[rgb(244,241,210)] no-underline cursor-pointer"
              >
                ❷ &nbsp;Professional Journey
              </a>
            </span>
            <hr className="border-[rgb(244,241,210)] my-2" />
            <span className="block mb-2">
              <a 
                href="#" 
                rel="home-page" 
                onClick={(e) => { e.preventDefault(); scrollToSection('blogs'); }}
                className="text-[rgb(244,241,210)] no-underline cursor-pointer"
              >
                ❸ &nbsp;Blogs
              </a>
            </span>
            <hr className="border-[rgb(244,241,210)] my-2" />
          </div>
        </div>

        {/* Professional Highlights */}
        <div>
          <h3 className="text-xs font-semibold mb-3 text-[rgb(244,241,210)]">Professional Highlights</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
              <span className="text-xs font-semibold text-[rgb(244,241,210)]">Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Key Skills */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-xs font-semibold mb-3 text-[rgb(244,241,210)]">Key Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">React</span>
            <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">Next.js</span>
            <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">TypeScript</span>
            <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">AWS</span>
            <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">Python</span>
          </div>
        </div>

        {/* Recent Photos */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-xs font-semibold mb-3 text-[rgb(244,241,210)]">Recent Photos</h3>
          <div className="grid grid-cols-2 gap-2">
            <img 
              src="/1.jpeg" 
              alt="Recent moment 1" 
              className="w-full object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ aspectRatio: '4/3' }}
              onClick={() => openModal('/1.jpeg', 'Recent moment 1')}
            />
            <img 
              src="/4.jpeg" 
              alt="Recent moment 2" 
              className="w-full object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ aspectRatio: '4/3' }}
              onClick={() => openModal('/4.jpeg', 'Recent moment 2')}
            />
            <img 
              src="/3.jpeg" 
              alt="Recent moment 3" 
              className="w-full object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ aspectRatio: '4/3' }}
              onClick={() => openModal('/3.jpeg', 'Recent moment 3')}
            />
            <img 
              src="/2.jpeg" 
              alt="Recent moment 3" 
              className="w-full object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ aspectRatio: '4/3' }}
              onClick={() => openModal('/2.jpeg', 'Recent moment 3')}
            />
          </div>
        </div>

        {/* Bottom Content */}
      </div>
    </div>
    </>
  );
}