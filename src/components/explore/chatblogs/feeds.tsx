import React from 'react';
import { ImLocation } from "react-icons/im";
import { Image } from 'antd';

const events = [
  {
    date: '13 เมษายน 2567',
    title: 'Pepsi presents S2O Songkran Music Festival 2024',
    location: 'Live Park (Rama 9)',
    image: 'https://placehold.co/1980x1080'
  },
  {
    date: '15 เมษายน 2567',
    title: 'Coachella Valley Music and Arts Festival 2024',
    location: 'Empire Polo Club, Indio, California',
    image: 'https://placehold.co/1980x1080'
  },
  {
    date: '26 มิถุนายน 2567',
    title: 'Glastonbury Festival 2024',
    location: 'Worthy Farm, Pilton, Somerset, England',
    image: 'https://placehold.co/1980x1080'
  },
  // Add more events as needed
];

export default function ExploreEvents() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Popular Events</h2>
          <a href="/events" className="text-lg font-medium text-primaryBlue hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-red-500 text-sm font-semibold mb-2">{event.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600">
                  <ImLocation className="text-lg mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
