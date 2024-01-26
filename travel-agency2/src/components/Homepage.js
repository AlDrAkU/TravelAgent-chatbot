import React from "react";
import "./Homepage.css";
import Tile from './Tile';

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Add Home page content here.</p>
      
      <div className="tile-container">

      <Tile link="/destinations" imageUrl="https://via.placeholder.com/150"  title="Destination 1" />
      <Tile link="/deals" imageUrl="https://via.placeholder.com/150"  title="Deal 1" />
      <Tile link="/partners" imageUrl="https://via.placeholder.com/150"  title="Partner 1" />
      <Tile link="/about" imageUrl="https://via.placeholder.com/150"  title="About Us 2" />
      <Tile link="/about" imageUrl="https://via.placeholder.com/150"  title="About Us" price="$7,99"/>



      </div>


     </div>
  );
};

export default HomePage;
