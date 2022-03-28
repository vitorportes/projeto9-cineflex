import styled from 'styled-components';

function Footer({title, posterURL, sessionData}) {
    
    return Object.keys(sessionData).length === 0 ?
        <Rodape>
            <div className='background-movie'>
                <img src={posterURL} alt={title} />
            </div>
            <p>{title}</p>
        </Rodape>
    :   <Rodape>
            <div className='background-movie'>
                <img src={posterURL} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>{sessionData.weekday} - {sessionData.time}</p>
            </div>
        </Rodape>
}

export default Footer;

const Rodape = styled.footer`
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    height: 117px;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;

    img {
        width: 48px;
        height: 72px;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        color: #293845;
    }

    .background-movie {
        width: 64px;
        height: 89px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 14px 14px 14px 10px;
    }
`