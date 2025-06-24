import React from 'react';

export default function VideoSection() {
  return (
    <div className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Container */}
        <div className="relative w-full max-w-5xl mx-auto mb-12">
          {/* Responsive wrapper for the iframe */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/Y0d9ak1RhyY" 
              title="🚀 AI-Driven Interactive Displays: Revolutionize Engagement with ATL Visual Technology! 🎬" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-2xl blur-xl -z-10"></div>
        </div>

        {/* New Text Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Captivate Your Audience with ATL Visual Tec's
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              High-Impact Digital Displays
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}