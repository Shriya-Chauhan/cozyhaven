"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ActivityCardProps {
  
  title: string;
  description: string;
  imageSrc: string;
  imageOnLeft?:boolean;
}

const ActivityCard:React.FC<ActivityCardProps> = ({ title, description, imageSrc, imageOnLeft = true }) => (
  <div className={`flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6 mb-8`}>
    <div className="w-full md:w-1/2">
      <Image 
        src={imageSrc} 
        alt={title} 
        width={400} 
        height={400} 
        className="w-[90%] md:w-full md:mt-7 ml-auto mr-auto h-auto rounded-5xl md:rounded-5xl lg:rounded-r-5xl 2xl:rounded-5xl object-cover
                   lg:w-[80%] lg:h-[300px] xl:w-[80%] xl:h-[350px]"
      />
    </div>
    <div className="w-full md:w-1/2">
      <h3 className="text-xl w-[90%] ml-auto mr-auto font-semibold mt-10 mb-2">{title}</h3>
      <p className="text-gray-600 w-[90%] ml-auto mr-auto mt-8 mb-4">{description}</p>
    </div>
  </div>
);

const ParkActivities = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const activities = [
  
    {
      title: "Mall Road: 6 km away",
      description: "Located just 6km from Cozy Haven Homestay, Mall Road is the bustling heart of Shimla. This popular promenade is lined with shops, cafes, and historical buildings. Stroll along Mall Road to enjoy shopping, dining, and the vibrant atmosphere of Shimla's most famous street.",
      imageSrc: "/mall.svg"
      
    },
    {
      title: "Jakhu Temple: 7 km away",
      description: "Discover spiritual bliss at Jakhu Temple, located just 7km from Cozy Haven Homestay. This ancient temple, perched atop Jakhu Hill, offers stunning panoramic views and a peaceful atmosphere. It's a must-visit destination for those seeking spiritual enrichment and natural beauty, making it a highlight of your Shimla experience.",
      imageSrc: "/jakhu.svg"
    },
    {
      title: "Kufri: 20 km away",
      description: "A short 20km drive from Cozy Haven Homestay takes you to the picturesque town of Kufri. Known for its scenic beauty and adventure activities, Kufri is perfect for nature lovers and thrill-seekers alike. Whether you're skiing in the winter or hiking in the summer, Kufri offers an unforgettable escape into the Himalayas.",
      imageSrc: "/kufri.svg"
    },
    {
      title: "Fagu: 25 km away",
      description: "Located 25km from Cozy Haven Homestay, Fagu is a serene retreat surrounded by apple orchards and terraced fields. This tranquil village is ideal for those looking to unwind and reconnect with nature. With its breathtaking landscapes and peaceful ambiance, Fagu is a hidden gem in the Shimla hills.",
      imageSrc: "/fagu.svg"
    },
    
    {
      title: "Chail: 38 km away",
      description: "Just 38km from Cozy Haven Homestay, Chail is a charming hill station known for its pristine beauty and historic palace. The Chail Palace and the world's highest cricket ground are major attractions here. Enjoy the serene environment and explore the rich heritage of this delightful destination.",
      imageSrc: "/chail.svg"
    },
   
    
    {
      title: "Kalli Tibba: 40 km away",
      description: "Venture 40km from Cozy Haven Homestay to visit Kali Tibba, a revered temple dedicated to Goddess Kali. Set atop a hill, the temple offers mesmerizing views of the surrounding valleys and mountains. It's a perfect spot for meditation and photography, providing a spiritual and scenic experience.",
      imageSrc: "/mountains.svg"
    },
    {
      title: "Bus Stop & Car Rentals: 1 km",
      description: "For your convenience, Cozy Haven Homestay is situated within 1km of local bus stops and car rental services. Whether you need to catch a bus or rent a car for your explorations, our strategic location ensures you have easy access to transportation options, making your travel around Shimla hassle-free.",
      imageSrc: "/bus.svg"
    },
    {
      title: "Distance from City Center (ISBT): 6 km",
      description: "Cozy Haven Homestay is conveniently located just 6km from the ISBT, ensuring easy access to the heart of Shimla. Our proximity to the city center makes it simple for you to explore the vibrant markets, indulge in local cuisine, and immerse yourself in the rich culture of this beautiful hill station. Enjoy the perfect blend of tranquility and convenience during your stay with us.",
      imageSrc: "/last.svg"
    },
    
    // Add more activities here if needed
  ];
  const visibleActivities = isExpanded ? activities : activities.slice(0, 2);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className='flexCenter flex-col'>
      <div className="max-container padding-container py-10 w-full flex flex-wrap justify-between gap-5 lg:gap-10">
      <div className='relative'>
            <Image 
            src="/camp.svg"
            alt='camp'
            width={50}
            height={50}
            className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
            />
            <h2 className='bold-40 pt-1  pb-8 mb-8 lg:bold-64'>Top Local Attractions</h2>
          </div>
        {/* <h2 className='bold-40 lg:bold-64 2xl:max-w-[800px]'>Top Local Attractions</h2> */}
        {visibleActivities.map((activity, index) => (
          <ActivityCard
            key={index}
            {...activity}
            imageOnLeft={index % 2 === 0}
          />
        ))}
      </div>
      {activities.length > 2 && (
        <div 
          onClick={toggleExpand}
          className="flex w-full mt-1 mb-10 pt-4 transition-colors bg-white  shadow-top-lg  hover:text-green-500 cursor-pointer items-center justify-center"
        >
          <span className="mr-2 bold-20">{isExpanded ? 'Show Less' : 'Explore More'}</span>
          <svg 
            className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          
        </div>
      )}
    </section>
  );
};

export default ParkActivities;