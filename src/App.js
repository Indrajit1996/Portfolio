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
    <main className="h-screen bg-gray-50 p-6 overflow-y-auto" 
      style={{ fontFamily: 'Diatype Variable, -apple-system, BlinkMacSystemFont, sans-serif',
        backgroundColor: '#2d2d2d' }}
      role="main">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-full">
        
        {/* Contact Info & Profile - Semantic aside */}
        <aside className="lg:col-span-3 lg:order-1 order-1" role="complementary" aria-label="Contact information and profile">
          <LeftSidebar />
        </aside>

        {/* Navigation Menu - Semantic nav */}
        <nav className="lg:col-span-3 lg:order-3 order-2" role="navigation" aria-label="Section navigation">
          <RightSidebar scrollToSection={scrollToSection} />
        </nav>

        {/* Main Portfolio Content - Semantic section */}
        <section className="lg:col-span-6 lg:order-2 order-3" aria-label="Portfolio content">
          <MainContent />
        </section>

      </div>
    </main>
  );
}