import { Link } from 'react-router-dom';

function SessionTime({weekday, date, showtimes, setSessionData}) {
    return (
        <>
            <p>{weekday} - {date}</p>
            <div className="sessions__times">
                    {showtimes.map((time) => <Link key={time.id} to={`/assentos/${time.id}`}>
                        <div className="session__time" onClick={()=> setSessionData({weekday: weekday, time: time.name})}><span>{time.name}</span></div>
                        </Link>)}
            </div>
        </>
    );
}

export default SessionTime;
