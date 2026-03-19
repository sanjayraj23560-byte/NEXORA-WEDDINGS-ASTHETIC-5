function toggleNav() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (!mobileMenu) return;
  const isOpen = mobileMenu.classList.contains('menu-open');
  if (isOpen) {
    mobileMenu.classList.remove('menu-open');
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.opacity = '0';
  } else {
    mobileMenu.classList.add('menu-open');
    mobileMenu.style.maxHeight = '400px';
    mobileMenu.style.opacity = '1';
  }
}

(function initStickyNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  }, { passive: true });
})();

(function initCategoryFilter() {
  const categoryItems = document.querySelectorAll('.category-item');
  const blogCards = document.querySelectorAll('.blog-card');

  if (!categoryItems.length || !blogCards.length) return;

  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      categoryItems.forEach(c => c.classList.remove('category-active'));
      item.classList.add('category-active');

      const filter = item.dataset.category || 'all';

      blogCards.forEach(card => {
        if (filter === 'all' || (card.dataset.category || '').toLowerCase() === filter.toLowerCase()) {
          card.style.display = '';
          card.classList.remove('card-hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.classList.add('card-hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            if (card.classList.contains('card-hidden')) card.style.display = 'none';
          }, 400);
        }
      });
    });
  });
})();

const hiddenStories = [
  {
    category: 'Decor',
    image: './images/cat-decor.jpg',
    title: 'Floral Fantasia: Top Trending Wedding Decor Themes for 2026',
    author: 'Megha Bali',
    date: '10 Mar 2026',
  },
  {
    category: 'Planning',
    image: './images/cat-planning.jpg',
    title: 'Your Complete 12-Month Wedding Planning Timeline',
    author: 'Chandni Kumar',
    date: '8 Mar 2026',
  },
  {
    category: 'Hindu',
    image: './images/cat-hindu.jpg',
    title: 'Sacred Rituals & Modern Touches: Guide to a Hindu Wedding',
    author: 'Chanda Pathak',
    date: '5 Mar 2026',
  },
];

let storiesLoaded = false;

(function initLoadMore() {
  const btn = document.getElementById('load-more-btn');
  const grid = document.getElementById('blog-grid');
  if (!btn || !grid) return;

  btn.addEventListener('click', () => {
    if (storiesLoaded) {
      btn.textContent = 'NO MORE STORIES';
      btn.disabled = true;
      return;
    }
    storiesLoaded = true;

    hiddenStories.forEach((story, i) => {
      const card = document.createElement('div');
      card.className = 'blog-card bg-white text-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300';
      card.dataset.category = story.category;
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.innerHTML = `
        <div class="relative overflow-hidden">
          <img src="${story.image}" class="w-full h-56 object-cover hover:scale-105 transition duration-500 cursor-pointer" alt="${story.title}" />
        </div>
        <div class="p-6">
          <span class="text-[11px] font-bold text-[#751d14] uppercase tracking-wider">${story.category}</span>
          <h2 class="mt-2 text-xl font-bold leading-tight hover:text-[#751d14] cursor-pointer transition">${story.title}</h2>
          <p class="mt-4 text-xs font-medium text-gray-400 uppercase tracking-wide">${story.author} • ${story.date}</p>
        </div>`;
      grid.appendChild(card);

      setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 150);
    });

    btn.textContent = 'NO MORE STORIES';
    btn.disabled = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');
  });
})();

(function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  const input = document.getElementById('newsletter-email');
  const msg = document.getElementById('newsletter-msg');
  if (!form || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      showMsg('Please enter a valid email address.', 'error');
      shakeInput(input);
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
    btn.disabled = true;

    setTimeout(() => {
      showMsg('🎉 Thank you! You\'re now subscribed.', 'success');
      input.value = '';
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
      btn.disabled = false;
    }, 1200);
  });

  function showMsg(text, type) {
    if (!msg) return;
    msg.textContent = text;
    msg.className = type === 'success'
      ? 'mt-3 text-sm font-semibold text-green-400'
      : 'mt-3 text-sm font-semibold text-red-400';
    msg.style.display = 'block';
    setTimeout(() => { msg.style.display = 'none'; }, 4000);
  }

  function shakeInput(el) {
    el.classList.add('shake-anim');
    setTimeout(() => el.classList.remove('shake-anim'), 600);
  }
})();

(function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
})();

(function initServiceIcons() {
  const icons = document.querySelectorAll('.service-icon');
  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.add('bounce-anim');
      setTimeout(() => icon.classList.remove('bounce-anim'), 700);
    });
  });
})();

(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');
  if (!lightbox || !lbImg) return;

  document.querySelectorAll('.blog-card img, .sidebar-card img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lightbox.classList.add('lightbox-open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('lightbox-open');
    document.body.style.overflow = '';
  }

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
})();

(function initSocialBtns() {
  document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Followed!';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = original;
        btn.disabled = false;
      }, 2000);
    });
  });
})();

(function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.style.opacity = window.scrollY > 400 ? '1' : '0';
    btn.style.transform = window.scrollY > 400 ? 'translateY(0)' : 'translateY(20px)';
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
