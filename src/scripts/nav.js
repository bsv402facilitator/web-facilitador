export function setupNav() {
  const navButton = document.querySelector('.navbar-icon-button');
  const navMenu = document.querySelector('.w-nav-menu');

  if (!navButton || !navMenu) return;

  // Crear live region para anuncios de accesibilidad
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('role', 'status');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'visually-hidden';
  document.body.appendChild(liveRegion);

  const toggleNav = () => {
    const isOpen = navMenu.classList.contains('is-open');

    // Actualizar aria-expanded
    navButton.setAttribute('aria-expanded', !isOpen);

    navMenu.classList.toggle('is-visible', !isOpen);

    // Anunciar cambio a lectores de pantalla
    liveRegion.textContent = !isOpen
      ? 'Navigation menu opened'
      : 'Navigation menu closed';

    setTimeout(() => {
      navMenu.classList.toggle('is-open', !isOpen);

      // Gestionar foco
      if (!isOpen) {
        const firstLink = navMenu.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    }, isOpen ? 300 : 10);
  };

  // Eventos de click
  navButton.addEventListener('click', toggleNav);

  // Eventos de teclado (Enter y Space)
  const keydownHandler = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleNav();
    }
  };
  navButton.addEventListener('keydown', keydownHandler);

  // Cerrar con Escape
  const escapeHandler = (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      toggleNav();
      navButton.focus();
    }
  };
  document.addEventListener('keydown', escapeHandler);

  return () => {
    navButton.removeEventListener('click', toggleNav);
    navButton.removeEventListener('keydown', keydownHandler);
    document.removeEventListener('keydown', escapeHandler);
    liveRegion.remove();
  };
}
