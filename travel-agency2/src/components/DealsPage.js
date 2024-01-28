import React from "react";
import Tile from './Tile';

const DealsPage = () => {
    return (
        <div>
            <h2>Our Deals</h2>
            <p>Add Deals page content here.</p>
            <div className="tile-container">

            <Tile link="/France" imageUrl="https://th.bing.com/th/id/OIP.gOiajMIog2Kbarg3VMx9RwHaE8?rs=1&pid=ImgDetMain"  title="France" price="starting from $79,99"/>
            <Tile link="/Spain" imageUrl="https://th.bing.com/th/id/R.698b928863383532fb9d858529d27673?rik=B1lHeRFHKv7Vww&riu=http%3a%2f%2fwww.shbarcelona.com%2fblog%2fen%2fwp-content%2fuploads%2f2014%2f09%2fbarcelona-night2.jpg&ehk=iPY1daNHY%2bdB8kwmhS3aSLAZsZGdHZ2RAciQB6RwVpk%3d&risl=&pid=ImgRaw&r=0"  title="Spain" price="starting from $37,99"/>
            <Tile link="/Italy" imageUrl="https://th.bing.com/th/id/OIP.7NKDf_Tn-_On1IPUB8chKAHaES?rs=1&pid=ImgDetMain"  title="Italy" price="starting from $44,99"/>
            <Tile link="/Turkey" imageUrl="https://th.bing.com/th/id/OIP.YRASSm3Aakurxlx8nYA95gHaFj?rs=1&pid=ImgDetMain"  title="Turkey" price="starting from $112,99"/>
            <Tile link="/Finland" imageUrl="https://th.bing.com/th/id/OIP.vE-n-YMwIKo_5J4SorN6UQHaE8?rs=1&pid=ImgDetMain"  title="Finland" price="starting from $88,99"/>



</div>
        </div>
    );
};




export default DealsPage;
