import React, { useEffect, useState } from 'react';

type Ticket = {
    id: number;
    eventTitle: string;
    price: string;
    seller: string;
}

export default function MarketplaceMain() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch tickets from API or Firebase
    fetchTickets()
  }, [])

  const fetchTickets = async () => {
    // Simulate an API call to fetch tickets
    setTimeout(() => {
        const sampleTickets : Ticket[] = [
            { id: 1, eventTitle: 'Music Concert', price: '$50', seller: 'User123' },
            { id: 2, eventTitle: 'Art Exhibition', price: '$30', seller: 'User456' },
            { id: 3, eventTitle: 'Sports Game', price: '$40', seller: 'User789' },
            { id: 4, eventTitle: 'Movie Premiere', price: '$20', seller: 'User012' },
            { id: 5, eventTitle: 'Comedy Show', price: '$25', seller: 'User345' },
            { id: 6, eventTitle: 'Theater Performance', price: '$35', seller: 'User678' },
            { id: 7, eventTitle: 'Conference', price: '$50', seller: 'User901' },
            { id: 8, eventTitle: 'Workshop', price: '$15', seller: 'User234' },
            { id: 9, eventTitle: 'Food Festival', price: '$30', seller: 'User567' },
            { id: 10, eventTitle: 'Charity Gala', price: '$100', seller: 'User890' },
            { id: 11, eventTitle: 'Fashion Show', price: '$50', seller: 'User123' },
            { id: 12, eventTitle: 'Tech Conference', price: '$75', seller: 'User456' },
        ];
        setTickets(sampleTickets);
        setIsLoading(false);
    }, 2000);
  };

  return (
    <main className="w-full h-full overflow-hidden py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Event Ticket Marketplace</h1>
        {isLoading ? (
          <p className="text-center text-gray-600">Loading tickets...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">{ticket.eventTitle}</h3>
                <p className="text-gray-600 mt-2">Price: {ticket.price}</p>
                <p className="text-gray-600 mt-2">Seller: {ticket.seller}</p>
                <a href={`/marketplace/ticket/${ticket.id}`} className="text-primaryBlue mt-4 inline-block">View Details</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
