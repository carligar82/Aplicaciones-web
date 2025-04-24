
window.addEventListener("DOMContentLoaded", () => {
  let audio = document.getElementById("miAudio");

  // Espera a que el usuario haga clic para quitar el mute y reproducir
  document.addEventListener("click", () => {
      audio.muted = false; // Activa el sonido
      audio.play();
      document.getElementById ("caja1").setAttribute ("class","invisible")
      document.getElementById ("caja2").removeAttribute ("class")
  });
});
const elem = document.getElementById("caja");   
  elem.addEventListener("mouseover", myMove);
  let alt = 0 ,anch = 0,alt2 = 0,anch2 = 0;

function myMove() {
    anch = Math.trunc (Math.random() * 850);
    alt = Math.trunc (Math.random() * 450);
    while (anch > 850||alt >450||anch<50||alt<50)
    {
      anch = Math.trunc (Math.random() * 850);
      alt = Math.trunc (Math.random() * 450);
    } 
    if (Math.abs(alt-alt2)<=50&&Math.abs(anch-anch2)<=50){
      elem.style.backgroundColor = "green"
    }
    else{
      elem.style.backgroundColor = "red"
    }
    alt2 = alt;
    anch2 = anch;
      elem.style.top = alt + "px"; 
      elem.style.left = anch + "px"; 
  }
