   const toggleButton = document.getElementById('toggle-nav');
   const nav = document.getElementById('nav');

   toggleButton.addEventListener('click', () => {
     nav.classList.toggle('show-nav'); // Alternar la clase
     if (nav.classList.contains('show-nav')) {
       nav.style.top = '0'; // Mostrar el menú
     } else {
       nav.style.top = '0'; // Ocultar el menú (mantener fijo en la parte superior)
     }
   });