(() => {
  document.querySelectorAll('.menu__link').forEach(link => {
    link.onclick = function(event) {
      // Ищем ближайший li с классом menu__item
      const menuItem = this.closest('.menu__item');

      const submenu = menuItem.querySelector('.menu_sub');

      if (submenu) {
        event.preventDefault(); // Запрещаем переход по ссылке

        document.querySelectorAll('.menu_sub.menu_active').forEach(activeSubmenu => {
          activeSubmenu.classList.remove('menu_active');
        });

        submenu.classList.toggle('menu_active');
        return false;
      }
      return true;
    };
  });
})();
