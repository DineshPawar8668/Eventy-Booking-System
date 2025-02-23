# Event Booking System (React + TypeScript + Tailwind CSS)

## Quick Start

# Clone the Repository
git clone https://github.com/your-username/event-booking.git
cd event-booking

# Install Dependencies
npm install

# Configure Environment Variable
echo "REACT_APP_TOTAL_SLOTS=10" > .env

# Start the Development Server
npm start

# Build for Production
npm run build
```

##  Functionality
- **Book Now**  Click to book an available slot.
- **Cancel Booking**  Remove a booking and free up a slot.
- **Waiting List**  If slots are full, users join the queue.
- **Auto-Assign from Waiting List**  First in queue gets booked when a slot frees.
- **Persistent Storage**  Data remains after page refresh using LocalStorage.
- **Reset System**  Clears all bookings and resets slots.

What is Tested?
- Booking a slot updates the available slots count.
- Cancelling a booking frees up a slot.
- Users are correctly moved from the waiting list when a slot becomes available.
- Reset functionality clears all data and resets the slots.

##  Environment Variable Configuration
Create a `.env` file in the root directory and add:
```sh
REACT_APP_TOTAL_SLOTS=10
```
This sets the initial number of slots available for booking.


