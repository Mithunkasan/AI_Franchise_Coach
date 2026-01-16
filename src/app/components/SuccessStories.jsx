"use client";
import React, { useState } from 'react';

const SuccessStories = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: "From Corporate to Freedom",
      description: "Gained clarity and built a successful franchise business",
      duration: "4:32",
      thumbnail: "/api/placeholder/400/225",
      videoId: "dQw4w9WgXcQ",
      quote: "The strategies and systems gave me a clear vision for a successful business"
    },
    {
      id: 2,
      title: "Scaling to Multiple Locations",
      description: "Now a free business owner focusing on growth and scale",
      duration: "3:45",
      thumbnail: "/api/placeholder/400/225",
      videoId: "dQw4w9WgXcQ",
      quote: "Now I'm a free business owner focusing on growth and scale in business"
    },
    {
      id: 3,
      title: "Mission-Driven Success",
      description: "Achieved high results with purpose-driven approach",
      duration: "5:21",
      thumbnail: "/api/placeholder/400/225",
      videoId: "dQw4w9WgXcQ",
      quote: "High results, mission-driven business that makes an impact"
    },
    {
      id: 4,
      title: "Practical Skills Transformation",
      description: "Learned actionable steps for immediate implementation",
      duration: "4:15",
      thumbnail: "/api/placeholder/400/225",
      videoId: "dQw4w9WgXcQ",
      quote: "Gained ever skills learned and experienced awakening in business"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Listen To Stories Of Success From People I've Worked With
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Real transformations from corporate professionals to successful franchise owners
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Main Video Player */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="relative aspect-video bg-black">
              {/* YouTube Iframe */}
              <iframe
                src={`https://www.youtube.com/embed/${testimonials[activeVideo].videoId}?autoplay=0&rel=0`}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              
              {/* Video Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {testimonials[activeVideo].title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {testimonials[activeVideo].description}
                </p>
              </div>
            </div>

            {/* Video Controls */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">0:00</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div className="bg-yellow-400 h-1.5 rounded-full w-1/3"></div>
                  </div>
                </div>
                <span className="text-yellow-400 text-sm font-medium">
                  ⏱ {testimonials[activeVideo].duration}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Over 500+ success stories</span>
                <span>Life-changing results</span>
              </div>
            </div>
          </div>

          {/* Video Thumbnails List */}
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeVideo === index 
                    ? 'bg-white/5 border-l-4 border-yellow-400' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                } rounded-xl p-4`}
                onClick={() => setActiveVideo(index)}
              >
                <div className="flex gap-4">
                  
                  {/* Thumbnail */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-16 sm:w-28 sm:h-20 bg-white/5 rounded-lg overflow-hidden border border-white/10">
                      {/* Thumbnail Image */}
                      <div className="w-full h-full flex items-center justify-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${
                          activeVideo === index ? 'bg-yellow-400' : 'bg-white/20 group-hover:bg-yellow-400'
                        }`}>
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded text-xs text-yellow-400 font-medium">
                      {testimonial.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold mb-1 ${
                      activeVideo === index ? 'text-yellow-400' : 'text-white'
                    } group-hover:text-yellow-400 transition-colors`}>
                      {testimonial.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Got doable, practical steps
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;