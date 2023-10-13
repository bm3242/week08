import React from 'react';
import Event from './Event';

const EventList = ({ events, loading, error }) => {
  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error loading events. Please try again later.</div>;
  }

  if (events.length === 0) {
    return <div>No events available.</div>;
  }

  return (
    <div>
      <h2>Events</h2>
      {events.map((event) => (
        <Event key={event.id} title={event.title} description={event.description} date={event.date} />
      ))}
    </div>
  );
};

export default EventList;
