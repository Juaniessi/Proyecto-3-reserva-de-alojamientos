import React from "react";
import Card from "./Card";
import Header from "./Header";
import { hotelsData, today } from "../../public/data";
import EmptyHotels from "./EmptyHotels";

class HotelCtn extends React.Component {
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDate = (e) => {
    if (
      e.target.name === "availabilityFrom" &&
      new Date(e.target.value + "T00:00:00-03:00").valueOf() >
        new Date(this.state.availabilityTo).valueOf()
    ) {
      this.setState({
        availabilityFrom: new Date(e.target.value + "T00:00:00-03:00"),
        availabilityTo: new Date(
          this.state.availabilityTo.setDate(
            new Date(e.target.value + "T00:00:00-03:00").getDate() + 1
          )
        )
      });
    } else {
      this.setState({
        [e.target.name]: new Date(e.target.value + "T00:00:00-03:00")
        //e.target.name le dice desde donde lo llamo (inicio o fin del viaje) y el newDate setea la fecha.
      });
    }
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
          : hotel.price === parseInt(this.state.price, 10); //10 es el valor de la base, 2 binario, 10 decimal, 16 hexadecimal
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
    const hotels = this.filterCards(); //llamo a la función y la almaceno en una varaible
    //console.log(this.state.availabilityFrom);
    //console.log(this.state.availabilityTo);
    return (
      <div className="hotel">
        <Header
          handleInput={this.handleInput}
          handleDate={this.handleDate}
          today={today}
          availabilityFrom={this.state.availabilityFrom}
          availabilityTo={this.state.availabilityTo}
        />
        <div className="cards-container">
          {hotels.length !== 0 ? (
            hotels.map((hotel, index) => <Card {...hotel} key={index} />) //key es un requerimiento de react, se lo agrego para sacar el warning
          ) : (
            <EmptyHotels />
          )}
        </div>
      </div>
    );
  }
}

export default HotelCtn;
