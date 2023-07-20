import Input from "@/components/Input";
import axios from "axios";
import GlobalStyle from "@/styles/globalStyles";
import styled from "styled-components";
import { useCallback, useState } from "react";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import { signIn } from 'next-auth/react' ; 
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Logo = styled.img`height : 3rem; `;

const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [variant , setVariant] = useState('login');

    const toggleVariant = useCallback(()  => {
        setVariant((currentVariant) => currentVariant === 'login' ?  'register' : 'login');
    },[]);

    const login = useCallback(async () =>  {
        try {
            await signIn('credentials' , {
                email,
                password,
                callbackUrl : '/profiles'
            });
        }catch(error){
            console.log(error)
        }
    }, [email,password])

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register' , {
                email,
                name,
                password
            });
            login();
        } catch (error) {
            console.log(error)
        }

    },[email , name , password, login]);

    return(
        <Div>
        <GlobalStyle/>
            <NavDiv>
                <Nav>
                    <Logo src="/images/logo.png" alt="Logo" /> 
                </Nav>
                <DivH1>
                    <DivH2>
                        <SignIn className="signin">
                            {variant === 'login' ? 'Sign in' : 'Sign up'}
                        </SignIn>   
                        <WrapFormDiv>
                            {variant === 'register' && (
                            <Input label="Username" onChange={(ev:any) => setName(ev.target.value)} id="name" value={name} className="username" /> )}
                            <Input value={email}  label="Email" onChange={(ev : any) => setEmail(ev.target.value)} id="label_email" type="email" className="email"/>
                            <Input value={password} label="Password" onChange={(ev : any) => setPassword(ev.target.value)} id="password" type="password"   className="password" />
                        </WrapFormDiv>
                        <ButtonSubmit onClick={variant === 'login'? login : register} content={variant === 'login' ? 'Login' : 'Register'}/>
                        <LoginWith>
                            <DivIcon onClick={() => signIn('google', { callbackUrl : '/profiles'})} >
                                <FcGoogle size={27} />
                            </DivIcon>
                            <DivIcon onClick={() => signIn('github', { callbackUrl : '/profiles'})}>
                                <FaGithub size={27} />
                            </DivIcon>
                        </LoginWith>
                        <FirstTime>
                            {variant === 'login' ? 'First time using netflix? ' : 'You already have an account? '}
                            <CreateAcc onClick={toggleVariant}> {variant === 'login' ? 'Create an account' : 'Login'}</CreateAcc>
                        </FirstTime>
                    </DivH2>
                </DivH1>
            </NavDiv>
        </Div>
    )
};

export default Auth;

const Div = styled.div`
position : relative;
height : 100%;
width : 100%;
background: url('/images/hero.jpg') ;
background-size : cover;
background-repeat : no-repeat;
background-attachment: fixed;
background-position: center;
`;
const NavDiv = styled.div`
background : rgba(0,0,0,0.5) ;
width : 100%;
height : 100%;
`;
const Nav  = styled.nav`
padding : 1.25rem 3rem 1.25rem 3rem;
@media only screen and (max-width : 500px) {
    text-align : center ;
}
`;
const DivH1 = styled.div`
display : flex ; 
justify-content : center ;
`;
const DivH2 = styled.div`
background : rgb(0,0,0,0.6);
padding : 4rem;
align-self: center;

border-radius : 6px;
width : 100%;
@media only screen and (min-width : 1024px) {
    width : 2/5 ;
    
    max-width : 25rem;
}
@media only screen and (max-width : 1024px) {
    margin : 0 4rem;
    
}
@media only screen and (max-width : 500px ) {
    padding : 2rem;
    margin : 0 1.5rem;
}
`;
const SignIn = styled.h2`
color : white ; 
font-size: 2rem; /* 36px */
line-height: 2.5rem; /* 40px */
font-weight: 600;
margin-bottom: 2rem; /* 32px */
`;
const WrapFormDiv = styled.div`
display : flex ; 
flex-direction: column;
gap: 1rem; /* 16px */
`;
const FirstTime = styled.p`
color : #737373;
margin-top : 3rem
`;
const  CreateAcc = styled.span`
color : white ; 
margin-left : .5rem
&:hover{
    text-decoration-line : underline;
}
cursor : pointer;
`;
const LoginWith = styled.div`
display : flex ; 
flex-direction : row;
align-items : center;
gap : 1rem;
margin-top : 2rem ; 
justify-content : center ;
`;
const DivIcon = styled.div`
width : 2.5rem ; 
height : 2.5rem ; 
background-color : white;
border-radius: 9999px;
display : flex ; 
align-items : center ; 
justify-content : center ;
cursor : pointer ; 
&:hover {
    opacity : 0.8
}
`;