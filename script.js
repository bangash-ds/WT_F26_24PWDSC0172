const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('theme-toggle');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

const taskInputs = document.querySelectorAll('.task-item input');

taskInputs.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const allChecked = [...taskInputs].every((input) => input.checked);

    if (allChecked) {
      const footer = document.querySelector('.site-footer');
      if (footer) {
        footer.style.borderTopColor = 'var(--accent)';
      }
    }
  });
});
