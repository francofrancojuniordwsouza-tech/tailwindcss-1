// Seleciona elementos
const btnReserva = document.getElementById("btnReserva");
const modalReserva = document.getElementById("modalReserva");
const btnFechar = document.getElementById("btnFechar");
const menuBtn = document.getElementById("menuBtn");

// Abrir modal
btnReserva.addEventListener("click", () => {
  modalReserva.classList.remove("hidden");
});

// Fechar modal
btnFechar.addEventListener("click", () => {
  modalReserva.classList.add("hidden");
});

// Fechar clicando fora do modal
modalReserva.addEventListener("click", (e) => {
  if (e.target === modalReserva) {
    modalReserva.classList.add("hidden");
  }
});


// Alternar menu hamburguer com animação
menuBtn.addEventListener("click", () => {
  if (menuLinks.classList.contains("hidden")) {
    menuLinks.classList.remove("hidden");
    menuLinks.classList.remove("-translate-y-10", "opacity-0");
    menuLinks.classList.add("translate-y-0", "opacity-100");
  } else {
    menuLinks.classList.add("-translate-y-10", "opacity-0");
    setTimeout(() => {
      menuLinks.classList.add("hidden");
    }, 300); // tempo igual ao duration-300
  }
});




