/*!
 * IMM Food Innovators — script.js v2.1
 * Features: Hero Banner Slider, Product Catalog Search & Filters, 
 * Dropdown Menu Controller, Service Modals, Certificate Viewer, Scroll Progress, Mobile Nav
 */

(function () {
  'use strict';

  /* ============================================================
     1. BLOG DATA
  ============================================================ */
  const blogsData = [
    {
      id: "banana-powder-benefits",
      title: "The Rising Demand for Dehydrated Banana Powder: Health Benefits & B2B Applications",
      category: "Superfoods & Exports",
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
        <p>Traditional solar drying and high-heat tunnel oven drying are cost-effective but suffer from major drawbacks:</p>
        <ul>
          <li><strong>Nutrient Degradation:</strong> Essential heat-sensitive vitamins (like Vitamin C and B-complex) and enzymes break down quickly under direct sunlight or high temperatures.</li>
          <li><strong>Loss of Color and Flavor:</strong> High heat triggers oxidation and caramelization, altering natural colors and degrading volatile essential oils.</li>
          <li><strong>Contamination Risks:</strong> Solar drying exposes raw materials to dust, insects, and ambient humidity fluctuations.</li>
        </ul>

        <h3>The Advantage of Low-Temperature Dehydration</h3>
        <p>Modern low-temperature dehydration uses closed-loop moisture extraction technology. By drying ingredients under controlled temperature and humidity profiles, it delivers premium, export-grade quality:</p>
        <ul>
          <li><strong>Antioxidant & Vitamin Preservation:</strong> Lower heat limits thermal damage, preserving bioactive compounds.</li>
          <li><strong>Excellent Rehydration:</strong> Low-temperature drying preserves cell structures, allowing powders or flakes to rehydrate instantly back to original taste.</li>
          <li><strong>Zero Additives:</strong> Food ingredients achieve high shelf-stability without requiring artificial preservatives or chemical treatments.</li>
        </ul>
      `
    }
  ];

  /* ============================================================
     2. PRODUCT DATA (COMPLETE 51 PRODUCTS)
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
    { name: "Yashtimadhu Powder", category: "herbal", image: "images/powders/Yashtimadhu.png", description: "Soothing herbal powder for throat and digestion." }
  ];

  /* ============================================================
     3. HERO BANNER SLIDER
  ============================================================ */
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    
    if (!slides.length) return;

    let currentSlide = 0;
    let slideTimer = null;

    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

      currentSlide = (index + slides.length) % slides.length;

      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function startTimer() {
      stopTimer();
      slideTimer = setInterval(nextSlide, 5000);
    }

    function stopTimer() {
      if (slideTimer) clearInterval(slideTimer);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startTimer();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startTimer();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        startTimer();
      });
    });

    startTimer();
  }

  /* ============================================================
     4. RENDER PRODUCTS GRID & FILTERS
  ============================================================ */
  function renderProductCard(p) {
    const categoryName = p.category === 'powder' ? 'Fruit & Veggie' :
                         p.category === 'flakes' ? 'Flakes & Cubes' :
                         p.category === 'spices' ? 'Pure Spice' : 'Herbal Powder';
    
    const categoryIcon = p.category === 'powder' ? '🍌' :
                         p.category === 'flakes' ? '🧅' :
                         p.category === 'spices' ? '🌶️' : '🌿';

    return `
      <div class="product-card" data-category="${p.category}">
        <div class="product-img-wrap">
          <div class="product-card-top-badges">
            <span class="product-category-badge">${categoryIcon} ${categoryName}</span>
            <span class="product-status-badge"><span class="pulse-dot"></span> Export Grade</span>
          </div>
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='images/powders/Banana.png'">
        </div>
        <div class="product-body">
          <h3 class="product-title">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-feature-pills">
            <span class="pill">🍃 100% Pure</span>
            <span class="pill">⚡ Low-Temp Dried</span>
          </div>
          <div class="product-action-bar">
            <button class="product-btn btn-primary-card" onclick="openQuoteModal('${p.name}')">
              <span>Inquire Supply</span> <span class="arrow">→</span>
            </button>
            <button class="product-btn btn-quick-view" onclick="openSpecModal('${p.name}')" title="View Product Specifications">
              📋 Specs
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function initProductsCatalog() {
    const mainGrid = document.getElementById('mainProductsGrid');
    const fullGrid = document.getElementById('fullProductsGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('productSearchInput');

    const categorySelect = document.getElementById('productCategorySelect');

    let currentCategory = 'all';
    let searchQuery = '';

    // Parse URL query parameter for category (e.g. ?category=powder)
    const urlParams = new URLSearchParams(window.location.search);
    const paramCategory = urlParams.get('category');
    if (paramCategory && ['powder', 'flakes', 'spices', 'herbal', 'all'].includes(paramCategory)) {
      currentCategory = paramCategory;
      // Sync button states
      filterBtns.forEach(btn => {
        if (btn.getAttribute('data-category') === currentCategory) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      // Sync dropdown selector if present
      if (categorySelect) {
        categorySelect.value = currentCategory;
      }
    }

    // Render for home page (8 featured items)
    if (mainGrid) {
      const featured = productsData.slice(0, 8);
      mainGrid.innerHTML = featured.map(p => renderProductCard(p)).join('');
    }

    // Function to update full catalog grid
    function updateFullGrid() {
      if (!fullGrid) return;

      const filtered = productsData.filter(p => {
        const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        fullGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">
          <h3>No products found</h3>
          <p>Try searching for a different keyword or selecting 'All Products'</p>
        </div>`;
      } else {
        fullGrid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
      }
    }

    // Filter button handlers
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.getAttribute('data-category');

        if (categorySelect) categorySelect.value = currentCategory;

        if (mainGrid) {
          const filtered = currentCategory === 'all' ? productsData.slice(0, 8) : productsData.filter(p => p.category === currentCategory);
          mainGrid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
        }

        updateFullGrid();
      });
    });

    // Category dropdown selector handler
    if (categorySelect) {
      categorySelect.addEventListener('change', function (e) {
        currentCategory = e.target.value;
        filterBtns.forEach(b => {
          if (b.getAttribute('data-category') === currentCategory) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
        updateFullGrid();
      });
    }

    // Search input handler
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        searchQuery = e.target.value;
        updateFullGrid();
      });
    }

    // Initial load for full grid
    updateFullGrid();
  }

  /* ============================================================
     5. RENDER BLOGS GRID
  ============================================================ */
  function renderBlogs() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    blogGrid.innerHTML = blogsData.map(b => `
      <article class="blog-card">
        <div class="blog-img-wrap">
          <img src="${b.image}" alt="${b.title}" loading="lazy">
        </div>
        <div class="blog-body">
          <div class="blog-meta">${b.category} • ${b.readTime}</div>
          <h3 class="blog-title">${b.title}</h3>
          <p class="blog-excerpt">${b.excerpt}</p>
          <button class="blog-read-more" onclick="openBlogModal('${b.id}')">Read Full Article →</button>
        </div>
      </article>
    `).join('');
  }

  /* ============================================================
     6. MODAL DIALOG CONTROLLER (BLOG, QUOTE, CERTIFICATES)
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

  window.openBlogModal = function (id) {
    const blog = blogsData.find(b => b.id === id);
    if (!blog) return;

    openModal(`
      <article>
        <span class="section-badge">${blog.category}</span>
        <h1 style="font-size: 2rem; margin: 1rem 0; color: var(--primary-dark);">${blog.title}</h1>
        <div style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem;">${blog.date} • ${blog.readTime}</div>
        <img src="${blog.image}" alt="${blog.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 2rem;">
        <div style="color: var(--text-secondary); line-height: 1.7; font-size: 1rem;">
          ${blog.content}
        </div>
      </article>
    `);
  };

  window.openQuoteModal = function (productName) {
    const productOptionsHtml = productsData.map(p => 
      `<option value="${p.name}" ${p.name === productName ? 'selected' : ''}>${p.name}</option>`
    ).join('');

    openModal(`
      <div>
        <div class="section-badge">INQUIRE BULK PRODUCT</div>
        <h2 style="font-size: 1.8rem; margin: 1rem 0; color: var(--primary-dark);">Inquire Bulk Supply</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Fill out the form below and our export sales manager will send specifications and pricing within 24 hours.</p>
        <form action="https://formspree.io/f/xldobygd" method="POST">
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
        </form>
      </div>
    `);
  };

  window.openSpecModal = function (productName) {
    const p = productsData.find(item => item.name === productName) || { name: productName, category: 'Food Ingredient', description: 'Premium dehydrated food powder manufactured by IMM Food Innovators.' };

    openModal(`
      <div class="spec-modal-container">
        <div class="section-badge badge-gold">TECHNICAL SPECIFICATIONS</div>
        <h2 style="font-size: 1.8rem; margin: 0.8rem 0; color: var(--primary-dark);">${p.name}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.6;">${p.description}</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; background: var(--bg-alt); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
          <div><strong style="color: var(--primary-dark);">Facility Origin:</strong> Jalgaon, Maharashtra, India</div>
          <div><strong style="color: var(--primary-dark);">Processing:</strong> Low-Temp Dehydration</div>
          <div><strong style="color: var(--primary-dark);">Moisture:</strong> &lt; 5.0% Maximum</div>
          <div><strong>Particle Mesh:</strong> 60 - 100 Fine Mesh</div>
          <div><strong>Shelf Life:</strong> 12 Months (Sealed)</div>
          <div><strong>Certifications:</strong> ISO 9001:2015 & FSSAI</div>
          <div><strong>Standard Packaging:</strong> 25 kg HDPE Drums / Bags</div>
          <div><strong>Dispatch MOQ:</strong> 100 kg Domestic & Export</div>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="btn-primary" style="flex: 1;" onclick="openQuoteModal('${p.name}')">Request Bulk Quotation →</button>
        </div>
      </div>
    `);
  };

  function initCertificates() {
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach(card => {
      card.addEventListener('click', function () {
        const src = this.getAttribute('data-cert-src');
        const name = this.getAttribute('data-cert-name');

        openModal(`
          <div style="text-align: center;">
            <div class="section-badge">QUALITY COMPLIANCE</div>
            <h2 style="font-size: 1.8rem; margin: 1rem 0; color: var(--primary-dark);">${name}</h2>
            <img src="${src}" alt="${name}" style="max-width: 100%; max-height: 500px; object-fit: contain; border-radius: var(--radius-md); box-shadow: var(--shadow-md); margin-bottom: 1.5rem;">
            <div>
              <a href="${src}" download class="btn-primary">Download Certificate File 📥</a>
            </div>
          </div>
        `);
      });
    });
  }

  /* ============================================================
     7. FAQ ACCORDION
  ============================================================ */
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const header = item.querySelector('.faq-header');
      if (!header) return;

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
  }

  /* ============================================================
     8. SCROLL EFFECTS, STICKY HEADER & MOBILE DROPDOWN
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

      if (scrollProgress) {
        scrollProgress.style.width = scrollPercent + '%';
      }

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
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
      });
    }

    // Mobile dropdown toggle
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
     9. INITIALIZATION
  ============================================================ */
  window.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initProductsCatalog();
    renderBlogs();
    initCertificates();
    initFAQ();
    initScrollEffects();

    console.log('IMM Food Innovators website v2.1 initialized successfully ✅');
  });

})();