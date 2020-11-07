import cipher from './cipher.js';

function clicar(event){
   let cifrar = document.getElementById('cifrar');
   let decifrar = document.getElementById('decifrar');
   let offset = Number(document.getElementById('desloc').value);
   let string = document.getElementById('msg').value.toUpperCase();
   let resMsg = document.getElementById('resMsg');

   if (cifrar.checked == true) {
      let msgCifrar = cipher.encode(offset, string);
      resMsg.innerHTML = msgCifrar;
   } else if (decifrar.checked == true) {
      let msgDecifrar = cipher.decode(offset, string);
      resMsg.innerHTML = msgDecifrar;
}
event.preventDefault();
}

let submit = document.getElementById('submit');
submit.addEventListener("click", clicar);




