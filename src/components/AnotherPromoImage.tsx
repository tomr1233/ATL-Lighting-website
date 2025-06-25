import React from 'react';

export default function AnotherPromoImageSection() {
  return (
    // We use a similar background to maintain a consistent feel
    <div className="bg-slate-900 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Optional: Add a subtle glow like the other section */}
          <div className="absolute -inset-4 bg-gradient-to-r rounded-2xl blur-2xl opacity-20"></div>

          {/* Your new image */}
          <img
            src="https://imagesexpresstxt.s3.ap-southeast-2.amazonaws.com/Screenshot+2025-06-25+123903.png"
            alt="Promotional banner for The Future of Marketing Ebook"
            className="relative w-full h-auto rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}