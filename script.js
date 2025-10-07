function enviarWhatsApp() {
  const nombre = encodeURIComponent(document.getElementById('nombre').value || '');
  const telefono = encodeURIComponent(document.getElementById('telefono').value || '');
  const direccion = encodeURIComponent(document.getElementById('direccion').value || '');
  const mensaje = encodeURIComponent(document.getElementById('mensaje').value || '');
  const url = `https://wa.me/528129300953?text=Hola%20PowerWash%20🚗%0AMi%20nombre:%20${nombre}%0ATeléfono:%20${telefono}%0ADirección/Colonia:%20${direccion}%0AMensaje:%20${mensaje}`;
  window.open(url, '_blank');
}
