import React from 'react';
import { Download, TrendingUp, Target, Zap, Users } from 'lucide-react';

export default function EbookSection() {
  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Ebook Cover */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Ebook Cover Image */}
            <img 
              src="https://imagesexpresstxt.s3.ap-southeast-2.amazonaws.com/E-book+cover.png" 
              alt="Cover of The Future of Marketing Ebook"
              className="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Discover the Future of Marketing –<br />
                Are You Ready?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Uncover the breakthrough strategies that will define marketing success in 2025 and beyond. 
                <span className="italic"> The Future of Marketing: Key Trends to Shape Your Strategy for Success</span> is 
                your inside track to:
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-orange-400" />
                </div>
                <p className="text-slate-300">
                  <span className="font-semibold text-white">🔍 Emerging AI-driven tools</span> reshaping brand visibility
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                  <Target className="h-5 w-5 text-blue-400" />
                </div>
                <p className="text-slate-300">
                  <span className="font-semibold text-white">💡 Predictive insights</span> to outsmart shifting consumer behaviors
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <p className="text-slate-300">
                  <span className="font-semibold text-white">🎯 Actionable tactics</span> tailored for fast-paced, multi-platform campaigns
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-cyan-500/20 p-2 rounded-lg flex-shrink-0">
                  <Users className="h-5 w-5 text-cyan-400" />
                </div>
                <p className="text-slate-300">
                  <span className="font-semibold text-white">🚀 Thought leadership</span> to future-proof your brand and business
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-slate-300">
                This isn't just another marketing guide—it's a forward-looking <span className="italic">playbook</span> for 
                entrepreneurs, marketers, and creatives serious about staying ahead of the curve.
              </p>
              
              <p className="text-white font-semibold flex items-center space-x-2">
                <span>👉</span>
                <span>Download your copy today and start shaping tomorrow's success, today.</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/30">
                <span className="flex items-center justify-center space-x-3">
                  <span>GET THE E-BOOK NOW</span>
                  <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}