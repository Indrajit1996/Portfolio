import React, { useState } from 'react';
import '../index.css';
import { imageContent } from './utils';

export default function RightSidebar({ scrollToSection }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc, imageAlt, content) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt, content: content });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-30 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-gray-900 bg-opacity-80 md:bg-transparent rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col md:flex-row h-full">
              <div className="flex-shrink-0 flex justify-center items-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="object-cover w-full md:w-80 h-64 md:h-auto"
                  style={{ aspectRatio: '3/4' }}
                />
              </div>
              <div className="flex-1 text-white p-4 pl-8 md:p-6 md:ml-8 overflow-y-auto">
                <div className="text-lg md:text-2xl font-semibold pb-3 md:pb-4">
                  {selectedImage?.content?.header}
                </div>
                <div className="font-semibold text-xs md:text-xs leading-relaxed md:leading-loose max-w-full md:max-w-96 overflow-y-auto max-h-40 md:max-h-none">
                  {selectedImage?.content?.content}
                </div>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="absolute md:top-4 md:right-4 text-white text-xl md:text-2xl font-bold hover:text-gray-300 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black md:bg-transparent rounded-full hover:bg-opacity-70 transition-all"
              style={{top: window.innerWidth >= 768 ? '-5px' : '0px', right: '0px'}}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 md:h-8 md:w-8 stroke-white" fill="none">
                <path d="M6 6L18 18M18 6L6 18" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    <div className="bg-white rounded-lg p-6 shadow-sm w-full lg:fixed lg:right-6 lg:top-6 lg:w-[calc((100vw-6rem-3rem)/12*3)] lg:h-[calc(100vh-3rem)] overflow-y-auto" style={{backgroundColor: 'transparent', opacity: 0.8}}>
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
            <span className="px-2 py-1 text-gray-300 text-xs rounded" style={{backgroundColor: 'rgba(70,107,85,1)'}}>React</span>
            <span className="px-2 py-1 text-gray-300 text-xs rounded" style={{backgroundColor: 'rgba(70,107,85,1)'}}>Next.js</span>
            <span className="px-2 py-1 text-gray-300 text-xs rounded" style={{backgroundColor: 'rgba(70,107,85,1)'}}>TypeScript</span>
            <span className="px-2 py-1 text-gray-300 text-xs rounded" style={{backgroundColor: 'rgba(70,107,85,1)'}}>AWS</span>
            <span className="px-2 py-1 text-gray-300 text-xs rounded" style={{backgroundColor: 'rgba(70,107,85,1)'}}>Python</span>
          </div>
        </div>

        {/* Recent Photos */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-xs font-semibold mb-3 text-[rgb(244,241,210)]">Recent Photos</h3>
          <div style={{background: '#212121'}}>
            <div className="grid grid-cols-2 gap-2 mix-blend-color-dodge">
              <img 
                src="/1.jpeg" 
                alt="Recent moment 1" 
                className="w-full object-cover cursor-pointer hover:opacity-99 transition-opacity" 
                style={{ aspectRatio: '4/3' }}
                onClick={() => openModal('/1.jpeg', 'Recent moment 1', imageContent.graduation)}
              />
              <img 
                src="/4.jpeg" 
                alt="Recent moment 2" 
                className="w-full object-cover cursor-pointer hover:opacity-99 transition-opacity" 
                style={{ aspectRatio: '4/3' }}
                onClick={() => openModal('/4.jpeg', 'Recent moment 2', imageContent.skydive)}
              />
              <img 
                src="/3.jpeg" 
                alt="Recent moment 3" 
                className="w-full object-cover cursor-pointer hover:opacity-99 transition-opacity" 
                style={{ aspectRatio: '4/3' }}
                onClick={() => openModal('/3.jpeg', 'Recent moment 3', imageContent.football)}
              />
              <img 
                src="/2.jpeg" 
                alt="Recent moment 3" 
                className="w-full object-cover cursor-pointer hover:opacity-99 transition-opacity" 
                style={{ aspectRatio: '4/3' }}
                onClick={() => openModal('/2.jpeg', 'Recent moment 3', imageContent.trip)}
              />
            </div>
          </div>
        </div>

        {/* Bottom Content */}
      </div>
    </div>
    </>
  );
}