import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-lg mb-4">Thank you for your reservation. We look forward to seeing you!</p>
        <Link to="/" className="text-teal-600 hover:underline">Return to Home</Link>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
