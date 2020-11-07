import React from "react";

function EmptyHotels() {
  return (
    <div className="empty-hotels">
      <i class="fas fa-skull-crossbones"></i>
      <h2>No pudimos encontrar un hotel con los filtros seleccionados</h2>
    </div>
  );
}

export default EmptyHotels;
