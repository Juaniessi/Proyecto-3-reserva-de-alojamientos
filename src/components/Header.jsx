import React from "react";

class Header extends React.Component {
  options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  getDateValue = (date) => {
    //función para escribir el precio en el header
    return date === "" ? "" : date.toISOString().substr(0, 10);
  };

  getDateString = () => {
    //función para escribir la fecha en el header
    return `Desde: ${
      this.props.availabilityFrom &&
      this.props.availabilityFrom.toLocaleDateString("es-ES", this.options)
    } 
            Hasta: ${
              this.props.availabilityTo &&
              this.props.availabilityTo.toLocaleDateString(
                "es-ES",
                this.options
              )
            }`;
  };

  getSizeString = () => {
    //función para escribir el tamaño en el header
    return this.props.size === "any"
      ? "De cualquier tamaño"
      : `De tamaño ${this.props.size}`;
  };

  getPriceString = () => {
    //función para escribir el precio en el header
    switch (parseInt(this.props.price, 10)) {
      case 1:
        return "Económico";
      case 2:
        return "Mediano";
      case 3:
        return "Costoso";
      case 4:
        return "Muy costoso";
      default:
        return "De cualquier precio";
    }
  };

  getCountryString = () => {
    return this.props.country === "any"
      ? "De cualquier país"
      : `País: ${this.props.country}`;
  };

  render() {
    const {
      handleInput,
      handleDate,
      today,
      availabilityFrom,
      availabilityTo,
      size,
      price,
      country,
      filtersReset
    } = this.props;

    return (
      <div className="header">
        <div className="info">
          <h1>
            Hoteles <i className="fas fa-umbrella-beach"></i>
          </h1>
          <h2>
            {this.getDateString()}
            <br />
            {this.getCountryString()}
            <br />
            {this.getPriceString()}
            <br />
            {this.getSizeString()}
          </h2>
        </div>
        <div className="filters-bar">
          <form className="filters" action="">
            <div className="envoltorio">
              <i className="fas fa-sign-in-alt input-icon"></i>
              <input
                type="date"
                id="start"
                name="availabilityFrom"
                value={this.getDateValue(availabilityFrom)}
                min={this.getDateValue(today)} //obtengo la fecha desde today
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
                value={this.getDateValue(availabilityTo)}
                min={this.getDateValue(availabilityFrom)}
                onChange={handleDate}
                //max="2018-12-31" no nos hace falta
              />
            </div>
            <div className="envoltorio">
              <i className="fas fa-globe input-icon"></i>
              <select
                value={country}
                name="country"
                id=""
                onChange={handleInput}
              >
                <option value="any">Todos los países</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
              </select>
            </div>
            <div className="envoltorio">
              <i className="fas fa-dollar-sign pesitos input-icon"></i>
              <select value={price} name="price" id="" onChange={handleInput}>
                <option value="any">Cualquier precio</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
              </select>
            </div>
            <div className="envoltorio">
              <i className="fas fa-bed input-icon"></i>
              <select value={size} name="size" id="" onChange={handleInput}>
                <option value="any">Cualquier tamaño</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </select>
            </div>
          </form>
          <button className="reset-filters" onClick={filtersReset}>
            <i className="fas fa-trash-alt"></i> Limpiar filtros
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
