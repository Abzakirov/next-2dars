"use client"
import React from "react";
import Image from "next/image";

// Your image imports
import m1 from "../../public/imgs/m1.png";
import m2 from "../../public/imgs/m2.png";
import m3 from "../../public/imgs/m3.png";
import m4 from "../../public/imgs/m4.png";
import s1 from "../../public/imgs/s1.png";
import s2 from "../../public/imgs/s2.png";
import s3 from "../../public/imgs/s3.png";
import s4 from "../../public/imgs/s4.png";
import s5 from "../../public/imgs/s5.png";
import s6 from "../../public/imgs/s6.png";

const listenNowItems = [
  {
    id: 1,
    title: "Beach Rendezvous",
    artist: "Ethan Jivis",
    image: m1
  },
  {
    id: 2,
    title: "Async Awakenings",
    artist: "Nina Mikrocha",
    image: m2
  },
  {
    id: 3,
    title: "The Art of Reausability",
    artist: "Jana Loria",
    image: m3
  },
  {
    id: 4,
    title: "Stateful Symphony",
    artist: "Beth Binasu",
    image: m4
  }
];

const madeForYouItems = [
  {
    id: 1,
    title: "Thinking Components",
    artist: "Lena Loria",
    image: s1
  },
  {
    id: 2,
    title: "Functional Fury",
    artist: "Beth Brown",
    image: s2
  },
  {
    id: 3,
    title: "React Rendezvous",
    artist: "Ethan Bura",
    image: s3
  },
  {
    id: 4,
    title: "Stateful Symphony",
    artist: "Beth Binasu",
    image: s4
  },
  {
    id: 5,
    title: "Async Awakenings",
    artist: "Nina Mikrocha",
    image: s5
  },
  {
    id: 6,
    title: "The Art",
    artist: "Ethan Jivis",
    image: s6
  }
];

const Music = () => {
  return (
    <div className="music-content pl-4 pr-6 py-6">
      {/* Listen Now Section */}
      <section className="mb-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Listen Now</h1>
          <p className="text-sm text-gray-600">Top picks for you. Updated daily.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {listenNowItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-lg overflow-hidden transition-all duration-200 hover:bg-gray-50"
            >
              <div className="relative aspect-square mb-3 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.8L16 10l-9.7 7.2V2.8z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-medium text-gray-900 group-hover:text-black truncate">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 truncate">{item.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Made for You Section */}
      <section>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Made for You</h1>
          <p className="text-sm text-gray-600">Your Personal playlists. Updated daily.</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {madeForYouItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-lg overflow-hidden transition-all duration-200 hover:bg-gray-50"
            >
              <div className="relative aspect-square mb-3 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.8L16 10l-9.7 7.2V2.8z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-medium text-gray-900 group-hover:text-black truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 truncate">{item.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Music;