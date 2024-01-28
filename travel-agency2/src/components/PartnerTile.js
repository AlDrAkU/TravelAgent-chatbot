import React from 'react';
import { Link } from 'react-router-dom';
import './Tile.css'; 

const PartnerTile = ({ link, imageUrl, title, price }) => {  
  return (  
    <div className="tile">  
      <Link to={link}>  
        <img src={imageUrl} alt={title} />  
        <p>{title}</p>  
      </Link>  
      <span className="price">{price}</span>  
    </div>  
  );  
};  

export default PartnerTile;