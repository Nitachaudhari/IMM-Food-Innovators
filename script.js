/*!
 * IMM Food Innovators — script.js
 * Merged: Real product data + Premium UX effects
 * Features: Custom cursor, scroll animations, product slider,
 * filter system, smooth nav, scroll progress, counter, form handling
 */

(function () {
  'use strict';

  /* ============================================================
     1b. BLOG DATA
  ============================================================ */
  const blogsData = [
    {
      id: "banana-powder-benefits",
      title: "The Rising Demand for Dehydrated Banana Powder: Health Benefits & B2B Applications",
      category: "Superfoods",
      date: "July 20, 2026",
      readTime: "5 min read",
      image: "images/banana.jpg",
      excerpt: "Dehydrated banana powder is rapidly gaining traction in B2B markets. Explore why this nutrient-dense superfood is becoming a vital ingredient for baby foods, gluten-free baking, and wellness blends.",
      content: `
        <p>Dehydrated banana powder is rapidly transitioning from a niche ingredient to a global B2B powerhouse. Produced from ripe or unripe Cavendish bananas using advanced low-temperature dehydration technology, it retains the essential vitamins, minerals, and prebiotic fibers of the fresh fruit while offering a stable shelf life and versatility for food formulation.</p>
        
        <h3>Key Health Benefits & Nutrients</h3>
        <p>Dehydrated banana powder is a nutrient-dense powerhouse. It is exceptionally rich in:</p>
        <ul>
          <li><strong>Potassium & Magnesium:</strong> Critical for cardiovascular wellness, muscle contraction, and maintaining healthy electrolyte levels.</li>
          <li><strong>Resistant Starch (Prebiotic Fiber):</strong> Particularly high in green banana powder, it supports digestive health and gut microbiomes by feeding beneficial bacteria.</li>
          <li><strong>Vitamins A, C, and B6:</strong> Natural immune system boosters that support metabolism and energy production.</li>
        </ul>

        <h3>Crucial B2B Applications</h3>
        <p>Food brands, FMCG companies, and D2C startups are actively incorporating banana powder into diverse product categories:</p>
        <ol>
          <li><strong>Infant Nutrition & Baby Foods:</strong> Naturally sweet, easy to digest, and 100% clean-label with zero additives, making it highly safe for weaning foods.</li>
          <li><strong>Gluten-Free Baking & Confectionery:</strong> Serves as a nutrient-dense starch substitute that improves moisture retention and crumb structure in gluten-free breads, cakes, and waffles.</li>
          <li><strong>Wellness & Protein Blends:</strong> Ideal for health shakes and nutraceutical formulations due to its natural sweetness, solubility, and potassium levels.</li>
        </ol>

        <h3>Why Source from IMM Food Innovators?</h3>
        <p>Based in Yawal, Jalgaon (Maharashtra)—the banana capital of India—we process select farm-fresh local bananas inside our ISO 9001:2015 and FSSAI certified facility. Our low-temperature processing technology preserves the color, flavor, and natural sweetness without any artificial preservatives, sweeteners, or fillers, delivering premium quality for bulk domestic use and export.</p>
      `
    },
    {
      id: "private-label-food-startup",
      title: "How Private Label Food Manufacturing Accelerates Startup Growth",
      category: "Business Strategy",
      date: "July 15, 2026",
      readTime: "6 min read",
      image: "images/company.jpg",
      excerpt: "Launching a food brand requires significant capital. Learn how third-party contract manufacturing allows brands to scale efficiently, reduce costs, and accelerate product launches.",
      content: `
        <p>The food industry is experiencing a massive shift toward D2C brands, organic superfoods, and clean-label snacks. However, setting up a processing facility involves massive capital expenditures, regulatory delays, and operational bottlenecks. This is where private label and third-party contract manufacturing comes in as a game-changer for startups and growing FMCG companies.</p>
        
        <h3>1. Minimal Capital Expenditure (CapEx)</h3>
        <p>By partnering with a contract manufacturer, brands avoid spending millions on machinery, land, building permits, and specialized processing plants. Instead, startups can focus their financial resources on branding, marketing, product positioning, and scaling sales channels.</p>

        <h3>2. Faster Speed to Market</h3>
        <p>Setting up a new factory and getting food-safety certifications (FSSAI, ISO, GMP) can take anywhere from 12 to 24 months. A certified contract manufacturer provides an immediate, ready-to-use production infrastructure. Brands can go from concept approval and pilot batches to full-scale commercial dispatch in a matter of weeks.</p>

        <h3>3. Recipe Standardization & Technical Expertise</h3>
        <p>A professional manufacturing partner provides in-house recipe standardization and quality control laboratories. This ensures that every production run maintains the exact same taste, texture, color, and nutritional profile, keeping customers loyal and brand reputation strong.</p>

        <h3>4. Scalable Capacity</h3>
        <p>As consumer demand increases, contract manufacturers have the scaling capacity (up to 1,000 kg per shift) to increase production volumes seamlessly. Startups don't need to worry about buying more machinery or expanding warehouses; their partner handles the logistics and scaling behind the scenes.</p>
      `
    },
    {
      id: "dehydration-technology-drying",
      title: "Low-Temperature Dehydration vs. Traditional Drying: Why Quality Matters",
      category: "Food Tech",
      date: "July 10, 2026",
      readTime: "5 min read",
      image: "images/carrot.jpg",
      excerpt: "Traditional solar or high-heat oven drying often damages the flavor, color, and nutritional values of food ingredients. Discover how modern low-temperature dehydration preserves quality.",
      content: `
        <p>Drying is one of the oldest methods of food preservation. However, the technology used to dehydrate raw materials plays a critical role in determining the final product's quality, color, aroma, and nutrient density. Modern food processing demands advanced low-temperature dehydration over traditional drying methods.</p>
        
        <h3>The Pitfalls of Traditional Drying</h3>
        <p>Traditional solar drying (drying under the sun) and high-heat tunnel oven drying are cost-effective but suffer from major drawbacks:</p>
        <ul>
          <li><strong>Nutrient Degradation:</strong> Essential heat-sensitive vitamins (like Vitamin C and B-complex) and enzymes break down quickly under direct sunlight or high temperatures.</li>
          <li><strong>Loss of Color and Flavor:</strong> High heat triggers oxidation and caramelization, altering natural colors (browning) and degrading volatile essential oils responsible for natural aroma and flavor.</li>
          <li><strong>Contamination Risks:</strong> Solar drying exposes raw materials to dust, insects, bird droppings, and ambient humidity fluctuations, leading to high microbial load.</li>
        </ul>

        <h3>The Advantage of Low-Temperature Dehydration</h3>
        <p>Modern low-temperature dehydration uses closed-loop moisture extraction technology. By drying ingredients under controlled temperature and humidity profiles, it delivers premium, export-grade quality:</p>
        <ul>
          <li><strong>Antioxidant & Vitamin Preservation:</strong> Lower heat limits thermal damage, preserving bioactive compounds (like chlorophyll in moringa and vitamins in fruits).</li>
          <li><strong>Excellent Rehydration:</strong> Low-temperature drying preserves cell structures, allowing dehydrated flakes, cubes, or powders to dissolve or rehydrate instantly back to their original texture and taste.</li>
          <li><strong>Zero Additives:</strong> Since moisture is extracted in a clean, hermetic environment, food ingredients achieve high shelf-stability without requiring artificial preservatives or sulfur dioxide treatments.</li>
        </ul>

        <h3>Equipped for Quality: Suntech Dehydration Plant</h3>
        <p>At IMM Food Innovators, we utilize state-of-the-art Suntech dehydration technology inside our food-grade processing facility in Jalgaon, Maharashtra. By strictly controlling the temperature curve, we manufacture premium dehydrated fruit powders, vegetable flakes, and wellness herbs that retain maximum nutrients, vibrant natural color, and raw authentic taste.</p>
      `
    }
  ];

  /* ============================================================
     1. PRODUCT DATA (complete — all 51 products)
  ============================================================ */
  const productsData = [
    { name: "Banana Powder", category: "powder", image: "images/powders/Banana.png", description: "Premium dehydrated banana powder manufactured in Jalgaon, India. Pure, naturally sweet, and rich in nutrients; ideal for baby foods, organic smoothies, and gluten-free baking." },
    { name: "All Seed Powder", category: "powder", image: "images/powders/AllSeeds.png", description: "Rich in essential nutrients, used in smoothies and health mixes for energy and digestion." },
    { name: "Amla Powder", category: "herbal", image: "images/powders/Amla.png", description: "Loaded with vitamin C and antioxidants for health drinks and herbal formulations." },
    { name: "Bael Powder", category: "herbal", image: "images/powders/Bael.png", description: "Rich in fibre and antioxidants, supports digestion and immunity." },
    { name: "Beetroot Powder", category: "powder", image: "images/powders/Beetroot.png", description: "Vibrant and nutrient-rich for natural coloring and energy blends." },
    { name: "Carrot Powder", category: "powder", image: "images/powders/Carrot.png", description: "High in beta-carotene, adds nutrition and color to foods." },
    { name: "Carrot Cubes", category: "flakes", image: "images/powders/CarrotCubes.png", description: "Dehydrated carrot cubes for instant meals and soups." },
    { name: "Chaha (Tea Leaf) Powder", category: "powder", image: "images/powders/LemonGrass.png", description: "Rich in antioxidants for instant tea formulations." },
    { name: "Coriander Powder", category: "spices", image: "images/powders/Coriander.png", description: "Warm, citrusy flavor for spice blends and culinary use." },
    { name: "Coriander Leaf Powder", category: "spices", image: "images/powders/Kothimbir.png", description: "Green coriander powder for added flavor and color." },
    { name: "Curry Leaves Powder", category: "spices", image: "images/powders/CurryLeaves.png", description: "Rich in iron and antioxidants for chutneys and curries." },
    { name: "Dates Powder", category: "powder", image: "images/powders/Dates.png", description: "Naturally sweet alternative to refined sugar." },
    { name: "Dry Dates Powder", category: "herbal", image: "images/powders/DryDates.png", description: "Rich in iron and fibre for energy and wellness." },
    { name: "Date Seed Powder", category: "herbal", image: "images/powders/DatesSeed.png", description: "Roasted date seed powder for digestion and metabolism." },
    { name: "Dry Fruit Powder", category: "powder", image: "images/powders/DryFruits.png", description: "Nutritious blend for baby foods and energy beverages." },
    { name: "Dry Garlic", category: "flakes", image: "images/powders/DryGarlic.png", description: "Flavorful dried garlic for seasonings and snacks." },
    { name: "Garlic Powder", category: "spices", image: "images/powders/Garlic.png", description: "Export-grade dehydrated garlic powder supplier. Delivers intense natural garlic flavor and aroma for food processing, B2B spice blending, and seasoning manufacturers." },
    { name: "Garlic Cubes", category: "flakes", image: "images/powders/GarlicCubes.png", description: "Dried garlic cubes for instant cooking." },
    { name: "Ginger Powder", category: "spices", image: "images/powders/Ginger.png", description: "Aromatic powder for digestion and immunity." },
    { name: "Gokharu Powder", category: "herbal", image: "images/powders/Gokharu.png", description: "Traditional herbal powder for kidney health and stamina." },
    { name: "Green Chillies Powder", category: "spices", image: "images/powders/GreenChillies.png", description: "Vibrant and spicy for curries and snacks." },
    { name: "Green Chillies Flakes", category: "flakes", image: "images/powders/GreenChilliesFlakes.png", description: "Crunchy flakes for pizzas and spice blends." },
    { name: "Harda Powder", category: "herbal", image: "images/powders/Harda.png", description: "Ayurvedic powder for digestion and detoxification." },
    { name: "Okra Powder", category: "powder", image: "images/powders/LadiesFinger.png", description: "Nutrient-rich okra powder for soups and health mixes." },
    { name: "Okra Flakes", category: "flakes", image: "images/powders/LadiesFingerFlakes.png", description: "Crisp okra flakes for instant meals." },
    { name: "Mint Leaves Powder", category: "herbal", image: "images/powders/Pudina.png", description: "Refreshing mint for teas and beverages." },
    { name: "Moringa Leaves Powder", category: "herbal", image: "images/powders/Moringa.png", description: "Premium dehydrated moringa leaves powder manufacturer in Jalgaon. Sourced from local farm-fresh moringa leaves, processed to preserve 100% of bioactive proteins and antioxidants." },
    { name: "Muskmelon Powder", category: "powder", image: "images/powders/Muskmelon.png", description: "Rich in vitamins for beverages and health mixes." },
    { name: "Neem Powder", category: "herbal", image: "images/powders/Neem.png", description: "Medicinal powder for herbal and wellness applications." },
    { name: "Onion Flakes", category: "flakes", image: "images/powders/OnionFlakes.png", description: "Premium dehydrated onion flakes supplier in Maharashtra. Made from select white/red onions, processed for maximum flavor retention in instant soups and pre-packed foods." },
    { name: "Red Chillies Powder", category: "spices", image: "images/powders/RedChillie.png", description: "Fiery spice for curries and seasoning." },
    { name: "Red Onion Powder", category: "spices", image: "images/powders/RedOnion.png", description: "Consistent onion taste for spice blends." },
    { name: "White Onion Powder", category: "spices", image: "images/powders/WhiteOnion.png", description: "Milder onion flavor for soups and sauces." },
    { name: "Spring Onion Powder", category: "spices", image: "images/powders/SpringOnion.png", description: "Mild onion flavor for noodles and soups." },
    { name: "Spring Onion Flakes", category: "flakes", image: "images/powders/SpringOnionFlakes.png", description: "Dried spring onion pieces for instant foods." },
    { name: "Safed Musali Powder", category: "herbal", image: "images/powders/SafedMusali.png", description: "Premium herbal powder for strength and vitality." },
    { name: "Stevia Powder", category: "herbal", image: "images/powders/Stivia.png", description: "Natural zero-calorie sweetener." },
    { name: "Tomato Powder", category: "powder", image: "images/powders/Tomato.png", description: "Natural dehydrated tomato powder manufacturer. Tangy and colorful ingredient perfect for instant soup formulations, sauces, snack seasonings, and bakery uses." },
    { name: "Tulasi Powder", category: "herbal", image: "images/powders/Tulasi.png", description: "Fragrant herbal powder for immunity and wellness." },
    { name: "Tamarind Powder", category: "powder", image: "images/powders/Tumrind.png", description: "Tangy-sweet flavor for chutneys and sauces." },
    { name: "Tamarind Seed Powder", category: "powder", image: "images/powders/Tumrind.png", description: "Ground tamarind seeds for natural thickening." },
    { name: "Triphala Powder", category: "herbal", image: "images/powders/Triphala.png", description: "Traditional Ayurvedic blend for digestion and detox." },
    { name: "Bhumi Amla Powder", category: "herbal", image: "images/powders/BhumiAmla.png", description: "Ayurvedic liver-supporting herb for detoxification." },
    { name: "Yashtimadhu Powder", category: "herbal", image: "images/powders/Yashtimadhu.png", description: "Soothing herbal powder for throat and digestion." },
    { name: "Guduchi Powder", category: "herbal", image: "images/powders/Guduchi.png", description: "Rejuvenating Ayurvedic herb that boosts immunity." },
    { name: "Rasgulla Chilli Powder", category: "spices", image: "images/powders/RasgullaChilli.png", description: "Traditional mildly pungent chilli powder with rich color." },
    { name: "Spicy Red Chilli Powder", category: "spices", image: "images/powders/SpicyRedChilli.png", description: "Hot and bold red chilli powder for fiery dishes." },
    { name: "Normal Red Chilli Powder", category: "spices", image: "images/powders/NormalRedChilli.png", description: "Everyday red chilli powder with balanced heat." },
    { name: "Chapata Chilli Powder", category: "spices", image: "images/powders/ChapataChilli.png", description: "Mildly spicy chilli powder for chapata recipes." },
    { name: "Yellow Chilli Powder", category: "spices", image: "images/powders/YellowChilli.png", description: "Light and flavorful chilli powder with bright color." },
    { name: "Green Chilli Powder", category: "spices", image: "images/powders/GreenChilli.png", description: "Fresh and sharp green chilli powder with aroma." },
    { name: "Garam Masala", category: "spices", image: "images/powders/GaramMasala.png", description: "Aromatic spice blend for warmth and rich flavor." }
  ];

  /* ============================================================
     2. UTILITIES
  ============================================================ */
  const isMobile = () => window.innerWidth <= 768;

  function getCardsPerView() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getCategoryLabel(cat) {
    const map = { powder: 'Powder', herbal: 'Herbal', spices: 'Spices', flakes: 'Flakes & Cubes' };
    return map[cat] || cat;
  }

  /* ============================================================
     3. CUSTOM CURSOR — Spice Leaf SVG (desktop only)
  ============================================================ */
  let cursorLeaf, cursorRing, mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  if (!isMobile()) {
    cursorLeaf = document.createElement('div');
    cursorLeaf.className = 'cursor-leaf';
    cursorLeaf.innerHTML = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2 C16 2 28 8 28 18 C28 25 22 30 16 30 C10 30 4 25 4 18 C4 8 16 2 16 2Z" fill="#C4511A" opacity="0.92"/>
      <path d="M16 4 C16 4 26 9.5 26 18 C26 24 21 28.5 16 28.5" fill="#E8713A" opacity="0.45"/>
      <line x1="16" y1="30" x2="16" y2="6"  stroke="rgba(255,255,255,0.35)" stroke-width="0.8"/>
      <line x1="16" y1="14" x2="22" y2="10" stroke="rgba(255,255,255,0.25)" stroke-width="0.7"/>
      <line x1="16" y1="19" x2="23" y2="16" stroke="rgba(255,255,255,0.25)" stroke-width="0.7"/>
      <line x1="16" y1="24" x2="21" y2="22" stroke="rgba(255,255,255,0.25)" stroke-width="0.7"/>
      <line x1="16" y1="14" x2="10" y2="10" stroke="rgba(255,255,255,0.25)" stroke-width="0.7"/>
      <line x1="16" y1="19" x2="9"  y2="16" stroke="rgba(255,255,255,0.25)" stroke-width="0.7"/>
    </svg>`;

    cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    document.body.append(cursorLeaf, cursorRing);

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursorLeaf.style.left = mouseX + 'px';
      cursorLeaf.style.top = mouseY + 'px';
    });

    (function animateRing() {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    })();

    function addHover(selector) {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', () => {
          if (cursorRing) cursorRing.classList.add('expand');
          if (cursorLeaf) cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-10deg) scale(1.25)';
        });
        el.addEventListener('mouseleave', () => {
          if (cursorRing) cursorRing.classList.remove('expand');
          if (cursorLeaf) cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-35deg) scale(1)';
        });
      });
    }
    addHover('a, button, .filter-btn, .slider-btn, .feature-item, .cert-item, .faq-header, .mfg-badge-pill, .mfg-timeline-badge, .blog-card-action, .blog-modal-close');
  }

  /* ============================================================
     4. SCROLL PROGRESS BAR
  ============================================================ */
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  document.body.prepend(progressBar);

  // Upgrade logo HTML to new design
  const logoEl = document.querySelector('.logo');
  if (logoEl) {
    const existingImg = logoEl.querySelector('.logo-img');
    const imgSrc = existingImg ? existingImg.src : 'images/IMMLogo.png';
    logoEl.innerHTML = `
      <img src="${imgSrc}" alt="IMM Logo" class="logo-img">
      <div class="logo-text-wrap">
        <span class="logo-text">IMM Food Innovators</span>
        <span class="logo-sub">Since 2025 · Nhavi, Pra.Yawal, Jalgaon</span>
      </div>`;
  }

  // WhatsApp floating button
  const fab = document.createElement('a');
  const waMsg = encodeURIComponent(
    `🌶️ Hello IMM Food Innovators!

I visited your website and I'm interested in your products.

📋 My Enquiry:
• Product(s) of Interest: 
• Required Quantity: 
• Purpose (Retail / Wholesale / Export): 

Please share pricing and availability details.

Thank you! 🙏`
  );
  fab.href = `https://wa.me/919170625050?text=${waMsg}`;
  fab.target = '_blank';
  fab.rel = 'noopener noreferrer';
  fab.className = 'whatsapp-fab';
  fab.setAttribute('aria-label', 'Chat on WhatsApp');
  fab.innerHTML = `
    <span class="whatsapp-fab-icon">
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.493.648 4.833 1.78 6.866L2 30l7.35-1.745A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#fff"/>
        <path d="M22.5 19.5c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.95 1.2-.15.2-.35.2-.65.05-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3 0-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.8-.74 2.05-1.45.25-.71.25-1.32.18-1.45-.07-.13-.27-.2-.57-.35z" fill="#25D366"/>
      </svg>
    </span>
    <span class="whatsapp-fab-label">Chat with us</span>`;
  document.body.appendChild(fab);

  /* ============================================================
     5. STICKY HEADER + ACTIVE NAV ON SCROLL
  ============================================================ */
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    const scrollY = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    if (docH > 0) progressBar.style.width = (scrollY / docH * 100) + '%';
    if (header) header.classList.toggle('scrolled', scrollY > 50);

    let current = '';
    sections.forEach(sec => {
      if (sec.offsetHeight > 0 && scrollY >= sec.offsetTop - 110) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ============================================================
     6. MOBILE HAMBURGER MENU
  ============================================================ */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger && hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    hamburger.classList.toggle('active');
    navMenu && navMenu.classList.toggle('open');
    navMenu && navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger && hamburger.classList.remove('open', 'active');
      navMenu && navMenu.classList.remove('open', 'active');
    });
  });

  document.addEventListener('click', e => {
    if (!hamburger || !navMenu) return;
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove('open', 'active');
      navMenu.classList.remove('open', 'active');
    }
  });

  /* ============================================================
     7. HERO ENHANCEMENTS — pills, stats, float card, ticker
  ============================================================ */
  const hero = document.querySelector('.hero');
  if (hero) {
    // Ensure hero has the two-panel structure
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && !hero.querySelector('.hero-left')) {
      // Wrap existing content in hero-left
      const left = document.createElement('div');
      left.className = 'hero-left';

      // Pills row
      const pills = document.createElement('div');
      pills.className = 'hero-pills';
      pills.innerHTML = `
        <span class="hero-pill live">ISO Certified</span>
        <span class="hero-pill">FSSAI Approved</span>
        <span class="hero-pill">GMP Certified</span>`;
      left.appendChild(pills);

      // Move existing content into left
      while (heroContent.firstChild) left.appendChild(heroContent.firstChild);
      heroContent.className = ''; // strip old class

      // Upgrade h1 inside left panel for visibility
      const h1 = left.querySelector('h1');
      if (h1) {
        h1.style.cssText = '';
        const orig = h1.textContent.trim();
        h1.innerHTML = orig
          .replace('Premium', '<em>Premium</em>')
          .replace('Spices', '<em>Spices</em>')
          .replace('Dehydrated', '<em>Dehydrated</em>') || h1.innerHTML;
      }

      // Ensure paragraph/subtitle is visible
      const p = left.querySelector('p');
      if (p) p.className = 'hero-sub';

      hero.innerHTML = '';
      hero.appendChild(left);

      // Right panel (image from about section fallback)
      const right = document.createElement('div');
      right.className = 'hero-right';
      right.innerHTML = `<img src="images/company.jpg" alt="IMM Food Innovators Factory">
        <div class="hero-float-card">
          <div class="hero-float-icon">🏭</div>
          <div class="hero-float-text">
            <strong>Own Factory</strong>
            <span>Nhavi Pra.Yawal, Jalgaon, MH</span>
          </div>
        </div>`;
      hero.appendChild(right);

      // Ticker
      const ticker = document.createElement('div');
      ticker.className = 'hero-ticker';
      const items = ['Chilli Powder', 'Herbal Powders', 'Dehydrated Flakes', 'Ayurvedic Products',
        'Spice Blends', 'Moringa Powder', 'Onion Flakes', 'Garam Masala', 'Tomato Powder'];
      const track = items.concat(items).map(t => `<span>${t}</span>`).join('');
      ticker.innerHTML = `<div class="hero-ticker-track">${track}</div>`;
      hero.appendChild(ticker);
    }

    // Stats strip — append into hero-left
    const leftPanel = hero.querySelector('.hero-left');
    if (leftPanel) {
      leftPanel.insertAdjacentHTML('beforeend', `
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-num" data-count="2">0</span>
            <span class="hero-stat-label">Years Experience</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-num" data-count="51" data-suffix="+">0</span>
            <span class="hero-stat-label">Products</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-num" data-count="500" data-suffix="+">0</span>
            <span class="hero-stat-label">Clients Served</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-num" data-count="4">0</span>
            <span class="hero-stat-label">Certifications</span>
          </div>
        </div>`);
    }

    // Parallax watermark
    const wm = document.createElement('div');
    wm.className = 'hero-watermark';
    wm.textContent = 'Spices';
    wm.style.cssText = 'position:absolute;bottom:-2rem;right:-1rem;font-family:"Cormorant Garamond",serif;font-size:clamp(6rem,15vw,14rem);font-weight:700;font-style:italic;color:#fff;opacity:0.02;white-space:nowrap;pointer-events:none;user-select:none;line-height:1;z-index:1;';
    hero.appendChild(wm);

    window.addEventListener('scroll', () => {
      wm.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    }, { passive: true });
  }

  /* ============================================================
     8. ABOUT IMAGE BADGE
  ============================================================ */
  const aboutImage = document.querySelector('.about-image');
  if (aboutImage) {
    aboutImage.insertAdjacentHTML('beforeend', `
      <div class="img-badge">
        <span class="img-badge-icon">🏭</span>
        <div class="img-badge-text">
          <strong>Own Factory</strong>
          <span>Nhavi, Pra.Yawal, Jalgaon</span>
        </div>
      </div>`);
  }

  /* ============================================================
     9. SCROLL REVEAL
  ============================================================ */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  function attachReveal() {
    ['.section-header', '.about-image', '.about-content',
      '.feature-item', '.cert-item', '.contact-form-container',
      '.certifications-container', '.footer-section'].forEach(sel => {
        document.querySelectorAll(sel).forEach((el, i) => {
          if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
            if (i > 0) el.classList.add('reveal-delay-' + Math.min(i, 4));
          }
          revealObserver.observe(el);
        });
      });
  }

  /* ============================================================
     10. COUNTER ANIMATION
  ============================================================ */
  function animateCount(el, target, suffix) {
    const dur = 1800, t0 = performance.now();
    (function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target) + (suffix || '');
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCount(el, +el.dataset.count, el.dataset.suffix || '');
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  function attachCounters() {
    document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
  }

  /* ============================================================
     11. PRODUCT SLIDER
  ============================================================ */
  let currentIndex = 0;
  let filteredProducts = [...productsData];
  let autoplayTimer = null;
  let touchStartX = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragDelta = 0;

  const slider = document.getElementById('productsSlider');
  const dotsWrap = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function renderProducts() {
    if (!slider) return;
    slider.innerHTML = filteredProducts.map((p, i) => `
      <div class="product-card" style="animation-delay:${(i % getCardsPerView()) * 0.08}s">
        <div class="product-img-wrap">
          <img
            src="${p.image}"
            alt="${p.name}"
            class="product-image"
            loading="lazy"
            onerror="this.onerror=null;this.src='images/powders/placeholder.png'"
          />
          <span class="product-tag-badge">${getCategoryLabel(p.category)}</span>
        </div>
        <div class="product-body product-info">
          <h3 class="product-title">${p.name}</h3>
          <p class="product-description">${p.description}</p>
          <span class="product-action">View Details →</span>
        </div>
      </div>`).join('');

    updateSlider();
    renderDots();

    // Cursor hover on new cards
    if (!isMobile() && cursorRing) {
      slider.querySelectorAll('.product-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorRing.classList.add('expand');
          if (cursorLeaf) cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-10deg) scale(1.25)';
        });
        el.addEventListener('mouseleave', () => {
          cursorRing.classList.remove('expand');
          if (cursorLeaf) cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-35deg) scale(1)';
        });
      });
    }

    // Click anywhere on product card -> open details modal
    slider.querySelectorAll('.product-card').forEach((card, idx) => {
      card.addEventListener('click', () => {
        const product = filteredProducts[idx];
        if (product) {
          openProductModal(product);
        }
      });
    });
  }

  function updateSlider() {
    if (!slider) return;
    const firstCard = slider.querySelector('.product-card');
    if (!firstCard) return;

    const cpv = getCardsPerView();
    const gap = 32; // must match CSS gap
    const cardW = firstCard.offsetWidth + gap;
    const maxIdx = Math.max(0, Math.ceil(filteredProducts.length / cpv) - 1);

    currentIndex = Math.max(0, Math.min(currentIndex, maxIdx));
    slider.style.transform = `translateX(-${currentIndex * cardW * cpv}px)`;

    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex >= maxIdx;
  }

  function renderDots() {
    if (!dotsWrap) return;
    const cpv = getCardsPerView();
    const total = Math.ceil(filteredProducts.length / cpv);
    dotsWrap.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const d = document.createElement('button');
      d.className = 'slider-dot dot' + (i === currentIndex ? ' active' : '');
      d.setAttribute('aria-label', 'Page ' + (i + 1));
      d.addEventListener('click', () => { goTo(i); resetAutoplay(); });
      dotsWrap.appendChild(d);
    }
  }

  function goTo(index) {
    const cpv = getCardsPerView();
    const maxIdx = Math.max(0, Math.ceil(filteredProducts.length / cpv) - 1);
    currentIndex = Math.max(0, Math.min(index, maxIdx));
    updateSlider();
    renderDots();
  }

  prevBtn && prevBtn.addEventListener('click', () => { goTo(currentIndex - 1); resetAutoplay(); });
  nextBtn && nextBtn.addEventListener('click', () => { goTo(currentIndex + 1); resetAutoplay(); });

  // Keyboard
  document.addEventListener('keydown', e => {
    const sec = document.getElementById('services');
    if (!sec) return;
    const r = sec.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      if (e.key === 'ArrowLeft') { goTo(currentIndex - 1); resetAutoplay(); }
      if (e.key === 'ArrowRight') { goTo(currentIndex + 1); resetAutoplay(); }
    }
  });

  // Mouse drag
  slider && slider.addEventListener('mousedown', e => {
    isDragging = true; dragStartX = e.clientX; dragDelta = 0;
    slider.style.cursor = 'grabbing';
  });
  window.addEventListener('mousemove', e => { if (isDragging) dragDelta = e.clientX - dragStartX; });
  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false; slider.style.cursor = '';
    if (dragDelta < -60) goTo(currentIndex + 1);
    else if (dragDelta > 60) goTo(currentIndex - 1);
    dragDelta = 0; resetAutoplay();
  });

  // Touch swipe
  slider && slider.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  slider && slider.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx < -50) goTo(currentIndex + 1);
    else if (dx > 50) goTo(currentIndex - 1);
    resetAutoplay();
  });

  // Autoplay
  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      const cpv = getCardsPerView();
      const maxIdx = Math.max(0, Math.ceil(filteredProducts.length / cpv) - 1);
      goTo(currentIndex >= maxIdx ? 0 : currentIndex + 1);
    }, 4500);
  }
  function resetAutoplay() { clearInterval(autoplayTimer); startAutoplay(); }

  /* ============================================================
     12. FILTER SYSTEM
  ============================================================ */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const cat = this.dataset.category;
      filteredProducts = cat === 'all'
        ? [...productsData]
        : productsData.filter(p => p.category === cat);

      currentIndex = 0;
      if (slider) {
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
      }
      renderProducts();
      requestAnimationFrame(() => { if (slider) slider.style.transition = ''; });
      resetAutoplay();
    });
  });

  /* ============================================================
     13. CONTACT SECTION — rebuild + enquiry modal
  ============================================================ */

  // Build the new contact section content
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    // Hide old HTML content that may exist
    const oldGrid = contactSection.querySelector('.contact-grid');
    if (oldGrid) oldGrid.style.display = 'none';

    // Inject new layout after section-header
    const sectionHeader = contactSection.querySelector('.section-header');
    const newContent = document.createElement('div');
    newContent.className = 'contact-grid';
    newContent.innerHTML = `
      <!-- Contact info cards -->
      <div class="contact-info-cards">
        <div class="contact-card">
          <div class="contact-card-icon">📞</div>
          <h4>Phone & WhatsApp</h4>
          <p><a href="tel:+919170625050">+91 9170625050</a></p>
        </div>
        <div class="contact-card">
          <div class="contact-card-icon">✉️</div>
          <h4>Email</h4>
          <p><a href="mailto:	
                info@immfoodinnovators.in">	
                info@immfoodinnovators.in</a></p>
        </div>
        <div class="contact-card">
          <div class="contact-card-icon">📍</div>
          <h4>Factory Address</h4>
          <p>Nhavi Hambardi Road,<br>Tal Yawal, Dist. Jalgaon<br>Maharashtra – 425524</p>
        </div>
        <div class="contact-card">
          <div class="contact-card-icon">🕐</div>
          <h4>Working Hours</h4>
          <p>Mon – Sat<br>9:00 AM – 6:00 PM</p>
        </div>
      </div>

      <!-- Certifications row -->
      <div class="cert-row" id="certRow">
        <div class="cert-item" data-cert-src="images/certifications/iso.jpg" data-cert-name="ISO 9001:2015">
          <img src="images/certifications/iso.jpg" alt="ISO 9001:2015">
          <p>ISO 9001:2015</p>
          <div class="cert-item-overlay">
            <span>🔍</span>
            <p>View & Download</p>
          </div>
        </div>
        <div class="cert-item" data-cert-src="images/certifications/fassai.jpg" data-cert-name="FSSAI Certified">
          <img src="images/certifications/fassai.jpg" alt="FSSAI">
          <p>FSSAI Certified</p>
          <div class="cert-item-overlay">
            <span>🔍</span>
            <p>View & Download</p>
          </div>
        </div>
        <div class="cert-item" data-cert-src="images/certifications/GMP.jpg" data-cert-name="GMP Certified">
          <img src="images/certifications/GMP.jpg" alt="GMP">
          <p>GMP Certified</p>
          <div class="cert-item-overlay">
            <span>🔍</span>
            <p>View & Download</p>
          </div>
        </div>
        <div class="cert-item" data-cert-src="images/certifications/quality.jpg" data-cert-name="Quality Certified">
          <img src="images/certifications/quality.jpg" alt="Quality">
          <p>Quality Certified</p>
          <div class="cert-item-overlay">
            <span>🔍</span>
            <p>View & Download</p>
          </div>
        </div>
        <div class="cert-item" data-cert-src="images/certifications/udyam.jpg" data-cert-name="Udyam Certificate">
          <img src="images/certifications/udyam.jpg" alt="Udyam Certificate">
          <p>Udyam Certificate</p>
          <div class="cert-item-overlay">
            <span>🔍</span>
            <p>View & Download</p>
          </div>
        </div>
      </div>

      <!-- CTA buttons -->
      <div class="contact-cta-row">
        <button class="btn-enquire" id="openEnquiry">
          <span>✉</span> Send Enquiry
        </button>
        <a href="https://wa.me/919170625050?text=%F0%9F%8C%B6%EF%B8%8F%20Hello%20IMM%20Food%20Innovators!%0A%0AI%20visited%20your%20website%20and%20I%E2%80%99m%20interested%20in%20your%20products.%0A%0A%F0%9F%93%8B%20My%20Enquiry%3A%0A%E2%80%A2%20Product(s)%20of%20Interest%3A%20%0A%E2%80%A2%20Required%20Quantity%3A%20%0A%E2%80%A2%20Purpose%20(Retail%20%2F%20Wholesale%20%2F%20Export)%3A%20%0A%0APlease%20share%20pricing%20and%20availability%20details.%0A%0AThank%20you!%20%F0%9F%99%8F" target="_blank" class="btn-whatsapp">
          <span>💬</span> Chat on WhatsApp
        </a>
      </div>`;

    if (sectionHeader) {
      sectionHeader.insertAdjacentElement('afterend', newContent);
    } else {
      contactSection.appendChild(newContent);
    }
  }

  // Build modal drawer
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'enquiryOverlay';

  const drawer = document.createElement('div');
  drawer.className = 'modal-drawer';
  drawer.id = 'enquiryDrawer';
  drawer.innerHTML = `
    <div class="modal-header">
      <h3>Send Us an<br><span>Enquiry</span></h3>
      <button class="modal-close" id="closeEnquiry" aria-label="Close">✕</button>
    </div>
    <form id="contactForm" action="https://formspree.io/f/xldobygd" method="POST">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Rahul Patil" required>
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="you@email.com" required>
      </div>
      <div class="form-group">
        <label for="phone">Mobile Number</label>
        <input type="tel" id="phone" name="phone" placeholder="9XXXXXXXXX" pattern="[0-9]{10}" required>
      </div>
      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea id="message" name="message" placeholder="Tell us your requirement, quantity, or any questions..." required></textarea>
      </div>
      <button type="submit" class="submit-btn">Send Message</button>
      <div class="success-message" id="successMessage">✓ Thank you! We'll get back to you soon.</div>
    </form>`;

  overlay.appendChild(drawer);
  document.body.appendChild(overlay);

  // Open / close modal
  function openModal() {
    overlay.classList.add('open');
    setTimeout(() => drawer.classList.add('open'), 10);
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    drawer.classList.remove('open');
    setTimeout(() => { overlay.classList.remove('open'); document.body.style.overflow = ''; }, 380);
  }

  document.addEventListener('click', e => {
    if (e.target.id === 'openEnquiry') openModal();
    if (e.target.id === 'closeEnquiry') closeModal();
    if (e.target.id === 'enquiryOverlay') closeModal();
  });

  // Also open when product "Enquire Now" is clicked
  document.addEventListener('click', e => {
    if (e.target.closest && e.target.closest('.product-action')) openModal();
  });

  // Open modal and pre-fill message for Contract Manufacturing CTAs
  document.addEventListener('click', e => {
    const consultBtn = e.target.closest('.mfg-consult-btn');
    const quoteBtn = e.target.closest('.mfg-quote-btn');
    const expertBtn = e.target.closest('.mfg-expert-btn');

    if (consultBtn || quoteBtn || expertBtn) {
      let msg = '';
      if (consultBtn) {
        msg = "Hello IMM Food Innovators!\n\nI would like to get a free consultation regarding contract manufacturing for dehydrated food products.\n\nThank you.";
      } else if (quoteBtn) {
        msg = "Hello IMM Food Innovators!\n\nI would like to request a manufacturing quote for dehydrated food products.\n\nThank you.";
      } else if (expertBtn) {
        msg = "Hello IMM Food Innovators!\n\nI would like to talk to your manufacturing experts regarding my food project.\n\nThank you.";
      }
      
      const messageField = document.querySelector('#enquiryDrawer textarea');
      if (messageField) {
        messageField.value = msg;
      }
      openModal();
    }
  });

  // Escape key to close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Contact form submission
  document.addEventListener('submit', async e => {
    if (!e.target.id || e.target.id !== 'contactForm') return;
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('.submit-btn');
    const successMsg = document.getElementById('successMessage');
    const origText = btn.textContent;
    btn.textContent = 'Sending…'; btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        btn.textContent = 'Sent! ✓'; btn.style.background = '#3D5A3E';
        if (successMsg) successMsg.style.display = 'block';
        form.reset();
        setTimeout(() => {
          btn.textContent = origText; btn.disabled = false; btn.style.background = '';
          if (successMsg) successMsg.style.display = 'none';
          setTimeout(closeModal, 800);
        }, 3000);
      } else throw new Error();
    } catch {
      btn.textContent = 'Failed — Try Again'; btn.disabled = false;
      setTimeout(() => { btn.textContent = origText; }, 3000);
    }
  });

  /* ============================================================
     13b. CERTIFICATE LIGHTBOX MODAL
  ============================================================ */
  // Create certificate modal elements
  const certOverlay = document.createElement('div');
  certOverlay.className = 'cert-modal-overlay';
  certOverlay.id = 'certModalOverlay';
  certOverlay.innerHTML = `
    <div class="cert-modal-top-bar">
      <h3 id="certModalTitle">Certificate</h3>
      <div class="cert-modal-actions">
        <button id="certModalDownload" class="cert-modal-btn">
          <span>📥</span> Download Certificate
        </button>
        <button class="cert-modal-close" id="closeCertModal" aria-label="Close">✕</button>
      </div>
    </div>
    <img id="certModalImage" src="" alt="Certificate Fullscreen View">
  `;
  document.body.appendChild(certOverlay);

  const certModalImage = document.getElementById('certModalImage');
  const certModalTitle = document.getElementById('certModalTitle');
  const certModalDownload = document.getElementById('certModalDownload');

  let currentCertUrl = '';
  let currentCertName = '';

  // Download helper using Fetch to avoid opening in new tab
  function downloadImage(url, filename) {
    const extension = url.split('.').pop() || 'jpg';
    const finalFilename = filename.toLowerCase().endsWith('.' + extension) ? filename : `${filename}.${extension}`;

    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = finalFilename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(() => {
        const a = document.createElement('a');
        a.href = url;
        a.download = finalFilename;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
  }

  // Open certificate modal
  function openCertModal(src, name) {
    currentCertUrl = src;
    currentCertName = name;
    certModalImage.src = src;
    certModalTitle.textContent = name;
    certOverlay.classList.add('open');
    document.body.classList.add('cert-modal-active');
    document.body.style.overflow = 'hidden';
  }

  // Close certificate modal
  function closeCertModal() {
    certOverlay.classList.remove('open');
    document.body.classList.remove('cert-modal-active');
    const enquiryOverlay = document.getElementById('enquiryOverlay');
    if (!enquiryOverlay || !enquiryOverlay.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  // Listeners for click triggers
  document.addEventListener('click', e => {
    const certItem = e.target.closest('.cert-item');
    if (certItem) {
      const src = certItem.getAttribute('data-cert-src') || certItem.querySelector('img').getAttribute('src');
      const name = certItem.getAttribute('data-cert-name') || certItem.querySelector('p').textContent;
      openCertModal(src, name);
    }

    if (e.target.id === 'closeCertModal' || e.target.id === 'certModalOverlay') {
      closeCertModal();
    }
  });

  certModalDownload.addEventListener('click', () => {
    if (currentCertUrl) {
      downloadImage(currentCertUrl, currentCertName || 'certificate');
    }
  });

  // Escape key support
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCertModal();
  });

  // Custom Cursor hover enhancement for the dynamic modal buttons
  if (typeof cursorRing !== 'undefined' && cursorRing && typeof cursorLeaf !== 'undefined' && cursorLeaf) {
    const handleMouseEnter = () => {
      cursorRing.classList.add('expand');
      cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-10deg) scale(1.25)';
    };
    const handleMouseLeave = () => {
      cursorRing.classList.remove('expand');
      cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-35deg) scale(1)';
    };

    certOverlay.querySelectorAll('#closeCertModal, #certModalDownload').forEach(btn => {
      btn.addEventListener('mouseenter', handleMouseEnter);
      btn.addEventListener('mouseleave', handleMouseLeave);
    });
  }

  /* ============================================================
     13c. PRODUCT DETAIL MODAL
  ============================================================ */
  const categoryDetails = {
    powder: {
      useCase: "Ideal for food processing, baking, instant beverages, baby foods, and confectionery formulations.",
      features: ["100% Pure & Natural", "No Artificial Color or Preservatives", "Longer Shelf Life", "Hygienically Processed"]
    },
    flakes: {
      useCase: "Perfect for instant soups, ready-to-cook meals, noodles, pasta, sauces, and culinary seasonings.",
      features: ["Quick Rehydration", "Retains Natural Texture & Aroma", "Zero Added Flavor Enhancers", "Moisture Controlled Packing"]
    },
    spices: {
      useCase: "Excellent for daily cooking, traditional curry spice blends, food industry processing, and seasonings.",
      features: ["Intense Natural Aroma", "Strictly Monitored Quality Standards", "Rich & Authentic Flavor Profile", "Microbiologically Safe"]
    },
    herbal: {
      useCase: "Highly recommended for Ayurvedic formulations, wellness capsules, dietary supplements, and herbal tea.",
      features: ["High Bioactive Retention", "Sourced from Premium Farms", "No Chemical Additives", "Fine Mesh for Easy Solubilisation"]
    }
  };

  // Get product specific FAQs
  function getProductFAQs(product) {
    const name = product.name;
    const cat = getCategoryLabel(product.category);

    // Custom FAQs for key products
    if (name === "Banana Powder") {
      return [
        {
          q: "Where is IMM Food Innovators' Banana Powder manufactured in Jalgaon?",
          a: "Our premium Dehydrated Banana Powder is manufactured at our state-of-the-art facility on Nhavi Hambardi Road, Yawal, in the Jalgaon district of Maharashtra, India. We source fresh, high-grade bananas from local farms across Jalgaon, ensuring the finest flavor and nutritional preservation."
        },
        {
          q: "What is the shelf life and storage recommendation for Banana Powder?",
          a: "It has a shelf life of 12 months. Keep it in a cool, dry place away from direct sunlight. Our moisture-proof, premium packaging prevents clumping and maintains natural sweetness."
        },
        {
          q: "Can this Banana Powder be used in baby foods and baking?",
          a: "Absolutely! Our Banana Powder is 100% natural with zero chemical additives, preservatives, or artificial sugar, making it highly safe and nutritious for baby foods, health milkshakes, smoothies, and gluten-free bakery recipes."
        }
      ];
    }

    if (name === "Moringa Leaves Powder") {
      return [
        {
          q: "Why is IMM Food Innovators considered a top Moringa Powder manufacturer in Jalgaon?",
          a: "We utilize specialized low-temperature dehydration processes to dry fresh moringa leaves sourced locally in Jalgaon. This method preserves 100% of the natural green color, essential vitamins, proteins, and antioxidant compounds without any fillers."
        },
        {
          q: "How should I consume Moringa Leaves Powder for best results?",
          a: "Moringa powder is a versatile superfood. You can add 1 teaspoon daily to smoothies, health shakes, green teas, soups, or sprinkle it on salads to boost immunity and energy."
        },
        {
          q: "Is your Moringa Powder certified for export?",
          a: "Yes, our facility is ISO 9001:2015 and FSSAI certified. We manufacture all herbal powders under strict hygienic GMP standards, ensuring they meet domestic and international export quality specifications."
        }
      ];
    }

    // Default dynamic FAQs for other products
    return [
      {
        q: `What is the shelf life of IMM Food Innovators' ${name}?`,
        a: `Our premium dehydrated ${name} has a shelf life of 12 months from the date of manufacture, provided it is stored in a cool, dry place in its original airtight, moisture-proof packaging.`
      },
      {
        q: `How is this ${name} processed to maintain its flavor and quality?`,
        a: `We use advanced low-temperature dehydration technology at our facility in Jalgaon, Maharashtra. This preserves the natural aroma, color, minerals, and bioactive ingredients of the ${cat} without any artificial preservatives, colorings, or additives.`
      },
      {
        q: `Can I request customized packaging or wholesale orders for ${name}?`,
        a: `Yes, we specialize in bulk supply and wholesale distribution. We offer customizable packaging sizes depending on your industry needs. You can contact us at info@immfoodinnovators.in or call +91 9170625050 for a quote.`
      }
    ];
  }

  // Create Product Detail Modal elements dynamically
  const prodOverlay = document.createElement('div');
  prodOverlay.className = 'product-modal-overlay';
  prodOverlay.id = 'productModalOverlay';
  prodOverlay.innerHTML = `
    <div class="product-modal-container">
      <button class="product-modal-close" id="closeProductModal" aria-label="Close">✕</button>
      <div class="product-modal-content">
        <div class="product-modal-image-pane">
          <img id="productModalImage" src="" alt="Product Image">
        </div>
        <div class="product-modal-info-pane">
          <span class="product-modal-badge" id="productModalCategory">Category</span>
          <h2 id="productModalName">Product Name</h2>
          
          <div class="product-modal-section">
            <h4>Product Description</h4>
            <p id="productModalDescription">Description text</p>
          </div>
          
          <div class="product-modal-section">
            <h4>Best Applications</h4>
            <p id="productModalApplications">Applications text</p>
          </div>
          
          <div class="product-modal-section">
            <h4>Key Features & Quality</h4>
            <ul id="productModalFeatures"></ul>
          </div>

          <div class="product-modal-section">
            <h4>Product FAQs</h4>
            <div id="productModalFaqs" class="modal-faq-container"></div>
          </div>
          
          <div class="product-modal-actions">
            <button id="productModalEnquire" class="product-modal-enquire-btn">
              <span>✉</span> Enquire for this Product
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(prodOverlay);

  const productModalImage = document.getElementById('productModalImage');
  const productModalName = document.getElementById('productModalName');
  const productModalCategory = document.getElementById('productModalCategory');
  const productModalDescription = document.getElementById('productModalDescription');
  const productModalApplications = document.getElementById('productModalApplications');
  const productModalFeatures = document.getElementById('productModalFeatures');
  const productModalEnquire = document.getElementById('productModalEnquire');

  let currentProductEnquiry = '';

  // Open product modal
  function openProductModal(product) {
    const details = categoryDetails[product.category] || categoryDetails.powder;
    
    productModalImage.src = product.image;
    productModalImage.alt = product.name;
    productModalName.textContent = product.name;
    productModalCategory.textContent = getCategoryLabel(product.category);
    productModalDescription.textContent = product.description;
    productModalApplications.textContent = details.useCase;
    
    productModalFeatures.innerHTML = details.features.map(f => `<li>✓ ${f}</li>`).join('');

    // Render FAQs
    const faqs = getProductFAQs(product);
    const faqsContainer = document.getElementById('productModalFaqs');
    if (faqsContainer) {
      faqsContainer.innerHTML = faqs.map((faq, index) => `
        <div class="modal-faq-item">
          <button class="modal-faq-header" data-faq-index="${index}">
            <span class="modal-faq-question">${faq.q}</span>
            <span class="modal-faq-toggle-btn">+</span>
          </button>
          <div class="modal-faq-body">
            <div class="modal-faq-body-content">
              <p>${faq.a}</p>
            </div>
          </div>
        </div>
      `).join('');

      // Add click events
      faqsContainer.querySelectorAll('.modal-faq-header').forEach(headerBtn => {
        headerBtn.addEventListener('click', () => {
          const item = headerBtn.closest('.modal-faq-item');
          const body = item.querySelector('.modal-faq-body');
          const isActive = item.classList.contains('active');

          // Close other modal FAQs
          faqsContainer.querySelectorAll('.modal-faq-item').forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
              const otherBody = otherItem.querySelector('.modal-faq-body');
              if (otherBody) otherBody.style.maxHeight = null;
            }
          });

          if (isActive) {
            item.classList.remove('active');
            body.style.maxHeight = null;
          } else {
            item.classList.add('active');
            body.style.maxHeight = body.scrollHeight + 'px';
          }
        });

        // Add custom cursor hover enhancement for FAQ headers in modal
        headerBtn.addEventListener('mouseenter', () => {
          if (typeof cursorRing !== 'undefined' && cursorRing) cursorRing.classList.add('expand');
          if (typeof cursorLeaf !== 'undefined' && cursorLeaf) cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-10deg) scale(1.25)';
        });
        headerBtn.addEventListener('mouseleave', () => {
          if (typeof cursorRing !== 'undefined' && cursorRing) cursorRing.classList.remove('expand');
          if (typeof cursorLeaf !== 'undefined' && cursorLeaf) cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-35deg) scale(1)';
        });
      });
    }
    
    currentProductEnquiry = product.name;
    
    prodOverlay.classList.add('open');
    document.body.classList.add('cert-modal-active');
    document.body.style.overflow = 'hidden';
  }

  // Close product modal
  function closeProductModal() {
    prodOverlay.classList.remove('open');
    const enquiryOverlay = document.getElementById('enquiryOverlay');
    if (!enquiryOverlay || !enquiryOverlay.classList.contains('open')) {
      document.body.classList.remove('cert-modal-active');
      document.body.style.overflow = '';
    }
  }

  // Event Listeners for Product Modal Closing
  document.addEventListener('click', e => {
    if (e.target.id === 'closeProductModal' || e.target.id === 'productModalOverlay') {
      closeProductModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeProductModal();
    }
  });

  // Enquire CTA action inside details modal
  if (productModalEnquire) {
    productModalEnquire.addEventListener('click', () => {
      closeProductModal();
      
      setTimeout(() => {
        const messageField = document.querySelector('#enquiryDrawer textarea');
        if (messageField) {
          messageField.value = `Hello IMM Food Innovators!\n\nI am interested in your product: "${currentProductEnquiry}". Please share pricing, minimum order quantity (MOQ), and packaging options.\n\nThank you.`;
        }
        
        if (typeof openModal === 'function') {
          openModal();
        }
      }, 350);
    });
  }

  // Custom Cursor hover enhancement for product modal elements
  if (typeof cursorRing !== 'undefined' && cursorRing && typeof cursorLeaf !== 'undefined' && cursorLeaf) {
    const handleMouseEnter = () => {
      cursorRing.classList.add('expand');
      cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-10deg) scale(1.25)';
    };
    const handleMouseLeave = () => {
      cursorRing.classList.remove('expand');
      cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-35deg) scale(1)';
    };

    prodOverlay.querySelectorAll('#closeProductModal, #productModalEnquire').forEach(btn => {
      btn.addEventListener('mouseenter', handleMouseEnter);
      btn.addEventListener('mouseleave', handleMouseLeave);
    });
  }

  /* ============================================================
     13.5. FAQ ACCORDION LOGIC
  ============================================================ */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const headerBtn = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');

    if (headerBtn && body) {
      headerBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other FAQ items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBody = otherItem.querySelector('.faq-body');
            if (otherBody) otherBody.style.maxHeight = null;
          }
        });

        // Toggle current FAQ item
        if (isActive) {
          item.classList.remove('active');
          body.style.maxHeight = null;
        } else {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    }
  });

  /* ============================================================
     13d. BLOG RENDERING & MODAL HANDLERS
  ============================================================ */
  const blogGrid = document.getElementById('blogGrid');
  const blogModalOverlay = document.getElementById('blogModalOverlay');
  const closeBlogModal = document.getElementById('closeBlogModal');
  const blogModalCategory = document.getElementById('blogModalCategory');
  const blogModalTitle = document.getElementById('blogModalTitle');
  const blogModalDate = document.getElementById('blogModalDate');
  const blogModalReadTime = document.getElementById('blogModalReadTime');
  const blogModalImage = document.getElementById('blogModalImage');
  const blogModalBody = document.getElementById('blogModalBody');

  function renderBlogs() {
    if (!blogGrid) return;
    blogGrid.innerHTML = blogsData.map((blog, i) => `
      <article class="blog-card" style="animation-delay:${i * 0.08}s">
        <div class="blog-card-img-wrap">
          <img src="${blog.image}" alt="${blog.title}" loading="lazy" onerror="this.onerror=null;this.src='images/powders/placeholder.png'">
          <span class="blog-card-category">${blog.category}</span>
        </div>
        <div class="blog-card-content">
          <div class="blog-card-meta">${blog.date} • ${blog.readTime}</div>
          <h3 class="blog-card-title">${blog.title}</h3>
          <p class="blog-card-excerpt">${blog.excerpt}</p>
          <span class="blog-card-action">Read Full Article →</span>
        </div>
      </article>
    `).join('');

    // Attach click listeners to blog cards
    blogGrid.querySelectorAll('.blog-card').forEach((card, idx) => {
      card.addEventListener('click', () => {
        const blog = blogsData[idx];
        if (blog) {
          openBlogModal(blog);
        }
      });
    });

    // Custom cursor hover on new cards
    if (!isMobile() && typeof cursorRing !== 'undefined' && cursorRing) {
      blogGrid.querySelectorAll('.blog-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorRing.classList.add('expand');
          if (typeof cursorLeaf !== 'undefined' && cursorLeaf) cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-10deg) scale(1.25)';
        });
        el.addEventListener('mouseleave', () => {
          cursorRing.classList.remove('expand');
          if (typeof cursorLeaf !== 'undefined' && cursorLeaf) cursorLeaf.style.transform = 'translate(-50%,-50%) rotate(-35deg) scale(1)';
        });
      });
    }
  }

  function openBlogModal(blog) {
    if (!blogModalOverlay) return;
    blogModalCategory.textContent = blog.category;
    blogModalTitle.textContent = blog.title;
    blogModalDate.textContent = blog.date;
    blogModalReadTime.textContent = blog.readTime;
    blogModalImage.src = blog.image;
    blogModalImage.alt = blog.title;
    blogModalBody.innerHTML = blog.content;

    blogModalOverlay.classList.add('open');
    document.body.classList.add('cert-modal-active');
    document.body.style.overflow = 'hidden';
  }

  function closeBlogDetailsModal() {
    if (!blogModalOverlay) return;
    blogModalOverlay.classList.remove('open');
    const enquiryOverlay = document.getElementById('enquiryOverlay');
    if (!enquiryOverlay || !enquiryOverlay.classList.contains('open')) {
      document.body.classList.remove('cert-modal-active');
      document.body.style.overflow = '';
    }
  }

  if (closeBlogModal) {
    closeBlogModal.addEventListener('click', closeBlogDetailsModal);
  }
  if (blogModalOverlay) {
    blogModalOverlay.addEventListener('click', e => {
      if (e.target === blogModalOverlay) closeBlogDetailsModal();
    });
  }

  // Escape key support for blog modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeBlogDetailsModal();
  });

  /* ============================================================
     14. SMOOTH ANCHOR SCROLL + PAGE ROUTING
  ============================================================ */
  function showMainPage() {
    const mainSecs = document.querySelectorAll('#home, #about, #services');
    const mfgSec = document.getElementById('contract-manufacturing');
    const blogsSec = document.getElementById('blogs');
    mainSecs.forEach(sec => {
      sec.style.display = '';
    });
    if (mfgSec) {
      mfgSec.style.display = 'none';
    }
    if (blogsSec) {
      blogsSec.style.display = 'none';
    }
  }

  function showMfgPage() {
    const mainSecs = document.querySelectorAll('#home, #about, #services');
    const mfgSec = document.getElementById('contract-manufacturing');
    const blogsSec = document.getElementById('blogs');
    mainSecs.forEach(sec => {
      sec.style.display = 'none';
    });
    if (blogsSec) {
      blogsSec.style.display = 'none';
    }
    if (mfgSec) {
      mfgSec.style.display = 'block';
    }
  }

  function showBlogsPage() {
    const mainSecs = document.querySelectorAll('#home, #about, #services');
    const mfgSec = document.getElementById('contract-manufacturing');
    const blogsSec = document.getElementById('blogs');
    mainSecs.forEach(sec => {
      sec.style.display = 'none';
    });
    if (mfgSec) {
      mfgSec.style.display = 'none';
    }
    if (blogsSec) {
      blogsSec.style.display = 'block';
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href === '#contract-manufacturing') {
        showMfgPage();
      } else if (href === '#blogs') {
        showBlogsPage();
      } else if (href === '#home' || href === '#about' || href === '#services') {
        showMainPage();
      }
      
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      
      history.pushState(null, null, href);
      
      setTimeout(() => {
        const offset = (header ? header.offsetHeight : 72) + 12;
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: href === '#home' ? 0 : targetTop - offset,
          behavior: 'smooth'
        });
      }, 20);
    });
  });

  function handleHashRoute() {
    const hash = window.location.hash;
    if (hash === '#contract-manufacturing') {
      showMfgPage();
      const target = document.getElementById('contract-manufacturing');
      if (target) {
        setTimeout(() => {
          const offset = (header ? header.offsetHeight : 72) + 12;
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset - offset,
            behavior: 'auto'
          });
        }, 100);
      }
    } else if (hash === '#blogs') {
      showBlogsPage();
      const target = document.getElementById('blogs');
      if (target) {
        setTimeout(() => {
          const offset = (header ? header.offsetHeight : 72) + 12;
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset - offset,
            behavior: 'auto'
          });
        }, 100);
      }
    } else {
      showMainPage();
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            const offset = (header ? header.offsetHeight : 72) + 12;
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.pageYOffset - offset,
              behavior: 'auto'
            });
          }, 100);
        }
      }
    }
  }

  window.addEventListener('hashchange', handleHashRoute);

  /* ============================================================
     15. WINDOW RESIZE
  ============================================================ */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { updateSlider(); renderDots(); }, 200);
  });

  /* ============================================================
     16. SCROLL RESTORE
  ============================================================ */
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  } else {
    window.onbeforeunload = () => window.scrollTo(0, 0);
  }

  /* ============================================================
     17. INITIALISE ON PAGE LOAD
  ============================================================ */
  window.addEventListener('load', () => {
    // Fade in
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
      document.body.style.transition = 'opacity 0.5s ease-in-out';
      document.body.style.opacity = '1';
    });

    renderProducts();
    renderBlogs();
    startAutoplay();
    attachReveal();
    setTimeout(attachCounters, 200);
    handleHashRoute();
    onScroll();

    console.log('IMM Food Innovators — Loaded ✅  Products:', productsData.length);
  });

})();