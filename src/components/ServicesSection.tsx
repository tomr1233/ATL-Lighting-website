import React from 'react';
import { ArrowRight, CheckCircle, Globe, Shield, Zap, Monitor } from 'lucide-react';

export default function ServicesSection() {
  return (
    <div className="bg-slate-900 pt-4 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-5xl mx-auto">
            Are you looking for <span className="text-sky-400 font-semibold">high-quality LED displays</span> and <span className="text-sky-400 font-semibold">digital signage solutions</span> to elevate your business? At ATL Visual Tec, we partner with leading manufacturers to bring you cutting-edge technology that captivates your audience and drives results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Unbeatable Quality */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-sky-400 to-blue-600 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white font-bold text-xl mb-4">Unbeatable Quality from Leading Manufacturers</h3>
            <p className="text-slate-400 leading-relaxed">
              We work directly with top-tier manufacturers, eliminating the middleman and ensuring you get the best possible digital displays at competitive prices. Our commitment to quality means you can trust our products to deliver exceptional performance and reliability.
            </p>
          </div>

          {/* Cost-Effective Solutions */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white font-bold text-xl mb-4">Cost-Effective Solutions Without Compromise</h3>
            <p className="text-slate-400 leading-relaxed">
              Save money on high-quality LED screens with our direct-to-manufacturer pricing. We believe that premium quality shouldn't come with a premium price tag.
            </p>
          </div>

          {/* Reliable Performance */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-400 to-violet-600 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
              <Monitor className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white font-bold text-xl mb-4">Reliable Performance for Any Application</h3>
            <p className="text-slate-400 leading-relaxed">
              Whether you need <span className="text-sky-300">digital signage for advertising</span>, eye-catching <span className="text-sky-300">video walls for your retail space</span>, or interactive displays for presentations, our products are built to last and deliver stunning visuals every time.
            </p>
          </div>

          {/* Global Reach */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-orange-400 to-red-600 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white font-bold text-xl mb-4">Global Reach, Local Expertise</h3>
            <p className="text-slate-400 leading-relaxed">
              We offer <span className="text-sky-300">worldwide shipping</span> and support, ensuring your digital displays arrive on time and perform flawlessly wherever you are.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
        

          {/* Contact Button */}
          <div className="mt-8">
            <button className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-sky-500/25">
              <span className="flex items-center justify-center space-x-3">
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}