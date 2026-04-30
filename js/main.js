/* Couzens Bakery & Coffee Lounge — Main JavaScript */

const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

const fontBtns = document.querySelectorAll('.font-btn');
let fontSize = 16;

fontBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.action === 'increase') {
      fontSize = Math.min(fontSize + 2, 24);
    } else if (btn.dataset.action === 'decrease') {
      fontSize = Math.max(fontSize - 2, 12);
    } else {
      fontSize = 16;
    }
    document.documentElement.style.fontSize = fontSize + 'px';
  });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems  = document.querySelectorAll('.menu-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    menuItems.forEach(item => {
      if (filter === 'all') {
        item.style.display = '';
      } else {
        const tags = item.dataset.tags || '';
        item.style.display = tags.includes(filter) ? '' : 'none';
      }
    });

    document.querySelectorAll('.menu-section').forEach(section => {
      const visible = [...section.querySelectorAll('.menu-item')]
        .some(i => i.style.display !== 'none');
      section.style.display = visible ? '' : 'none';
    });
  });
});

const orderForm  = document.getElementById('order-form');
const successMsg = document.getElementById('success-msg');

if (orderForm) {
  orderForm.addEventListener('submit', e => {
    e.preventDefault();

    const name  = document.getElementById('name');
    const email = document.getElementById('email');
    const cake  = document.getElementById('cake-type');
    let valid = true;

    [name, email, cake].forEach(field => {
      if (!field) return;
      if (!field.value.trim()) {
        field.style.borderColor = '#dc3545';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (valid && successMsg) {
      successMsg.style.display = 'block';
      orderForm.reset();
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

const contactForm = document.getElementById('contact-form');
const contactMsg  = document.getElementById('contact-success-msg');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    if (contactMsg) {
      contactMsg.style.display = 'block';
      contactForm.reset();
      contactMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
