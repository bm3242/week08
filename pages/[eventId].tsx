// pages/[eventId].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../services/eventService'; // Implement this function to fetch event details

const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details based on the eventId
    const fetchEvent = async () => {
      if (eventId) {
        try {
          const eventData = await getEventById(eventId);
          setEvent(eventData);
        } catch (error) {
          console.error('Error fetching event:', error);
        }
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
    </div>
  );
};

export default EventDetailPage;
