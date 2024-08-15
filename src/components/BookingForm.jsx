import React, { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    if (date) {
      setLoading(true);
      const dateObject = new Date(date);
      updateTimes(dateObject)
        .then(() => {
          if (isMounted) setLoading(false);
        })
        .catch(err => {
          if (isMounted) {
            setError('Error fetching times');
            console.error(err);
            setLoading(false);
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, [date, updateTimes]);

  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(Number(e.target.value));
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || !time) {
      setError('Please fill in all required fields');
      return;
    }
    try {
      setLoading(true);
      const formData = { date, time, guests, occasion };
      await submitForm(formData); // Use the passed submitForm function
    } catch (err) {
      setError('Submission failed. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  const times = Array.isArray(availableTimes) ? availableTimes : [];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-teal-50 rounded-md p-8 shadow-lg"
      style={{ width: '100%' }}
    >
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <label htmlFor="res-date" className="block mb-2 text-sm font-medium text-gray-700">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date}
        onChange={handleDateChange}
        className="block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
      />
      
      <label htmlFor="res-time" className="block mb-2 text-sm font-medium text-gray-700">Choose time</label>
      <select 
        id="res-time" 
        value={time}
        onChange={handleTimeChange}
        className="block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
        disabled={times.length === 0}
      >
        {times.length === 0 ? (
          <option>Loading...</option>
        ) : (
          times.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))
        )}
      </select>
      
      <label htmlFor="guests" className="block mb-2 text-sm font-medium text-gray-700">Number of guests</label>
      <input 
        type="number" 
        id="guests" 
        value={guests}
        onChange={handleGuestsChange}
        placeholder="1" 
        min="1" 
        max="10"
        className="block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
      />
      
      <label htmlFor="occasion" className="block mb-2 text-sm font-medium text-gray-700">Occasion</label>
      <select 
        id="occasion" 
        value={occasion}
        onChange={handleOccasionChange}
        className="block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      
      <input 
        type="submit" 
        value={loading ? 'Submitting...' : 'Make Your reservation'}
        className={`w-full py-2 px-4 rounded-md cursor-pointer ${loading ? 'bg-gray-400' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
        disabled={loading}
      />
    </form>
  );
};

export default BookingForm;
