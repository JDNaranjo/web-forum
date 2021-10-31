import React from 'react'
import { app } from '../../fb'
import "./Login.css" 

const Login = (props) => {

    const [registering, setRegistering] = React.useState(false);

    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    
    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const createUser = (email, password) => {
        clearErrors();
        app.auth().createUserWithEmailAndPassword(email, password).then((firebaseUser)=>{
            console.log("Usuario creado: ", firebaseUser.user);
            props.setUser(firebaseUser);
        }).catch((err)=>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    const errorE = err.message.split(":");
                    const errorEF = errorE[1].split("(");
                    setEmailError(errorEF[0]);
                    break;
                case "auth/weak-password":
                    const errorP = err.message.split(":");
                    const errorPF = errorP[1].split("(");
                    setPasswordError(errorPF[0]);
                    break;
                default:
                    break;
            }
        });
    }

    const userLogin = (email, password) => {
        clearErrors();
        app.auth().signInWithEmailAndPassword(email, password).then((firebaseUser)=>{
            console.log("Sesion iniciada", firebaseUser.user);
            props.setUser(firebaseUser);
        }).catch((err)=>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disable":
                case "auth/user-not-found":
                    const errorE = err.message.split(":");
                    const errorEF = errorE[1].split("(");
                    setEmailError(errorEF[0]);
                    break;
                case "auth/wrong-password":
                    const errorP = err.message.split(":");
                    const errorPF = errorP[1].split("(");
                    setPasswordError(errorPF[0]);
                    break;
                default:
                    break;
            }
        });
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
        <div className="container">
            <h1>{registering ? "Registrate" : "Inicia Sesion"}</h1>
            <form onSubmit= {submitHandler} >
                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" />
                <p className='errorMsg'>{emailError}</p>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" />
                <p className='errorMsg'>{passwordError}</p>
                <div className="btnContainer">
                    <button type="submit">{registering ? "Registrate" : "Inicia Sesion"}</button>
                    <span className="span-style" onClick={ ()=> setRegistering(!registering) } >{registering ? "Ya tienes cuenta? Inicia Sesion" : "No tienes cuenta? Registrate"}</span>
                </div>
            </form>
        </div>
    );
};

export default Login;
