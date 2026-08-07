/*!
 * IMM Food Innovators — script.js v3.2
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
      image: "images/company.jpg?v=3.2",
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
      image: "images/factory.jpg?v=3.2",
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
    { name: "Turmeric Powder", category: "spices", image: "images/powders/Turmeric.png", description: "Premium high-curcumin pure dehydrated turmeric powder (Haldi). Brilliant golden yellow color, rich natural aroma, and anti-inflammatory benefits; essential for culinary curry mixes, food processing, and wellness products." },
    { name: "Shatavari Powder", category: "herbal", image: "images/powders/Shatavari.png", description: "Pure dehydrated Shatavari (Asparagus racemosus) root powder. Traditional Ayurvedic herbal supplement for vitality, hormonal balance, lactation support, and general immunity." },
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

  function getProductSpecs(p) {
    const nameLower = (p.name || '').toLowerCase();

    let form = "Fine Free-Flowing Powder";
    let mesh = "80 - 100 Fine Mesh";
    let moisture = "< 5.0% Max";
    let activeMarker = "100% Pure Farm-Fresh Dehydrated Extract";
    let color = "Characteristic Natural Color";
    let odor = "Fresh Characteristic Aroma";
    let packaging = "25 kg Poly-Lined HDPE Drum / Kraft Bag";
    let shelfLife = "18 Months (Cool & Dry Storage)";
    let moq = "100 kg Domestic & Export";
    let brixSolubility = "Water Dispersible";

    if (nameLower.includes("banana")) {
      form = "Fine Micro-Ground Fruit Powder";
      mesh = "80 - 100 Fine Mesh";
      moisture = "< 4.0% Max";
      activeMarker = "Prebiotic Resistant Starch (~82%) & Potassium (>1,200 mg/100g)";
      color = "Off-White to Pale Creamy Yellow";
      odor = "Sweet Natural Cavendish Banana Aroma";
      packaging = "25 kg Triple-Barrier Aluminum Foil Lined Kraft Bag";
      shelfLife = "18 Months";
      moq = "100 kg";
      brixSolubility = "Smooth Dispersible / Non-Clumping";
    } else if (nameLower.includes("turmeric")) {
      form = "Pure Ground Rhizome Spice Powder";
      mesh = "60 - 80 Standard Spice Mesh";
      moisture = "< 8.0% Max (ASTA / FSSAI Grade)";
      activeMarker = "Active Curcuminoids (3.5% - 5.0% Curcumin)";
      color = "Vibrant Deep Golden Yellow";
      odor = "Warm, Pungent & Earthy Aroma";
      packaging = "25 kg Moisture-Proof PP Woven Bag with Inner PE Liner";
      shelfLife = "24 Months";
      moq = "100 kg";
      brixSolubility = "Dispersible in Warm Water & Fats";
    } else if (nameLower.includes("ginger")) {
      form = "Pure Ground Ginger Root Powder";
      mesh = "60 - 80 Spice Mesh";
      moisture = "< 7.0% Max";
      activeMarker = "Active Gingerols (>1.5%) & Volatile Essential Oils (>1.8%)";
      color = "Light Tan to Pale Buff Yellow";
      odor = "Strong Spicy Pungent Aroma";
      packaging = "25 kg Moisture-Proof Poly-Lined Kraft Bag";
      shelfLife = "24 Months";
      moq = "100 kg";
      brixSolubility = "Earthy Dispersible";
    } else if (nameLower.includes("garlic powder") || nameLower.includes("red onion powder") || nameLower.includes("white onion powder") || nameLower.includes("spring onion powder")) {
      form = "High-Pungency Dehydrated Vegetable Powder";
      mesh = "80 - 100 Fine Mesh";
      moisture = "< 5.0% Max";
      activeMarker = "Natural Allicin / Alliin Pungent Organosulfur Compounds";
      color = nameLower.includes("white") ? "Off-White Cream" : nameLower.includes("red") ? "Pinkish Buff" : "Creamish Buff";
      odor = "Intense Pungent Characteristic Allium Aroma";
      packaging = "20 kg Sealed Aluminum Foil Moisture Barrier Carton";
      shelfLife = "12 Months (Hygroscopic - Keep Sealed)";
      moq = "200 kg";
      brixSolubility = "Instant Water Dispersible";
    } else if (nameLower.includes("flakes") || nameLower.includes("cubes")) {
      form = nameLower.includes("cubes") ? "4mm x 4mm Uniform Dehydrated Cubes" : "3mm - 5mm Dehydrated Kibbled Flakes";
      mesh = "Kibbled Cut Pieces (N/A Mesh)";
      moisture = "< 6.5% Max";
      activeMarker = "100% Dehydrated Farm-Fresh Slices";
      color = nameLower.includes("carrot") ? "Vibrant Orange" : nameLower.includes("chilli") ? "Deep Emerald Green" : "Light Cream Buff";
      odor = "Fresh Characteristic Dehydrated Flavor";
      packaging = "15-20 kg 5-Ply Corrugated Cartons with Double PE Liners";
      shelfLife = "12 - 18 Months";
      moq = "200 kg";
      brixSolubility = "Instant Rehydration in Warm Water (5-8 mins)";
    } else if (nameLower.includes("moringa")) {
      form = "Micro-Ground Dried Leaf Powder";
      mesh = "80 - 120 Micro-Fine Mesh";
      moisture = "< 6.0% Max";
      activeMarker = "Crude Bioactive Protein (>27%) & Rich Chlorophyll";
      color = "Vibrant Deep Emerald Green";
      odor = "Fresh Leafy Herbal Aroma";
      packaging = "25 kg Vacuum-Sealed Fiber Drum with PE Liner";
      shelfLife = "18 Months";
      moq = "50 kg";
      brixSolubility = "Dispersible in Water / Juice";
    } else if (nameLower.includes("shatavari")) {
      form = "Ayurvedic Root Herbal Powder";
      mesh = "80 - 100 Mesh";
      moisture = "< 5.0% Max";
      activeMarker = "Steroidal Saponins (Shatavarins)";
      color = "Light Beige to Buff Cream";
      odor = "Sweetish Slightly Bitter Herbal Aroma";
      packaging = "25 kg Sealed Fiber Drum";
      shelfLife = "24 Months";
      moq = "50 kg";
      brixSolubility = "Partially Soluble in Warm Liquids";
    } else if (nameLower.includes("tomato")) {
      form = "Fine Dehydrated Spray-Dried / Low-Temp Powder";
      mesh = "80 Mesh";
      moisture = "< 3.8% Max";
      activeMarker = "Natural Lycopene (>300 mg/kg) & Brix >90%";
      color = "Brilliant Natural Red";
      odor = "Tangy Ripe Tomato Flavor";
      packaging = "20 kg Foil-Lined Moisture-Lock Cartons";
      shelfLife = "12 Months";
      moq = "200 kg";
      brixSolubility = "High Water Solubility (>92%)";
    } else if (nameLower.includes("amla")) {
      form = "Raw Herbal Fruit Powder";
      mesh = "80 Mesh";
      moisture = "< 6.0% Max";
      activeMarker = "Natural Vitamin C (>4000 mg/100g) & Gallic Acid";
      color = "Tan Brownish Green";
      odor = "Astringent Sour Taste";
      packaging = "25 kg PE Lined Fiber Drums";
      shelfLife = "24 Months";
      moq = "100 kg";
      brixSolubility = "Water Dispersible";
    } else if (nameLower.includes("chilli") || nameLower.includes("chillie")) {
      form = "Ground Spice Powder";
      mesh = "50 - 80 Spice Mesh";
      moisture = "< 7.5% Max";
      activeMarker = "Capsaicin Content (20,000 - 45,000 SHU)";
      color = nameLower.includes("green") ? "Vibrant Green" : "Bright Red";
      odor = "Pungent Spicy Heat";
      packaging = "25 kg PP Bags with Moisture Barrier Liner";
      shelfLife = "18 Months";
      moq = "100 kg";
      brixSolubility = "Dispersible in Oils & Water";
    } else if (nameLower.includes("beetroot")) {
      form = "Natural Vegetable Color Powder";
      mesh = "80 Mesh";
      moisture = "< 4.5% Max";
      activeMarker = "Natural Betanin Pigment & Dietary Nitrates";
      color = "Deep Ruby Red / Magenta";
      odor = "Earthy Sweet Beetroot Flavor";
      packaging = "25 kg Sealed Poly Drums";
      shelfLife = "18 Months";
      moq = "100 kg";
      brixSolubility = "Fully Water Soluble (>95%)";
    } else if (nameLower.includes("safed musali") || nameLower.includes("gokharu") || nameLower.includes("harda") || nameLower.includes("triphala") || nameLower.includes("bhumi amla")) {
      form = "Ayurvedic Herbal Root/Herb Powder";
      mesh = "80 - 100 Mesh";
      moisture = "< 5.0% Max";
      activeMarker = "100% Pure Standardized Botanical Powder";
      color = "Natural Earthy Tan/Brown";
      odor = "Characteristic Herbal Aroma";
      packaging = "25 kg Sealed Fiber Drum";
      shelfLife = "24 Months";
      moq = "50 kg";
      brixSolubility = "Herbal Dispersible";
    }

    return { form, mesh, moisture, activeMarker, color, odor, packaging, shelfLife, moq, brixSolubility };
  }

  window.openSpecModal = function (productName) {
    const p = productsData.find(item => item.name === productName) || { name: productName, category: 'powder', description: 'Premium dehydrated food powder manufactured by IMM Food Innovators.' };
    const spec = getProductSpecs(p);

    const docId = 'TDS-IMM-' + p.name.replace(/[^a-zA-Z0-9]/g, '-').toUpperCase();

    openModal(`
      <div class="spec-tds-container" style="text-align: left; max-width: 720px; margin: 0 auto;">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem; border-bottom: 2px solid var(--accent-gold); padding-bottom: 0.75rem;">
          <div>
            <span class="section-badge badge-gold" style="font-size: 0.7rem; padding: 4px 10px;">TECHNICAL DATA SHEET (TDS)</span>
            <h2 style="font-size: 1.75rem; color: var(--primary-dark); margin-top: 4px; font-weight: 800; line-height: 1.2;">${p.name}</h2>
          </div>
          <div style="text-align: right;">
            <span style="font-size: 0.75rem; font-weight: 700; color: #10B981; background: rgba(16,185,129,0.12); padding: 4px 10px; border-radius: 20px; display: inline-block;">✓ ISO 9001:2015 & FSSAI Compliant</span>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px; font-family: monospace;">Ref: ${docId}</div>
          </div>
        </div>

        <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.94rem; line-height: 1.6;">${p.description}</p>
        
        <!-- SECTION 1: PHYSICAL & ORGANOLEPTIC SPECS -->
        <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary-dark); margin-bottom: 0.75rem; border-left: 4px solid var(--accent-gold); padding-left: 10px; font-weight: 800;">1. Physical & Organoleptic Parameters</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem;">
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Physical Form / Cut:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${spec.form}</strong></div>
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Particle Mesh Size:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${spec.mesh}</strong></div>
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Natural Color:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${spec.color}</strong></div>
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Aroma & Taste:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${spec.odor}</strong></div>
        </div>

        <!-- SECTION 2: CHEMICAL & BIOACTIVE PARAMETERS -->
        <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary-dark); margin-bottom: 0.75rem; border-left: 4px solid var(--accent-gold); padding-left: 10px; font-weight: 800;">2. Chemical & Quality Standards</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem;">
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Moisture Limit:</span><strong style="color: #D97706; font-size: 0.88rem;">${spec.moisture}</strong></div>
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Bioactive Marker / Key Content:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${spec.activeMarker}</strong></div>
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Solubility / Rehydration:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${spec.brixSolubility}</strong></div>
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Microbial Safety:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">TPC &lt; 50,000 CFU/g | Salmonella/E.Coli Absent</strong></div>
        </div>

        <!-- SECTION 3: COMMERCIAL LOGISTICS & PACKAGING -->
        <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary-dark); margin-bottom: 0.75rem; border-left: 4px solid var(--accent-gold); padding-left: 10px; font-weight: 800;">3. B2B Packaging & Dispatch Logistics</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 1.75rem;">
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Standard B2B Packaging:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${spec.packaging}</strong></div>
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Shelf Life:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${spec.shelfLife}</strong></div>
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Dispatch MOQ:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${spec.moq}</strong></div>
          <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Plant Origin:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">Yawal, Jalgaon, Maharashtra, India</strong></div>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="btn-primary" style="flex: 1; padding: 14px;" onclick="openQuoteModal('${p.name}')">Request Price Quote & Batch COA Spec →</button>
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
          <div style="text-align: center; padding: 0.5rem 0;">
            <div class="section-badge badge-gold" style="margin-bottom: 0.5rem;">OFFICIAL ACCREDITATION CERTIFICATE</div>
            <h2 style="font-size: 1.75rem; margin: 0.5rem 0 1.25rem 0; color: var(--primary-dark); font-weight: 800;">${name}</h2>
            <div style="background: #F8FAFC; padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 1.5rem;">
              <img src="${src}" alt="${name}" style="width: 100%; max-height: 600px; object-fit: contain; border-radius: 6px; box-shadow: var(--shadow-md);">
            </div>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="${src}" target="_blank" download class="btn-primary" style="padding: 12px 24px;">Download Official Certificate 📥</a>
              <a href="${src}" target="_blank" class="btn-secondary" style="padding: 12px 24px;">Open Full Resolution 🔍</a>
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
        const isOpen = navMenu.classList.contains('active');
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
        document.body.style.overflow = isOpen ? '' : 'hidden';
      });

      // Close menu when clicking outside or clicking any nav link
      const links = navMenu.querySelectorAll('a:not(.dropdown > .nav-link)');
      links.forEach(l => {
        l.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
            document.body.style.overflow = '';
          }
        });
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

  function initVideoPlayer() {
    const playOverlay = document.getElementById('playOverlay');
    const factoryVideo = document.getElementById('factoryVideo');

    if (playOverlay && factoryVideo) {
      playOverlay.addEventListener('click', function () {
        factoryVideo.play();
        playOverlay.style.opacity = '0';
        playOverlay.style.pointerEvents = 'none';
      });

      factoryVideo.addEventListener('pause', function () {
        if (!factoryVideo.seeking) {
          playOverlay.style.opacity = '1';
          playOverlay.style.pointerEvents = 'auto';
        }
      });
    }
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
    initVideoPlayer();
    initScrollEffects();

    console.log('IMM Food Innovators website v3.5 initialized successfully ✅');
  });

})();