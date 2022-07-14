import React from "react";
import { Titulo, Containerone, Contenedor, Formulario, Enviar, Images } from '../elementos/Formularios';
import ComponenteInput from '../componentes/Input';
import image from '../assets/mu4.png';

const Login = () => {
    return (
        <main>
            <Contenedor>
                <Formulario action=''>
                    <Images
                        src={image}
                    />
                    <Titulo>Ingresa a tu cuenta</Titulo>
                    <Containerone>

                        <ComponenteInput
                            tipo='email'
                            nombre='email'
                            label='Correo electrónico'
                        />
                        <ComponenteInput
                            tipo='password'
                            nombre='password'
                            label='Contraseña'
                        />
                        <Enviar type="submit" class="form__submit" value="Iniciar sesión" />
                    </Containerone>
                </Formulario>
            </Contenedor>
        </main>
    )
}

export default Login