import styled from "styled-components"
import GlobalStyle from "@/styles/globalStyles"
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useCurrentUser from "@/components/hooks/useCurrentUser";
import { useRouter } from "next/router";


export async function getServerSideProps( context : NextPageContext ) {
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

const Profiles = () => {
    const router = useRouter();
    const { data: user } = useCurrentUser();


    return (
        <PageContainer>
            <GlobalStyle />
            <Container>
                <Question>Who's watching ?</Question>
                <Profile>
                    <div onClick={() => router.push('/')}>
                        <BigCase>
                            <Case>
                                <ImageProfile src="/images/default-red.png" alt="imgprofile" />
                            </Case>
                            <ProfileName>{ user?.name }</ProfileName>
                        </BigCase>
                    </div>
                </Profile>
            </Container>
        </PageContainer>
    )
};

export default Profiles;

const PageContainer = styled.div`
    display : flex; 
    align-items : center; 
    justify-content : center;
    height : 100%;
`;
const Container = styled.div`
    display : flex;
    flex-direction : column; 
`;
const Question = styled.h1`
	font-size: 1.875rem; 
    line-height: 2.25rem; 
    color : white;
    text-align : center;
`;
const Profile = styled.div`
    display : flex;
    align-items : center ; 
    justify-content : center;
    gap: 2rem; 
	margin-top: 2.5rem;
`;
const BigCase = styled.div`
    flex-direction : row;
    width: 11rem;
    margin : 0 auto;
`;
const Case = styled.div`
    width : 11rem;
    height : 11rem;
    border-radius: 8px;
    display : flex;
    align-items : center ; 
    justify-content : center;
        &:hover {
        cursor : pointer; 
        border : solid 1px white;
        overflow : hidden;
    }
`;
const ImageProfile = styled.img`
    width : 100%;
    border-radius: 8px;
`;
const ProfileName = styled.div`
    margin-top: 1rem;
    color: rgb(156 163 175);
    text-align : center;
    font-size: 1.5rem; 
    line-height: 2rem;
    &:hover {
        color : white;
    }
`;


