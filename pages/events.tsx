// pages/events.tsx
import React from 'react';
import EventList from '../components/EventList'; // Assuming you have an EventList component

const EventsPage = () => {
  // Mock events data (replace with actual data from Firestore)
  const events = [
    { id: '1', title: 'Event 1', description: 'Description 1', date: '2023-10-15' },
    { id: '2', title: 'Event 2', description: 'Description 2', date: '2023-10-20' },
    // ... Add more events
  ];

  return (
    <div>
      <h1>Events</h1>
      <EventList events={events} />
    </div>
  );
};

export default EventsPage;
