/*!
 * IMM Food Innovators LLP — main.js v4.0
 * Global UI Features: Sticky Header, Scroll Progress, Mobile Menu,
 * Hero Banner Slider, Modal Dialog Controller, FAQ Accordion, Contact Form Submission.
 */

(function () {
  'use strict';

  /* ============================================================
     1. DYNAMIC COMPANY DATA BINDING
  ============================================================ */
  function syncCompanyData() {
    if (!window.companyData) return;
    const c = window.companyData;

    // Auto-update phone links with data attribute data-company-phone
    const phoneElems = document.querySelectorAll('[data-company-phone]');
    phoneElems.forEach(el => {
      if (el.tagName === 'A') {
        el.href = `tel:${c.phones[0].raw}`;
        el.textContent = c.phones[0].display;
      }
    });

    // Auto-update email links with data attribute data-company-email
    const emailElems = document.querySelectorAll('[data-company-email]');
    emailElems.forEach(el => {
      if (el.tagName === 'A') {
        el.href = `mailto:${c.email}`;
        el.textContent = c.email;
      }
    });
  }

  /* ============================================================
     2. HERO BANNER SLIDER
  ============================================================ */
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');

    if (!slides.length) return;

    let currentSlide = 0;
    let slideInterval;

    function goToSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function startAutoplay() {
      stopAutoplay();
      slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 5000);
    }

    function stopAutoplay() {
      if (slideInterval) clearInterval(slideInterval);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        startAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        startAutoplay();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        startAutoplay();
      });
    });

    startAutoplay();
  }

  /* ============================================================
     3. MODAL DIALOG CONTROLLER (SPECS, QUOTE, CERTIFICATES)
  ============================================================ */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  function openModal(contentHtml) {
    if (!modalOverlay || !modalBody) return;
    modalBody.innerHTML = contentHtml;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  window.openModal = openModal;
  window.closeModal = closeModal;

  window.openQuoteModal = function (productName) {
    const products = window.productsData || [];
    const productOptionsHtml = products.map(p =>
      `<option value="${p.name}" ${p.name === productName ? 'selected' : ''}>${p.name}</option>`
    ).join('');

    const apiKey = window.companyData ? window.companyData.web3formsKey : '4d0c3c98-6bd6-4751-88f0-353b9ad95f9c';

    openModal(`
      <div>
        <div class="section-badge">INQUIRE BULK PRODUCT</div>
        <h2 style="font-size: 1.8rem; margin: 1rem 0; color: var(--primary-dark);">Inquire Bulk Supply</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Fill out the form below and our export sales manager will send specifications and pricing within 24 hours.</p>
        <form id="modalQuoteForm">
          <!-- Honeypot anti-spam field -->
          <input type="checkbox" name="botcheck" class="hidden" style="display: none !important;" tabindex="-1" autocomplete="off">
          <div class="form-group">
            <label>Selected Product *</label>
            <select name="product" required style="width: 100%; padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-family: inherit; font-size: 0.95rem;">
              <option value="" disabled ${!productName ? 'selected' : ''}>-- Select a Product --</option>
              ${productOptionsHtml}
            </select>
          </div>
          <div class="form-group">
            <label>Your Name / Company *</label>
            <input type="text" name="name" required placeholder="Full Name">
          </div>
          <div class="form-group">
            <label>Business Email *</label>
            <input type="email" name="email" required placeholder="email@company.com">
          </div>
          <div class="form-group">
            <label>Phone / WhatsApp *</label>
            <input type="tel" name="phone" required placeholder="+91 9876543210">
          </div>
          <div class="form-group">
            <label>Required Quantity (kg) & Destination</label>
            <textarea name="message" required placeholder="e.g. Need 500 kg for export to Dubai..."></textarea>
          </div>
          <button type="submit" class="btn-primary" style="width: 100%;">Submit Bulk Inquiry →</button>
          <div id="modalQuoteSuccess" style="display:none; color: #0A2E1D; background: #ECFDF5; border: 1px solid #A7F3D0; padding: 1rem; border-radius: var(--radius-sm); margin-top: 1rem; font-weight: 600; text-align: center;">
            ✓ Thank you! Your inquiry has been sent to info@immfoodinnovators.in.
          </div>
        </form>
      </div>
    `);

    setTimeout(() => {
      const modalForm = document.getElementById('modalQuoteForm');
      const modalSuccess = document.getElementById('modalQuoteSuccess');
      if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const submitBtn = modalForm.querySelector('button[type="submit"]');
          const origText = submitBtn.textContent;
          submitBtn.textContent = 'Sending Email...';
          submitBtn.disabled = true;

          const formData = new FormData(modalForm);
          const formJson = Object.fromEntries(formData.entries());

          if (formJson.botcheck) {
            console.warn('Honeypot anti-spam triggered. Aborting modal submission.');
            return;
          }

          fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              access_key: apiKey,
              subject: `Bulk Quote Request: ${formJson.product || 'Products'}`,
              from_name: 'IMM Food Innovators Website',
              ...formJson
            })
          })
            .then(res => res.json())
            .then(() => {
              submitBtn.textContent = origText;
              submitBtn.disabled = false;
              if (modalSuccess) modalSuccess.style.display = 'block';
              modalForm.reset();
            })
            .catch(() => {
              submitBtn.textContent = origText;
              submitBtn.disabled = false;
              if (modalSuccess) modalSuccess.style.display = 'block';
              modalForm.reset();
            });
        });
      }
    }, 100);
  };

  const certDetailsData = {
    'iso-22000': { doc: 'images/certifications/iso_22000.webp' },
    'iso-9001': { doc: 'images/certifications/iso_9001.webp' },
    'fssai': { doc: 'images/certifications/fssai.webp' },
    'gmp': { doc: 'images/certifications/GMP.webp' },
    'udyam': { doc: 'images/certifications/apeda_udyam.webp' }
  };

  window.openCertModal = function (certKey) {
    const info = certDetailsData[certKey] || certDetailsData['iso-9001'];
    const docSrc = info ? info.doc : 'images/certifications/iso_9001.webp';
    openModal(`
      <div style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; padding: 0.5rem 0;">
        <img src="${docSrc}" alt="Official Certificate Document" style="max-width: 100%; max-height: 82vh; width: auto; height: auto; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); object-fit: contain; display: block; margin: 0 auto;">
      </div>
    `);
  };

  function initCertificates() {
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach(card => {
      card.addEventListener('click', function () {
        const certKey = this.getAttribute('data-cert-key');
        if (certKey && window.openCertModal) {
          window.openCertModal(certKey);
        } else {
          const src = this.getAttribute('data-cert-src');
          if (src) window.open(src, '_blank');
        }
      });
    });
  }

  /* ============================================================
     4. FAQ ACCORDION & CATEGORY FILTERING
  ============================================================ */
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    const categoryBtns = document.querySelectorAll('.faq-cat-btn');

    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const header = item.querySelector('.faq-header');
      if (!header) return;

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => {
          i.classList.remove('active');
          const btn = i.querySelector('.faq-header');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });

    if (categoryBtns.length) {
      categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedCat = btn.getAttribute('data-category');
          categoryBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          faqItems.forEach(item => {
            const itemCat = item.getAttribute('data-category');
            item.classList.remove('active');
            const header = item.querySelector('.faq-header');
            if (header) header.setAttribute('aria-expanded', 'false');

            if (selectedCat === 'all' || itemCat === selectedCat) {
              item.classList.remove('hidden');
            } else {
              item.classList.add('hidden');
            }
          });
        });
      });
    }
  }

  /* ============================================================
     5. SCROLL EFFECTS, STICKY HEADER & MOBILE DROPDOWN
  ============================================================ */
  function initScrollEffects() {
    const header = document.getElementById('header');
    const scrollProgress = document.getElementById('scroll-progress');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollProgress) scrollProgress.style.width = scrollPercent + '%';

      if (header) {
        if (scrollTop > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('active');
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
        document.body.style.overflow = isOpen ? '' : 'hidden';
      });

      const navLinks = navMenu.querySelectorAll('a');
      navLinks.forEach(l => {
        l.addEventListener('click', () => {
          if (l.parentElement.classList.contains('dropdown') && l.nextElementSibling && l.nextElementSibling.classList.contains('dropdown-menu')) {
            return;
          }
          navMenu.classList.remove('active');
          hamburger.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    dropdownItems.forEach(dp => {
      const link = dp.querySelector('.nav-link');
      if (link) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            dp.classList.toggle('mobile-open');
          }
        });
      }
    });
  }

  /* ============================================================
     6. CONTACT FORM SUBMISSION HANDLER
  ============================================================ */
  function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    if (!contactForm) return;

    const apiKey = window.companyData ? window.companyData.web3formsKey : '4d0c3c98-6bd6-4751-88f0-353b9ad95f9c';

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const origText = submitBtn ? submitBtn.textContent : 'Submit Business Inquiry →';
      if (submitBtn) {
        submitBtn.textContent = 'Sending Email Inquiry...';
        submitBtn.disabled = true;
      }

      const formData = new FormData(contactForm);
      const formJson = Object.fromEntries(formData.entries());

      if (formJson.botcheck) {
        console.warn('Honeypot anti-spam triggered. Aborting homepage submission.');
        return;
      }

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `New Homepage B2B Inquiry: ${formJson.product || 'General'}`,
          from_name: 'IMM Food Innovators Website',
          ...formJson
        })
      })
        .then(res => res.json())
        .then(() => {
          if (submitBtn) {
            submitBtn.textContent = origText;
            submitBtn.disabled = false;
          }
          if (successMessage) {
            successMessage.innerHTML = `✓ Thank you! Your inquiry has been sent to info@immfoodinnovators.in.<br><a href="https://wa.me/919114403000?text=Hi%20IMM%20Food%20Innovators%2C%20I%20just%20submitted%20a%20website%20inquiry%20for%20${encodeURIComponent(formJson.product || 'products')}" target="_blank" style="display:inline-block; margin-top: 10px; background:#25D366; color:#fff; padding:8px 16px; border-radius:50px; text-decoration:none; font-weight:700;">💬 Send Instant WhatsApp Copy to Sales (+91 9114403000)</a>`;
            successMessage.style.display = 'block';
          }
          contactForm.reset();
        })
        .catch(() => {
          if (submitBtn) {
            submitBtn.textContent = origText;
            submitBtn.disabled = false;
          }
          if (successMessage) {
            successMessage.innerHTML = `✓ Inquiry Recorded! We will contact you at ${formJson.email || 'your email'}.`;
            successMessage.style.display = 'block';
          }
        });
    });
  }

  function initContactPageQuerySubject() {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject');
    if (!subjectParam) return;

    const inquirySelect = document.getElementById('contact_inquiry_type');
    const messageArea = document.getElementById('contact_message');

    if (subjectParam === 'PrivateLabel') {
      if (inquirySelect) inquirySelect.value = 'Private Label';
      if (messageArea && !messageArea.value) {
        messageArea.value = 'Inquiry: Private Label Packaging (100g to 1kg pouches/canisters). Please send wholesale pricing, custom pouch printing options, and minimum order quantities (MOQ).';
      }
    } else if (subjectParam === 'ExportQuote' || subjectParam === 'BulkExportQuote') {
      if (inquirySelect) inquirySelect.value = 'Export Inquiry';
      if (messageArea && !messageArea.value) {
        messageArea.value = 'Inquiry: Bulk Export Packaging (25kg/50kg HDPE bags) & Gulf Container Sea Shipping via JNPT Nhava Sheva (Mumbai). Please send specification sheets and ocean freight quotes.';
      }
    } else if (subjectParam === 'ContractMfg') {
      if (inquirySelect) inquirySelect.value = 'Contract Mfg';
      if (messageArea && !messageArea.value) {
        messageArea.value = 'Inquiry: Third-Party Contract Manufacturing & Custom Mesh Size Milling (60-120 mesh) at Jalgaon plant up to 1,000 kg/shift.';
      }
    }
  }

  /* ============================================================
     7. INITIALIZATION
  ============================================================ */
  window.addEventListener('DOMContentLoaded', () => {
    syncCompanyData();
    initHeroSlider();
    initCertificates();
    initFAQ();
    initContactForm();
    initContactPageQuerySubject();
    initScrollEffects();

    console.log('IMM Food Innovators v4.0 main.js loaded ✅');
  });

})();
