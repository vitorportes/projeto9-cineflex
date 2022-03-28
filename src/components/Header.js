import styled from 'styled-components'


function Header() {
    return (
            <Cabecalho> 
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
`
