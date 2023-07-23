import styled from "styled-components";
import useBillboard from "../hooks/useBillboard";
import React from 'react';
import Nlogo from "./Nlogo";
import GlobalStyle from "@/styles/globalStyles";
import { FiInfo } from 'react-icons/fi';
import { BsPlayFill } from 'react-icons/bs';


const Billboard = () => {

    const { data } = useBillboard();

    return (
        <BillboardContainer>
            
            <MainVideo
                autoPlay
                muted
                loop
                poster={data?.thumbnailUrl}
                src={data?.videoUrl}
            >
            </MainVideo>
            <Overing>
                <Nlogo />
                <Title>
                    {data?.title}
                </Title>
                <Description>
                    {data?.description}
                </Description>
                <ButtonContainer>
                    <ButtonPlay><BsPlayFill size={35} /> Play</ButtonPlay>
                    <ButtonInfo><FiInfo size={35} /> More informations</ButtonInfo>
                </ButtonContainer>
            </Overing>
        </BillboardContainer>
    )
}

export default Billboard;

    const Title = styled.p`
    color : #FFF;
    font-size : 1rem;
    line-height : 5.5rem;
    height : 100%;
    width : 30%;
    font-weight : bold;
    @media (min-width : 768px){
        font-size : 5rem;
    }
    @media (min-width : 1024px){
        font-size : 6rem;
    }
    margin : 0;
`;

const BillboardContainer = styled.div`
    position : relative;
    height : 56.35vw;
`;
const MainVideo = styled.video`
        width : 100%;
        height : 56.35vw;
        object-fit: cover;
    `;
const Overing = styled.div`
    position : absolute;
    top : 30%;
    margin-left : 1rem;
    @media (min-width : 768px){
        top : 20%;
        margin-left : 4rem;
    }
    width : 100%;
`;

const Description = styled.p`
    color : #FFF;
    font-size : 8px;
    width : 30%;
    margin-top : 0.75rem;
    @media (min-width : 768px){
        font-size : 1.25rem;
        margin-top : 2rem;
    }
`;
const ButtonContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    margin-top : 0.75rem;
    gap : 1rem;
    @media (min-width : 768px) {
        margin-top : 1rem;
    }
`;
const ButtonInfo = styled.button`
    padding: 10px 20px;
    border-radius : 5px;
    font-size : 1rem;
    border : none;
    background-color : rgba(101, 112, 128,0.5); 
    display : flex;
    flex-direction : row;
    align-items : center;
    gap : 0.5rem;
    color: white;
    font-weight : bold;
    cursor : pointer;
    &:hover{
        background-color : rgba(101, 112, 128,0.7); 
    }
`;
const ButtonPlay = styled.button`
    padding: 10px 20px;
    border-radius : 5px;
    font-size : 1rem;
    border : none;
    text-align : center;
    font-weight : bold;
    display : flex;
    flex-direction : row;
    align-items : center;
    gap : 0.5rem;
    cursor : pointer;
    &:hover{
        background-color : rgba(255,255,255,0.5);
    }
`;