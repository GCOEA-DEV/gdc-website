import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <div className="developer-image">
        <img src={props.developer.img} alt="developer"></img>
      </div>
      <div className="developer-info">
        <div className="dev-name">{props.developer.name}</div>
        <div className="dev-socials">
          <a href={props.developer.github}>Github</a>
          <a href={props.developer.linkedin}>LinkedIn</a>
        </div>
        <div className="dev-skills">
          {
            props.developer.skills.map((skill, i) => <div className="skill" key={i}>{skill}</div>)
          }
        </div>
      </div>
    </div>
  );
}

export default Card;
