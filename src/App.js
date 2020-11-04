import React from "react";
import "./styles.scss";
//import Card from "./components/Card";
import HotelCtn from "./components/HotelCtn";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HotelCtn />
      </div>
    );
  }
}

export default App;
