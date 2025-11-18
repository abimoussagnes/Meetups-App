import {useState} from 'react';
import Card from '../components/Card';
import './AllMeetups.css';

export default function AllMeetups({ favorites, setFavorites, meetups}) {
    function toggleFavorite(meetup) {
        setFavorites(prev => {
            const exists = prev.some(f => f.title === meetup.title);
            if (exists) return prev.filter(f => f.title !== meetup.title);
            return [...prev, meetup];
        });
    }


    return (
        <div className="all-meetups">
            <h1> All Meetups </h1>
            <ul className="meetups-list">
                {meetups.map((meetup, index) => (
                    <li className="meetup-item" key={index}>
                        <Card
                            image={meetup.image}
                            title={meetup.title}
                            location={meetup.location}
                            description={meetup.description}
                            onToggleFavorite={() => toggleFavorite(meetup)}
                            isFavorite={favorites.some(f => f.title === meetup.title)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}