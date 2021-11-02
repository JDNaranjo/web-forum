import React from 'react'
import { Card, Button } from 'react-bootstrap'

const PostEditor = (props) => {
    return (
        <div>
            <Card className='panel panel-default post-editor'>
                <Card.Body>
                    <Card.Title>{props.postBody}</Card.Title>
                    <Card.Text>
                        Owner
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PostEditor
