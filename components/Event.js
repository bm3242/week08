import React from 'react';

const Event = ({ title, description, date }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default Event;
