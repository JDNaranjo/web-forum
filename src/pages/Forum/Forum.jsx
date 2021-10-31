import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { app } from '../../fb'
import {RiLogoutBoxLine} from 'react-icons/ri'
import './Forum.css'
import {Link} from 'react-router-dom'
import CreatePost from '../../components/CreatePost/CreatePost';

const Forum = () => {

    const signOut = () => {
        app.auth().signOut();
    }

    return (
        <div>
            <CreatePost></CreatePost>
            <NavBar />
            <ul className='btn-logout'>
                <Link to="/">
                    <RiLogoutBoxLine onClick={signOut} style={{color: "white", backgroundColor: "#df5600", borderRadius: '4px'}} />
                </Link>
            </ul>
        </div>
    )

};

export default Forum;