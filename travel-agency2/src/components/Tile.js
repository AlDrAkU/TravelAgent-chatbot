
import React from 'react';
import { Link } from 'react-router-dom';
import './Tile.css'; 

const Tile = ({ link, imageUrl, title, price }) => {  
  return (  
    <div className="tile">  
      <Link to={link}>  
        <img src={imageUrl} alt={title} />  
        <p>{title}</p>  
      </Link>  
      <div className="ribbon new-ribbon">New</div>  
      <span className="price">{price}</span>  
    </div>  
  );  
};  

export default Tile;
