import styled from "styled-components";
import React from 'react';

import { isEmpty } from 'lodash';
import MovieCard from "./MovieCard";

interface MovieListProps {
    data: Record<string, any>[];
    title: string;
}

const MovieList : React.FC<MovieListProps> = ({ data, title }) => {
    if (isEmpty(data)) {
        return null;
    }

    return (
        <Container>
            <NoStyled>
                <Title>{title}</Title>
                <IdDiv>
                    {data.map((movie) => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </IdDiv>
            </NoStyled>
        </Container>
    )
}

export default MovieList;

const Container = styled.div`
    padding-left : 1rem;
    padding-right : 1rem;
    margin-top : 2rem;

    @media (min-width : 768px){
        padding-left : 3rem;
        padding-right : 3rem;
    }
`;
const NoStyled = styled.div``;

const Title = styled.div`
    color : white;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: semibold;
    margin-bottom: 1rem;
    @media (min-width : 768px) {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
    @media (min-width : 1024px) {
        font-size: 1.5rem;
        line-height: 2rem;
        }
`;
const IdDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
`;
