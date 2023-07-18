import styled from "styled-components";
import React from "react";

interface NavbarItemProps {
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
    label
}) => {
    return (
        <Container>
            {label}
        </Container>
    )
}

export default NavbarItem;

const Container = styled.div`
    color: #FFF;
    cursor: pointer;
    &:hover{
        color: #d1d5db;
    }
    transition-duration: 500ms;
`;
