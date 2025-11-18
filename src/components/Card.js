import './Card.css';

export default function Card(props) {
    const image = props.image ?? props.src ?? '';
    const title = props.title ?? props.alt ?? 'Meetup';

    const isFav = !!props.isFavorite;
    const buttonText = isFav ? 'Remove From Favorites' : 'Add To Favorites';

    function btnHandler() {
        if (typeof props.onToggleFavorite === 'function') props.onToggleFavorite();
    }

    return (
        <div className="meetup">
            <img src={image} alt={title} />
            <div className="info">
                <h2>{title}</h2>
                <p className="location">{props.location}</p>
                <p className="description">{props.description}</p>
                <button onClick={btnHandler} className={isFav ? 'remove' : ''}>{buttonText}</button>
            </div>
        </div>
    );
}