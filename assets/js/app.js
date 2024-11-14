let numeriEstratti = [];

function creaTabellone() {
  const tabellone = document.getElementById("tabellone");
  for (let i = 1; i <= 90; i++) {
    const cella = document.createElement("div");
    cella.id = `numero-${i}`;
    cella.textContent = i;
    tabellone.appendChild(cella);
  }
}
function estraiNumero() {
  if (numeriEstratti.length === 90) {
    alert("tutti i numeri sono stati estratti");
    return;
  }

let numero;
do {
  numero = Math.floor(Math.random() * 90) + 1;
} while (numeriEstratti.includes(numero));

numeriEstratti.push(numero);
document.getElementById("numero-estratto").textContent = "numero : " + numero;

const cellaEstratta = document.getElementById(`numero-${numero}`);
    cellaEstratta.classList.add("estratto");

    
    cellaEstratta.classList.add("numero-estratto");
}
creaTabellone() ;
