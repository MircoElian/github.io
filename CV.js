function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
}
function redirectToPage() {
    window.location.href = "https://randomuser.me";
  }
<button id="miBoton" class="btn-more-info" onclick="location.href='https://randomuser.me'">Más Información</button>
