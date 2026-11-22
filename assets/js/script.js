const heroNav = document.querySelector(".hero-nav");

if (heroNav) {
  const updateHeroNav = () => {
    heroNav.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeroNav();
  window.addEventListener("scroll", updateHeroNav, { passive: true });
}

const mainNavbar = document.getElementById("mainNavbar");

if (mainNavbar) {
  const navbarCollapse = window.bootstrap.Collapse.getOrCreateInstance(
    mainNavbar,
    { toggle: false }
  );

  mainNavbar.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", () => navbarCollapse.hide());
  });
}

const donationTabs = document.querySelectorAll("[data-donation-target]");
const donationPanels = document.querySelectorAll("[data-donation-panel]");

donationTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.donationTarget;

    donationTabs.forEach((button) => {
      const isActive = button === tab;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    donationPanels.forEach((panel) => {
      panel.hidden = panel.dataset.donationPanel !== target;
    });
  });
});
