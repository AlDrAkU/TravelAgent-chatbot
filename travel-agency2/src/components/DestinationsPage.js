import React from "react";  
import "./DestinationsPage.css"; 
const DestinationsPage = () => {  
    return (  
        <div className="destinations-page">  
            <h2>Destinations</h2>  
            <p>Here are some of our popular destinations:</p>  

            <div className="tile-detail-container">  
                <TileDetail link="/destination1" imageUrl="https://via.placeholder.com/300x200" title="Destination 1" />  
                <TileDetail link="/destination2" imageUrl="https://via.placeholder.com/300x200" title="Destination 2" />  
                <TileDetail link="/destination3" imageUrl="https://via.placeholder.com/300x200" title="Destination 3" />  
                <TileDetail link="/destination4" imageUrl="https://via.placeholder.com/300x200" title="Destination 4" />  
            </div>  
        </div>  
    );  
};  

const TileDetail = ({ link, imageUrl, title }) => {
    return (
      <div className="tile-detail">
        <div className="tile-detail-content">
          <div className="tile-detail-image-container">
            <img src={imageUrl} alt={title} className="tile-detail-image" />
          </div>
          <div className="text-content">
            <h3 className="title-detail-heading">{title}</h3>
            <p className="tile-detail-description">Some description here</p>
          </div>
        </div>
      </div>
    );
  };


export default DestinationsPage;
