import React from 'react'
import { app } from '../../fb'

const Home = () => {

    const signOut = () => {
        app.auth().signOut();
    }

    return (
        <div>
            <h1>Bienvenue</h1>
            <button onClick={signOut}>Cerrar Sesion</button>
        </div>
    )
}

export default Home
