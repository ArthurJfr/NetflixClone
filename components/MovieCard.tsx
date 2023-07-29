import React from 'react';
import styled from 'styled-components';


interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    return (
        <CardContainer>
            <Thumbnail src={data.thumbnailUrl} alt='thumbnail' />
            <Over>
                <Thumbnail src={data.thumbnailUrl} alt='thumbnail' />
                <Light>
oiiji
                </Light>
            </Over>
        </CardContainer>
    )
}

export default MovieCard;

const CardContainer = styled.div`
    background-color: rgb(24 24 27);
    position: relative;
    width : 380px;
    transition : 200ms;
    height: 12vw;
    grid-column: span;
    &:hover {
        transform : translateX(2vw);
        transform : translateY(5vw);

        z-index : 4;
    }
`;
const Thumbnail = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
cursor: pointer;
transition: all 500ms;
box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
border-radius : 5px;
`;
const Over = styled.div`
    opacity : 0;
    position: absolute;
    top : 0;
    transition : 200ms;
    z-index : 10;
    visibility: hidden;
    transition-delay: 300ms;
    @media (min-width : 640px) {
        visibility: visible;
    }
    &:hover {
        transform : scale(1.1);
        transform : translateY(6vw);
        transform : translateX(2vw);
    }
`;
const Light = styled.div`
    z-index: 20;
    background-color: rgb(244 244 245);
    
    padding: 0.5rem;
    position : relative;
    border-bottom-right-radius: 0.375rem; 
    border-bottom-left-radius: 0.375rem; 
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
   
    @media (min-width: 1024px) {
        padding: 1rem;
    }
`;