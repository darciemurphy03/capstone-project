import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import Nav from './Nav'; // Correct import name

export const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const navigate = useNavigate();

  const updateTimes = async (selectedDate) => {
    try {
      const dateObject = new Date(selectedDate);
      const times = window.fetchAPI(dateObject);
      dispatch({ type: 'UPDATE_TIMES', payload: times });
    } catch (err) {
      console.error('Error fetching times:', err);
    }
  };

  const submitForm = async (formData) => {
    try {
      const result = await window.submitAPI(formData);
      if (result) {
        navigate('/confirmed'); // Navigate to confirmation page
      } else {
        alert('Reservation failed. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Reservation failed. Please try again.');
    }
  };

  return (
    <div className="bg-background bg-cover bg-center min-h-screen">
      <Nav />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-4 rounded-lg shadow-md">
          <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
