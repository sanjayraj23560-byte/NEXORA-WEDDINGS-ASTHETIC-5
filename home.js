const menuBtn = document.querySelector("#hamburger-btn");
const mobileMenu = document.querySelector("#mobile-menu"); // Target the correct ID

let isOpen = false;

menuBtn.addEventListener("click", () => {
    if (!isOpen) {
        mobileMenu.classList.add("menu-open");
        // Apply individual styles correctly
        mobileMenu.style.display = "flex";
        mobileMenu.style.gap = "20px"; 
        isOpen = true;
    } else {
        mobileMenu.classList.remove("menu-open");
        mobileMenu.style.display = "none";
        isOpen = false;
    }
});
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const state = {
  filter: "all",
  lastFocus: null,
};

function setFilter(next) {
  state.filter = next;
  const chips = $$(".chip[data-filter]");
  for (const chip of chips) {
    const active = chip.dataset.filter === next;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-selected", active ? "true" : "false");
  }

  const cards = $$(".card[data-category]");
  for (const card of cards) {
    const match = next === "all" || card.dataset.category === next;
    card.classList.toggle("is-hidden", !match);
  }
}

function openModalFromCard(card) {
  const modal = $("#cardModal");
  const img = $("img", $(".card-media", card));
  const badge = $(".badge", card);
  const title = $(".card-title", card);
  const text = $(".card-text", card);

  $("#modalImg").src = img?.getAttribute("src") || "";
  $("#modalImg").alt = img?.getAttribute("alt") || "Preview image";
  $("#modalKicker").textContent = badge?.textContent || "Collection";
  $("#modalTitle").textContent = title?.textContent || "Preview";
  $("#modalText").textContent = text?.textContent || "";

  state.lastFocus = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  const closeBtn = $(".modal-close", modal);
  closeBtn?.focus();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = $("#cardModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  const prev = state.lastFocus;
  state.lastFocus = null;
  if (prev && typeof prev.focus === "function") prev.focus();
}

function toggleSave(btn) {
  const pressed = btn.getAttribute("aria-pressed") === "true";
  const next = !pressed;
  btn.setAttribute("aria-pressed", next ? "true" : "false");
  btn.textContent = next ? "Saved" : "Save";
}

function wireEvents() {
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const chip = target.closest(".chip[data-filter]");
    if (chip) {
      setFilter(chip.dataset.filter || "all");
      return;
    }

    const actionEl = target.closest("[data-action]");
    const action = actionEl?.getAttribute("data-action");
    if (!action) return;

    if (action === "openCard") {
      const card = target.closest(".card");
      if (card) openModalFromCard(card);
      return;
    }

    if (action === "openModal") {
      const firstVisible = $$(".card").find((c) => !c.classList.contains("is-hidden"));
      if (firstVisible) openModalFromCard(firstVisible);
      return;
    }

    if (action === "closeModal") {
      closeModal();
      return;
    }

    if (action === "save") {
      const btn = actionEl;
      btn.setAttribute("type", "button");
      toggleSave(btn);
      return;
    }

    if (action === "scrollToServices") {
      $("#services")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const modal = $("#cardModal");
    if (modal.classList.contains("is-open")) closeModal();
  });
}

function init() {
  setFilter("all");
  wireEvents();
}

document.addEventListener("DOMContentLoaded", init);