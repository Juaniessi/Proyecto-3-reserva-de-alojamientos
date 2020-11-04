import React from "react";

class Header extends React.Component {
  render() {
    const hoy = new Date().toISOString().substring(0, 10); //nos permite poner fechas anteriores a hoy (en la vida real)
    console.log(hoy);
    return (
      <div className="header">
        <div className="info">
          <h1>Hoteles</h1>
          <h2>"fecha reactiva"</h2>
        </div>
        <div className="filters-bar">
          <form className="filters" action="">
            <div className="envoltorio">
              <i className="fas fa-sign-in-alt input-icon"></i>
              <input
                type="date"
                id="start"
                name="trip-start"
                value={hoy}
                min={hoy}
                //max={hoy.valueOf() + 31560000} no nos hace falta
              />
            </div>
            <div className="envoltorio">
              <i className="fas fa-sign-out-alt input-icon"></i>
              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                //max="2018-12-31" no nos hace falta
              />
            </div>
            <div className="envoltorio">
              <i className="fas fa-globe input-icon"></i>
              <select name="paises" id="">
                <option value="todos">Todos los países</option>
                <option value="argentina">Argentina</option>
                <option value="brasil">Brasil</option>
                <option value="chile">Chile</option>
                <option value="uruguay">Uruguay</option>
              </select>
            </div>
            <div className="envoltorio">
              <i className="fas fa-dollar-sign pesitos input-icon"></i>
              <select name="precios" id="">
                <option value="cualquiera">Cualquier precio</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
              </select>
            </div>
            <div className="envoltorio">
              <i className="fas fa-bed input-icon"></i>
              <select name="tamaño" id="">
                <option value="cualquiera">Cualquier tamaño</option>
                <option value="pequeño">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
