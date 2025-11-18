import './Favorites.css';

export default function Favorites({ favorites, setFavorites }) {
    function remove(item) {
        setFavorites(prev => prev.filter(f => f.title !== item.title));
    }

    return (
        <div className="favorites">
            <h1> My Favorites </h1>
            {(!favorites || favorites.length === 0) ? (
                <p className="empty">No favorites yet.</p>
            ) : (
                <ul className="favorites-list">
                    {favorites.map((m, idx) => (
                        <li key={idx} className="favorite-card">
                            <img src={m.image} alt={m.title} />
                            <div className="fav-info">
                                <h3>{m.title}</h3>
                                <p className="location">{m.location}</p>
                                <p className="description">{m.description}</p>
                                <button className="remove-btn" onClick={() => remove(m)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}