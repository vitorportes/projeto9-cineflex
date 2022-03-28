import styled from 'styled-components';
import { Link } from 'react-router-dom';


import Loading from './../assets/loading.gif';

function OrderData({orderData, setOrderData}) {


    return (Object.keys(orderData).length !== 0) ? (
        <OrderDataScreen>
            <div className="sucess">
                <h1>Pedido feito com sucesso</h1>
            </div>
            <div className="data">
                <p>Filme e sessão</p>
                <p>{orderData.movie}</p>
                <p>{orderData.data} {orderData.time}</p>
            </div>
            <div className="data">
                <p>Ingressos</p>
                {orderData.tickets.map((ticket)=> <p key={ticket}>Assento {ticket}</p>)}
            </div>
            <div className="data">
                <p>Comprador</p>
                <p>Nome: {orderData.name}</p>
                <p>CPF: {orderData.cpf}</p>
            </div>
            <div className="button_align">
                <Link to="/">
                    <button onClick={() => setOrderData()}>Voltar pra Home(s)</button>
                </Link>
            </div>
        </OrderDataScreen>
    )  : <LoadingScreen>
            <img src={Loading} alt="loading" />
        </LoadingScreen>
}

export default OrderData;

const OrderDataScreen = styled.div`

    .sucess {
        text-align: center;
        margin: auto;
        width: 160px;
        height: 56px;
        margin-bottom: 52px;
    }

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #247A6B;
        margin-top:94px;
    }

    .data {
        margin-left: 28px;
        margin-bottom: 30px;
    }

    .data p:first-child {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 5px;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        margin-bottom: 5px;
    }

    button {
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
    margin-top: 62px;
    margin-bottom: 189px; 
    cursor: pointer;
    }

    .button_align {
        text-align: center;
    }
`;


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
`;