import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="relative bg-slate-800 border-t border-slate-700/50"
      style={{
        backgroundImage: 'url(https://lh6.googleusercontent.com/vtK6eZY5q0-bf8pWRnAz2faKMmXNAgF96m4ywd0wlxvsIsdSm5ORmf9zqiHB_rVXop09ly4ZuF26OXwIlZCuQ0zXyCJHpogODVamVNe4yS6NdWN7RgRvPzpmF8QToVpp6uLtf-EpgXY=w16383)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Address */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-lg mb-4">ATL Lighting Systems Ltd.</h3>
            <div className="flex items-start space-x-3 text-slate-200">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-sky-400" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm">12/25 Latimer Square,</p>
                <p className="text-sm">Christchurch 8001,</p>
                <p className="text-sm">New Zealand</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-slate-200">
              <Mail className="h-5 w-5 text-sky-400" />
              <div>
                <p className="font-medium">Email:</p>
                <a 
                  href="mailto:info@atl-lighting.com" 
                  className="text-sky-400 hover:text-sky-300 transition-colors duration-200"
                >
                  info@atl-lighting.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-slate-200">
              <Phone className="h-5 w-5 text-sky-400" />
              <div>
                <p className="font-medium">Phone:</p>
                <a 
                  href="tel:+6421914524" 
                  className="text-sky-400 hover:text-sky-300 transition-colors duration-200"
                >
                  + 64 21 1914 524
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}