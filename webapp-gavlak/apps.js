document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const clickMe = document.getElementById('clickMe');
  const msg = document.getElementById('msg');
  const form = document.getElementById('demoForm');
  const formResult = document.getElementById('formResult');

  themeToggle?.addEventListener('click', () => document.body.classList.toggle('dark'));
  clickMe?.addEventListener('click', () => {
    msg.textContent = 'Klikol si! 🎉';
    setTimeout(() => msg.textContent = '', 3000);
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    formResult.textContent = name ? `Ahoj, ${name}!` : 'Zadaj meno.';
  });
});