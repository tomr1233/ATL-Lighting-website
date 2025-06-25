// src/components/GlobalReachSection.tsx

import React from 'react';
import { 
  MapPin, 
  ShoppingBag, 
  Building2, 
  Clapperboard, 
  Hotel, 
  Presentation, 
  CheckCircle, 
  Globe, 
  Wrench, 
  Sparkles,
  Newspaper // Added for the new section
} from 'lucide-react';

// Helper component for section subheadings to maintain consistency
const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <h3 className="text-3xl font-bold text-white mb-4">{children}</h3>
    <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mb-6"></div>
  </>
);

// Helper component for list items with icons
const InfoItem: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <li className="flex items-start mb-4">
    <div className="flex-shrink-0 h-6 w-6 text-sky-400 mt-1 mr-4">{icon}</div>
    <div className="text-slate-300">
      <strong className="text-white">{title}</strong>
      <span className="block text-slate-400">{description}</span>
    </div>
  </li>
);

export default function GlobalReachSection() {
  const articleImageUrl = 'https://lh5.googleusercontent.com/3xWf4wIlE3J_mGc_8THTe_PJZ6Kc-1a7t-X5kwuX6Vn-RPssi1zDRVRXqkOsKAFgqtaxmDhk7qLUe5xFvdZqjY86MnkzkbOXXtw2MgqTPSM1Nw7FOuFjyDsyIxuKo_afp9a6RhxBFYxpogrokIspIlidPHIzkKDV-vhwF9TQ8o8ApErzL383fw';

  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Signage & Displays Delivered Worldwide
          </h2>
          <p className="text-xl text-sky-400 font-semibold uppercase tracking-wider">
            Customs & Tax Handled!
          </p>
          <p className="text-lg text-slate-300 mt-6 max-w-4xl mx-auto">
            ATL Visual Technology provides high-quality signage and display solutions to businesses around the globe. We offer seamless door-to-door shipping and delivery, handling all customs and tax requirements so you can focus on your business.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1: Reach & Industries */}
          <div>
            <SubHeading>Our Global Reach</SubHeading>
            <ul className="list-none text-slate-300 space-y-3 mb-10">
              <li className="flex items-center"><MapPin className="h-5 w-5 mr-3 text-sky-400" /> <strong>Australia:</strong> Sydney, NSW, Queensland, Perth WA</li>
              <li className="flex items-center"><MapPin className="h-5 w-5 mr-3 text-sky-400" /> <strong>New Zealand:</strong> Wellington, Palmerston North & more</li>
              <li className="flex items-center"><MapPin className="h-5 w-5 mr-3 text-sky-400" /> <strong>United States:</strong> NYC, CA, TX, FL, IL, MI, OK</li>
              <li className="flex items-center"><MapPin className="h-5 w-5 mr-3 text-sky-400" /> <strong>Europe:</strong> UK, Italy, Spain, Portugal, Sweden</li>
              <li className="flex items-center"><MapPin className="h-5 w-5 mr-3 text-sky-400" /> <strong>Middle East:</strong> United Arab Emirates (Dubai & Riyadh)</li>
            </ul>

            <SubHeading>Industries We Serve</SubHeading>
            <ul className="list-none space-y-2">
              <InfoItem icon={<ShoppingBag />} title="Retail" description="Fashion, Grocery, Electronics, and more" />
              <InfoItem icon={<Building2 />} title="Corporate" description="Office Buildings, Headquarters, Conference Rooms" />
              <InfoItem icon={<Hotel />} title="Hospitality" description="Hotels, Restaurants, Bars" />
              <InfoItem icon={<Clapperboard />} title="Entertainment" description="Theaters, Concert Venues, Nightclubs" />
              <InfoItem icon={<Presentation />} title="Production & Events" description="Trade Shows, Exhibitions, Conferences" />
            </ul>
          </div>

          {/* Column 2: Work & Why Choose Us */}
          <div>
            <SubHeading>Our Work</SubHeading>
            <p className="text-slate-300 mb-6">A proven track record of delivering exceptional results for renowned organizations worldwide. Some recent projects include:</p>
            <ul className="list-none space-y-3 mb-10 text-slate-300">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-sky-400 mt-1 flex-shrink-0" /><span><strong>Walt Disney World:</strong> Holograph video screen.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-sky-400 mt-1 flex-shrink-0" /><span><strong>Rome International Airport:</strong> Transparent video display on glass elevator facades.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-sky-400 mt-1 flex-shrink-0" /><span><strong>Toyota, Rome:</strong> Holographic window video displays for car showrooms.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-sky-400 mt-1 flex-shrink-0" /><span><strong>New World Supermarkets, NZ:</strong> LED, LCD, and transparent screens.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 text-sky-400 mt-1 flex-shrink-0" /><span><strong>Resorts World Sentosa:</strong> Holographic displays.</span></li>
            </ul>

            <SubHeading>Why Choose Us?</SubHeading>
            <ul className="list-none space-y-2">
              <InfoItem icon={<Sparkles />} title="Premium Quality Displays" description="We source the best displays from leading manufacturers." />
              <InfoItem icon={<Globe />} title="Global Delivery & Installation" description="We handle shipping, customs, and installation worldwide." />
              <InfoItem icon={<Wrench />} title="Expert Support" description="Our team provides dedicated support throughout your project." />
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Elevate Your Visual Experience?
          </h3>
          <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-sky-500/25">
            Get a Free Quote
          </button>
        </div>

        {/* --- NEW "AS FEATURED IN" SECTION --- */}
        <div className="mt-20 pt-12 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
            
            {/* Left Side: Image and Button */}
            <div className="flex-shrink-0">
              <div className="bg-white p-3 rounded-md shadow-lg">
                <img 
                  src={articleImageUrl} 
                  alt="The Worlds Times article" 
                  className="h-24 object-contain"
                />
              </div>
            </div>

            {/* Right Side: Text and Button */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3">
                <Newspaper className="h-8 w-8 text-sky-400"/>
                <h4 className="text-3xl font-light text-white">
                  Read about us in The Worlds Times
                </h4>
              </div>
              <p className="text-slate-400 mt-2">Learn more about our company and vision.</p>
              <a 
                href="/about" // You can change this link to your actual about page
                className="mt-4 bg-white text-slate-900 px-6 py-2 rounded-md font-semibold hover:bg-slate-200 transition-colors duration-300 shadow"
              >
                About Us
              </a>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}