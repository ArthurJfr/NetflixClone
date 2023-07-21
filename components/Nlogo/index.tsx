import styled from "styled-components";

const Nlogo = () => {
    return (
        <Conatiner>
            <LogoConatiner>
                <Logo src="/images/N.png" /> 
            </LogoConatiner>
            
            <Npara>SERIES</Npara>
        </Conatiner>
    )
}

export default Nlogo;
const LogoConatiner = styled.div`
    width : 20px;
    @media (min-width : 768px) {
        width : 50px;
    }
`;
const Conatiner = styled.div`
    width : 40%;
    display : flex;
    flex-direction : row;
    justify-content : flex-start;
    align-items : center;
    margin-bottom : 1rem;
    @media (min-width: 768px){
        width : 50%;
    }
`;

const Logo = styled.img`
    width: 100%;
    @media (min-width: 768px){
        width : 60%;
    }
`;
const Npara = styled.p`

    @media (min-width: 768px){
        font-size : 1.5rem;
    }
    font-size : 0.75rem;
    margin : 0;
    color : #C5C5C3;
    letter-spacing : 0.5rem;
    font-weight : bold;
`;