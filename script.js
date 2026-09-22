/**
 * Foresight AI Sentinel - Strig Systems Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log(
    '%c◈ STRIG SYSTEMS %c| Foresight AI Sentinel Online',
    'color: #00f0ff; font-weight: bold; font-size: 14px; background: #0c1222; padding: 4px 8px; border-radius: 4px;',
    'color: #94a3b8; font-size: 12px;'
  );

  // Card Mouse Tracking / Glassmorphic Glow Effect
  const glassPanels = document.querySelectorAll('.glass-panel');
  glassPanels.forEach(panel => {
    panel.addEventListener('mousemove', (e) => {
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      panel.style.setProperty('--mouse-x', `${x}px`);
      panel.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Smooth scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
