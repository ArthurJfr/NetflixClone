import styled from "styled-components";
import { signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu : React.FC<AccountMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <Container>
            <Div>
                <InnerDiv>
                    <ProfileImage src="/images/default-red.png" alt="profileimg" />
                    <Para>Username</Para>
                </InnerDiv>
                <Hr />
                <SignOutNetflix onClick={() => signOut()}>
                    Sign out of Netflix
                </SignOutNetflix>
            </Div>
        </Container>
    )

}
export default AccountMenu;

const Container = styled.div`
    background-color : #000;    
    width : 14rem;
    position : absolute ; 
    top : 3.5rem;
    right : 0;
    padding-top : 0.75rem;
    padding-bottom : 0.75rem;
    display : flex;
    flex-direction : column;
    border : solid 2px #1f2937;
`;

const Div = styled.div`
    display: flex;
    flex-direction : column;
    gap : 0.75rem;
`;
const InnerDiv = styled.div`
    padding-left : 0.75rem ; 
    padding-right : 0.75rem ; 
    display : flex;
    flex-direction : row;
    gap : 0.75rem;
    align-items : center;
    width : 100%;
`;
const ProfileImage = styled.img`
    width : 2rem;
    border-radius : 8px;
`;
const Para = styled.p`
    color : #FFF;
    font-size: 0.875rem; 
    line-height: 1.25rem;
    &:hover {
        text-decoration-line: underline;
    }
`;
const Hr = styled.hr`
    background-color : #4b5563;
    border : none;
    margin-top : 1rem;
    margin-bottom: 1rem;
    height : 1px;
    width : 100%;
`;
const SignOutNetflix = styled.div`
    padding-left : 0.75rem;
    padding-right : 0.75rem;
    text-align : center;
    color : white;
    font-size: 0.875rem; 
    line-height: 1.25rem;
    &:hover{
        text-decoration-line: underline;
    }

`;