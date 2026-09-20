const portfolioData = {
  name: 'Andika Dwi Putra',
  role: 'Junior Web Developer',
  location: 'Demak, Central Java',
  email: 'andikaputradwi006@gmail.com',
  whatsapp: '+62 812-1527-6475',
  github: 'https://github.com/andikadwiputra-28',
  linkedin: 'https://www.linkedin.com/in/andika-dwi-putra-a286602b1/',
  instagram: 'https://www.instagram.com/andikadwiputrrra/'
};

const skills = [
  { category: 'Frontend', icon: 'fa-code', name: 'HTML5', description: 'Menyusun struktur web yang semantic dan accessible.', level: 'Intermediate', width: '62%' },
  { category: 'Frontend', icon: 'fa-palette', name: 'CSS3', description: 'Membuat interface yang rapi, responsif, dan berkarakter.', level: 'Intermediate', width: '58%' },
  { category: 'Frontend', icon: 'fa-js', name: 'JavaScript', description: 'Menambahkan interaksi dan perilaku dinamis pada website.', level: 'Beginner', width: '45%' },
  { category: 'Backend', icon: 'fa-server', name: 'PHP', description: 'Membangun logika server-side dan aplikasi web sederhana.', level: 'Beginner', width: '40%' },
  { category: 'Database', icon: 'fa-database', name: 'MySQL', description: 'Merancang dan mengelola database untuk kebutuhan aplikasi web.', level: 'Beginner', width: '38%' },
  { category: 'Design', icon: 'fa-pen-ruler', name: 'Figma', description: 'Membuat wireframe, prototype, dan desain interface.', level: 'Intermediate', width: '52%' },
  { category: 'Design', icon: 'fa-palette', name: 'Canva', description: 'Membuat kebutuhan visual dan materi pendukung project.', level: 'Intermediate', width: '58%' },
  { category: 'Tools', icon: 'fa-github', name: 'GitHub', description: 'Menyimpan, mengelola, dan membagikan source code project.', level: 'Intermediate', width: '55%' }
];

const projects = [
  { image: 'assets/images/poliklinik.png', number: '01', name: 'Campus Clinic Information System', description: 'The Campus Clinic Information System is a web application designed to streamline all campus healthcare operations. In this project, I designed a structured database and developed core features, including a patient registration system, appointment scheduling, medication transactions, and diagnosis records management.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], demo: 'https://andika-28.infinityfree.io/?i=1', github: 'https://github.com/andikadwiputra-28/poliklinik', category: 'fullstack' },
  { image: 'assets/images/bukutamu.png', number: '02', name: 'Digital Guest Book', description: 'A digital guest book website designed to digitally record visitor information and messages.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], demo: 'https://bukutamu-blush.vercel.app/', github: 'https://github.com/andikadwiputra-28/andika_bukutamu', category: 'fullstack' },
  { image: 'assets/images/grocery.png', number: '03', name: 'Grocery Store Digitalization Program', description: 'The Figma project for a grocery store digitalization program covering user registration, product entry, and cashier functions.', tags: ['Figma'], demo: 'https://www.figma.com/design/Fbune6z1Qw4bClFW6b4kaf/UTS_IMK_ANDIKADWIPUTRA_07164?node-id=0-1&t=XKDvV1XxNA8oIqnJ-1', github: '#', category: 'design' },
  { image: 'assets/images/e-commerce.png', number: '04', name: 'E-Commerce', description: 'An e-commerce website for selling various goods, with a structured database for users and products.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], demo: 'https://uas-ecommerce-xi.vercel.app/', github: 'https://github.com/andikadwiputra-28/UAS-Ecommerce', category: 'fullstack' }
];

const certificates = [
  { image: 'assets/certificates/Andika Dwi Putra.pdf.png', name: 'SENSASI 2025', issuer: 'Online Learning Platform', year: '2024', credential: 'CERT-2024-001' },
  { image: 'assets/certificates/Andika Dwi Putra (2).pdf', type: 'pdf', name: 'SENSASI 2026', issuer: 'Digital Academy', year: '2024', credential: 'CERT-2024-002' },
  { image: 'assets/certificates/coursera%20enterprise%20system.pdf', type: 'pdf', name: 'Enterprise Systems FROM UNIVERSITY OF MINNESOTA', issuer: 'Tech Skills Institute', year: '2025', credential: 'CERT-2025-003' }
];

const setText = (field, value) => document.querySelectorAll(`[data-field="${field}"]`).forEach((element) => { element.textContent = value; });
const setSocial = (name, href) => document.querySelectorAll(`[data-social="${name}"]`).forEach((element) => { element.href = href; });

function hydratePortfolioData() {
  setText('name', portfolioData.name);
  setText('role', portfolioData.role);
  setText('location', portfolioData.location);
  setText('email', portfolioData.email);
  setText('whatsapp', portfolioData.whatsapp);
  setSocial('github', portfolioData.github);
  setSocial('linkedin', portfolioData.linkedin);
  setSocial('instagram', portfolioData.instagram);
  const whatsappNumber = portfolioData.whatsapp.replace(/\D/g, '').replace(/^0/, '62');
  setSocial('whatsapp', `https://wa.me/${whatsappNumber}`);
  document.querySelectorAll('[data-social="email"]').forEach((element) => { element.href = `mailto:${portfolioData.email}`; });
  document.querySelectorAll('a[href="mailto:[EMAIL]"]').forEach((element) => { element.href = `mailto:${portfolioData.email}`; });
  document.title = `${portfolioData.name} | ${portfolioData.role}`;
}

function renderSkills() {
  document.getElementById('skills-grid').innerHTML = skills.map((skill) => `
    <article class="skill-card reveal"><div class="skill-icon"><i class="fa-solid ${skill.icon}"></i></div><h3>${skill.name}</h3><p>${skill.description}</p><div class="level"><span>${skill.category}</span><span>${skill.level}</span></div><div class="level-bar" aria-label="Level ${skill.level}"><span style="--level: ${skill.width}"></span></div></article>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  container.innerHTML = projects.map((project) => `
    <article class="project-card reveal">
      <div class="project-image lazy-image">
        <img src="${project.image}" alt="Preview ${project.name}" loading="lazy">
        <div class="placeholder"></div>
        <span class="project-number">${project.number}</span>
      </div>
      <div class="project-body">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        <div class="project-links">
          <a class="magnetic" href="${project.demo}" target="_blank" rel="noopener noreferrer">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          <a class="magnetic" href="${project.github}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> GitHub</a>
        </div>
      </div>
    </article>
  `).join('');
  
  setupLazyImages();
}

function renderCertificates() {
  document.getElementById('certificates-grid').innerHTML = certificates.map((certificate, index) => `
    <article class="certificate-card reveal">
      <div class="certificate-preview lazy-image ${certificate.type === 'pdf' ? 'pdf-preview' : ''}">
        ${certificate.type === 'pdf' 
          ? `<iframe src="${certificate.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH" title="Sertifikat ${certificate.name}"></iframe>`
          : `<img src="${certificate.image}" alt="Sertifikat ${certificate.name}" loading="lazy">
             <div class="placeholder"></div>`}
      </div>
      <div class="certificate-body">
        <h3>${certificate.name}</h3>
        <p>${certificate.issuer} &bull; ${certificate.year}<br>Credential: ${certificate.credential}</p>
        <button class="magnetic" type="button" data-certificate-index="${index}">View Certificate <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
      </div>
    </article>
  `).join('');
  
  setupLazyImages();
}

function setupNavigation() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  menuToggle.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.innerHTML = `<i class="fa-solid fa-${open ? 'xmark' : 'bars'}"></i>`; });
  document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>'; }));
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30), { passive: true });
  const sections = document.querySelectorAll('main section[id]');
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) document.querySelectorAll('.nav-link').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));
}

function setupReveal() {
  const revealObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const textRevealObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); splitTextLines(entry.target); observer.unobserve(entry.target); } }), { threshold: .15 });
  document.querySelectorAll('.split-text').forEach((element) => textRevealObserver.observe(element));
}

function splitTextLines(element) {
  const text = element.textContent.trim();
  element.innerHTML = text.split(' ').map((word, i) => `<span class="word" style="--word-index:${i}">${word}</span>`).join(' ');
  element.querySelectorAll('.line').forEach(line => {
    const words = line.textContent.trim().split(' ');
    line.innerHTML = words.map((word, i) => `<span class="word" style="--word-index:${i}">${word}</span>`).join(' ');
  });
}

function setupCertificateModal() {
  const modal = document.getElementById('certificate-modal');
  const image = document.getElementById('modal-image');
  const title = document.getElementById('modal-title');
  const meta = document.getElementById('modal-meta');
  document.getElementById('certificates-grid').addEventListener('click', (event) => { const button = event.target.closest('[data-certificate-index]'); if (!button) return; const certificate = certificates[button.dataset.certificateIndex]; if (certificate.type === 'pdf') { window.open(certificate.image, '_blank', 'noopener'); return; } image.src = certificate.image; image.alt = `Preview besar ${certificate.name}`; image.onerror = () => { image.onerror = null; image.src = 'assets/certificates/certificate-placeholder.svg'; }; title.textContent = certificate.name; meta.textContent = `${certificate.issuer} • ${certificate.year} • ${certificate.credential}`; modal.hidden = false; document.body.style.overflow = 'hidden'; modal.querySelector('.modal-close').focus(); });
  const close = () => { modal.hidden = true; document.body.style.overflow = ''; };
  modal.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', close));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) close(); });
}

function setupForm() {
  const form = document.getElementById('contact-form');
  const message = form.querySelector('.form-message');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      message.textContent = 'Mohon lengkapi semua field terlebih dahulu.';
      message.style.color = '#ff9a9a';
      return;
    }

    const formData = new FormData(form);
    const whatsappNumber = portfolioData.whatsapp.replace(/\D/g, '').replace(/^0/, '62');
    const whatsappMessage = [
      'Halo Andika, saya tertarik untuk berkolaborasi.',
      '',
      `Nama: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Subject: ${formData.get('subject')}`,
      `Pesan: ${formData.get('message')}`
    ].join('\n');

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
    message.textContent = 'WhatsApp terbuka dengan pesan yang sudah disiapkan.';
    message.style.color = 'var(--lime)';
    form.reset();
  });
}

function setupMagneticButtons() {
  const magneticElements = document.querySelectorAll('.magnetic');
  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const strength = el.classList.contains('button') ? 0.15 : 0.25;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
}

function setupButtonRipple() {
  document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}

function setupScrollProgress() {
  const progress = document.querySelector('.scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressPercent = scrollTop / docHeight;
    progress.style.transform = `scaleX(${progressPercent})`;
  }, { passive: true });
}

function setupCustomCursor() {
  const cursor = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor-dot');
  if (!cursor || !cursorDot) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let dotX = 0, dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dotX = e.clientX;
    dotY = e.clientY;
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    if (!cursor.classList.contains('active')) cursor.classList.add('active');
    if (!cursorDot.classList.contains('active')) cursorDot.classList.add('active');
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverTargets = 'a, button, .magnetic, .project-card, .certificate-card, .skill-card, .journey-feature, .nav-link, .social-links a, .theme-toggle';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  document.addEventListener('mousedown', () => cursor.classList.add('click'));
  document.addEventListener('mouseup', () => cursor.classList.remove('click'));
}

function setupThemeToggle() {
  const toggle = document.querySelector('.theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggle.setAttribute('aria-pressed', savedTheme === 'light');

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggle.setAttribute('aria-pressed', next === 'light');
  });
}

function setupParallaxHero() {
  const hero = document.querySelector('.hero');
  const heroCopy = document.querySelector('.hero-copy');
  const heroVisual = document.querySelector('.hero-visual');
  const ambientOne = document.querySelector('.ambient-one');
  const ambientTwo = document.querySelector('.ambient-two');
  
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    const progress = Math.min(scrollY / heroHeight, 1);
    
    if (progress <= 1) {
      heroCopy.style.transform = `translateY(${scrollY * 0.3}px)`;
      heroCopy.style.opacity = 1 - progress * 0.8;
      heroVisual.style.transform = `translateY(${scrollY * 0.15}px)`;
      if (ambientOne) ambientOne.style.transform = `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`;
      if (ambientTwo) ambientTwo.style.transform = `translate(${-scrollY * 0.08}px, ${-scrollY * 0.04}px)`;
    }
  }, { passive: true });
}

function setupSkillBarsAnimation() {
  const skillBars = document.querySelectorAll('.level-bar');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  skillBars.forEach(bar => observer.observe(bar));
}

function setupLazyImages() {
  const images = document.querySelectorAll('.lazy-image img');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.onload = () => img.closest('.lazy-image').classList.add('loaded');
        if (img.complete) img.closest('.lazy-image').classList.add('loaded');
        obs.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });
  images.forEach(img => observer.observe(img));
}

function init() {
  hydratePortfolioData();
  renderSkills();
  renderProjects();
  renderCertificates();
  setupNavigation();
  setupReveal();
  setupCertificateModal();
  setupForm();
  setupMagneticButtons();
  setupButtonRipple();
  setupScrollProgress();
  setupCustomCursor();
  setupThemeToggle();
  setupParallaxHero();
  setupSkillBarsAnimation();
  setupLazyImages();
}

document.addEventListener('DOMContentLoaded', init);