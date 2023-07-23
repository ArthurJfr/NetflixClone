import styled from "styled-components";
import GlobalStyle from "@/styles/globalStyles";

import { getSession } from "next-auth/react"
import { NextPageContext } from "next"

import useCurrentUser from "@/hooks/useCurrentUser";

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent : false,
      }
    }
  }
  return {
    props : {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Billboard />
      <ListContainer>
        <MovieList title="Trending Now" data={movies} />
      </ListContainer>
      
    </>
  )
}

const ListContainer = styled.div`
  padding-bottom : 10rem;
`;