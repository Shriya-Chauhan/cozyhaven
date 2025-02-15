"use client";
import React, { useState, useEffect } from 'react';
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full ${backgroundImage} min-w-[1100px]  sm:min-w-[400px] md:min-w-[700px] lg:min-w-[900px] xl:min-w-[1100px] bg-cover bg-no-repeat  md:rounded-5xl lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" width={28} height={28} alt="map" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                key={url}
                src={url}
                width={52}
                height={52}
                alt="people"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop < 200); // Adjust the scroll position as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:pt-20 lg:pb-5 xl:mb-20">
      <div className="hide-scrollbar flex h-[440px] w-auto items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Cozy Haven Homestay"
          subtitle="Shimla, Valley"
          peopleJoined="50+ Visted"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View"
          subtitle="Somewhere in the wilderness"
          peopleJoined="50+ Visted"
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="Homestay Rooms"
          subtitle="Shimla, Valley"
          peopleJoined="50+ Visted"
        />
        <CampSite
          backgroundImage="bg-bg-img-4"
          title="Homestay Rooms "
          subtitle="Somewhere in the wilderness"
          peopleJoined="50+ Visted"
        />
        <CampSite
          backgroundImage="bg-bg-img-5"
          title="Private Parking"
          subtitle="Shimla, Valley"
          peopleJoined="50+ Visted"
        />
        <CampSite
          backgroundImage="bg-bg-img-6"
          title="Kitchens Available"
          subtitle="Shimla, Valley"
          peopleJoined="50+ Visted"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 xl:mt-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-54 capitalize text-white">
            
  Discover Your <strong>Perfect Shimla Getaway</strong> at Cozy Haven Homestay

          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Experience the tranquility and comfort of Cozy Haven Homestay in Shimla. Nestled in the serene valley, our homestay offers modern amenities and breathtaking views, making it the perfect retreat for your vacation.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
