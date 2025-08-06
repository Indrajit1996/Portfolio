import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

export default function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen bg-gray-50 p-6 overflow-y-auto" 
      style={{ fontFamily: 'Diatype Variable, -apple-system, BlinkMacSystemFont, sans-serif',
        backgroundColor: '#2d2d2d' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-full">
        
        {/* Left Sidebar - Order 1 on mobile */}
        <div className="lg:col-span-3 lg:order-1 order-1">
          <LeftSidebar />
        </div>

        {/* Right Sidebar - Order 2 on mobile */}
        <div className="lg:col-span-3 lg:order-3 order-2">
          <RightSidebar scrollToSection={scrollToSection} />
        </div>

        {/* Main Content - Order 3 on mobile */}
        <div className="lg:col-span-6 lg:order-2 order-3">
          <MainContent />
        </div>

      </div>
    </div>
  );
}