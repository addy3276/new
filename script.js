// Your testimonial data
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

// Icons
const icons = {
  google: "https://telecrm.in/assets/images/testimonial/google-icon.svg",
  video:
    "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='red' viewBox='0 0 24 24'%3e%3cpath d='M8 5v14l11-7z'/%3e%3c/svg%3e",
};

const tooltips = {
  google: "View on Google",
  video: "Play Video",
};

// Create testimonial card HTML
function createTestimonialCard(testimonial) {
  const card = document.createElement("div");
  card.className = "testimonial-card";

  let screenshotHTML = "";
  if (testimonial.screenshotImage) {
    screenshotHTML = `
            <div class="testimonial-screenshot">
                <img src="${testimonial.screenshotImage}" alt="Screenshot from ${testimonial.name}">
            </div>
        `;
  }

  let quoteHTML = "";
  if (testimonial.quote) {
    quoteHTML = `<p class="testimonial-quote">${testimonial.quote}</p>`;
  }

  let linkHTML = "";
  if (testimonial.link) {
    linkHTML = `
            <button class="testimonial-link-button" data-link="${
              testimonial.link
            }" data-type="${testimonial.linkType}">
                <img src="${icons[testimonial.linkType]}" alt="link">
                <span>${tooltips[testimonial.linkType]}</span>
            </button>
        `;
  }

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

// Render testimonials
function renderTestimonials() {
  const grid = document.getElementById("testimonialGrid");
  testimonials.forEach((testimonial) => {
    const card = createTestimonialCard(testimonial);
    grid.appendChild(card);
  });
}

// Video modal functionality
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

// Event listeners
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

// Handle link button clicks
document.addEventListener("click", (e) => {
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

// Initialize
renderTestimonials();
