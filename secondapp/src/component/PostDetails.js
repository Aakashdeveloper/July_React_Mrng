import React from 'react';

const PostDetails = (props) => {
    console.log(props.match.params.topic)
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h2>PostDetails for {props.match.params.topic}</h2>
            </div>
            <div className="panel-body">
                <p>
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                </p>
            </div>
       
        </div>
    )
}

export default PostDetails;