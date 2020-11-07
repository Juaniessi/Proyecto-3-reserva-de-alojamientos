import React from "react";
import Card from "./Card";
import Header from "./Header";
import hotelsData from "../../public/data";
import EmptyHotels from "./EmptyHotels";

class HotelCtn extends React.Component {
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  state = {
    country: "any",
    size: "any",
    price: "any",
    availabilityFrom: "",
    availabilityTo: ""
  };

  doesSizeMatters = (size, state) => {
    switch (state) {
      case "Pequeño":
        return size <= 10;
      case "Mediano":
        return size > 10 && size <= 20;
      case "Grande":
        return size > 20;
      default:
        return false;
    }
  };

  filterCards = () => {
    return hotelsData.filter((hotel) => {
      let priceFilter =
        this.state.price === "any"
          ? true
          : hotel.price === parseInt(this.state.price);
      let countryFilter =
        this.state.country === "any"
          ? true
          : hotel.country === this.state.country;
      let sizeFilter =
        this.state.size === "any" ||
        this.doesSizeMatters(hotel.rooms, this.state.size); //le paso el hotel y el tamaño del hotel
      return countryFilter && sizeFilter && priceFilter;
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="hotel">
        <Header handleInput={this.handleInput} />
        <div className="cards-container">
          <EmptyHotels />
          {/* {this.filterCards().map((hotelData) => (
            <Card {...hotelData} /> //de esta manera pasamos todas las propiedades al componente card, quien las recibe en props
          ))} */}
        </div>
      </div>
    );
  }
}

export default HotelCtn;
