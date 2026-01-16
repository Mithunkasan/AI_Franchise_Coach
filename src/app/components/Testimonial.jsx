import React from 'react'

const Testimonial = () => {
  const test = [
    {
      content:
        "Since implementing AI Empowered, our productivity has skyrocketed. Tasks that took hours now take minutes!",
      image:"/trusted/img1.jfif", 
      name: "Harid",
      title: "Senior Designer",
    },
    {
      content:
        "AI Empowered helped us stay ahead of the competition by predicting trends before they happen.",
      image: "/trusted/img2.jfif",
      name: "Alex Johnson",
      title: "Product Manager",
    },
    {
      content:
        "The AI tools are intuitive and powerful. Even our team with minimal technical skills can leverage them effectively.",
      image: "/trusted/img3.jfif",
      name: "Sara Lee",
      title: "Team Lead",
    },
  ];

  return (
    <div className='w-full bg-[white] h-[400px]'>
      <h1 className="text-3xl font-bold text-center p-6">
        <span style={{ color: "#d5951dff" }}>Client </span>
        <span style={{ color: "black" }}>Testimonial</span>
      </h1>

      {/* Scrollable row for mobile, preserves width and alignment */}
      <div className="flex flex-row gap-6 overflow-x-auto mt-[50px] px-2 justify-center">
        {test.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white p-6 rounded-lg shadow border border-[#d5951dff] w-[260px] h-[300px] flex-shrink-0"
          >
            {/* Testimonial Content */}
            <p className="text-gray-800 font-medium mb-4">{item.content}</p>

            {/* Person Info */}
            <div className="flex flex-col items-center">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mb-2 object-cover border border-[#d5951dff] p-2"
                />
              )}
              <p className="font-semibold text-gray-900 pt-2">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full h-[300px] bg-[url('/OIP.webp')] bg-cover bg-center mt-[-100px]"
      ></div>
    </div>
  )
}

export default Testimonial
