// src/components/ProductNavigation.tsx

import React from 'react';

interface NavItem {
  title: string;
  imageSrc: string;
  href: string;
}

const productNavItems: NavItem[] = [
  {
    title: "Indoor Video Screens",
    imageSrc: "https://images.unsplash.com/photo-1618763268479-50c144a19c0b?w=800&q=80",
    href: "/products/indoor-screens"
  },
  {
    title: "Outdoor Advertising Screens",
    imageSrc: "https://images.unsplash.com/photo-1534447677768-be436a0976f2?w=800&q=80",
    href: "/products/outdoor-screens"
  },
  {
    title: "Digital Displays For Retail",
    imageSrc: "https://images.unsplash.com/photo-1556742111-a3297a0d5412?w=800&q=80",
    href: "/products/retail-displays"
  },
  {
    title: "Transparent Video Screens",
    imageSrc: "https://images.unsplash.com/photo-1604726505374-788846747a82?w=800&q=80",
    href: "/products/transparent-screens"
  },
  {
    title: "Displays For Events & Exhibitions",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    href: "/products/event-displays"
  },
  {
    title: "3D Video Technology",
    imageSrc: "https://images.unsplash.com/photo-1639726352358-8098ff283b8b?w=800&q=80",
    href: "/products/3d-technology"
  },
  {
    title: "Interactive Screens",
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    href: "/products/interactive-screens"
  },
  {
    title: "OLED Transparent Video Displays",
    imageSrc: "https://images.unsplash.com/photo-1635899999268-59fa3a4055ac?w=800&q=80",
    href: "/products/oled-transparent"
  }
];

export default function ProductNavigation() {
  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            ATL Products Site Navigation
          </h2>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productNavItems.map((item) => (
            <a 
              key={item.title} 
              href={item.href} 
              className="group text-center transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-sky-500/20 transition-shadow duration-300">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-4 font-semibold text-slate-300 group-hover:text-sky-400 transition-colors duration-300">
                {item.title}
              </p>
            </a>
          ))}
        </div>
        
      </div>
    </div>
  );
}