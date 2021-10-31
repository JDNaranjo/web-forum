import React, {useState} from 'react';
import { app } from '../../fb'
import {RiLogoutBoxLine} from 'react-icons/ri'
import './Forum.css'
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Forum = () => {

    const [state, setstate] = useState({
        posts:[],
        newPostBody: '',
    }); 

    const signOut = () => {
        app.auth().signOut();
    }

    const addPost = () => {
        const newState = Object.assign({}, state);
        newState.posts.push(state.newPostBody)
        newState.newPostBody = '';
        setstate(newState);
    }
    
    const handlePostEditorInput = (event) => {
        setstate({
            posts: state.posts,
            newPostBody: event.target.value,
        })
    }

    return (
        <div>
            <RiLogoutBoxLine onClick={signOut} />
            <div>
                <div className="panel panel-default post-body">
                    <div className="panel-body">
                        Crear una publicacion
                    </div>
                </div>
                <div className='panel panel-default post-editor'>
                    <div className='panel-body'>
                        <textarea className='form-control post-editor-input' onChange={handlePostEditorInput} ></textarea>
                        <button className='btn btn-success post-editor-button' onClick={addPost} >Post</button>
                    </div>
                </div>
            </div>
            {
                state.posts.map((postBody) => {
                    return(
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    {postBody}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )

};

export default Forum;