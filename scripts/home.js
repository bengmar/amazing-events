const contenedorTarjetas = document.getElementById("cardsrender");

let tarjetas = "";

let signPrice = "$";

function crearTarjetas() {
  for(const event of eventsFull.events){
    tarjetas += `<div class="col">
        <div class="card text-center h-100">
          <img class="card-img-top" src="${event.image}" alt="photo" />
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">
              ${event.description}
            </p>
          </div>
          <div
            class="card-footer d-flex justify-content-between align-items-center"
          >
            <p class="price">Price: ${signPrice}${event.price}</p>
            <a href="./details.html" class="details">More Details</a>
          </div>
        </div>
      </div>`;
  }
  return tarjetas;
}

// TESTING FUNCTION console.log(crearTarjetas(events))
contenedorTarjetas.innerHTML = crearTarjetas();
