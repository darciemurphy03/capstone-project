// App.test.js
import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import {initializeTimes} from './components/BookingPage';
import { timesReducer } from './components/BookingPage'

test('Renders the Choose date label', () => {
  render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);
  const labelElement = screen.getByLabelText(/Choose date/i);
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial times', () => {
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test('timesReducer updates the state correctly', () => {
  const initialState = [];
  const times = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];

  const action = {
    type: 'UPDATE_TIMES',
    payload: times
  };

  const newState = timesReducer(initialState, action);

  expect(newState).toEqual(times);
});
