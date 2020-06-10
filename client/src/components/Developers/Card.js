import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className='card'>
        <div className='photo'>
            <img src="https://cdn.humanitycrew.org/wp-content/uploads/media/2019/06/113634857-person-gray-photo-placeholder-man-in-t-shirt-on-gray-background.jpg" />
        </div>
        <div className="info">
            <h2>{props.name}</h2>
            <div className="sociallinks">
                <i className="fa fa-github"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-chain"></i>
            </div>
        </div>
    </div>
);

export default Card;