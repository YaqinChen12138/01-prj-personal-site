/* ===================================
   PROJECTS SECTION INTERACTIVITY
   =================================== */

// --- 1. "View More" buttons open their matching project modal ---
const viewMoreButtons = document.querySelectorAll(".btn-view-more");

viewMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.classList.add("active");
  });
});

// --- 2. Close a modal when its close button (×) is clicked ---
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalCloseButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const modal = closeButton.closest(".modal-overlay");
    modal.classList.remove("active");
  });
});

// --- 3. Close a modal when clicking outside the modal box ---
const modalOverlays = document.querySelectorAll(".modal-overlay");

modalOverlays.forEach((overlay) => {
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.classList.remove("active");
    }
  });
});

// --- 4. "View All Projects" button reveals the All Projects section ---
const viewAllButton = document.getElementById("view-all-btn");
const allProjectsSection = document.getElementById("all-projects");

viewAllButton.addEventListener("click", () => {
  allProjectsSection.classList.add("visible");
  allProjectsSection.scrollIntoView({ behavior: "smooth" });
});

// --- 5. Category filter tabs show/hide cards in the All Projects grid ---
const filterTabs = document.querySelectorAll(".filter-tab");
const allProjectCards = document.querySelectorAll("#all-projects-grid .project-card");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Highlight the clicked tab and un-highlight the rest
    filterTabs.forEach((otherTab) => otherTab.classList.remove("active"));
    tab.classList.add("active");

    // Show only the cards that match the selected category
    const selectedFilter = tab.getAttribute("data-filter");
    allProjectCards.forEach((card) => {
      const matchesFilter =
        selectedFilter === "all" || card.getAttribute("data-category") === selectedFilter;
      card.style.display = matchesFilter ? "flex" : "none";
    });
  });
});
