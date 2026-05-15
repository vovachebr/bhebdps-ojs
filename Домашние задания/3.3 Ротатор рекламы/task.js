function initRotators() {
  // Находим все ротаторы на странице
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach((rotator) => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));

    const switchCase = () => {
      const activeCase = rotator.querySelector('.rotator__case_active');
      let nextCase = activeCase.nextElementSibling;

      if (!nextCase || !nextCase.classList.contains('rotator__case')) {
        nextCase = cases[0];
      }

      activeCase.classList.remove('rotator__case_active');
      nextCase.classList.add('rotator__case_active');

      const color = nextCase.dataset.color;
      const speed = nextCase.dataset.speed || 1000;

      if (color) {
        nextCase.style.color = color;
      }
      setTimeout(switchCase, speed);
    };

    const firstActive = rotator.querySelector('.rotator__case_active');
    if (firstActive && firstActive.dataset.color) {
      firstActive.style.color = firstActive.dataset.color;
    }

    const initialSpeed = firstActive?.dataset.speed || 1000;
    setTimeout(switchCase, initialSpeed);
  });
}

document.addEventListener('DOMContentLoaded', initRotators);
