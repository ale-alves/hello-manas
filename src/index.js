import cipher from "./cipher.js";

function clicar(event) {
  event.preventDefault();

  let cifrar = document.getElementById("cifrar");
  let decifrar = document.getElementById("decifrar");
  let offset = Number(document.getElementById("desloc").value);
  let string = document.getElementById("msg").value.toUpperCase();
  let resMsg = document.getElementById("resMsg");

  if (cifrar.checked == true) {
    let msgCifrar = cipher.encode(offset, string);
    resMsg.innerHTML = msgCifrar;
  } else if (decifrar.checked == true) {
    let msgDecifrar = cipher.decode(offset, string);
    resMsg.innerHTML = msgDecifrar;
  }
}

let submit = document.getElementById("submit");
submit.addEventListener("click", clicar);

document.getElementById("copy").addEventListener("click", copy);
function copy() {
  document.getElementById("resMsg").select();
  document.execCommand("copy");
}

document.getElementById("clean").addEventListener("click", clean);
function clean() {
  document.getElementById("msg").value = "";
  document.getElementById("desloc").value = "";
  document.getElementById("resMsg").value = "";
}
