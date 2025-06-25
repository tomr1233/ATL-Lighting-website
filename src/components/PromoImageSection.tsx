import React from 'react';

export default function PromoImageSection() {
  return (
    // We use a similar background to maintain a consistent feel
    <div className="bg-slate-900 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Optional: Add a subtle glow like the other section */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur-2xl opacity-20"></div>

          {/* Your new image */}
          <img
            src="https://lh4.googleusercontent.com/gDtoxw-uOxy9hVrHW6zDc8YHoMAL8tEAKvIs3qxuW3PutsxSNdLxArlkzTL_auGFzesd8k0HQwkTewAhsMgwEnL_0HjPISkNEGrA8U17r3klNedFepwblLBGnd8GwX4bBk31hiaru6rYNoP6TO394sz9ps9wnUS4CiqKAbWcJ7hu14wbqkCYVg=w1280"
            alt="Promotional banner for The Future of Marketing Ebook"
            className="relative w-full h-auto rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}