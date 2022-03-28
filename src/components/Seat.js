import styled from 'styled-components';
import {useState} from 'react'


function Seat({id, number, isAvailable, chosenSeats, setChosenSeats, numberSeat, setNumberSeat}) {


    const [seatSelected, setSeatSelected] = useState(false)


    function seatVerification() {
        if(isAvailable === false) {
            alert("this seat is not available");
            return;
        } else {
            setSeatSelected(!seatSelected);
            if(!seatSelected === true && !chosenSeats.includes(id)) {
                setChosenSeats([...chosenSeats, id])
                setNumberSeat([...numberSeat, number])
            }
            if(!seatSelected === false && chosenSeats.includes(id)) {
                setChosenSeats([...chosenSeats].filter((value) => value !== id))
                setNumberSeat([...numberSeat, number].filter((value) => value !== number))
            }
        }
    }


    return (
        <SeatSession className="circle" isAvailable={isAvailable} seatSelected={seatSelected} onClick={seatVerification} borderColor={isAvailable}>
            <p>{number}</p>
        </SeatSession>
    );
}

export default Seat;

const SeatSession = styled.div`
    cursor: pointer; 
    background-color: ${props => props.isAvailable === true ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${props => props.isAvailable === true ? "#7B8B99" : "#F7C52B"};
    background-color: ${props => props.seatSelected === true ? "#8DD7CF" : ""};
`;
