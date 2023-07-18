import styled from "styled-components"
import GlobalStyle from "@/styles/globalStyles"
export const Title = styled.h1`color : green;`
import { getSession, signOut } from "next-auth/react"
import ButtonSubmit from "@/components/Buttons/ButtonSubmit"
import { NextPageContext } from "next"
import useCurrentUser from "@/components/hooks/useCurrentUser"
import Navbar from "@/components/Navbar"

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

  return (
    <>
      <GlobalStyle />
      <Navbar />
  
    
    </>
  )
}

const Para = styled.p`
  color : white;
`