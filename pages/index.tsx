import React, { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import { fetchEvents as fetchEventsService, Event as EventType } from '../services/eventService';

const EventsPage = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = await fetchEventsService(); // Assuming fetchEvents returns an array of events
        setEvents(eventData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch once when the component mounts

  return (
    <div>
      <h1>Events Page</h1>
      {loading && <p>Loading events...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {events.length > 0 && <EventList events={events} />}
      {events.length === 0 && !loading && !error && <p>No events available.</p>}
    </div>
  );
};

export default EventsPage;
