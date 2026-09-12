const btnReserva = document.getElementById("btnReserva");
const btnReservaHeader = document.getElementById("btnReservaHeader");
const btnReservaFooter = document.getElementById("btnReservaFooter");
const modalReserva = document.getElementById("modalReserva");
const btnFechar = document.getElementById("btnFechar");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = document.querySelectorAll("#mobileMenu a");
const formContato = document.getElementById("formContato");
const formReserva = document.getElementById("formReserva");
const menuTabs = document.querySelectorAll(".menu-tab");
const menuCards = document.querySelectorAll(".menu-card");
const revealItems = document.querySelectorAll(".reveal");
const paymentOptions = document.querySelectorAll('input[name="pagamento"]');
const galleryTrack = document.querySelector(".gallery-track");
const gallerySlides = document.querySelectorAll(".gallery-slide");
const galleryDots = document.querySelectorAll(".gallery-dot");
const galleryPrev = document.querySelector(".gallery-btn.prev");
const galleryNext = document.querySelector(".gallery-btn.next");
const orderItems = document.querySelectorAll(".order-item");
const totalValue = document.getElementById("totalValue");
const orderSummary = document.getElementById("orderSummary");

function abrirModal() {
  modalReserva.classList.remove("hidden");
  modalReserva.classList.add("flex");
}

function fecharModal() {
  modalReserva.classList.add("hidden");
  modalReserva.classList.remove("flex");
}

[btnReserva, btnReservaHeader, btnReservaFooter].forEach((button) => {
  if (button) {
    button.addEventListener("click", abrirModal);
  }
});

if (btnFechar) {
  btnFechar.addEventListener("click", fecharModal);
}

if (modalReserva) {
  modalReserva.addEventListener("click", (event) => {
    if (event.target === modalReserva) {
      fecharModal();
    }
  });
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", !isHidden);
    menuToggle.setAttribute("aria-expanded", String(isHidden));
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      mobileMenu.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

if (formContato) {
  formContato.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = event.submitter || formContato.querySelector("button[type='submit']");
    if (button) {
      const originalText = button.textContent;
      button.textContent = "Mensagem enviada!";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        formContato.reset();
      }, 1800);
    }
  });
}

if (formReserva) {
  formReserva.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = event.submitter || formReserva.querySelector("button[type='submit']");
    if (button) {
      const originalText = button.textContent;
      button.textContent = "Reserva confirmada!";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        formReserva.reset();
        fecharModal();
      }, 1800);
    }
  });
}

menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;

    menuTabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
      item.classList.toggle("bg-red-600", item === tab);
      item.classList.toggle("text-white", item === tab);
      item.classList.toggle("border-red-200", item === tab);
      item.classList.toggle("bg-white", item !== tab);
      item.classList.toggle("text-stone-700", item !== tab);
      item.classList.toggle("border-stone-200", item !== tab);
    });

    menuCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

paymentOptions.forEach((option) => {
  option.addEventListener("change", () => {
    const container = option.closest("label");
    if (!container) return;

    paymentOptions.forEach((item) => {
      const label = item.closest("label");
      if (!label) return;
      label.classList.toggle("border-red-300", item.checked);
      label.classList.toggle("bg-red-50", item.checked);
      label.classList.toggle("text-red-700", item.checked);
      label.classList.toggle("border-stone-200", !item.checked);
      label.classList.toggle("bg-stone-50", !item.checked);
      label.classList.toggle("text-stone-700", !item.checked);
    });

    container.classList.add("ring-2", "ring-red-200");
    setTimeout(() => container.classList.remove("ring-2", "ring-red-200"), 300);
  });
});

if (galleryTrack && gallerySlides.length > 0) {
  let currentSlide = 0;

  const updateGallery = () => {
    const offset = currentSlide * -100;
    galleryTrack.style.transform = `translateX(${offset}%)`;

    galleryDots.forEach((dot, index) => {
      const isActive = index === currentSlide;
      dot.classList.toggle("bg-red-600", isActive);
      dot.classList.toggle("bg-stone-300", !isActive);
      dot.classList.toggle("w-6", isActive);
      dot.classList.toggle("w-3", !isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  if (galleryPrev) {
    galleryPrev.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + gallerySlides.length) % gallerySlides.length;
      updateGallery();
    });
  }

  if (galleryNext) {
    galleryNext.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % gallerySlides.length;
      updateGallery();
    });
  }

  galleryDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateGallery();
    });
  });

  updateGallery();
  setInterval(() => {
    currentSlide = (currentSlide + 1) % gallerySlides.length;
    updateGallery();
  }, 5000);
}

if (orderItems.length && totalValue) {
  const formatCurrency = (value) => `R$ ${value.toFixed(2).replace(".", ",")}`;

  const updateOrderSummary = () => {
    let total = 0;
    const selectedItems = [];

    orderItems.forEach((item) => {
      const price = Number(item.dataset.price || 0);
      const quantity = Number(item.querySelector("input")?.value || 0);
      if (quantity > 0) {
        const subtotal = price * quantity;
        total += subtotal;
        selectedItems.push({
          name: item.dataset.name,
          quantity,
          subtotal,
        });
      }
    });

    totalValue.textContent = formatCurrency(total);

    if (orderSummary) {
      if (selectedItems.length === 0) {
        orderSummary.innerHTML = '<p class="text-sm text-stone-500">Nenhum item selecionado.</p>';
        return;
      }

      orderSummary.innerHTML = selectedItems
        .map(
          (entry) => `
            <div class="flex items-center justify-between text-sm text-stone-600">
              <span>${entry.name} x${entry.quantity}</span>
              <span>${formatCurrency(entry.subtotal)}</span>
            </div>
          `
        )
        .join("");
    }
  };

  orderItems.forEach((item) => {
    const input = item.querySelector("input");
    if (input) {
      input.addEventListener("input", updateOrderSummary);
    }
  });

  updateOrderSummary();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));
