import React, {useState} from 'react';
import { app } from '../../fb'
import {RiLogoutBoxLine} from 'react-icons/ri'
import './Forum.css'
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import 'firebase/firestore';

const Forum = () => {

    const [state, setstate] = useState({
        posts:[],
        newPostBody: '',
    }); 

    const signOut = () => {
        app.auth().signOut();
    }

    const getAllPosts = () => {
        let collec = app.firestore().collection('users');
        collec.get().then((querySnapshot) => {
            const tempDoc = querySnapshot.docs.map((doc) => {
              return { ...doc.data() }
            })
            console.log(tempDoc)
          });
    }

    const addPost = () => {
        const newState = Object.assign({}, state);
        newState.posts.push(state.newPostBody);
        setstate(newState);
        console.log(getAllPosts());
        var uuid = uuidv4();
        app.firestore().collection('users').doc(app.auth().currentUser.uid).collection('posts').doc(uuid).set({
            text:  state.newPostBody,
            owner: app.auth().currentUser.email,
            id: uuid,
        });
        newState.newPostBody = '';
    }
    
    const handlePostEditorInput = (event) => {
        setstate({
            posts: state.posts,
            newPostBody: event.target.value,
        })
    }

    return (
        <div>
            <RiLogoutBoxLine onClick={signOut} style={{float: 'right', fontSize: '25px', color: '#df5600' }} />
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
                        <hr className="hr-line" />
                    </div>
                </div>
            </div>
            {
                state.posts.map((postBody) => {
                    return(
                        <Card className='panel panel-default post-editor'>
                            <Card.Body>
                                <Card.Title>{postBody}</Card.Title>
                                <Card.Text>
                                    {app.auth().currentUser.email}
                                </Card.Text>
                                <Button variant="primary">Ir al post</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )

};

export default Forum;