// Cambia aquí el número de WhatsApp (código de país + número, sin espacios)
const WHATSAPP_NUMBER = '526643083890';
const WHATSAPP_URL = 'https://wa.me/' + WHATSAPP_NUMBER;

document.getElementById('whatsapp-float').href = WHATSAPP_URL;

document.getElementById('booking-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(event.target);

  const message =
    'Hola GC Mecánica, soy ' + data.get('nombre') + '. ' +
    'Tel: ' + data.get('tel') + '. ' +
    'Vehículo: ' + (data.get('auto') || '-') + '. ' +
    'Servicio: ' + data.get('servicio') + '. ' +
    (data.get('mensaje') || '');

  document.getElementById('form-ok').style.display = 'block';
  window.open(WHATSAPP_URL + '?text=' + encodeURIComponent(message), '_blank');
});
