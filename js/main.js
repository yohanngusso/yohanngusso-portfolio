/* ================================================================
   Yohann Gusso - Portfolio "Sistema"
   Lógica de navegação, sidebar, tema, relógio e feedback
   ================================================================ */

(function () {
  "use strict";

  /* ------------------------------------------------------------
     1. Navegação entre Views (SPA-like)
     ------------------------------------------------------------ */
  const navItems = document.querySelectorAll(".nav-item");
  const views = document.querySelectorAll(".view");
  const currentViewLabel = document.getElementById("currentView");

  function switchView(viewName) {
    if (!viewName) return;

    // Atualiza botões da sidebar
    navItems.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.view === viewName);
    });

    // Troca a view visível
    views.forEach((v) => {
      v.classList.toggle("active", v.id === `view-${viewName}`);
    });

    // Atualiza breadcrumb da topbar
    if (currentViewLabel) currentViewLabel.textContent = viewName;

    // Sobe o conteúdo para o topo
    const content = document.getElementById("content");
    if (content) content.scrollTop = 0;

    // Atualiza URL com hash sem scroll
    if (history.replaceState) {
      history.replaceState(null, "", `#${viewName}`);
    }

    // Fecha sidebar no mobile ao navegar
    closeSidebar();
  }

  navItems.forEach((btn) => {
    btn.addEventListener("click", () => switchView(btn.dataset.view));
  });

  // Botões "data-go" dentro do conteúdo (ex.: Ver projetos)
  document.querySelectorAll("[data-go]").forEach((el) => {
    el.addEventListener("click", () => switchView(el.dataset.go));
  });

  /* ------------------------------------------------------------
     2. Sidebar Mobile
     ------------------------------------------------------------ */
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuToggle = document.getElementById("menu-toggle");

  function openSidebar() {
    if (!sidebar || !overlay) return;
    sidebar.classList.add("open");
    overlay.classList.add("show");
  }

  function closeSidebar() {
    if (!sidebar || !overlay) return;
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  }

  if (menuToggle) menuToggle.addEventListener("click", openSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  /* ------------------------------------------------------------
     3. Theme Toggle
     ------------------------------------------------------------ */
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  function updateThemeLabel() {
    const theme = root.getAttribute("data-theme");
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"
      );
    }
  }

  updateThemeLabel();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeLabel();
    });
  }

  /* ------------------------------------------------------------
     4. Relógio na Topbar
     ------------------------------------------------------------ */
  const clock = document.getElementById("clock");

  function updateClock() {
    if (!clock) return;
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    clock.textContent = `${h}:${m}`;
  }

  updateClock();
  setInterval(updateClock, 1000 * 30);

  /* ------------------------------------------------------------
     5. Hash inicial (deep link)
     ------------------------------------------------------------ */
  const validViews = Array.from(navItems).map((b) => b.dataset.view);
  const initialHash = window.location.hash.replace("#", "");

  if (initialHash && validViews.includes(initialHash)) {
    switchView(initialHash);
  }

  /* ------------------------------------------------------------
     6. Feedback do Formulário (Toast)
     ------------------------------------------------------------ */
  const form = document.querySelector(".contact-form");
  const toast = document.getElementById("toast");

  if (form && toast) {
    form.addEventListener("submit", () => {
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 4000);
    });
  }

  /* ------------------------------------------------------------
     7. Atalhos de teclado (opcional)
     ------------------------------------------------------------ */
  document.addEventListener("keydown", (e) => {
    // Ignora se estiver digitando em campo
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return;

    const shortcuts = { "1": "dashboard", "2": "stack", "3": "projetos", "4": "contato" };
    if (shortcuts[e.key]) {
      switchView(shortcuts[e.key]);
    }

    // ESC fecha sidebar mobile
    if (e.key === "Escape") closeSidebar();
  });
})();