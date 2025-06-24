import React from 'react';
import { Menu, X, ChevronDown, MoreHorizontal, Search } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navbar({ isScrolled, isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [showMore, setShowMore] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchExpanded, setSearchExpanded] = React.useState(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const homeDropdownItems = [
    'About Us',
    'Our Mission',
    'Company History',
    'Team',
    'Careers'
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleSearchExpand = () => {
    setSearchExpanded(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  const handleSearchCollapse = () => {
    setSearchExpanded(false);
    setSearchQuery('');
  };

  const handleClickOutside = React.useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      setActiveDropdown(null);
      setShowMore(false);
    }
    if (!target.closest('.search-container')) {
      setSearchExpanded(false);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo - Left Section */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img 
              src="https://lh3.googleusercontent.com/FIuLiyR30ELqLa8Yf4zP9du7TQxHV59WfFyYIws5OMi9QdbX1U844pLghxmvzIBhjpswqA6DplnztVu3o-kSs7-8MQQcW6KNPzhbsRehy8gvmDDZ5Ro_nz31AEyxnNDjE1RjiLf_S1c=w16383"
              alt="ATL Lighting Systems"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                console.error('Logo failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="text-white font-bold text-lg lg:text-xl whitespace-nowrap">
              ATL Lighting Systems
            </div>
          </div>

          {/* Center Section - Desktop Navigation */}
          <div className={`hidden lg:flex items-center flex-1 mx-8 transition-all duration-300 ${
            searchExpanded ? 'opacity-0 invisible' : 'opacity-100 visible'
          }`}>
            <div className="flex items-center space-x-1 mx-auto">
              {/* ATL Lighting Systems Home Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => handleDropdownToggle('home')}
                  className="flex items-center space-x-1 text-white hover:text-sky-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  <span>ATL Lighting Systems Home</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === 'home' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'home' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-slate-800/95 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-xl py-2 z-30">
                    {homeDropdownItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Regular Navigation Items */}
              <a href="#" className="text-slate-300 hover:text-sky-300 px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap">
                GrowGrab Affordable Displays
              </a>
              <a href="#" className="text-slate-300 hover:text-sky-300 px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap">
                Custom Digital Signage Content Creation
              </a>
              
              {/* More Dropdown for remaining items */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="flex items-center space-x-1 text-slate-300 hover:text-sky-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  <span>More</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === 'home' ? 'rotate-180' : ''
                  }`} />
                </button>
                {showMore && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-slate-800/95 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-xl py-2 z-30">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      What are the Different Displays Available
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      FAQs Digital Advertising Screens
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Search and Mobile Menu */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Expandable Search Bar - Hidden on mobile */}
            <div className="hidden md:flex items-center search-container">
              <div className={`relative transition-all duration-300 ease-in-out ${
                searchExpanded ? 'w-[500px]' : 'w-auto'
              }`}>
                {!searchExpanded ? (
                  <button
                    onClick={handleSearchExpand}
                    className="p-2 text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                ) : (
                  <div className="flex items-center">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-400" />
                      </div>
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') {
                            handleSearchCollapse();
                          }
                        }}
                        className="bg-slate-800/50 border border-slate-600/50 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-200 w-full"
                      />
                    </div>
                    <button
                      onClick={handleSearchCollapse}
                      className="ml-2 p-2 text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-700/30">
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-slate-800/50 border border-slate-600/50 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-200 w-full"
                />
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="border-t border-slate-700/30 pt-2">
              <button
                onClick={() => handleDropdownToggle('mobile-home')}
                className="flex items-center justify-between w-full text-white px-3 py-2 text-base font-medium"
              >
                <span>ATL Lighting Systems Home</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  activeDropdown === 'mobile-home' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'mobile-home' && (
                <div className="bg-slate-800/30 ml-4 rounded-lg mt-1">
                  {homeDropdownItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-white"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}

              <a href="#" className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium">
                GrowGrab Affordable Displays
              </a>
              <a href="#" className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium">
                Custom Digital Signage Content Creation
              </a>
              <a href="#" className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium">
                What are the Different Displays Available
              </a>
              <a href="#" className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium">
                FAQs Digital Advertising Screens
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}