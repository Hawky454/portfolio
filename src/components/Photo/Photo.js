import React from 'react';
import './Photo.css';
import image from '../../images/meAndEs.jpeg';

const Photo = () => (
  <div className="app-photo-container">
    <img className="app-photo" src={image} alt="my daughter and I" />
  </div>
);

export default Photo;
