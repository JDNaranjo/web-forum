import React from 'react'
import { app } from '../../fb'

const Login = (props) => {

    const [registering, setRegistering] = React.useState(false);

    const createUser = (email, password) => {
        app.auth().createUserWithEmailAndPassword(email, password).then((firebaseUser)=>{
            console.log("Usuario creado: ", firebaseUser.user);
            props.setUser(firebaseUser);
        });
    }

    const userLogin = (email, password) => {
        app.auth().signInWithEmailAndPassword(email, password).then((firebaseUser)=>{
            console.log("Sesion iniciada", firebaseUser.user);
            props.setUser(firebaseUser);
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email + password)
        if(registering){
            createUser(email, password);
        }else{
            userLogin(email, password);
        }
    };

    return (
        <div>
            <h1>{registering ? "Registrate" : "Inicia Sesion"}</h1>
            <form onSubmit= {submitHandler} >
                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" />
                <button type="submit">{registering ? "Registrate" : "Inicia Sesion"}</button>
            </form>
            <button onClick={ ()=> setRegistering(!registering) } >{registering ? "Ya tienes cuenta? Inicia Sesion" : "No tienes cuenta? Registrate"}</button>
        </div>
    );
};

export default Login;
