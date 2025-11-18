import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="title">React Meetups</div>
            <nav className="links">
                <Link to="/"> All Meetups </Link>
                <Link to="/add-meetup"> Add New Meetup </Link>
                <Link to="/favorites"> My Favorites </Link>
            </nav>
        </div>
    );
}