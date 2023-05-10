import React from 'react';

const CallHistory = () => {
  const orders = [
    { id: 1, location: 'Tokyo', time: '08:15 AM', status: 'Complete' },
    { id: 2, location: 'New York', time: '10:30 AM', status: 'In progress' },
    { id: 3, location: 'London', time: '02:45 PM', status: 'In progress' },
    // Add more orders as needed
  ];

  return (
    <div className="p-8 mx-auto bg-base-200 rounded shadow-xl md:px-12">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className='bg-accent'>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border border-accent px-4 py-2">{order.id}</td>
              <td className="border border-accent px-4 py-2">{order.location.slice(0,7)}...</td>
              <td className="border border-accent px-4 py-2">{order.time}</td>
              <td className="border border-accent px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CallHistory;