
import './App.css';
import BookingPage from './components/BookingPage';
import Home from './components/Home';
import logo from './logo.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';


function App() {
  return (
    <>
      <meta name="description" content="Little Lemon restaurant" />
      <meta name="og:title" content="Little Lemon" />
      <meta name="og:image" content={logo} />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking-page" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
