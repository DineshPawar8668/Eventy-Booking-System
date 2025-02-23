import { useState, useEffect } from "react";

const TOTAL_SLOTS = parseInt(process.env.REACT_APP_TOTAL_SLOTS || "10", 10);

type Booking = { id: string; name: string; timestamp: number };
type Waiting = { id: string; name: string };

export function useBooking() {
  const [slots, setSlots] = useState<number>(TOTAL_SLOTS);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [waitingList, setWaitingList] = useState<Waiting[]>([]);

  useEffect(() => {
    const storedSlots = localStorage.getItem("slots");
    const storedBookings = localStorage.getItem("bookings");
    const storedWaitingList = localStorage.getItem("waitingList");

    if (storedSlots) setSlots(JSON.parse(storedSlots));
    if (storedBookings) setBookings(JSON.parse(storedBookings));
    if (storedWaitingList) setWaitingList(JSON.parse(storedWaitingList));
  }, []);

  useEffect(() => {
    localStorage.setItem("slots", JSON.stringify(slots));
    localStorage.setItem("bookings", JSON.stringify(bookings));
    localStorage.setItem("waitingList", JSON.stringify(waitingList));
  }, [slots, bookings, waitingList]);

  const bookSlot = (name: string) => {
    if (slots > 0) {
      const newBooking = { id: Date.now().toString(), name, timestamp: Date.now() };
      setBookings([...bookings, newBooking]);
      setSlots(slots - 1);
    } else {
      const newWaiting = { id: Date.now().toString(), name };
      setWaitingList([...waitingList, newWaiting]);
    }
  };

  const cancelBooking = (id: string) => {
    const updatedBookings = bookings.filter((b) => b.id !== id);
    setBookings(updatedBookings);
    setSlots(slots + 1);

    if (waitingList.length > 0) {
      const nextInLine = waitingList[0];
      setBookings([...updatedBookings, { id: nextInLine.id, name: nextInLine.name, timestamp: Date.now() }]);
      setWaitingList(waitingList.slice(1));
      setSlots(slots);
    }
  };

  const resetSystem = () => {
    setSlots(TOTAL_SLOTS);
    setBookings([]);
    setWaitingList([]);
  };

  return { slots, bookings, waitingList, bookSlot, cancelBooking, resetSystem };
}
