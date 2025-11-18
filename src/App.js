import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddMeetup, AllMeetups, Favorites } from './Pages';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const meetups_data = [
        {
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
            title: 'NYC Devs Meetup',
            location: 'New York, USA',
            description: 'Join local developers in Manhattan for talks, demos and networking over coffee.'
        },
        {
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
            title: 'Paris Web Enthusiasts',
            location: 'Paris, France',
            description: 'A friendly meetup in the heart of Paris to share web projects and best practices.'
        },
        {
            image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80',
            title: 'Tokyo Tech Night',
            location: 'Tokyo, Japan',
            description: 'Evening talks about JavaScript, design systems, and developer tooling.'
        },
        {
            image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80',
            title: 'Cairo Startup Circle',
            location: 'Cairo, Egypt',
            description: 'Founders and builders meet to pitch projects, find collaborators and learn.'
        }
        ,
        {
            // Temporary stable placeholder image — replace with a permanent image URL as needed
            image: 'https://via.placeholder.com/1200x800.png?text=London+UX+Meetup',
            title: 'London UX Meetup',
            location: 'London, United Kingdom',
            description: 'Practical workshops and lightning talks on UX, accessibility and product design.'
        },
        {
            // Temporary stable placeholder image — replace with a permanent image URL as needed
            image: 'https://via.placeholder.com/1200x800.png?text=S%C3%A3o+Paulo+Dev+Breakfast',
            title: 'São Paulo Dev Breakfast',
            location: 'São Paulo, Brazil',
            description: 'Morning sessions for backend and frontend engineers followed by networking.'
        }
    ];

  const [favorites, setFavorites] = useState([]);
  const [meetups, setMeetups] = useState(meetups_data);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllMeetups favorites={favorites} setFavorites={setFavorites} meetups={meetups}/>} />
        <Route path="/add-meetup" element={<AddMeetup meetups={meetups} setMeetups={setMeetups}/>} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>
    </div>
  );
}

export default App;
