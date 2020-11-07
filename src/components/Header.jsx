import React from "react";

class Header extends React.Component {
  render() {
    const {
      handleInput,
      handleDate,
      today,
      availabilityFrom,
      availabilityTo
    } = this.props;

    const getDateValue = (date) => {
      return date === "" ? "" : date.toISOString().substr(0, 10);
    };

    console.log(availabilityFrom);
    console.log(availabilityTo);
    return (
      <div className="header">
        <div className="info">
          <h1>
            Hoteles <i className="fas fa-umbrella-beach"></i>
          </h1>
          <h2>"fecha reactiva"</h2>
        </div>
        <div className="filters-bar">
          <form className="filters" action="">
            <div className="envoltorio">
              <i className="fas fa-sign-in-alt input-icon"></i>
              <input
                type="date"
                id="start"
                name="availabilityFrom"
                value={getDateValue(availabilityFrom)}
                min={getDateValue(today)} //obtengo la fecha desde today
                onChange={handleDate}
                //max={hoy.valueOf() + 31560000} no nos hace falta
              />
            </div>
            <div className="envoltorio">
              <i className="fas fa-sign-out-alt input-icon"></i>
              <input
                type="date"
                id="start"
                name="availabilityTo"
                value={getDateValue(availabilityTo)}
                min={getDateValue(availabilityFrom)}
                onChange={handleDate}
                //max="2018-12-31" no nos hace falta
              />
            </div>
            <div className="envoltorio">
              <i className="fas fa-globe input-icon"></i>
              <select name="country" id="" onChange={handleInput}>
                <option value="any">Todos los países</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
              </select>
            </div>
            <div className="envoltorio">
              <i className="fas fa-dollar-sign pesitos input-icon"></i>
              <select name="price" id="" onChange={handleInput}>
                <option value="any">Cualquier precio</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
              </select>
            </div>
            <div className="envoltorio">
              <i className="fas fa-bed input-icon"></i>
              <select name="size" id="" onChange={handleInput}>
                <option value="any">Cualquier tamaño</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
