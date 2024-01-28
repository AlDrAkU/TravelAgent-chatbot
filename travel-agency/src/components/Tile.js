
import React from 'react';
import { Link } from 'react-router-dom';
import './Tile.css'; 

const Tile = ({ link, imageUrl, title, price }) => {  
  return (  
    <div className="tile">  
    <div className="tile-image-thumbnail">
    <Link to={link}>  
        <img src={imageUrl} alt={title} />  
        <p>{title}</p>  
      </Link>  
    </div>
      <div className="ribbon new-ribbon">New</div>  
      <span className="price">{price}</span>  
    </div>  
  );  
};  

export default Tile;
