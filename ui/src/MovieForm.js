import {useState} from "react";

export default function MovieForm(props) {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [director, setDirector] = useState('');
    const [description, setDescription] = useState('');

    function addMovie(event) {
        event.preventDefault();
        if (title.length < 2) {
            return alert('Title must be at least 2 characters long');
        }
        if (!year) {
            return alert('Year cannot be empty');
        }
        if (isNaN(year)) {
            return alert('Year must be a number');
        }
        props.onMovieSubmit({title, year, director, description});
        setTitle('');
        setYear('');
        setDirector('');
        setDescription('');
    }

    return (
        <form onSubmit={addMovie}>
            <h2>Add movie</h2>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Jurassic Park"
                />
            </div>
            <div>
                <label>Year</label>
                <input
                    type="text"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                    placeholder="2025"
                />
            </div>
            <div>
                <label>Director</label>
                <input
                    type="text"
                    value={director}
                    onChange={(event) => setDirector(event.target.value)}
                    placeholder="Stephen Spielberg"
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="A movie about dinosaurs."
                />
            </div>
            <button>{props.buttonLabel || 'Submit'}</button>
        </form>
    );
}
