import React, { useState } from "react";
import { useBooking } from "../hooks/useBooking";

const BookingSystem: React.FC = () => {
  const { slots, bookings, waitingList, bookSlot, cancelBooking, resetSystem } = useBooking();
  const [name, setName] = useState("");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">Event Booking System</h2>
      <p className="text-lg font-semibold">Available Slots: {slots}</p>

      <input
        type="text"
        placeholder="Enter your name"
        className="w-full p-2 border mt-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 mt-3 w-full rounded"
        onClick={() => { if (name) bookSlot(name); setName(""); }}
      >
        Book Now
      </button>

      <h3 className="text-lg font-semibold mt-5">Confirmed Bookings</h3>
      <ul>
        {bookings.map((b) => (
          <li key={b.id} className="flex justify-between bg-gray-100 p-2 my-2">
            {b.name} <button className="text-red-500" onClick={() => cancelBooking(b.id)}>Cancel</button>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-5">Waiting List</h3>
      <ul>
        {waitingList.map((w, index) => (
          <li key={w.id} className="bg-gray-200 p-2 my-2">{index + 1}. {w.name}</li>
        ))}
      </ul>

      <button className="bg-red-500 text-white px-4 py-2 mt-5 w-full rounded" onClick={resetSystem}>
        Reset System
      </button>
    </div>
  );
};

export default BookingSystem;
