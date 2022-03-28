import { Link } from 'react-router-dom';

function Movie({posterURL, idFilme}) {
    return (
        <div className='background-movie'>
            <Link to={`/filme/${idFilme}`}>
                <img src={posterURL} alt="poster" />
            </Link>
        </div>
    );
}

export default Movie;