import React from "react";  
import "./DestinationsPage.css"; 
const DestinationsPage = () => {  
    return (  
        <div className="destinations-page">  
            <h2>Destinations</h2>  
            <p>Here are some of our popular destinations:</p>  

            <div className="tile-detail-container">  
                <TileDetail link="/Paris" imageUrl="https://th.bing.com/th/id/OIP.gOiajMIog2Kbarg3VMx9RwHaE8?rs=1&pid=ImgDetMain" title="Paris" description="Paris, the epitome of romance, elegance, and charm. Known as the 'City of Light', Paris is a treasure trove of historical landmarks, world-class museums, and exquisite cuisine. Start your journey with a visit to the iconic Eiffel Tower, where you can enjoy a panoramic view of the city. Explore the artistic masterpieces at the Louvre Museum, home to the famous Mona Lisa. Stroll along the Seine River, visit the gothic Notre-Dame Cathedral, and experience the vibrant nightlife in the Latin Quarter. Don't forget to indulge in a croissant at a local boulangerie or enjoy a meal at a sidewalk café. Every corner of Paris offers a unique blend of culture, history, and beauty that leaves tourists spellbound."/>  
                <TileDetail link="/Rome" imageUrl="https://th.bing.com/th/id/OIP.7NKDf_Tn-_On1IPUB8chKAHaES?rs=1&pid=ImgDetMain" title="Rome" description="Rome, the Eternal City! Steeped in history and culture, Rome is a must-visit destination for any traveler. Begin your journey at the Colosseum, the largest amphitheater ever built, and imagine the gladiator fights that once took place there. Wander through the Roman Forum, the heart of ancient Rome, with its ruins of government buildings and temples. Don't miss the Pantheon, a former Roman temple and now a church, with its stunning dome and oculus. Take a stroll around Piazza Navona, enjoy a gelato, and toss a coin into the Trevi Fountain to ensure your return to Rome. End your day with a visit to Vatican City, home to St. Peter's Basilica and the Sistine Chapel. From its ancient ruins to its vibrant piazzas, Rome offers an unforgettable journey through history."/>  
                <TileDetail link="/Helsinki" imageUrl="https://th.bing.com/th/id/OIP.vE-n-YMwIKo_5J4SorN6UQHaE8?rs=1&pid=ImgDetMain" title="Helsinki" description="Helsinki, the vibrant seaside capital of Finland! Known for its beautiful archipelago, diverse architecture, and contemporary design, Helsinki offers a unique blend of cosmopolitan charm and natural beauty. Start your journey at the iconic Senate Square, home to the grand Helsinki Cathedral. Explore the Suomenlinna Sea Fortress, a UNESCO World Heritage site, or visit the contemporary Kiasma Museum of Modern Art. Take a stroll along the bustling Market Square, where you can sample traditional Finnish delicacies. Don't miss the opportunity to relax in a traditional Finnish sauna, a quintessential Helsinki experience. From its lively festivals to its serene natural parks, Helsinki promises a memorable experience for every traveler."/> 
                <TileDetail link="/Baracelona" imageUrl="https://th.bing.com/th/id/OIP.RYJ4CagDCUqopxDB_F8EwwHaE4?rs=1&pid=ImgDetMain" title="Barcelona" description="Barcelona, the cosmopolitan capital of Spain's Catalonia region! Known for its art and architecture, Barcelona is a city that never fails to impress. Start your journey at the stunning Basilica of Sagrada Familia, the masterpiece of architect Antoni Gaudí. Wander through the colorful Park Güell, another Gaudí's creation, offering panoramic views of the city. Explore the Gothic Quarter, with its narrow medieval streets filled with trendy bars, clubs and Catalan restaurants. Don't miss the chance to visit Camp Nou, the home stadium of FC Barcelona. End your day at La Rambla, a bustling tree-lined pedestrian street, perfect for a leisurely stroll. From its vibrant culture to its historical landmarks, Barcelona promises an unforgettable travel experience."/> 
            </div>  
        </div>  
    );  
};  

const TileDetail = ({ link, imageUrl, title, description }) => {
    return (
      <div className="tile-detail">
        <div className="tile-detail-content">
          <div className="tile-detail-image-container">
            <img src={imageUrl} alt={title} className="tile-detail-image" />
          </div>
          <div className="text-content">
            <h3 className="title-detail-heading">{title}</h3>
            <p className="tile-detail-description">{description}</p>
          </div>
        </div>
      </div>
    );
  };


export default DestinationsPage;
