//  TESTIMONIAL DATA
const testimonials = [
  {
    company: "SQUIRE",
    quote:
      "Robin consistently delivers clean, intuitive designs that strike the perfect balance between aesthetic and usability. Whether it’s for a complex workflow or a lightweight self-service feature, the user experience always feels effortless and refined.",
    name: "Dave Salvant",
    role: "Co-founder of Squire",
    profileImage: "https://i.pravatar.cc/100?img=5",
    link: "https://goo.gl/maps/sfk7N6DVKV9SGUAu9",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "TechCorp",
    quote: "The team provided an outstanding experience from start to finish .",
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    profileImage: "https://i.pravatar.cc/100?img=6",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "VideoCorp",
    quote: "Amazing results, see our video testimonial!",
    name: "Jane Doe",
    role: "CEO",
    profileImage: "https://i.pravatar.cc/100?img=8",
    link: "https://www.youtube.com/embed/OW25eaCeEjA?autoplay=1&mute=0",
    linkType: "video",
    screenshotImage: "	https://telecrm.in/assets/images/testimonial/w2.jpg",
  },
  {
    company: "Innova Labs",
    quote:
      "Working with them was a seamless process. The designs were not only beautiful but also highly functional.",
    name: "Michael Chen",
    role: "CEO of Innova Labs",
    profileImage: "https://i.pravatar.cc/100?img=7",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "Bright Solutions",
    quote:
      "They truly understood our requirements and delivered exactly what we envisioned. Couldn’t ask for more.",
    name: "Emily Carter",
    role: "Founder of Bright Solutions",
    profileImage: "https://i.pravatar.cc/100?img=8",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "Bright Solutions",
    quote:
      "They truly understood our requirements and delivered exactly what we envisioned. Couldn’t ask for more.",
    name: "Emily Carter",
    role: "Founder of Bright Solutions",
    profileImage: "https://i.pravatar.cc/100?img=8",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "Bright Solutions",
    quote:
      "They truly understood our requirements and delivered exactly what we envisioned. Couldn’t ask for more.",
    name: "Emily Carter",
    role: "Founder of Bright Solutions",
    profileImage: "https://i.pravatar.cc/100?img=8",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "Bright Solutions",
    quote:
      "They truly understood our requirements and delivered exactly what we envisioned. Couldn’t ask for more.",
    name: "Emily Carter",
    role: "Founder of Bright Solutions",
    profileImage: "https://i.pravatar.cc/100?img=8",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "Bright Solutions",
    quote:
      "They truly understood our requirements and delivered exactly what we envisioned. Couldn’t ask for more.",
    name: "Emily Carter",
    role: "Founder of Bright Solutions",
    profileImage: "https://i.pravatar.cc/100?img=8",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "Bright Solutions",
    quote:
      "They truly understood our requirements and delivered exactly what we envisioned. Couldn’t ask for more.",
    name: "Emily Carter",
    role: "Founder of Bright Solutions",
    profileImage: "https://i.pravatar.cc/100?img=8",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "Bright Solutions",
    quote:
      "They truly understood our requirements and delivered exactly what we envisioned. Couldn’t ask for more.",
    name: "Emily Carter",
    role: "Founder of Bright Solutions",
    profileImage: "https://i.pravatar.cc/100?img=8",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "Bright Solutions",
    quote:
      "They truly understood our requirements and delivered exactly what we envisioned. Couldn’t ask for more.",
    name: "Emily Carter",
    role: "Founder of Bright Solutions",
    profileImage: "https://i.pravatar.cc/100?img=8",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "Bright Solutions",
    quote:
      "They truly understood our requirements and delivered exactly what we envisioned. Couldn’t ask for more.",
    name: "Emily Carter",
    role: "Founder of Bright Solutions",
    profileImage: "https://i.pravatar.cc/100?img=8",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
  {
    company: "Bright Solutions",
    quote:
      "They truly understood our requirements and delivered exactly what we envisioned. Couldn’t ask for more.",
    name: "Emily Carter",
    role: "Founder of Bright Solutions",
    profileImage: "https://i.pravatar.cc/100?img=8",
    link: "https://linkedin.com",
    linkType: "google",
    screenshotImage:
      "	https://telecrm.in/assets/images/testimonial/g5theertha.png",
  },
];

//  ICONS & TOOLTIPS

const icons = {
  google: "https://telecrm.in/assets/images/testimonial/google-icon.svg",
  video:
    "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='red' viewBox='0 0 24 24'%3e%3cpath d='M8 5v14l11-7z'/%3e%3c/svg%3e",
};

const tooltips = {
  google: "View on Google",
  video: "Play Video",
};

//  CREATE TESTIMONIAL CARD
function createTestimonialCard(testimonial) {
  const card = document.createElement("div");
  card.className = "testimonial-card";

  let screenshotHTML = testimonial.screenshotImage
    ? `
      <div class="testimonial-screenshot">
        <img src="${testimonial.screenshotImage}" alt="Screenshot from ${testimonial.name}">
      </div>
    `
    : "";

  let quoteHTML = "";
  if (testimonial.quote) {
    quoteHTML = `
      <div class="testimonial-quote-container">
        <p class="testimonial-quote">${testimonial.quote}
          <span class="read-more"
            data-company="${testimonial.company}"
            data-name="${testimonial.name}"
            data-role="${testimonial.role}"
            data-quote="${testimonial.quote}"
            data-profile="${testimonial.profileImage}"
            data-link="${testimonial.link || ""}"
            data-type="${testimonial.linkType || ""}"
          > Read More</span>
        </p>
      </div>
    `;
  }

  let linkHTML = testimonial.link
    ? `
      <button class="testimonial-link-button" data-link="${
        testimonial.link
      }" data-type="${testimonial.linkType}">
        <img src="${icons[testimonial.linkType]}" alt="link">
        <span>${tooltips[testimonial.linkType]}</span>
      </button>
    `
    : "";

  card.innerHTML = `
    <h2 class="testimonial-company">${testimonial.company}</h2>
    ${quoteHTML}
    ${screenshotHTML}
    <div class="testimonial-footer">
      <div class="testimonial-author">
        <img src="${testimonial.profileImage}" alt="Profile picture of ${testimonial.name}" class="testimonial-profile-image">
        <div class="testimonial-author-info">
          <h3>${testimonial.name}</h3>
          <p>${testimonial.role}</p>
        </div>
      </div>
      ${linkHTML}
    </div>
  `;

  return card;
}

// RENDER TESTIMONIALS

function renderTestimonials() {
  const grid = document.getElementById("testimonialGrid");
  testimonials.forEach((testimonial) => {
    const card = createTestimonialCard(testimonial);
    grid.appendChild(card);
  });

  // After rendering, hide "Read More" if not needed
  filterReadMoreVisibility();
}

//  CHECK & HIDE SHORT QUOTES
function filterReadMoreVisibility() {
  const quotes = document.querySelectorAll(".testimonial-quote");
  quotes.forEach((quote) => {
    const readMore = quote.querySelector(".read-more");
    const text = quote.textContent.replace("Read More", "").trim();
    const wordCount = text.split(/\s+/).length;
    const lineHeight = parseFloat(getComputedStyle(quote).lineHeight);
    const maxHeight = lineHeight * 2;
    const isOverflowing = quote.scrollHeight > maxHeight;

    if (wordCount <= 12 && !isOverflowing) {
      readMore.style.display = "none";
    }
  });
}

//  VIDEO MODAL LOGIC

const modal = document.getElementById("videoModal");
const closeModalBtn = document.getElementById("closeModal");
const videoIframe = document.getElementById("videoIframe");

function openVideoModal(embedLink) {
  videoIframe.src = embedLink;
  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeVideoModal() {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
  videoIframe.src = "";
}

closeModalBtn.addEventListener("click", closeVideoModal);
modal.addEventListener("click", (e) => {
  if (
    e.target === modal ||
    e.target.classList.contains("video-modal-overlay")
  ) {
    closeVideoModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeVideoModal();
  }
});

// READ MORE MODAL LOGIC
const testimonialModal = document.getElementById("testimonialModal");
const closeTestimonialModal = document.getElementById("closeTestimonialModal");
const modalCompany = document.getElementById("modalCompany");
const modalQuote = document.getElementById("modalQuote");
const modalAuthor = document.getElementById("modalAuthor");
const modalLinkContainer = document.getElementById("modalLinkContainer");

let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

function openTestimonialModal(data) {
  modalCompany.textContent = data.company;
  modalQuote.textContent = data.quote;
  modalAuthor.innerHTML = `
    <div style="display:flex;align-items:center;gap:0.75rem;margin-top:1rem;">
      <img src="${data.profile}" style="width:2.5rem;height:2.5rem;border-radius:9999px;object-fit:cover;">
      <div>
        <h3 style="font-weight:600;font-size:0.875rem;">${data.name}</h3>
        <p style="font-size:0.75rem;color:#6b7280;">${data.role}</p>
      </div>
    </div>
  `;

  if (data.link) {
    modalLinkContainer.innerHTML = `
      <button class="testimonial-link-button" data-link="${
        data.link
      }" data-type="${data.type}">
        <img src="${icons[data.type]}" alt="link">
        <span>${tooltips[data.type]}</span>
      </button>
    `;
  } else {
    modalLinkContainer.innerHTML = "";
  }

  testimonialModal.classList.add("active");
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}

function closeTestimonialPopup() {
  testimonialModal.classList.remove("active");
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
}

closeTestimonialModal.addEventListener("click", closeTestimonialPopup);
testimonialModal.addEventListener("click", (e) => {
  if (e.target === testimonialModal) closeTestimonialPopup();
});

//  EVENT HANDLERS
document.addEventListener("click", (e) => {
  // Handle Read More click
  const readMore = e.target.closest(".read-more");
  if (readMore) {
    const data = {
      company: readMore.dataset.company,
      quote: readMore.dataset.quote,
      name: readMore.dataset.name,
      role: readMore.dataset.role,
      profile: readMore.dataset.profile,
      link: readMore.dataset.link,
      type: readMore.dataset.type,
    };
    openTestimonialModal(data);
    return;
  }

  // Handle video/google link buttons
  const button = e.target.closest(".testimonial-link-button");
  if (button) {
    const link = button.dataset.link;
    const type = button.dataset.type;

    if (type === "video") {
      openVideoModal(link);
    } else {
      window.open(link, "_blank");
    }
  }
});

//  INITIALIZE
renderTestimonials();
