// Navegación móvil
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => nav.classList.toggle('active'));

// Scroll suave hacia "Rutinas"
document.getElementById('btnRutinas').addEventListener('click', () => {
  document.getElementById('rutinas').scrollIntoView({ behavior: 'smooth' });
});

// Simulación de compra
const comprarBtns = document.querySelectorAll('.comprar-btn');
comprarBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const plan = btn.getAttribute('data-plan');
    alert(`Estás por solicitar el ${plan}. Pronto se integrará con WhatsApp o Checkout 🛒`);
  });
});

// Envío de formulario (simulado)
document.getElementById('formContacto').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Gracias por tu mensaje 💪 Te responderé pronto.');
});
