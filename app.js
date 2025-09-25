
//  Nav functionality start 

 const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileItems = document.querySelectorAll('.mobile-item');

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('translate-x-0');

    if(!isOpen) {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');

      mobileItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove('opacity-0','translate-x-10');
          item.classList.add('opacity-100','translate-x-0');
        }, index * 100);
      });
    } else {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');

      mobileItems.forEach((item) => {
        item.classList.add('opacity-0','translate-x-10');
        item.classList.remove('opacity-100','translate-x-0');
      });
    }
  });

//  Nav functionality end 