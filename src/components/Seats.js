import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Footer from './Footer';
import Seat from './Seat';

import Loading from './../assets/loading.gif'
import { cpfMask } from './../utils/mask'


function Seats({orderData, setOrderData}) {

    const navigate = useNavigate();

    function bookSeats(e) {
        e.preventDefault();

        if(chosenSeats.length === 0) {
            alert('Select the seats!')
        } else {
            setOrderData({movie: seats.movie.title, day: seats.day.weekday, data: seats.day.date,time: seats.name, name: inputData.name, cpf: inputData.cpf, tickets: [...numberSeat]})
            const URL_RESERVATION_SEATS = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
    
            const promise = axios.post(URL_RESERVATION_SEATS, 
                {
                    ids: [...chosenSeats],
                    name: inputData.name,
                    cpf: inputData.cpf.match(/\d/g).join("") //enviar apenas números CPF
                })
            
            promise.then((response) => {
                navigate("/sucesso");
            });
    
            promise.catch(error => alert("Erro no envio das informações"));
        }
    }

    const {idSessao} = useParams();
    const [seats,setSeats] = useState({});
    const [chosenSeats, setChosenSeats] = useState([]);
    const [numberSeat, setNumberSeat] = useState([])
    const [inputData, setInputData] = useState({name:"", cpf:""}); //{name: "", cpf: ""}
        
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response) => {
            const {data} = response;
            setSeats(data);
        });
        promise.catch((error) => {console.log(error.response);})
    },[idSessao]);


    return Object.keys(seats).length !== 0 ? (
        <>
            <SeatsScreen>
                    <h1>Selecione o(s) assento(s)</h1>
                    <div className="seats">
                        {seats.seats.map((seat) => <Seat key={seat.id} id = {seat.id} number={seat.name} isAvailable={seat.isAvailable} chosenSeats={chosenSeats} setChosenSeats={setChosenSeats} numberSeat={numberSeat} setNumberSeat={setNumberSeat}/>)}
                    </div>
                    <div className="legend">
                        <div className="legend__marker">
                            <div className="circle__selected"></div>
                            <p>Selecionado</p>
                        </div>
                        <div className="legend__marker">
                            <div className="circle__available"></div>
                            <p>Disponível</p>
                        </div>
                        <div className="legend__marker">
                            <div className="circle__unavailable"></div>
                            <p>Indisponível</p>
                        </div>         
                    </div>
                    <Form onSubmit={bookSeats} >
                        <div className="container">
                            <label>Nome do comprador:<input type="text" placeholder="Digite seu nome..." required value={inputData.nome} onChange={(e) => setInputData({...inputData, name: e.target.value})}></input></label>
                        </div>
                        <div className="container">
                        <label>CPF do comprador:<input type="text" placeholder="Digite seu CPF..." required value={inputData.cpf} maxLength='14' onChange={(e) => setInputData({...inputData, cpf: cpfMask(e.target.value)})}></input></label>
                        </div>
                        <div className="submit">
                            <button type="submit">Reservar assento(s)</button>
                        </div>
                    </Form>
            </SeatsScreen>
            <Footer posterURL={seats.movie.posterURL} title={seats.movie.title} sessionData={{weekday: seats.day.weekday, time: seats.name}} />
        </>
    ) :  <LoadingScreen>
            <img src={Loading} alt="loading" />
        </LoadingScreen>

}

export default Seats;

const SeatsScreen = styled.div`

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        text-align: center;
        margin-top: 108px;
        margin-bottom: 22px;
    }

    .seats {
        display: flex;
        flex-wrap: wrap;
        width: 327px;
        height:203px;
        margin: 0 auto;
    }

    .legend {
        margin-top: 16px;
        display: flex;
        justify-content: space-evenly;
    }

    .legend__marker {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .circle {
        width: 26px;
        height: 26px;
        border: 1px solid #808F9D;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 7px;
        margin-bottom: 18px;
    }

    .circle:nth-child(10n) {
        margin-right: 0px;
    }

    .circle p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
    }

    .circle__selected {
        background: #8DD7CF;
        border: 1px solid #45BDB0;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-bottom: 7px;
    }

    .circle__available {
        background: #C3CFD9;
        border: 1px solid #7B8B99;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-bottom: 7px;
    }

    .circle__unavailable {
        background: #FBE192;
        border: 1px solid #F7C52B;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-bottom: 7px;
    }

    label,input[type=text] {
        display: block;
    }

    .container {
        display: flex;
        justify-content:center;
    }

    label {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }

    .container:first-child {
        margin-top: 48px;
    }
    
    input[type=text] {
        width: 327px;
        height: 51px;    
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-top: 6px;
        padding-left: 18px;
    }

    input[type=text]:focus {
        outline: none;
    }

    input[type=text]:first-child {
        margin-bottom: 7px;
    }

    input[type=text]:focus::placeholder {
        color: transparent;
    }

    input[type=text]::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        color: #AFAFAF;
    }
    

    .submit {
        text-align: center;
    }

    button[type=submit] {
        width: 225px;
        height: 42px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        background: rgba(232, 131, 58, 1);
        border-radius: 3px;
        border: none;
        margin-top: 24px;
        margin-bottom: 147px; 
        cursor: pointer;
    }
`;

const Form = styled.form`

`

const LoadingScreen = styled.div`

    //centralizar loading.gif
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -100px;

    img {
    width: 200px;
    height:200px;
    }
`

