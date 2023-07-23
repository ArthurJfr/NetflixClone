import styled from "styled-components";
import React from "react";
import Float, { unFloat } from "../styles/translate-label"

interface InputProps {
    id : string
    onChange : any
    value : string
    label : string
    type?: string
    className? :string
}







const Input : React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
     type, 
     className
}) => {
    return (
        <Relative>

        <InputStyle  value={value} type={type} onChange={onChange} onFocus={Float}  onBlur={unFloat} id={id}  placeholder=""/>
        <Label  className={className}  htmlFor={id} >{label}</Label>
        </Relative>
    )
}

export default Input;

const InputStyle = styled.input`
display : block ;
border-radius : 6px;
font-size : 1rem ;
width : 100%;
padding-top : 1rem ;
padding-bottom : .7rem;
padding-left : .5rem; 
padding-right : .5rem ; 
background-color: rgb(64 64 64);
appearance: none;
outline : none;
box-shadow : none ;
border : none ;
color : white ;

}
`
const Relative = styled.div`
position : relative ; 
`;

const Label = styled.label`
position : absolute ; 
font-size : 1.2rem ; 
color: rgb(161 161 170);
transition-duration: 150ms;
z-index :10 ;
top: 0.4rem ;
left : 1.2rem ;
transform-origin : 0 ;
`;
