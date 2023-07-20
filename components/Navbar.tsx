import styled from "styled-components"
import NavbarItem from "./NavbarItem";
import { BsChevronDown } from 'react-icons/bs'
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { useCallback, useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";


const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, [])

    const NavContainer = styled.div`
        padding-left: 1rem;
        padding-right: 1rem;
        @media (min-width : 768px) {
            padding-left: 4rem;
            padding-right: 4rem;
        }
        padding-top : 1.5rem;
        padding-bottom : 1.5rem;
        display: flex;
        flex-direction : row;
        align-items : center;
        transition-duration: 500ms;
        background-color : ${showBackground ? 'rgba(24, 24, 27,0.9);' : ';'}
        &:hover {
            background-color : rgba(24, 24, 27,0.7);
        }
    `;
    const Chevron = styled.div`
    color : #FFF;
    transform : ${showAccountMenu ? 'rotate(180deg);' : 'rotate(0);'}
    `;

    return (
        <Nav >
            <NavContainer>
                
                <NetflixLogo src="/images/logo.png" alt="Logo" />
                <MenuDesktop>
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My list" />
                    <NavbarItem label="Browse by languages" />
                </MenuDesktop>
                <MenuLg onClick={toggleMobileMenu}>
                    <Browse>Browse</Browse>
                    <Chevron>
                        <BsChevronDown color="white" />
                    </Chevron>
                    <MobileMenu visible={showMobileMenu}  />
                </MenuLg>
                <RightNav>
                    <IconContainer>
                        <BsSearch />
                    </IconContainer>
                    <IconContainer>
                        <BsBell />
                    </IconContainer>
                    <MyProfile onClick={toggleAccountMenu}>
                        <InnerProfile>
                            <ProfileImage src="/images/default-red.png"  alt="profileimg"/>
                        </InnerProfile>
                        <Chevron>
                            <BsChevronDown color="white" />
                        </Chevron>
                        <AccountMenu visible={showAccountMenu} />
                    </MyProfile>
                </RightNav>
            </NavContainer>
        </Nav>
    )
}

export default Navbar;

const Browse = styled.p`
    color : #FFF;

`;
const Nav = styled.nav`
    position : fixed;
    width : 100%;
    z-index : 40;
    transition : 1s;
`;

const NetflixLogo = styled.img`
    height: 1rem;
    @media (min-width : 1024px){
        height: 1.75rem;
    }
`;
const MenuDesktop = styled.div`
    flex-direction: row;
    margin-left: 2rem;
    gap: 1.75rem;
    display : none;
    @media (min-width : 1024px){
        display : flex;
    }
`;
const MenuLg = styled.div`
    display: flex;
    flex-direction : row ;
    align-items:  center ; 
    gap : 0.5rem;
    margin-left : 2rem;
    cursor : pointer;
    position : relative;
    @media (min-width: 1024px){
        display: none ;
    }
`;

const RightNav = styled.div`
    display : flex;
    flex-direction : row;
    margin-left : auto;
    gap : 1.75rem;
    align-items : center;
`;

const IconContainer = styled.div`
    color : #f3f4f6;
    cursor : pointer;
    transition : 500ms;
    &:hover {
        color : #d1d5db;
    }
`;

const MyProfile = styled.div`
    display : flex;
    flex-direction: row;
    align-items : center;
    gap : 0.5rem;
    cursor : pointer;
    position : relative;

`;

const InnerProfile = styled.div`
    width : 1.5rem;
    height : 1.5rem;
    
    @media (min-width : 1024px) {
        width : 2.5rem;
        height : 2.5rem;
    }
    border-radius : 8px;
    overflow : hidden;
`;
const ProfileImage = styled.img`
    width : 100%;
`;




