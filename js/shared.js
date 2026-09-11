/* ================================================================
   LinkUp — Shared JavaScript
   Navigation, CTA handling, animations, and interactive components
   ================================================================ */

/* ─── Centralized Google Form URL ─────────────────────────────── *
 *  Replace the URL below with your actual Google Form link.       *
 *  Every button with [data-cta] will redirect here.               *
 * ─────────────────────────────────────────────────────────────── */
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSciRt_kpHrq7AfDeX9rOfgireTR83cOtiuHu_p8X7-dTDMrMw/viewform?usp=header";

document.addEventListener("DOMContentLoaded", () => {

  /* ── Initialize Lucide Icons ── */
  if (typeof lucide !== "undefined") lucide.createIcons();

  /* ── Dynamic Copyright Year ── */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── CTA Buttons → Google Form ── */
  document.querySelectorAll("[data-cta]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const embeddedForm = document.getElementById("apply");
      if (embeddedForm) {
        embeddedForm.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
      }
    });
  });

  /* ── Mobile Drawer ── */
  const drawerToggle  = document.getElementById("drawerToggle");
  const drawerClose   = document.getElementById("drawerClose");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const drawerPanel   = document.getElementById("drawerPanel");
  const mobileDrawer  = document.getElementById("mobileDrawer");

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove("hidden");
    requestAnimationFrame(() => {
      drawerOverlay?.classList.add("active");
      drawerPanel?.classList.add("active");
    });
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawerOverlay?.classList.remove("active");
    drawerPanel?.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => mobileDrawer?.classList.add("hidden"), 350);
  }

  drawerToggle?.addEventListener("click", openDrawer);
  drawerClose?.addEventListener("click", closeDrawer);
  drawerOverlay?.addEventListener("click", closeDrawer);

  /* Close drawer on nav link click (mobile UX) */
  mobileDrawer?.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  /* ── FAQ Accordion ── */
  document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      /* Close other open items for single-open behavior */
      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        if (openItem !== item) openItem.classList.remove("open");
      });
      item.classList.toggle("open");
    });
  });

  /* ── Scroll Reveal (IntersectionObserver) ── */
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
  } else {
    /* Fallback: show everything immediately */
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("revealed"));
  }

  /* ── Active Navigation Highlight ── */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("header nav a[href], #drawerPanel a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (
      href === currentPage ||
      (currentPage === "" && (href === "/" || href === "index.html")) ||
      (currentPage === "index.html" && (href === "/" || href === "index.html"))
    ) {
      link.classList.remove("text-muted");
      link.classList.add("text-cream");
    }
  });
});
