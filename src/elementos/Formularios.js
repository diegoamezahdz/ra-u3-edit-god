
import styled from "styled-components"

const Contenedor = styled.div`
    margin: auto;
    width: 40%;
    max-width: 90%;
    padding: 2em 2em;
    text-align: center;    

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        width: 90%;
        max-width: 90%;
    }
`

const Formulario = styled.div`
    background-color: #fff;
    padding: 2em 3em;
    border-radius: 10px;
    min-width: 400px;
    box-shadow: 0 5px 10px -5px rgb(0 0 0 / 30%);

`
const Titulo = styled.h2`
    font-weight: 400;
    font-size: 1.3rem;
    color: #936037;
`

const Mapa = styled.div`
    border: 1px solid #3866f2 ;
    background-color: transparent;
    padding: 2em 3em;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 10px -5px rgb(0 0 0 / 30%);
`

const Containerone =styled.div`
    margin-top: 1em;
    display: grid;
    gap: 1em;
`

const Parrafo = styled.p`
    font-weight: 300;
    text-align: center;
`
const Containertwo = styled.div`
    position: relative;
    color: #5757577e;
`
const Input = styled.input`
    width: 100%;
    background: none;
    color: #936037;
    font-size: 1rem;
    padding: .6em .3em;
    border: none;
    outline: none;
    border-bottom: 1px solid #936037;
    font-family: 'Roboto', sans-serif;

    &:not(:placeholder-shown) {
    color: #936037;
    }

    &:focus + Label,
    &:not(:placeholder-shown) + Label {
    transform: translateY(-5px) scale(.7);
    transform-origin: left top;
    color: #936037;
}
`

const Label = styled.label`
    color: #936037e;
    cursor: pointer;
    position: absolute;
    top:0;
    left: 5px;
    transform: translateY(10px);
    transition: transform .5s, color .3s;
`
const Span = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #936037;
    transform: scale(0);
    transform: left bottom;
    transition: transform .4s;

    Input:focus ~ &,
    Input:not(:placeholder-shown) ~ & {
    transform: scale(1);   
}
`

const Enviar = styled.input`
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
    color: #c79556;
    font-weight: 300;
    font-size: 1rem;
    padding: .8em 0;
    border: 1.5px solid #c79556;
    border-radius: .5em;
    cursor: pointer;

    &:hover {
    color: #fff;
    background: #c79556;
    box-shadow: 0 5px 10px -5px rgb(0 0 0 / 30%);
    transition-duration: .5s;
    
}
`

const Images = styled.img`
    height: 300px;
`

export {Titulo, Contenedor, Formulario, Mapa, Containerone, Parrafo, Containertwo, Input, Label, Span, Enviar, Images};
