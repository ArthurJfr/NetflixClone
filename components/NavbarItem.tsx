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
        z-index : 40;
        transform : scale(1.1);
    }
    transition-duration: 500ms;
`;
