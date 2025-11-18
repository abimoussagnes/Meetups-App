
import './AddMeetup.css';
import {useRef} from 'react';

export default function AddMeetup({meetups, setMeetups}) {
    const title = useRef();
    const url = useRef();
    const address = useRef();
    const desc = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        const enteredTitle = title.current.value;
        const enteredUrl = url.current.value;
        const enteredAddress = address.current.value;
        const enteredDesc = desc.current.value;
        const meetupItem = {
            image: enteredUrl,
            title: enteredTitle,
            location: enteredAddress,
            description: enteredDesc
        };
        setMeetups([...meetups, meetupItem]);
    }

    return (
        <div className="add-meetup">
            <div className="form-wrap">
                <h1> Add New Meetup </h1>
                <form>
                    <p> Meetup Title</p>
                    <input type="text" ref={title} required/>
                    <p> Meetup Image </p>
                    <input type="url" ref={url} required/>
                    <p> Address </p>
                    <input type="text" ref={address} required/>
                    <p> Description </p>
                    <textarea required ref={desc} />
                    <div className="actions">
                        <button type="button" onClick={handleSubmit}> Add Meetup </button>
                    </div>
                </form>
            </div>
        </div>
    );
}