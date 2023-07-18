import styled from "styled-components";
import React from "react";

interface MobileMenuProps {
    visible?: boolean;
}


const MobileMenu : React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }
    
    return (
        <Container>
            <InnerContainer>
                <Item>
                    Home
                </Item>
                 <Item>
                    Series
                </Item>
                 <Item>
                    Films
                </Item>
                 <Item>
                    New & Popular
                </Item>
                 <Item>
                    My List
                </Item>
                 <Item>
                    Browse by Languages
                </Item>
            </InnerContainer>
        </Container>
    )
}

export default MobileMenu;

const Container = styled.div`
    background-color : #000;
    width : 14rem;
    position : absolute;
    top : 2rem;
    left : 0;
    padding-top : 1.25rem;
    padding-bottom : 1.25rem;
    display : flex;
    flex-direction : column;
    border : solid 2px #1f2937;
`;

const InnerContainer = styled.div`
    display : flex;
    flex-direction : column;
    gap : 1rem;
`;

const Item = styled.div`
    padding-left : 0.75rem:
    padding-right : 0.75rem;
    text-align : center;
    color : white;
    &:hover{
        text-decoration-line: underline;
    }
`;