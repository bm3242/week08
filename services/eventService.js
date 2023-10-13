import { getFirestore, collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig'; // Adjust the path as needed

// Initialize Firebase and Firestore
const db = getFirestore(firebaseConfig);

// Function to fetch all events
export const fetchEvents = async () => {
  const eventsCollection = collection(db, 'events');
  const eventsSnapshot = await getDocs(eventsCollection);
  return eventsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Function to fetch an event by ID
export const fetchEventById = async (eventId) => {
  const eventDoc = doc(db, 'events', eventId);
  const eventSnapshot = await getDoc(eventDoc);
  return { id: eventSnapshot.id, ...eventSnapshot.data() };
};

// Function to add a new event
export const addEvent = async (eventData) => {
  const eventsCollection = collection(db, 'events');
  const newEventDocRef = await addDoc(eventsCollection, eventData);
  return newEventDocRef.id;
};
