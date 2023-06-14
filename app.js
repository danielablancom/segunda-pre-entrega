let paises = [];
let paqueteDeViajesSeleccionados = [];
class DestinoChile {
  constructor(id, nombrePaquete, valor) {
    this.id = id;
    this.nombrePaquete = nombrePaquete;
    this.valor = valor;
  }
}
const cataratas = new DestinoChile(1, "Cataratas", 12000);
const torresDelPaine = new DestinoChile(2, "Torres del Paine", 7000);
const huiloHuilo = new DestinoChile(4, "Huilo Huilo", 30000);
const salto = new DestinoChile(6, "Salto El Puma", 80000);

let opcionesDeViaje = prompt(
  'Ingresa el país de destino\n1 - Chile\n2 - Argentina\n3 - Venezuela'
);

function escogerPais(pais) {
  if (pais === '1') {
    alert('Planifiquemos tu viaje a Chile');
  } else if (pais === '2') {
    alert('Planifiquemos tu viaje a Argentina');
  } else if (pais === '3') {
    alert('Planifiquemos tu viaje a Venezuela');
  } else {
    alert('Selecciona una opción válida');
  }
}
escogerPais(opcionesDeViaje);

let presupuestoDeViaje = Number(
  prompt('Ingresa el monto de tu presupuesto para este viaje')
);

function obtenerMontos() {
  let hospedaje = parseFloat(prompt('Ingresa el presupuesto para hospedaje'));
  let transporte = parseFloat(prompt('Ingresa el presupuesto para transporte'));
  let comida = parseFloat(prompt('Ingresa el presupuesto para comida'));

  return { hospedaje, transporte, comida };
}

function calcularGastos() {
  const { hospedaje, transporte, comida } = obtenerMontos();
  let gastos = parseInt(hospedaje) + parseInt(transporte) + parseInt(comida);
  let balance = presupuestoDeViaje - gastos;
  alert(
    `Tu balance es de: ${balance}`
  );

  return balance

}

if (opcionesDeViaje === "1") {
  let confirmacion = confirm("¿Deseas agregar un paquete de viajes?");

  if (confirmacion) {
    const destinos = [
      { id: 1, paquete: "Cataratas", valor: 12000 },
      { id: 2, paquete: "Torres del Paine", valor: 7000 },
      { id: 3, paquete: "Huilo Huilo", valor: 30000 },
      { id: 4, paquete: "Salto El Puma", valor: 80000 },
    ];

    let destinosDisponibles = "Destinos Disponibles:\n";

    for (let destino of destinos) {
      destinosDisponibles += `${destino.id}. - ${destino.paquete} / valor: ${destino.valor}\n`;
    }

    let respuesta = prompt(`${destinosDisponibles}\nSelecciona el destino de tu preferencia.`);

    if (respuesta) {
      alert(`Has escogido tu paquete ${respuesta} con exito`)

    }
    let valores = destinos.map((destino) => destino.valor);

    let gastosPaquetes = calcularGastos()

    for (let valor of valores) {
      if (valor > gastosPaquetes) {
        alert('No te alcanza para el paquete que deseas');
        break;
      } else {
        alert('Nos vamos')
        break
      }
    }

    for (let i = 0; i <= 2; i++) {
      if (paises.length === 0) {
        let pais = prompt('Ingresa el pais que desearías visitar');
        paises.push[pais];
        alert(
          `La vida es corta, comienza a planificar tu próximo viaje a ${pais.toUpperCase()}`
        );
        break;
      } else {
        alert('¡Excelente elección!');
      }
    }
  }
}

















