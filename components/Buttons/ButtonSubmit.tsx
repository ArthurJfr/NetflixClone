import styled from "styled-components"
  
interface ButtonProps {
    content :string
    onClick? : () => void
} 

const ButtonStyle = styled.button`
background-color: rgb(220 38 38);
color : white ;
border-radius : 6px; 
width : 100%;
margin-top : 2.5rem;
&:hover {
    background-color : #b91c1c;
}
border : none ; 
outline : none;
padding : 0.75rem;
font-size : 1rem


`


const ButtonSubmit = (props : ButtonProps) => {
    return (
        <ButtonStyle onClick={props.onClick}>{props.content}</ButtonStyle>
    )
}
export default ButtonSubmit