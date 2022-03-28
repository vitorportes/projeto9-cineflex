import styled from 'styled-components'
import { useNavigate } from "react-router-dom";



function Header({returnButton}) {


const navigate = useNavigate();

    function goBack(){
        navigate(-1);
    }

    return (
            <Cabecalho>
                <ion-icon name="arrow-back-circle-outline" id={`${returnButton}`} onClick={goBack}></ion-icon>
                <h1>CINEFLEX</h1>
            </Cabecalho>
    );
}

export default Header;

const Cabecalho = styled.header`
    width: 100%;
    height: 67px;
    position: fixed;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(195, 207, 217, 1);
    
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }

    ion-icon {
        position: absolute;
        left: 0;
        margin-left: 20px;
        font-size: 40px;
        color: #E8833A;
    }

    #button-off {
        display: none;
    }
`
