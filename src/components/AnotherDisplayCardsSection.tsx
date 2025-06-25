import React from 'react';
import { Monitor, Tv, ShoppingBag, Projector, Film, Sparkles } from 'lucide-react';

interface DisplayCard {
  title: string;
  image: string;
  icon: React.ReactNode;
}

export default function AnotherDisplayCardsSection() {
  const displayCards: DisplayCard[] = [
    {
      title: "ATL Blog Post & News",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      title: "Contact Us",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      icon: <Tv className="h-5 w-5" />
    },
    {
      title: "Why Buy From Us",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      icon: <ShoppingBag className="h-5 w-5" />
    },
    {
      title: "Our Company Profile",
      image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&q=80",
      icon: <Projector className="h-5 w-5" />
    },
    {
      title: "FAQs Before You Buy",
      image: "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?w=800&q=80",
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      title: "Our Number 1 Sale Product to USA in 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      icon: <Film className="h-5 w-5" />
    }
  ];

  return (
    <div className="bg-slate-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 hover:border-sky-500/50 transition-all duration-500 cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="p-2 bg-sky-500/20 rounded-lg text-sky-400 group-hover:bg-sky-500/30 transition-all duration-300">
                    {card.icon}
                  </div>
                </div>
                
                {/* Hover Line Effect */}
                <div className="h-0.5 bg-gradient-to-r from-sky-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-500/10 to-transparent transform rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}