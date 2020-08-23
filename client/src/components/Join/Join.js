import React from 'react';
import Form from './Form';
import './Join.css';

function Join() {
    return (
        <div className='join-page'>
            <div className='join-header'>
                <h2>Join the community <span role="img" aria-label="bot">🤖</span></h2>
                <p>
                    Just fill the form below and become a part of this wonderful community <span role="img" aria-label="stars">💫</span>
                </p>
            </div>
            <Form />
            <p>Note: Check your Email to get the link of slack workspace</p>
        </div>
    );
}

export default Join;