import styled from "styled-components";
import useBillboard from "./hooks/useBillboard";
import React from 'react';
import Nlogo from "./Nlogo";


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
            </Overing>
        </BillboardContainer>
    )
}

export default Billboard;

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
    top : 50%;
    margin-left : 1rem;
    @media (min-width : 768px){
        top : 30%;
        margin-left : 4rem;
    }
    width : 100%;
`;
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
