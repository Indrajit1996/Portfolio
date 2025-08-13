import React from 'react'

const LeftSidebar = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm w-full lg:fixed lg:left-6 lg:top-6 lg:w-[calc((100vw-6rem-3rem)/12*3)] lg:h-[calc(100vh-3rem)] overflow-hidden" style={{backgroundColor: '#2d2d2d'}}>
        <div className="space-y-6">
        {/* Contact Info */}
        <div>
            <img src="/portfolio.png" alt="Indrajit V - Frontend Engineer profile photo" className="w-1/2 h-auto" loading="lazy" />
        </div>
        <div>
            <div className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="font-medium font-semibold" style={{color: 'rgb(244, 241, 210)'}}>Indrajit V</h3>
                <p className="text-xs font-semibold" style={{color: 'rgb(244, 241, 210)'}}>San Francisco</p>
                {/* <p className="text-sm text-gray-600">(415)-798-1231</p> */}
            </div>
            
            <div className="space-y-3">
            <p className="text-xs font-semibold" style={{color: 'rgb(244, 241, 210)'}}>Email: <a href="mailto:vindrajit1996@gmail.com" className="underline" style={{color: 'hsl(208, 59%, 60%)'}}>vindrajit1996@gmail.com</a></p>
            <div className="flex space-x-4">
                <a href="https://github.com/Indrajit1996" style={{color: 'rgb(244, 241, 210)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(200, 190, 150)'} onMouseLeave={(e) => e.target.style.color = 'rgb(244, 241, 210)'} title="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                </a>
                <a href="https://www.linkedin.com/in/indrajit-vaidyanathan/" style={{color: 'rgb(244, 241, 210)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(200, 190, 150)'} onMouseLeave={(e) => e.target.style.color = 'rgb(244, 241, 210)'} title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                </a>
                <a href="https://medium.com/@vindrajit1996" style={{color: 'rgb(244, 241, 210)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(200, 190, 150)'} onMouseLeave={(e) => e.target.style.color = 'rgb(244, 241, 210)'} title="Medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                </a>
                <a href="https://leetcode.com/u/Indra1996/" style={{color: 'rgb(244, 241, 210)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(200, 190, 150)'} onMouseLeave={(e) => e.target.style.color = 'rgb(244, 241, 210)'} title="LeetCode">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/>
                </svg>
                </a>
            </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4">
            <div>
                <p className="text-xs font-semibold leading-relaxed" style={{color: 'rgb(244, 241, 210)'}}>
                    I create visually precise interfaces and transform ideas into working products.
                    I'm a Frontend Engineer obsessed with clean, efficient code and exploring AI's potential in shaping the future of the web.
                </p>
                <p className="text-xs font-semibold italic mt-3 border-l-2 border-gray-200 pl-3" style={{color: 'rgb(244, 241, 210)'}}>
                    "Simplicity is the ultimate sophistication in code."
                    <span className="block text-xs font-semibold mt-1" style={{color: 'rgb(244, 241, 210)'}}>— TypeScript Architect</span>
                </p>
            </div>
            
            {/* Resume Download */}
            <div className="text-center mt-6">
                <a 
                    href="https://drive.google.com/uc?export=download&id=19y8tui9HI9hkfr8ZGJNAtnk9NfEb6wcI"
                    download="Resume.pdf"
                    className="inline-block bg-transparent border border-gray-300 text-xs font-semibold py-2 px-4 rounded-lg hover:scale-[1.005] transition-all duration-300 cursor-pointer"
                    style={{color: 'rgb(244, 241, 210)', borderColor: 'rgb(244, 241, 210)'}}
                >
                    Click here - Download Resume ↗
                </a>
            </div>
            
            {/* <p className="text-sm text-gray-800">
                Morbi eu bibendum justo. Aliquam erat volutpat.
            </p> */}
        </div>
        </div>
    </div>
  )
}

export default LeftSidebar;
