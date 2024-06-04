import React from 'react';

export default function Guide() {
  return (
    <section className="bg-white py-[20vh]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-xs p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">1. Sign Up</h3>
            <p className="text-gray-600 mt-2">Create an account to get started.</p>
          </div>
          <div className="max-w-xs p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">2. Create/Find Events</h3>
            <p className="text-gray-600 mt-2">Organizers can create events while users can browse and join.</p>
          </div>
          <div className="max-w-xs p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">3. Manage & Attend</h3>
            <p className="text-gray-600 mt-2">Easily manage your events or attend those that interest you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
