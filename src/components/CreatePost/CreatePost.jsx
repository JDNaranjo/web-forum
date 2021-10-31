import React from 'react'

const CreatePost = () => {
    return (
        <div className='post-container'>
            <div className='panel panel-default post-editor'>
                <div className='panel-body'>
                    <textarea className='form-control post-editor-input'></textarea>
                    <button className='btn btn-success post-editor-button'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
