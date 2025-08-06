import React from 'react';

export default function MainContent() {
  return (
    <div className="col-span-6 bg-white rounded-lg shadow-sm mx-auto" style={{width: 'calc((100vw - 6rem - 3rem) / 12 * 6.5)',backgroundColor: '#2d2d2d' }}>
      <div className="h-full flex flex-col">
        {/* Hero Section */}
        <div className="p-6 border-b rgb(244, 241, 210)">
          <h1 className="text-2xl font-medium mb-6" style={{color: 'rgb(244, 241, 210)'}}>Passionate Engineer</h1>
          <p className="mb-3" style={{color: 'rgb(244, 241, 210)'}}>
            Experienced software engineer with 6+ years building scalable, user-centric interfaces. 
            Passionate about end-to-end ownership from concept to deployment.
          </p>
          <p className="text-sm font-medium cursor-pointer" style={{color: 'hsl(208, 59%, 60%)'}}
            onClick={() => {
              window.open('https://dt.asu.edu/solutions', '_blank')
            }} 
          >
            Software Engineer at Decision Theater, ASU
          </p>
        </div>
        
        <div className="flex-1 p-6">
          <div className="prose prose-gray max-w-none">
            {/* Featured Projects Section */}
            <section id="featured-projects" className="mb-8">
              <h2 className="text-2xl font-medium mb-6" style={{color: 'rgb(244, 241, 210)'}}>Featured Projects</h2>
              <div className="space-y-6">
                {/* Project 1: Battalion CRM */}
                <div className="border rgb(244, 241, 210) rounded-lg p-6 hover:shadow-md hover:scale-[1.005] transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium" style={{color: 'rgb(244, 241, 210)'}}>Battalion CRM</h3>
                    <div className="flex space-x-3">
                      <span className="text-sm cursor-not-allowed" style={{color: 'rgb(244, 241, 210)', opacity: 0.6}}>Live Demo ↗</span>
                      <a href="https://github.com/matthewharwood/Battalion" 
                        className="text-sm hover:underline" style={{color: 'hsl(208, 59%, 60%)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(200, 190, 150)'} onMouseLeave={(e) => e.target.style.color = 'rgb(244, 241, 210)'}>
                          GitHub ↗
                      </a>
                    </div>
                  </div>
                  <p className="mb-3" style={{color: 'rgb(244, 241, 210)'}}>Real-time CRM platform built with Rust and Axum for scalable client onboarding and management.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">Rust</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">Axum</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">HTML</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">SurrealDb</span>
                  </div>
                  <p className="text-sm font-medium" style={{color: 'rgb(244, 241, 210)'}}>⚡ Let the battle of resumes begin</p>
                </div>
                
                {/* Project 2: Auto-Caller App */}
                <div className="border rgb(244, 241, 210) rounded-lg p-6 hover:shadow-md hover:scale-[1.005] transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium" style={{color: 'rgb(244, 241, 210)'}}>Auto-Caller App</h3>
                    <div className="flex space-x-3">
                      <span className="text-sm cursor-not-allowed" style={{color: 'rgb(244, 241, 210)', opacity: 0.6}}>Live Demo ↗</span>
                      <a href="https://github.com/Indrajit1996/Auto-Caller" 
                        className="text-sm hover:underline" style={{color: 'hsl(208, 59%, 60%)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(200, 190, 150)'} onMouseLeave={(e) => e.target.style.color = 'rgb(244, 241, 210)'}>
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                  <p className="mb-3" style={{color: 'rgb(244, 241, 210)'}}>AI-powered outreach platform for elderly care with automated calling features and real-time monitoring.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">TypeScript</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">Vite</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">Flask</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">Redis</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">Docker</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">AI Integration</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">Micro-frontend</span>
                  </div>
                  <p className="text-sm font-medium" style={{color: 'rgb(244, 241, 210)'}}>📈 100+ downloads</p>
                </div>

                {/* Project 3: Scalable Frontend Architecture */}
                <div className="border rgb(244, 241, 210) rounded-lg p-6 hover:shadow-md hover:scale-[1.005] transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium" style={{color: 'rgb(244, 241, 210)'}}>Scalable Frontend Architecture</h3>
                    <div className="flex space-x-3">
                      {/* <a href="#" className="text-sm text-blue-600 hover:underline">Documentation ↗</a> */}
                      <a href="https://github.com/Indrajit1996/Redux-sagas-using-typescript" 
                        className="text-sm hover:underline" style={{color: 'hsl(208, 59%, 60%)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(200, 190, 150)'} onMouseLeave={(e) => e.target.style.color = 'rgb(244, 241, 210)'}>
                          GitHub ↗
                      </a>
                    </div>
                  </div>
                  <p className="mb-3" style={{color: 'rgb(244, 241, 210)'}}>React + Typescript + Redux-Saga framework for modular, maintainable architecture.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">TypeScript</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">Redux-Saga</span>
                  </div>
                  <p className="text-sm font-medium" style={{color: 'rgb(244, 241, 210)'}}>⚡ 40% faster release velocity</p>
                </div>

              </div>
            </section>

            {/* Timeline Section */}
            <section id="professional-journey" className="mb-8">
              <h2 className="text-2xl font-medium mb-6" style={{color: 'rgb(244, 241, 210)'}}>Professional Journey</h2>
              <div className="timeline-holder relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300"></div>
                
                {/* ASU Decision Theater */}
                <div className="relative flex items-start mb-8">
                  <div className="absolute left-2 w-4 h-4 bg-[rgb(244,241,210)] rounded-full border-2 border-[rgb(244,241,210)] shadow"></div>
                  <div className="ml-10">
                    <div className="flex items-center justify-between mb-2 w-80">
                      <h3 className="text-lg font-medium" style={{color: 'rgb(244, 241, 210)'}}>ASU Decision Theater</h3>
                      <span className="text-sm" style={{color: 'rgb(244, 241, 210)'}}>Oct 2023 - Present</span>
                    </div>
                    <p className="text-sm mb-3" style={{color: 'rgb(244, 241, 210)'}}>Software Engineer</p>
                    <div className="bg-gray-50 p-4 rounded-lg border rgb(244, 241, 210)" style={{background: 'transparent'}}>
                      <p className="text-sm italic max-w-md break-words" style={{color: 'rgb(244, 241, 210)'}}>
                        Marking a significant career milestone. 
                        Meeting exceptional people, exchanging insights, and embracing big-picture perspectives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plivo */}
                <div className="relative flex items-start mb-8">
                  <div className="absolute left-2 w-4 h-4 bg-[rgb(244,241,210)] rounded-full border-2 border-[rgb(244,241,210)] shadow"></div>
                  <div className="ml-10">
                    <div className="flex items-center justify-between mb-2 w-80">
                      <h3 className="text-lg font-medium" style={{color: 'rgb(244, 241, 210)'}}>Plivo</h3>
                      <span className="text-sm" style={{color: 'rgb(244, 241, 210)'}}>Jun 2021 - Apr 2023</span>
                    </div>
                    <p className="text-sm mb-3" style={{color: 'rgb(244, 241, 210)'}}>Software Engineer</p>
                    <div className="bg-gray-50 p-4 rounded-lg border rgb(244, 241, 210)" style={{background: 'transparent'}}>
                      <p className="text-sm italic max-w-md break-words" style={{color: 'rgb(244, 241, 210)'}}>
                        became part of Contacto's product engineering team, working with a robust tech stack that included Electron, React, Vue, Redux, SCSS, and other tools.
                        <p>Link: <a href="https://console.contacto.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{color: 'hsl(208, 59%, 60%)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(200, 190, 150)'} onMouseLeave={(e) => e.target.style.color = 'rgb(244, 241, 210)'}>https://console.contacto.com/</a></p>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recro */}
                <div className="relative flex items-start mb-8">
                  <div className="absolute left-2 w-4 h-4 bg-[rgb(244,241,210)] rounded-full border-2 border-[rgb(244,241,210)] shadow"></div>
                  <div className="ml-10">
                    <div className="flex items-center justify-between mb-2 w-80">
                      <h3 className="text-lg font-medium" style={{color: 'rgb(244, 241, 210)'}}>Recro</h3>
                      <span className="text-sm" style={{color: 'rgb(244, 241, 210)'}}>Aug 2020 - Jun 2021</span>
                    </div>
                    <p className="text-sm mb-3" style={{color: 'rgb(244, 241, 210)'}}>Software Engineer</p>
                    <div className="bg-gray-50 p-4 rounded-lg border rgb(244, 241, 210)" style={{background: 'transparent'}}>
                      <p className="text-sm italic max-w-md break-words" style={{color: 'rgb(244, 241, 210)' }}>
                        Serving as a Frontend Developer at Recro gave me the freedom to develop high-performing pages for TV and OTT apps.
                        One of the most challenging aspects of my career. Built an entire Netflix like app from scratch with a talented team of 5 members.
                        <p>Link : <a href="https://web.jawwy.tv/ar/login" target="_blank" rel="noopener noreferrer" className="underline" style={{color: 'hsl(208, 59%, 60%)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(200, 190, 150)'} onMouseLeave={(e) => e.target.style.color = 'rgb(244, 241, 210)'}>https://web.jawwy.tv/ar/login</a></p>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Weinvest */}
                <div className="relative flex items-start mb-8">
                  <div className="absolute left-2 w-4 h-4 bg-[rgb(244,241,210)] rounded-full border-2 border-[rgb(244,241,210)] shadow"></div>
                  <div className="ml-10">
                    <div className="flex items-center justify-between mb-2 w-80">
                      <h3 className="text-lg font-medium" style={{color: 'rgb(244, 241, 210)'}}>Weinvest</h3>
                      <span className="text-sm" style={{color: 'rgb(244, 241, 210)'}}>Aug 2018 - Dec 2019</span>
                    </div>
                    <p className="text-sm mb-3" style={{color: 'rgb(244, 241, 210)'}}>Software Engineer</p>
                    <div className="bg-gray-50 p-4 rounded-lg border rgb(244, 241, 210)" style={{background: 'transparent'}}>
                      <p className="text-sm italic max-w-md break-words" style={{color: 'rgb(244, 241, 210)'}}>
                        Fate smiled as I transitioned to the web development team, taking charge of crafting Single Page Applications using React , Vuejs and Ruby On Rails.
                        <p>Link : <a href="https://web.jawwy.tv/ar/login" target="_blank" rel="noopener noreferrer" className="underline" style={{color: 'hsl(208, 59%, 60%)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(200, 190, 150)'} onMouseLeave={(e) => e.target.style.color = 'rgb(244, 241, 210)'}>https://www.weinvest.net/</a> </p>
                      </p>
                    </div>
                  </div>
                </div>

                {/* EFI */}
                <div className="relative flex items-start mb-8">
                  <div className="absolute left-2 w-4 h-4 bg-[rgb(244,241,210)] rounded-full border-2 border-[rgb(244,241,210)] shadow"></div>
                  <div className="ml-10">
                    <div className="flex items-center justify-between mb-2 w-80">
                      <h3 className="text-lg font-medium" style={{color: 'rgb(244, 241, 210)'}}>EFI</h3>
                      <span className="text-sm" style={{color: 'rgb(244, 241, 210)'}}>Jan 2018 - Jun 2018</span>
                    </div>
                    <p className="text-sm mb-3" style={{color: 'rgb(244, 241, 210)'}}>Intern Software Developer</p>
                    <div className="bg-gray-50 p-4 rounded-lg border rgb(244, 241, 210)" style={{background: 'transparent'}}>
                      <p className="text-sm italic max-w-md break-words" style={{color: 'rgb(244, 241, 210)'}}>
                        I started my journey as a Software Engineer, working as a Java developer with the Spring framework. It was a big learning curve, and I'm grateful for the opportunity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Blogs Section */}
            <section id="blogs" className="mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm" style={{backgroundColor: '#2d2d2d'}}>
                <h2 className="text-2xl font-medium mb-6" style={{color: 'rgb(244, 241, 210)'}}>Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a 
                    href="https://medium.com/@vindrajit1996/understand-web-fundamentals-2d0edb87e0cc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border rgb(244, 241, 210) hover:scale-[1.005] transition-all duration-300"
                    style={{background: 'transparent'}}
                  >
                    <h3 className="text-lg font-semibold mb-2" style={{color: 'rgb(244, 241, 210)'}}>Understand Web Fundamentals</h3>
                    <p className="text-sm" style={{color: 'rgb(244, 241, 210)'}}>A comprehensive guide to understanding the core concepts of web development.</p>
                  </a>

                  <a 
                    href="https://medium.com/@vindrajit1996/leptos-in-action-full-stack-web-dev-the-rusty-way-07536449a417" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border rgb(244, 241, 210) hover:scale-[1.005] transition-all duration-300"
                    style={{background: 'transparent'}}
                  >
                    <h3 className="text-lg font-semibold mb-2" style={{color: 'rgb(244, 241, 210)'}}>Leptos in Action: Full-stack Web Dev the Rusty Way</h3>
                    <p className="text-sm" style={{color: 'rgb(244, 241, 210)'}}>Exploring full-stack web development using Leptos and the Rust ecosystem.</p>
                  </a>

                  <a 
                    href="https://medium.com/@vindrajit1996/how-does-javascript-v8-engine-works-8756648e592f" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border rgb(244, 241, 210) hover:scale-[1.005] transition-all duration-300"
                    style={{background: 'transparent'}}
                  >
                    <h3 className="text-lg font-semibold mb-2" style={{color: 'rgb(244, 241, 210)'}}>How Does JavaScript V8 Engine Works</h3>
                    <p className="text-sm" style={{color: 'rgb(244, 241, 210)'}}>Deep dive into the inner workings of Chrome's V8 JavaScript engine.</p>
                  </a>

                  <a 
                    href="https://medium.com/@vindrajit1996/react-hooks-b8145d83e416" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors hover:scale-[1.005] transition-all duration-300 cursor-pointer border rgb(244, 241, 210)"
                    style={{background: 'transparent'}}
                  >
                    <h3 className="text-lg font-semibold mb-2" style={{color: 'rgb(244, 241, 210)'}}>React Hooks</h3>
                    <p className="text-sm" style={{color: 'rgb(244, 241, 210)'}}>Understanding React Hooks and how they revolutionize functional components.</p>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}