export default function MovieListItem(props) {
    return (
        <div>
            <div>
                <strong>{props.movie.title}</strong>
                {' '}
                <span>({props.movie.year})</span>
                {' '}
                {props.movie.director && `directed by ${props.movie.director}`}
                {' '}
                <button className="edit-button" onClick={props.onEdit}>Edit</button>
                {' '}
                <button className="delete-button" onClick={props.onDelete}>Delete</button>
            </div>
            {props.movie.description}
        </div>
    );
}
