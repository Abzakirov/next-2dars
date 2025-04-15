import React, { useState } from "react";

// SVG imports (keeping your original approach)
import play from "../../public/svgs/play.svg";
import music from "../../public/svgs/music.svg";
import radio from "../../public/svgs/radio.svg";
import library from "../../public/svgs/library.svg";
import Image from "next/image";

const discover = [
  {
    id: 1,
    name: "Listen Now",
    img: play,
  },
  {
    id: 2,
    name: "Browse",
    img: music,
  },
  {
    id: 3,
    name: "Radio",
    img: radio,
  },
];

const lib = [
  {
    id: 1,
    name: "Playlists",
    img: library,
  },
  {
    id: 2,
    name: "Songs",
    img: library,
  },
  {
    id: 3,
    name: "Made for you",
    img: library,
  },
  {
    id: 4,
    name: "Artists",
    img: library,
  },
  {
    id: 5,
    name: "Albums",
    img: library,
  },
];

const playlist = [
  {
    id: 1,
    name: "Recently Added",
    img: library,
  },
  {
    id: 2,
    name: "Recently Played",
    img: library,
  },
  {
    id: 3,
    name: "Top Songs",
    img: library,
  },
  {
    id: 4,
    name: "Top Albums",
    img: library,
  },
  {
    id: 5,
    name: "Top Artists",
    img: library,
  },
  {
    id: 6,
    name: "Logic Discography",
    img: library,
  },
  {
    id: 7,
    name: "Bedtime Beats",
    img: library,
  },
];

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [collapsed, setCollapsed] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Mobile menu button (hidden on desktop) */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-black text-white transition-all duration-300 hover:bg-gray-800 active:scale-95"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Collapse button (visible on desktop) */}
      <button
        onClick={toggleCollapse}
        className="hidden md:fixed md:flex z-40 top-4 left-[calc(296px-28px)] p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-300"
        style={{ left: collapsed ? '52px' : '268px' }}
      >
        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={collapsed ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-40 h-screen bg-white border-r border-gray-200 overflow-y-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "w-[296px]" : "w-0 md:w-[80px] lg:w-[296px]"
        } ${collapsed ? "md:w-[80px]" : "md:w-[296px]"}`}
      >
        <div className="p-4 h-full flex flex-col">
          {/* Logo or app name would go here */}

          {/* Discover Section */}
          <div className="mb-8">
            <h1
              className={`font-semibold text-lg text-gray-900 mb-4 px-3 transition-opacity duration-200 ${
                collapsed ? "md:opacity-0 lg:opacity-100" : "opacity-100"
              } ${isMobileMenuOpen ? "opacity-100" : "md:opacity-0 lg:opacity-100"}`}
            >
              Discover
            </h1>

            <div className="flex flex-col gap-2">
              {discover.map((dis) => (
                <div
                  key={dis.id}
                  onClick={() => setActiveItem(dis.id)}
                  className={`flex items-center gap-3 py-2 px-3 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100 ${
                    activeItem === dis.id ? "bg-black text-white hover:bg-gray-800" : "text-gray-900"
                  }`}
                >
                  <div className="w-5 h-5 relative">
                    <Image src={dis.img} alt={dis.name} layout="fill" objectFit="contain" />
                  </div>
                  <span
                    className={`font-medium text-sm whitespace-nowrap transition-opacity duration-200 ${
                      collapsed ? "md:opacity-0 lg:opacity-100" : "opacity-100"
                    } ${isMobileMenuOpen ? "opacity-100" : "md:opacity-0 lg:opacity-100"}`}
                  >
                    {dis.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Library Section */}
          <div className="mb-8">
            <h1
              className={`font-semibold text-lg text-gray-900 mb-4 px-3 transition-opacity duration-200 ${
                collapsed ? "md:opacity-0 lg:opacity-100" : "opacity-100"
              } ${isMobileMenuOpen ? "opacity-100" : "md:opacity-0 lg:opacity-100"}`}
            >
              Library
            </h1>

            <div className="flex flex-col gap-2">
              {lib.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item.id + 10)}
                  className={`flex items-center gap-3 py-2 px-3 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100 ${
                    activeItem === item.id + 10 ? "bg-black text-white hover:bg-gray-800" : "text-gray-900"
                  }`}
                >
                  <div className="w-5 h-5 relative">
                    <Image src={item.img} alt={item.name} layout="fill" objectFit="contain" />
                  </div>
                  <span
                    className={`font-medium text-sm whitespace-nowrap transition-opacity duration-200 ${
                      collapsed ? "md:opacity-0 lg:opacity-100" : "opacity-100"
                    } ${isMobileMenuOpen ? "opacity-100" : "md:opacity-0 lg:opacity-100"}`}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Playlist Section */}
          <div className="flex-1 overflow-y-auto">
            <h1
              className={`font-semibold text-lg text-gray-900 mb-4 px-3 transition-opacity duration-200 ${
                collapsed ? "md:opacity-0 lg:opacity-100" : "opacity-100"
              } ${isMobileMenuOpen ? "opacity-100" : "md:opacity-0 lg:opacity-100"}`}
            >
              Playlists
            </h1>

            <div className="flex flex-col gap-2">
              {playlist.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  onClick={() => setActiveItem(item.id + 20)}
                  className={`flex items-center gap-3 py-2 px-3 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-100 ${
                    activeItem === item.id + 20 ? "bg-black text-white hover:bg-gray-800" : "text-gray-900"
                  }`}
                >
                  <div className="w-5 h-5 relative">
                    <Image src={item.img} alt={item.name} layout="fill" objectFit="contain" />
                  </div>
                  <span
                    className={`font-medium text-sm whitespace-nowrap transition-opacity duration-200 ${
                      collapsed ? "md:opacity-0 lg:opacity-100" : "opacity-100"
                    } ${isMobileMenuOpen ? "opacity-100" : "md:opacity-0 lg:opacity-100"}`}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;