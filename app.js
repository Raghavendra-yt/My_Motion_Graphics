/**
 * FLUID UI MOTION GRAPHICS PORTFOLIO
 * Core JavaScript Application Controller
 * Handles 16 Google Drive motion graphics projects, category filtering,
 * fluid theater lightbox modal, keyboard navigation, and interactive dynamics.
 */

const MOTION_PROJECTS = [
  {
    id: "proj-1",
    driveId: "1-uWHhBbBAQ-kQJteQ_XmMLp-MztqP2pd",
    title: "Google Assistant animation",
    category: "Brand Motion",
    description: "Converting 4 colored dots to Google Assistant logo animation using Geometry Nodes.",
    tags: ["Geometry Nodes", "Procedural Shading", "DaVinci Resolve"],
    gradientClass: "art-gradient-1"
  },
  {
    id: "proj-2",
    driveId: "10UN7w0g0DjYnuMmVH5bo3EQpnbzVgr3P",
    title: "Emergent UI: Multi-Agent Neural Hub",
    category: "Brand Motion",
    description: "Node-based connectivity, retro-tech pixel iconography, dark-mode futuristic UI, seamless looping.",
    tags: ["DaVinci Fusion", "Editorial Pacing"],
    gradientClass: "art-gradient-2"
  },
  {
    id: "proj-3",
    driveId: "10iqvnwZbNeMgXKq0t9QzplygeljMfOUA",
    title: "Crown & Shadow: 3D Asset Animation",
    category: "Visual FX",
    description: "Studio rim lighting, depth of field (DoF), rotational easing, and minimal typographic integration.",
    tags: [ "DaVinci Fusion", "Vector Dynamics", "Color Grading"],
    gradientClass: "art-gradient-3"
  },
  {
    id: "proj-4",
    driveId: "1Adg61L0vGZER5U4-retdKCwFgJNNB22k",
    title: "Gemini chat bot animation",
    category: "Brand Motion",
    description: "A fast-paced animation for Gemini.",
    tags: ["DaVinci Fusion"],
    gradientClass: "art-gradient-4"
  },
  {
    id: "proj-5",
    driveId: "1CiPYvT3398ZH8R3bw-5l3eNZaYh8SVu0",
    title: "Frosted Glass UI & 3D Capsule Motion",
    category: "Visual FX",
    description: "Glass refractive shader effects, smooth floating physics, tactile card micro-interactions, dark-mode visual hierarchy.",
    tags: ["DaVinci Fusion"],
    gradientClass: "art-gradient-5"
  },
  {
    id: "proj-6",
    driveId: "1PTLlDjLJvWNWA_hLiAUsYLEAMkiA1xQQ",
    title: "3D Photo Cutout & Kinetic Typography",
    category: "Visual FX",
    description: "Multi-plane camera tracking, layer separation, atmospheric grain, and narrative pacing.",
    tags: ["Seamless Loop", "DaVinci Resolve"],
    gradientClass: "art-gradient-1"
  },
  {
    id: "proj-7",
    driveId: "1RQDjUZmlBp-1Rmp7EJRPsql_JceO0jxQ",
    title: "Google circular animation",
    category: "Brand Motion",
    description: "Google circular animation.",
    tags: ["DaVinci Fusion", "Pacing"],
    gradientClass: "art-gradient-2"
  },
  {
    id: "proj-8",
    driveId: "1TbqhESVtMRDQf1g9RsI-tUMBE6jCi9KJ",
    title: "Loading animation",
    category: "Visual FX",
    description: "Loading animation seen in chating apps",
    tags: ["DaVinci Fusion"],
    gradientClass: "art-gradient-3"
  },
  {
    id: "proj-9",
    driveId: "1baFoxrWGMUVbg6mmF1635zI-keVkh7vt",
    title: "Google smart command center.",
    category: "Brand Motion",
    description: "Turning google logo into search bar and to google apps.",
    tags: ["DaVinci Resolve"],
    gradientClass: "art-gradient-4"
  },
  {
    id: "proj-10",
    driveId: "1kW3EC1Zb517i-6ZOr8pMvKXLDYAhOnZu",
    title: "Interactive Graph Card",
    category: "Visual FX",
    description: "Smooth vector interpolation, gradient mesh lighting, multi-layer depth separation, and subtle easing curves.",
    tags: ["DaVinci Fusion"],
    gradientClass: "art-gradient-1"
  },
  {
    id: "proj-11",
    driveId: "1kgj6SDjD5VcOmuhSokd2hjgJDee6LQr_",
    title: "Google search bar animation",
    category: "Brand Motion",
    description: "Turning google logo into search bar.",
    tags: ["DaVinci Resolve"],
    gradientClass: "art-gradient-2"
  },
  {
    id: "proj-12",
    driveId: "1mTH4Eujg55FMLVKqPGcf9Zr0bRrOVAOz",
    title: "Kinetic Creator Analytics",
    category: "Visual FX",
    description: "Trim path physics, tracking/easing balance, texture grain grading, and typographic clarity.",
    tags: ["DaVinci Resolve"],
    gradientClass: "art-gradient-4"
  },
  {
    id: "proj-13",
    driveId: "1Ed10Tmn4hIcisCYgXdCiyqKrRcCs4ujT",
    title: "Liquid Glass Effect",
    category: "Visual FX",
    description: "Refractive fluid glass shader simulation, chromatic dispersion, and smooth liquid surface physics.",
    tags: [ "Glass Shader", "Fluid Physics", "DaVinci Resolve"],
    gradientClass: "art-gradient-5"
  },
  {
    id: "proj-14",
    driveId: "1q5g19ayN7k0wHSWM-oWN8e3V2OPLnDWD",
    title: "Kids Animation Template",
    category: "Visual FX",
    description: "Vibrant, playful character motion toolkit with dynamic vector staging and bouncy easing curves.",
    tags: ["Motion Graphics", "DaVinci Fusion", "Template System"],
    gradientClass: "art-gradient-3"
  },
  {
    id: "proj-15",
    driveId: "1EflqwTSN4HLvSuItGmlg4HrcrkK5lRxR",
    title: "Liquid Glass Toggle",
    category: "Visual FX",
    description: "Fluid refractive glass toggle micro-interaction with realistic optical dispersion, smooth liquid physics, and tactile state transitions.",
    tags: ["Glass Shader", "UI Micro-interaction", "DaVinci Resolve"],
    gradientClass: "art-gradient-4"
  },
  {
    id: "proj-16",
    driveId: "1XSvp-XGwghHvB56LtXwNblNS_2PKg0da",
    title: "DJ's avaliabe",
    category: "Visual FX",
    description: "Dynamic DJ availability visual effects animation with kinetic typography, audio-visual rhythm sync, and fluid transitions.",
    tags: ["Visual FX", "Motion Graphics", "DaVinci Resolve"],
    gradientClass: "art-gradient-1"
  }
];

// Active State
let currentFilteredProjects = [...MOTION_PROJECTS];
let currentProjectIndex = 0;
let activeCategory = "all";
const CARDS_PER_BATCH = 6;
let visibleCardCount = CARDS_PER_BATCH;

// DOM Elements
const portfolioGrid = document.getElementById("portfolioGrid");
const noResults = document.getElementById("noResults");
const filterScroller = document.getElementById("filterScroller");
const filterPills = document.querySelectorAll(".filter-pill");
const pillIndicator = document.getElementById("pillIndicator");
const cardViewToggle = document.getElementById("cardViewToggle");
const loadMoreContainer = document.getElementById("loadMoreContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const loadMoreText = document.getElementById("loadMoreText");
const viewLessBtn = document.getElementById("viewLessBtn");
const loadMoreProgress = document.getElementById("loadMoreProgress");

// Modal Elements
const theaterModal = document.getElementById("theaterModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalIframe = document.getElementById("modalIframe");
const modalSpinner = document.getElementById("modalSpinner");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalCategory = document.getElementById("modalCategory");
const modalCounter = document.getElementById("modalCounter");
const modalDriveLink = document.getElementById("modalDriveLink");
const modalTags = document.getElementById("modalTags");
const prevProjectBtn = document.getElementById("prevProjectBtn");
const nextProjectBtn = document.getElementById("nextProjectBtn");

// Interactive Elements
const fluidCursor = document.getElementById("fluidCursor");
const copyEmailBtn = document.getElementById("copyEmailBtn");
const toastNotification = document.getElementById("toastNotification");
const toastMessage = document.getElementById("toastMessage");

/**
 * Initialize Portfolio Application
 */
function initApp() {
  updateDynamicCounts();
  renderProjects(MOTION_PROJECTS);
  setupFilterPills();
  setupLoadMore();
  setupModalEvents();
  setupViewToggle();
  setupFluidCursor();
  setupEmailCopy();
  setupScrollSpy();
}

/**
 * Dynamically Calculate and Update Category and Hero Counts
 */
function updateDynamicCounts() {
  const categoryCounts = {
    all: MOTION_PROJECTS.length
  };

  MOTION_PROJECTS.forEach(p => {
    if (p && p.category) {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    }
  });

  // Update filter pills
  const currentPills = document.querySelectorAll(".filter-pill");
  currentPills.forEach(pill => {
    const category = pill.getAttribute("data-category");
    const countSpan = pill.querySelector(".pill-count");
    if (countSpan && category) {
      const count = categoryCounts[category] !== undefined ? categoryCounts[category] : 0;
      countSpan.textContent = count;
      if (category !== "all" && count === 0) {
        pill.style.display = "none";
      } else {
        pill.style.display = "";
      }
    }
  });

  // Update hero badges & text
  const heroBadgeLabel = document.querySelector(".badge-label");
  if (heroBadgeLabel) {
    heroBadgeLabel.innerHTML = `Crafted in Blender &amp; DaVinci Resolve &bull; ${MOTION_PROJECTS.length} Projects`;
  }

  const heroExploreBtn = document.querySelector(".hero-cta-group .primary-action .btn-content span");
  if (heroExploreBtn) {
    heroExploreBtn.textContent = `Explore Works (${MOTION_PROJECTS.length})`;
  }

  const curatedMetric = document.querySelector(".metric-card:first-child .metric-number");
  if (curatedMetric) {
    curatedMetric.textContent = MOTION_PROJECTS.length;
  }
}

/**
 * Render Project Cards into the Fluid Grid (Progressive 6-Batch Loading)
 */
function renderProjects(projects, animateFromIndex = 0) {
  // Filter out any undefined or invalid entries
  const validProjects = projects.filter(p => p && p.id);

  if (validProjects.length === 0) {
    portfolioGrid.innerHTML = "";
    noResults.classList.remove("hidden");
    if (loadMoreContainer) loadMoreContainer.classList.add("hidden");
    return;
  }
  noResults.classList.add("hidden");

  // Limit rendering to visibleCardCount
  const visibleProjects = validProjects.slice(0, visibleCardCount);

  if (animateFromIndex === 0) {
    portfolioGrid.innerHTML = "";
  }

  const itemsToRender = animateFromIndex > 0
    ? validProjects.slice(animateFromIndex, visibleCardCount)
    : visibleProjects;

  itemsToRender.forEach((proj, i) => {
    const idx = animateFromIndex > 0 ? animateFromIndex + i : i;
    const card = document.createElement("article");
    card.className = "project-card";
    if (animateFromIndex > 0) {
      card.classList.add("card-entry-animate");
    }
    card.setAttribute("data-project-id", proj.id);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open ${proj.title} in theater mode`);

    // Dynamic number formatting
    const projectNumber = String(idx + 1).padStart(2, "0");
    const totalCount = String(validProjects.length).padStart(2, "0");

    const isPendingDriveId = !proj.driveId || proj.driveId.startsWith("PASTE_");
    const thumbnailMarkup = isPendingDriveId
      ? `<div class="card-pending-badge" style="position:absolute;top:12px;left:12px;background:rgba(255,255,255,0.92);color:#5f6368;font-size:11px;font-weight:500;padding:4px 8px;border-radius:6px;z-index:4;box-shadow:0 1px 3px rgba(0,0,0,0.1);letter-spacing:0.3px;">Drive Link Pending</div>`
      : `<img 
            class="card-thumbnail-img" 
            src="https://drive.google.com/thumbnail?id=${proj.driveId}&sz=w800" 
            alt="${proj.title} preview" 
            loading="lazy"
            onload="this.classList.add('loaded')"
            onerror="this.style.opacity='0'"
          />`;

    // Construct card inner HTML with high-res Drive thumbnail and smooth fallback
    card.innerHTML = `
      <div class="card-media-wrapper">
        <div class="card-dynamic-poster">
          <div class="poster-art ${proj.gradientClass || 'art-gradient-1'}"></div>
          ${thumbnailMarkup}
          <div class="poster-mesh-lines"></div>
          <div class="poster-center-content">
            <div class="play-ring-button" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div class="pulse-audio-waves" aria-hidden="true">
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
            </div>
          </div>
        </div>

        <div class="card-floating-badge">${proj.category}</div>
        <div class="card-project-num">${projectNumber} / ${totalCount}</div>
      </div>

      <div class="card-content">
        <div class="card-header-row">
          <h3 class="card-title">${proj.title}</h3>
        </div>
        <p class="card-desc">${proj.description}</p>
        
        <div class="card-tags">
          ${proj.tags.map(tag => `<span class="card-tag">${tag}</span>`).join("")}
        </div>

        <div class="card-footer-actions">
          <button class="action-play-theater" data-action="play" type="button" aria-label="Play ${proj.title}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span>Theater Play</span>
          </button>

          <a href="https://drive.google.com/file/d/${proj.driveId}/view?usp=sharing" target="_blank" rel="noopener" class="action-drive-link" title="Open source file directly in Google Drive">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
            <span>Drive</span>
          </a>
        </div>
      </div>
    `;

    // Make the entire card interactive while preserving external Drive link
    card.addEventListener("click", (e) => {
      if (e.target.closest(".action-drive-link")) {
        return; // Allow direct Drive navigation without modal
      }
      openTheaterModal(proj);
    });

    card.addEventListener("keydown", (e) => {
      if (e.target.closest(".action-drive-link")) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openTheaterModal(proj);
      }
    });

    portfolioGrid.appendChild(card);
  });

  // Update Show more & View less Buttons & Progress Counter
  if (loadMoreContainer) {
    const isMoreAvailable = visibleProjects.length < validProjects.length;
    const isExpanded = visibleProjects.length > CARDS_PER_BATCH;

    if (isMoreAvailable || isExpanded) {
      loadMoreContainer.classList.remove("hidden");
    } else {
      loadMoreContainer.classList.add("hidden");
    }

    if (loadMoreBtn) {
      if (isMoreAvailable) {
        loadMoreBtn.classList.remove("hidden");
        loadMoreBtn.style.display = "";
        if (loadMoreText) loadMoreText.textContent = "Show more";
      } else {
        loadMoreBtn.classList.add("hidden");
        loadMoreBtn.style.display = "none";
      }
    }

    if (viewLessBtn) {
      if (isExpanded) {
        viewLessBtn.classList.remove("hidden");
        viewLessBtn.style.display = "";
      } else {
        viewLessBtn.classList.add("hidden");
        viewLessBtn.style.display = "none";
      }
    }

    if (loadMoreProgress) {
      loadMoreProgress.textContent = `Showing ${visibleProjects.length} of ${validProjects.length} projects`;
    }
  }
}

/**
 * Setup Show More & View Less Progressive Loading Buttons
 */
function setupLoadMore() {
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      const prevCount = visibleCardCount;
      visibleCardCount += CARDS_PER_BATCH;
      renderProjects(currentFilteredProjects, prevCount);
    });
  }

  if (viewLessBtn) {
    viewLessBtn.addEventListener("click", () => {
      visibleCardCount = CARDS_PER_BATCH;
      renderProjects(currentFilteredProjects, 0);

      // Smooth scroll back to showcase section header
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        const headerOffset = 80;
        const elementPosition = portfolioSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  }
}

/**
 * Filter Pills and Animated Indicator Positioning
 */
function setupFilterPills() {
  updatePillIndicator();
  window.addEventListener("resize", updatePillIndicator);

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });

      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");
      activeCategory = pill.getAttribute("data-category");

      updatePillIndicator();
      filterCategory(activeCategory);
    });
  });
}

function updatePillIndicator() {
  const activePill = document.querySelector(".filter-pill.active");
  if (!activePill || !pillIndicator) return;

  const pillRect = activePill.getBoundingClientRect();
  const scrollerRect = filterScroller.getBoundingClientRect();

  const leftOffset = pillRect.left - scrollerRect.left + filterScroller.scrollLeft;
  pillIndicator.style.width = `${pillRect.width}px`;
  pillIndicator.style.transform = `translateX(${leftOffset - 4}px)`;
}

function filterCategory(category) {
  visibleCardCount = CARDS_PER_BATCH; // Reset to 6 for selected category
  if (category === "all") {
    currentFilteredProjects = [...MOTION_PROJECTS];
  } else {
    currentFilteredProjects = MOTION_PROJECTS.filter(p => p && p.category === category);
  }
  renderProjects(currentFilteredProjects);
}

window.resetFilter = function() {
  visibleCardCount = CARDS_PER_BATCH;
  const allPill = document.querySelector('.filter-pill[data-category="all"]');
  if (allPill) allPill.click();
};

/**
 * Theater Modal Player Controls
 */
function openTheaterModal(project) {
  if (!project) return;

  currentProjectIndex = currentFilteredProjects.findIndex(p => p && p.id === project.id);
  if (currentProjectIndex === -1) {
    currentFilteredProjects = [...MOTION_PROJECTS];
    currentProjectIndex = currentFilteredProjects.findIndex(p => p && p.id === project.id);
    if (currentProjectIndex === -1) currentProjectIndex = 0;
  }

  loadModalProject(currentFilteredProjects[currentProjectIndex]);

  theaterModal.classList.add("active");
  theaterModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeTheaterModal() {
  theaterModal.classList.remove("active");
  theaterModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (window._modalSpinnerTimeout) {
    clearTimeout(window._modalSpinnerTimeout);
  }

  // Reset iframe src to stop audio/video streaming in background
  modalIframe.src = "";
}

function loadModalProject(proj) {
  if (!proj) return;

  modalSpinner.style.display = "flex";
  
  // Set meta info
  modalTitle.textContent = proj.title;
  modalDescription.textContent = proj.description;
  modalCategory.textContent = proj.category;
  
  const currentNum = String(currentProjectIndex + 1).padStart(2, "0");
  const totalNum = String(currentFilteredProjects.length).padStart(2, "0");
  modalCounter.textContent = `${currentNum} / ${totalNum}`;
  modalTags.innerHTML = proj.tags.map(t => `<span class="card-tag">${t}</span>`).join("");

  const isPendingDriveId = !proj.driveId || proj.driveId.startsWith("PASTE_");

  if (isPendingDriveId) {
    modalDriveLink.style.display = "none";
    modalIframe.src = "about:blank";
    modalIframe.style.display = "none";
    modalSpinner.style.display = "flex";
    modalSpinner.innerHTML = `
      <div style="text-align:center;padding:24px;color:#5f6368;max-width:400px;margin:auto;">
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#1a73e8" stroke-width="2" style="margin-bottom:12px;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h4 style="margin:0 0 8px;font-size:16px;color:#202124;font-weight:500;">Google Drive Link Pending</h4>
        <p style="margin:0;font-size:13px;line-height:1.5;">Please provide the sharing link for this video to stream it in theater mode.</p>
      </div>
    `;
  } else {
    modalDriveLink.style.display = "";
    modalDriveLink.href = `https://drive.google.com/file/d/${proj.driveId}/view?usp=sharing`;
    modalIframe.style.display = "";
    modalSpinner.innerHTML = `
      <div class="fluid-spinner"></div>
      <span>Connecting to Google Drive Stream...</span>
    `;
    modalSpinner.style.display = "flex";
    modalIframe.src = `https://drive.google.com/file/d/${proj.driveId}/preview`;

    if (window._modalSpinnerTimeout) {
      clearTimeout(window._modalSpinnerTimeout);
    }
    window._modalSpinnerTimeout = setTimeout(() => {
      modalSpinner.style.display = "none";
    }, 2500);

    modalIframe.onload = () => {
      clearTimeout(window._modalSpinnerTimeout);
      modalSpinner.style.display = "none";
    };
  }
}

function navigateModal(direction) {
  if (!currentFilteredProjects || currentFilteredProjects.length <= 1) return;

  if (direction === "next") {
    currentProjectIndex = (currentProjectIndex + 1) % currentFilteredProjects.length;
  } else if (direction === "prev") {
    currentProjectIndex = (currentProjectIndex - 1 + currentFilteredProjects.length) % currentFilteredProjects.length;
  }

  loadModalProject(currentFilteredProjects[currentProjectIndex]);
}

function setupModalEvents() {
  closeModalBtn.addEventListener("click", closeTheaterModal);
  modalBackdrop.addEventListener("click", closeTheaterModal);

  prevProjectBtn.addEventListener("click", () => navigateModal("prev"));
  nextProjectBtn.addEventListener("click", () => navigateModal("next"));

  // Keyboard Navigation: Esc to close, Arrows to navigate
  window.addEventListener("keydown", (e) => {
    if (!theaterModal.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeTheaterModal();
    } else if (e.key === "ArrowRight") {
      navigateModal("next");
    } else if (e.key === "ArrowLeft") {
      navigateModal("prev");
    }
  });
}

/**
 * Grid Density Toggle (Grid Mode is default)
 */
function setupViewToggle() {
  if (!cardViewToggle || !portfolioGrid) return;

  // Default view is Grid Mode (compact-view)
  let savedMode = "grid";
  try {
    savedMode = localStorage.getItem("motion_view_mode") || "grid";
  } catch (e) {}

  const isGrid = savedMode === "grid";
  portfolioGrid.classList.toggle("compact-view", isGrid);
  updateViewToggleState(isGrid);

  cardViewToggle.addEventListener("click", () => {
    const isNowGrid = portfolioGrid.classList.toggle("compact-view");
    try {
      localStorage.setItem("motion_view_mode", isNowGrid ? "grid" : "cinema");
    } catch (e) {}
    updateViewToggleState(isNowGrid);
  });
}

function updateViewToggleState(isGrid) {
  const btnText = cardViewToggle.querySelector(".btn-text");
  if (btnText) {
    btnText.textContent = isGrid ? "Cinema Mode" : "Grid Mode";
  }
  cardViewToggle.setAttribute("title", isGrid ? "Switch to Cinema Mode (larger preview)" : "Switch to Grid Mode (compact view)");
}

/**
 * Fluid Mouse Glow Follower
 */
function setupFluidCursor() {
  if (!fluidCursor) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    // Smooth lerp damping
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    fluidCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
}

/**
 * Copy Email with Toast Notification
 */
function setupEmailCopy() {
  if (!copyEmailBtn) return;

  copyEmailBtn.addEventListener("click", async () => {
    const email = copyEmailBtn.getAttribute("data-email") || "mraghavendra187@gmail.com";
    
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const tempInput = document.createElement("input");
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }
      showToast(`Copied ${email} to clipboard!`);
    } catch (err) {
      showToast(`Contact: ${email}`);
    }
  });
}

function showToast(msg) {
  if (!toastNotification) return;
  toastMessage.textContent = msg;
  toastNotification.classList.add("show");

  setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 3200);
}

/**
 * Navigation Scroll Spy
 */
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.pageYOffset + 150;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

// Start application when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);
