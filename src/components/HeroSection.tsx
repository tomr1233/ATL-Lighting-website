import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Spline Background - Positioned higher */}
      <div className="absolute inset-0 z-0 -top-20">
        <Spline 
          scene="https://prod.spline.design/uPXBlbDwOJu-AatU/scene.splinecode"
          style={{ width: '100%', height: '120%' }}
        />
      </div>

      {/* Content area to enable scrolling */}
      <div className="relative z-10 pt-16">
        <div className="h-screen"></div>
      </div>
    </div>
  );
}