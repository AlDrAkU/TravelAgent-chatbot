import React from "react";
import "./Homepage.css";
import Tile from './Tile';

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>These are some of the recently added destinations.</p>
      
      <div className="tile-container">

      <Tile link="/Portugal" imageUrl="https://th.bing.com/th/id/OIP.qpsVFMLwswHH2OtCqib9dQHaE8?rs=1&pid=ImgDetMain"  title="Portugal" price="starting from $75" />
      <Tile link="/Norway" imageUrl="https://media.nomadicmatt.com/2020/oslothings1.jpg"  title="Norway" price="starting from $90" />
      <Tile link="/Turkey" imageUrl="https://th.bing.com/th/id/R.1e474e04a4d36abf959aeecb4076cdfd?rik=awY4wsQqd44bJA&pid=ImgRaw&r=0"  title="Turkey" price="starting from $160" />
      <Tile link="/Moldova" imageUrl="https://static.independent.co.uk/2021/09/24/16/iStock-1066138896.jpg"  title="Moldova" price="starting from $80" />
      <Tile link="/Romania" imageUrl="https://d1bvpoagx8hqbg.cloudfront.net/originals/my-experience-bucharest-romania-geoffrey-a7b34caa18fce92b74573ca1f8d585ce.jpg"  title="Romania" price="starting from $120" />


      </div>


     </div>
  );
};

export default HomePage;
