import React from "react";

function Card(props) {
  const {
    slug,
    name,
    photo,
    description,
    //availabilityFrom, //las dejo para recordar la forma del objeto
    //availabilityTo,
    rooms,
    city,
    country,
    price
  } = props;

  const maxPrice = 4; //creamos variable para poder setear el precio máximo.
  const getPriceIconsClasses = () => {
    // creamos el array que tiene la cantidad de iconos coloreados.
    let iconsClasses = [];
    for (let i = 0; i < maxPrice; i++) {
      iconsClasses.push(
        `fas fa-dollar-sign ${i >= price ? "transparentize" : ""}`
      );
    }
    return iconsClasses;
  };

  const priceIconsClases = getPriceIconsClasses();

  return (
    <article className="card">
      <img src={photo} className="card-img-top" alt={slug} />
      <div className="card-body">
        <div className="description">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>
        </div>
        <div className="info-container">
          <div className="location">
            <div className="icon">
              <i className="fas fa-map-marker"></i>
            </div>
            <span className="info-txt">
              {city}, {country}
            </span>
          </div>
          <div className="capacity">
            <div className="icon">
              <i className="fas fa-bed"></i>
            </div>
            <span className="info-txt">{rooms} Habitaciones</span>
          </div>
          <div className="pricing">
            <div className="money">
              {
                priceIconsClases.map((classes, i) => (
                  <i className={classes} key={i}></i>
                )) //mapeo el array de preceIconsClases para renderizazrlo en el html
              }
            </div>
          </div>
        </div>
      </div>
      <button className="btn">Reservar</button>
    </article>
  );
}

export default Card;
