import React from 'react';
import styled from 'styled-components';


interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    return (
        <CardContainer>
            <Thumbnail src={data.thumbnailUrl} />
        </CardContainer>
    )
}

export default MovieCard;

const CardContainer = styled.div`
    background-color: rgb(24 24 27);
    position: relative;
    height: 12vw;
    grid-column: span;
    &:hover {}
    
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