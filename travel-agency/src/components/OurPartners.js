import React from "react";
import PartnerTile from './PartnerTile';

const PartnersPage = () => {
    return (
        <div>
            <h2>Our Partners</h2>

            <div className="tile-container">

            <PartnerTile link="/AccorHotels" imageUrl="https://logonoid.com/images/accor-logo.png"/>
            <PartnerTile link="/Ibis" imageUrl="https://th.bing.com/th/id/OIP.ECG4fYd0mNmYdhoMQexN_QHaHe?rs=1&pid=ImgDetMain"/>
            <PartnerTile link="/BrusselsAirlines" imageUrl="https://th.bing.com/th/id/R.2f48a7c799b4995d9578ed9580b40fbe?rik=CjUFUriPLHZNmA&riu=http%3a%2f%2fwww.ranklogos.com%2fwp-content%2fuploads%2f2012%2f04%2fbrussels-airline-logo-1.jpg&ehk=vIHEfFC3N%2b%2fwBAcGeH5rUB0Z%2bC6c4bs0lytiqDikNFQ%3d&risl=&pid=ImgRaw&r=0"/>
            <PartnerTile link="/Trivago" imageUrl="https://th.bing.com/th/id/R.a6b3454a7e09890715b234e23e34020f?rik=d8eStAK6R%2fWx%2fw&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f10%2fTrivago_logo_logotype.png&ehk=9J3YOrlZAbPgAC4vboB0X3VhuNgY%2fbGncyywiL6Tfo4%3d&risl=&pid=ImgRaw&r=0"/>
            <PartnerTile link="/Skyscanner" imageUrl="https://download.logo.wine/logo/Skyscanner/Skyscanner-Logo.wine.png"/>

            </div>
        </div>
    );
};



export default PartnersPage;
