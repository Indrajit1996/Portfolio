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
    <div className="h-screen bg-gray-50 p-6 overflow-y-auto" style={{ fontFamily: 'Diatype Variable, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      <div className="max-w-7xl mx-auto grid gap-6 min-h-full">
        
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content - Scrollable */}
        <MainContent />

        {/* Right Sidebar */}
        <RightSidebar scrollToSection={scrollToSection} />

      </div>
    </div>
  );
}