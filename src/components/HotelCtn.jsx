import React from "react";
import Card from "./Card";
import Header from "./Header";
import hotelsData from "../../public/data";

class HotelCtn extends React.Component {
  render() {
    return (
      <div className="hotel">
        <Header />
        <div className="cards-container">
          {hotelsData.map((hotelData) => (
            <Card {...hotelData} /> //de esta manera pasamos todas las propiedades al componente card, quien las recibe en props
          ))}
        </div>
      </div>
    );
  }
}

export default HotelCtn;
