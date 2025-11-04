
import React from 'react';

export default function MainContent() {
  const [showAudio, setShowAudio] = React.useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-sm w-full" style={{backgroundColor: 'transparent' , zIndex: 5}}>
      {showAudio && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ zIndex: 1000 }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowAudio(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-lg font-semibold">Battalion CRM Audio</h3>
              <button 
                onClick={() => setShowAudio(false)}
                className="text-white hover:text-gray-300 text-xl font-bold"
              >
                ✕
              </button>
            </div>
            
            <audio controls className="w-full" autoPlay>
              <source src="/Project_battalion.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
      <div className="h-full flex flex-col">
        {/* Hero Section */}
        <hr className="border-[rgb(244,241,210)] mt-6" />
        <header className="p-6 pl-0 pr-0 ">
          <h1 className="text-4xl font-semibold mb-6 text-left" style={{color: '#ff6a3b'}}>Software Engineer</h1>
          <p className="mb-3 text-left font-[600] text-2xl" style={{color: 'rgba(236,234,204,255)'}}>
            Experienced software engineer with 6+ years building scalable, user-centric interfaces. 
            Passionate about end-to-end ownership from concept to deployment.
          </p>
        </header>
        
        <div className="flex-1 p-6 pl-0 pr-0">
          <div className="prose prose-gray max-w-none">
            {/* Featured Projects Section rgb(255, 140, 60) */}
            <section id="featured-projects" className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 " style={{color: 'rgb(244, 241, 210)'}}>Featured Projects</h2>
              <div className="space-y-6">
                {/* Project 1: Battalion CRM */}
                <div className="rounded-lg cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base font-semibold sm:w-auto w-[50%]" style={{color: 'rgb(244, 241, 210)'}}>Battalion CRM</h3>
                    <div className="flex space-x-3 sm:w-auto w-[50%] justify-end">
                      <span className="text-xs font-semibold cursor-pointer hover:underline" style={{color: 'rgb(255, 140, 60)'}} onClick={() => { window.open('https://battalion.fly.dev/', '_blank') }}>Live Demo ↗</span>
                      <a href="https://github.com/matthewharwood/Battalion" 
                        className="text-xs font-semibold hover:underline" style={{color: 'rgb(255, 140, 60)'}}>
                          GitHub ↗
                      </a>
                      
                    </div>
                  </div>
                  <p className="font-semibold text-xs " style={{color: 'rgb(244, 241, 210)'}}>
                    Real-time CRM platform built with Rust and Axum for scalable client onboarding and management.
                  </p>
                  <span className="inline-block mb-3">
                    <button 
                      onClick={() => setShowAudio(!showAudio)}
                      className="text-xs font-semibold cursor-pointer hover:underline" 
                      style={{color: 'rgb(255, 140, 60)'}}
                    >
                      Click here to play audio ↗
                    </button>
                  </span>
                  <div className="flex flex-wrap gap-2 mb-3 ">
                    <span className="text-xs text-gray-400" >Rust</span>
                    <span className="text-xs text-gray-400" >Axum</span>
                    <span className="text-xs text-gray-400" >HTML</span>
                    <span className="text-xs text-gray-400" >SurrealDb</span>
                  </div>
                  <p className="text-xs font-semibold " style={{color: 'rgb(244, 241, 210)'}}>⚡ Let the battle of resumes begin</p>
                </div>
                
                {/* Project 2: Auto-Caller App */}
                <div className="rounded-lg cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base font-semibold sm:w-auto w-[50%]" style={{color: 'rgb(244, 241, 210)'}}>Auto-Caller App</h3>
                    <div className="flex space-x-3 sm:w-auto w-[50%] justify-end">
                      <span className="text-xs font-semibold cursor-not-allowed" style={{color: 'rgb(244, 241, 210)', opacity: 0.6}}>Live Demo ↗</span>
                      <a href="https://github.com/Indrajit1996/Auto-Caller" 
                        className="text-xs font-semibold hover:underline" style={{color: 'rgb(255, 140, 60)'}}>
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                  <p className="mb-3 font-semibold text-xs " style={{color: 'rgb(244, 241, 210)'}}>AI-powered outreach platform for elderly care with automated calling features and real-time monitoring.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs text-gray-400">React</span>
                    <span className="text-xs text-gray-400">TypeScript</span>
                    <span className="text-xs text-gray-400">Vite</span>
                    <span className="text-xs text-gray-400">Flask</span>
                    <span className="text-xs text-gray-400">Redis</span>
                    <span className="text-xs text-gray-400">Docker</span>
                    <span className="text-xs text-gray-400">AI Integration</span>
                    <span className="text-xs text-gray-400">Micro-frontend</span>
                  </div>
                  <p className="text-xs font-semibold " style={{color: 'rgb(244, 241, 210)'}}>📈 100+ downloads</p>
                </div>

                {/* Project 3: Scalable Frontend Architecture */}
                <div className="rounded-lg cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base font-semibold sm:w-auto w-[70%]" style={{color: 'rgb(244, 241, 210)'}}>Scalable Frontend Architecture</h3>
                    <div className="flex space-x-3 sm:w-auto w-[30%] justify-end">
                      {/* <a href="#" className="text-sm text-blue-600 hover:underline">Documentation ↗</a> */}
                      <a href="https://github.com/Indrajit1996/Redux-sagas-using-typescript" 
                        className="text-xs font-semibold hover:underline" style={{color: 'rgb(255, 140, 60)'}}>
                          GitHub ↗
                      </a>
                    </div>
                  </div>
                  <p className="mb-3 font-semibold text-xs " style={{color: 'rgb(244, 241, 210)'}}>React + Typescript + Redux-Saga framework for modular, maintainable architecture.</p>
                  <div className="flex flex-wrap gap-2 mb-3 ">
                    <span className="text-xs text-gray-400">React</span>
                    <span className="text-xs text-gray-400">TypeScript</span>
                    <span className="text-xs text-gray-400">Redux-Saga</span>
                  </div>
                  <p className="text-xs font-semibold " style={{color: 'rgb(244, 241, 210)'}}>⚡ 40% faster release velocity</p>
                </div>

              </div>
            </section>

            {/* Timeline Section */}
            <section id="professional-journey" className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 " style={{color: 'rgb(244, 241, 210)'}}>Professional Journey</h2>
              <div className="timeline-holder relative">
                <div className="absolute left-2 sm:left-4 w-px bg-gray-300" style={{top: '1rem', bottom: '6.9rem'}}></div>
                <style jsx>{`
                  @media (max-width: 375px) {
                    .timeline-holder > div:first-child {
                      bottom: 8rem !important;
                    }
                  }
                  @media (min-width: 540px) and (max-width: 639px) {
                    .timeline-holder > div:first-child {
                      bottom: 5.8rem !important;
                    }
                  }
                  @media (min-width: 640px) and (max-width: 820px) {
                    .timeline-holder > div:first-child {
                      bottom: 5rem !important;
                    }
                  }
                  @media (min-width: 821px) and (max-width: 852px) {
                    .timeline-holder > div:first-child {
                      bottom: 6.2rem !important;
                    }
                  }
                  @media (min-width: 853px) and (max-width: 911px) {
                    .timeline-holder > div:first-child {
                      bottom: 4.9rem !important;
                    }
                  }
                  @media (min-width: 912px) and (max-width: 1023px) {
                    .timeline-holder > div:first-child {
                      bottom: 5rem !important;
                    }
                  }
                  @media (min-width: 1024px) and (max-width: 1024px) {
                    .timeline-holder > div:first-child {
                      bottom: 5.8rem !important;
                    }
                  }
                  @media (min-width: 1025px) and (max-width: 1366px) {
                    .timeline-holder > div:first-child {
                      bottom: 5rem !important;
                    }
                  }
                  @media (min-width: 1367px) {
                    .timeline-holder > div:first-child {
                      bottom: 5.5rem !important;
                    }
                  }
                `}</style>
                
                {/* ASU Decision Theater */}
                <div className="relative flex items-start mb-8 ">
                  <div className="absolute left-0.5 sm:left-2.5 w-3 h-3 bg-[rgb(244,241,210)] rounded-full border border-[rgb(244,241,210)] shadow" style={{top: '0.5rem'}}></div>
                  <div className="ml-6 sm:ml-10 flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
                      <h3 className="text-base font-semibold" style={{color: 'rgb(244, 241, 210)'}}>ASU Decision Theater</h3>
                      <span className="text-xs font-semibold" style={{color: 'rgb(244, 241, 210)'}}>Oct 2023 - Present</span>
                    </div>
                    <p className="text-xs font-semibold mb-3" style={{color: 'rgb(244, 241, 210)'}}>Software Engineer</p>
                    <div className="bg-gray-50" style={{background: 'transparent'}}>
                      <p className="text-xs italic break-words" style={{color: 'rgb(244, 241, 210)'}}>
                        Marking a significant career milestone. 
                        Meeting exceptional people, exchanging insights, and embracing big-picture perspectives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plivo */}
                <div className="relative flex items-start mb-8">
                  <div className="absolute left-0.5 sm:left-2.5 w-3 h-3 bg-[rgb(244,241,210)] rounded-full border border-[rgb(244,241,210)] shadow" style={{top: '0.5rem'}}></div>
                  <div className="ml-6 sm:ml-10 flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0 ">
                      <h3 className="text-base font-semibold " style={{color: 'rgb(244, 241, 210)'}}>Plivo</h3>
                      <span className="text-xs font-semibold" style={{color: 'rgb(244, 241, 210)'}}>Jun 2021 - Apr 2023</span>
                    </div>
                    <p className="text-xs font-semibold mb-3 " style={{color: 'rgb(244, 241, 210)'}}>Software Engineer</p>
                    <div className="bg-gray-50" style={{background: 'transparent'}}>
                      <p className="text-xs italic break-words " style={{color: 'rgb(244, 241, 210)'}}>
                        became part of Contacto's product engineering team, working with a robust tech stack that included Electron, React, Vue, Redux, SCSS, and other tools.
                      </p>
                      <p className="mt-2 text-xs" style={{color: 'rgb(244, 241, 210)'}}>
                        <a href="https://console.contacto.com/" target="_blank" rel="noopener noreferrer" className="underline break-all" style={{color: 'rgb(255, 140, 60)'}}>https://console.contacto.com/</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recro */}
                <div className="relative flex items-start mb-8">
                  <div className="absolute left-0.5 sm:left-2.5 w-3 h-3 bg-[rgb(244,241,210)] rounded-full border border-[rgb(244,241,210)] shadow" style={{top: '0.5rem'}}></div>
                  <div className="ml-6 sm:ml-10 flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0 ">
                      <h3 className="text-base font-semibold" style={{color: 'rgb(244, 241, 210)'}}>Recro</h3>
                      <span className="text-xs font-semibold" style={{color: 'rgb(244, 241, 210)'}}>Aug 2020 - Jun 2021</span>
                    </div>
                    <p className="text-xs font-semibold mb-3 " style={{color: 'rgb(244, 241, 210)'}}>Software Engineer</p>
                    <div className="bg-gray-50" style={{background: 'transparent'}}>
                      <p className="text-xs italic break-words " style={{color: 'rgb(244, 241, 210)' }}>
                        Serving as a Frontend Developer at Recro gave me the freedom to develop high-performing pages for TV and OTT apps.
                        One of the most challenging aspects of my career. Built an entire Netflix like app from scratch with a talented team of 5 members.
                      </p>
                      <p className="mt-2 text-xs" style={{color: 'rgb(244, 241, 210)'}}>
                        <a href="https://web.jawwy.tv/ar/login" target="_blank" rel="noopener noreferrer" className="underline break-all" style={{color: 'rgb(255, 140, 60)'}}>https://web.jawwy.tv/ar/login</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Weinvest */}
                <div className="relative flex items-start mb-8">
                  <div className="absolute left-0.5 sm:left-2.5 w-3 h-3 bg-[rgb(244,241,210)] rounded-full border border-[rgb(244,241,210)] shadow" style={{top: '0.5rem'}}></div>
                  <div className="ml-6 sm:ml-10 flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0 ">
                      <h3 className="text-base font-semibold" style={{color: 'rgb(244, 241, 210)'}}>Weinvest</h3>
                      <span className="text-xs font-semibold" style={{color: 'rgb(244, 241, 210)'}}>Aug 2018 - Dec 2019</span>
                    </div>
                    <p className="text-xs font-semibold mb-3 " style={{color: 'rgb(244, 241, 210)'}}>Software Engineer</p>
                    <div className="bg-gray-50" style={{background: 'transparent'}}>
                      <p className="text-xs italic break-words " style={{color: 'rgb(244, 241, 210)'}}>
                        Fate smiled as I transitioned to the web development team, taking charge of crafting Single Page Applications using React , Vuejs and Ruby On Rails.
                      </p>
                      <p className="mt-2 text-xs" style={{color: 'rgb(244, 241, 210)'}}>
                        <a href="https://www.weinvest.net/" target="_blank" rel="noopener noreferrer" className="underline break-all" style={{color: 'rgb(255, 140, 60)'}}>https://www.weinvest.net/</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* EFI */}
                <div className="relative flex items-start mb-8">
                  <div className="absolute left-0.5 sm:left-2.5 w-3 h-3 bg-[rgb(244,241,210)] rounded-full border border-[rgb(244,241,210)] shadow top-2 md:top-0"></div>
                  <div className="ml-6 sm:ml-10 flex-1 min-w-0" style={{position: 'relative', bottom: '0.5rem'}}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0 ">
                      <h3 className="text-base font-semibold" style={{color: 'rgb(244, 241, 210)'}}>EFI</h3>
                      <span className="text-xs font-semibold" style={{color: 'rgb(244, 241, 210)'}}>Jan 2018 - Jun 2018</span>
                    </div>
                    <p className="text-xs font-semibold mb-3" style={{color: 'rgb(244, 241, 210)'}}>Intern Software Developer</p>
                    <div className="bg-gray-50" style={{background: 'transparent'}}>
                      <p className="text-xs italic break-words " style={{color: 'rgb(244, 241, 210)'}}>
                        I started my journey as a Software Engineer, working as a Java developer with the Spring framework. It was a big learning curve, and I'm grateful for the opportunity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Blogs Section */}
            <section id="blogs" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 " style={{color: 'rgb(244, 241, 210)'}}>Blogs</h2>
              <div className="space-y-6">
                <div className="rounded-lg cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base font-semibold sm:w-auto w-[70%]" style={{color: 'rgb(244, 241, 210)'}}>Understand Web Fundamentals</h3>
                    <a href="https://medium.com/@vindrajit1996/understand-web-fundamentals-2d0edb87e0cc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-semibold hover:underline sm:w-auto w-[30%] sm:text-left text-right" style={{color: 'rgb(255, 140, 60)'}}>
                        Read More ↗
                    </a>
                  </div>
                  <p className="mb-3 font-semibold text-xs " style={{color: 'rgb(244, 241, 210)'}}>
                    A comprehensive guide to understanding the core concepts of web development.
                  </p>
                </div>

                <div className="rounded-lg cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base font-semibold sm:w-auto w-[70%]" style={{color: 'rgb(244, 241, 210)'}}>Leptos in Action: Full-stack Web Dev the Rusty Way</h3>
                    <a href="https://medium.com/@vindrajit1996/leptos-in-action-full-stack-web-dev-the-rusty-way-07536449a417" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-semibold hover:underline sm:w-auto w-[30%] sm:text-left text-right" style={{color: 'rgb(255, 140, 60)'}}>
                        Read More ↗
                    </a>
                  </div>
                  <p className="mb-3 font-semibold text-xs " style={{color: 'rgb(244, 241, 210)'}}>
                    Exploring full-stack web development using Leptos and the Rust ecosystem.
                  </p>
                </div>

                <div className="rounded-lg cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base font-semibold sm:w-auto w-[70%]" style={{color: 'rgb(244, 241, 210)'}}>How Does JavaScript V8 Engine Works</h3>
                    <a href="https://medium.com/@vindrajit1996/how-does-javascript-v8-engine-works-8756648e592f" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-semibold hover:underline sm:w-auto w-[30%] sm:text-left text-right" style={{color: 'rgb(255, 140, 60)'}}>
                        Read More ↗
                    </a>
                  </div>
                  <p className="mb-3 font-semibold text-xs " style={{color: 'rgb(244, 241, 210)'}}>
                    Deep dive into the inner workings of Chrome's V8 JavaScript engine.
                  </p>
                </div>

                <div className="rounded-lg cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base font-semibold sm:w-auto w-[70%]" style={{color: 'rgb(244, 241, 210)'}}>React Hooks</h3>
                    <a href="https://medium.com/@vindrajit1996/react-hooks-b8145d83e416" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-semibold hover:underline sm:w-auto w-[30%] sm:text-left text-right" style={{color: 'rgb(255, 140, 60)'}}>
                        Read More ↗
                    </a>
                  </div>
                  <p className="mb-3 font-semibold text-xs " style={{color: 'rgb(244, 241, 210)'}}>
                    Understanding React Hooks and how they revolutionize functional components.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}