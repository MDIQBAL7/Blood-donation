


document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `
      <nav
      class="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-red-800 via-red-800 to-red-800 shadow-2xl backdrop-blur-md border-b border-red-700 transition-all duration-300"
    >
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          class="max-w-[1140px] mx-auto flex justify-between items-center h-16"
        >
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <a
              href="index.html"
              class="text-3xl font-extrabold text-white hover:text-yellow-400 transition-all duration-300"
              >Blood Donation</a
            >
          </div>

          <!-- Desktop Menu -->
          <div
            class="hidden lg:flex items-center space-x-6 font-medium text-white tracking-wide"
          >
            <a href="index.html" class="relative px-3 py-2 group">
              Home
              <span
                class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"
              ></span>
            </a>
            <a  onclick="openModal('registerModal')" class="relative px-3 py-2 group">
              Donate
              <span
                class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"
              ></span>
            </a>
            <a href="dooner.html" class="relative px-3 py-2 group">
              Request
              <span
                class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"
              ></span>
            </a>
            <a href="#about" class="relative px-3 py-2 group">
              About Us
              <span
                class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"
              ></span>
            </a>

            <div class="flex space-x-3 ml-4">
              <a
                href="#login"
                onclick="openModal('loginModal')"
                class="px-5 py-2 bg-gradient-to-r from-pink-500 to-red-600 rounded-full text-white font-semibold shadow-lg hover:scale-105 transform transition duration-300"
                >Login</a
              >
              <a
                href="#register"
                onclick="openModal('registerModal')"
                class="px-5 py-2 bg-gradient-to-r from-rose-400 to-red-700 rounded-full text-white font-semibold shadow-lg hover:scale-105 transform transition duration-300"
                >Register</a
              >
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <div class="lg:hidden flex items-center">
            <button id="mobile-menu-button" class="focus:outline-none">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Animated Glassmorphic Mobile Menu -->
      <div
        id="mobile-menu"
        class="lg:hidden fixed top-16 right-0 w-64 h-screen bg-gradient-to-r from-pink-600 via-red-700 to-red-800 bg-[length:300%_300%] animate-gradient-slide backdrop-blur-xl border-l border-white/20 rounded-l-xl shadow-2xl transform translate-x-full transition-transform duration-500 ease-in-out"
      >
        <div class="flex flex-col px-6 pt-6 space-y-4">
          <a
            href="index.html"
            class="mobile-item opacity-0 translate-x-10 block px-3 py-2 rounded-md text-white hover:text-yellow-400 hover:bg-white/20 transition duration-300"
            >Home</a
          >
          <a
            onclick="openModal('registerModal')"
            class="mobile-item opacity-0 translate-x-10 block px-3 py-2 rounded-md text-white hover:text-yellow-400 hover:bg-white/20 transition duration-300"
            >Donate</a
          >
          <a
            href="dooner.html"
            class="mobile-item opacity-0 translate-x-10 block px-3 py-2 rounded-md text-white hover:text-yellow-400 hover:bg-white/20 transition duration-300"
            >Request</a
          >
          <a
            href="#about"
            class="mobile-item opacity-0 translate-x-10 block px-3 py-2 rounded-md text-white hover:text-yellow-400 hover:bg-white/20 transition duration-300"
            >About Us</a
          >
          <a
            href="#login"
            onclick="openModal('loginModal')"
            class="mobile-item opacity-0 translate-x-10 block px-3 py-2 rounded-md text-white hover:text-yellow-400 hover:bg-white/20 transition duration-300"
            >Login</a
          >
          <a
            href="#register"
            onclick="openModal('registerModal')"
            class="mobile-item opacity-0 translate-x-10 block px-3 py-2 rounded-md text-white hover:text-yellow-400 hover:bg-white/20 transition duration-300"
            >Register</a
          >
        </div>
      </div>
    </nav>
  ` // আপনার আগের navbar কোড

  // Navbar insert করা
  const navContainers = document.querySelectorAll(".navbar");
  navContainers.forEach(container => {
    container.innerHTML = navbarHTML;
  });

  // 🟢 Mobile Menu Toggle Code
  document.addEventListener("click", (e) => {
    const menu = document.querySelector("#mobile-menu");
    const button = document.querySelector("#mobile-menu-button");

    if (button && button.contains(e.target)) {
      menu.classList.toggle("translate-x-full"); // hide
      menu.classList.toggle("translate-x-0");    // show

      // animation সহ links গুলো একে একে আসবে
      const links = menu.querySelectorAll(".mobile-item");
      links.forEach((link, i) => {
        setTimeout(() => {
          link.classList.toggle("opacity-0");
          link.classList.toggle("translate-x-10");
        }, i * 100);
      });
    }
  });
});