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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
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
    <div className="col-span-3 bg-white rounded-lg p-6 shadow-sm fixed right-6 top-6 w-[calc((100vw-6rem-3rem)/12*3)] h-[calc(100vh-3rem)] overflow-y-auto">
      <div className="space-y-6">
        {/* Top Navigation */}
        <div>
          <nav className="space-y-2">
            <button onClick={() => scrollToSection('featured-projects')} className="flex items-center text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
              Featured Projects
            </button>
            <button onClick={() => scrollToSection('professional-journey')} className="flex items-center text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
              Professional Journey
            </button>
            <button onClick={() => scrollToSection('blogs')} className="flex items-center text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
              Blogs
            </button>
          </nav>
        </div>

        {/* Professional Highlights */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Professional Highlights</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-700">Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Key Skills */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Key Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Next.js</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">TypeScript</span>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">AWS</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Python</span>
          </div>
        </div>

        {/* Recent Photos */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Recent Photos</h3>
          <div className="grid grid-cols-2 gap-2">
            <img 
              src="/1.jpeg" 
              alt="Recent moment 1" 
              className="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={() => openModal('/1.jpeg', 'Recent moment 1')}
            />
            <img 
              src="/4.jpeg" 
              alt="Recent moment 2" 
              className="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={() => openModal('/4.jpeg', 'Recent moment 2')}
            />
            <img 
              src="/3.jpeg" 
              alt="Recent moment 3" 
              className="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={() => openModal('/3.jpeg', 'Recent moment 3')}
            />
            <div className="w-full h-20 bg-gray-100 rounded-md flex items-center justify-center">
              <span className="text-xs text-gray-500">+More</span>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
      </div>
    </div>
    </>
  );
}