import { Link } from 'react-router-dom';

function Movie({posterURL, idFilme, setReturnButton}) {
    return (
        <div className='background-movie'>
            <Link to={`/filme/${idFilme}`}>
                <img src={posterURL} alt="poster" onClick={() => setReturnButton("")} />
            </Link>
        </div>
    );
}

export default Movie;