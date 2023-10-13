import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../services/firebaseConfig';

const EventForm = () => {
  const [event, setEvent] = useState({ title: '', description: '', date: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const db = getFirestore(app);
      const eventRef = await addDoc(collection(db, 'events'), {
        title: event.title,
        description: event.description,
        date: event.date,
      });
      console.log('Event saved to Firestore with ID: ', eventRef.id);
      // Reset the form after submission
      setEvent({ title: '', description: '', date: '' });
    } catch (error) {
      console.error('Error saving event to Firestore: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={event.title} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={event.description} onChange={handleInputChange} />
      </label>
      <label>
        Date:
        <input type="text" name="date" value={event.date} onChange={handleInputChange} />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
