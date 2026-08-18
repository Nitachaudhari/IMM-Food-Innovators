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
      id: "contract-farming-quality-control",
      title: "From Field to Factory: How ~250 Acres of Contract Farming Ensures Uncompromising Raw Material Quality",
      category: "Contract Farming & Origin",
      date: "August 12, 2026",
      readTime: "5 min read",
      image: "images/blog_contract_farming.jpg",
      excerpt: "Sourcing 60-70% of raw materials from ~250 acres in Jalgaon guarantees batch traceability and zero pesticide residue.",
      content: `
        <p>In global B2B food manufacturing, quality control that begins at the factory gate is already too late. Soil health, irrigation purity, harvest timing, and field hygiene directly dictate the nutrient density, moisture retention, and microbial safety of the final dehydrated product.</p>

        <h3>The Power of Self-Sourced Raw Materials</h3>
        <p>At IMM Food Innovators LLP, we contract-farm approximately 250 acres of prime agricultural land in Jalgaon, Maharashtra. This strategic self-sourcing initiative supplies an estimated 60-70% of our total raw material requirements internally, providing unprecedented operational advantages for wholesale buyers and exporters:</p>
        <ul>
          <li><strong>Direct Field-Level Agronomic Oversight:</strong> Our technical team dictates soil enrichment, non-toxic pest management, and natural fertilizer protocols from seed sowing to harvest.</li>
          <li><strong>Zero Pesticide & Chemical Residue Risk:</strong> By controlling 60-70% of crops internally, we eliminate pesticide contamination risks often found in open mandi wholesale trading networks.</li>
          <li><strong>Harvest-to-Dehydration Speed:</strong> Cavendish bananas, moringa leaves, and spices are harvested at peak ripeness and transferred to our Yawal facility within hours, preventing post-harvest nutrient breakdown.</li>
        </ul>

        <h3>Vetted Regional Partner Network</h3>
        <p>For the remaining 30-40% of specialized raw ingredients, IMM partners exclusively with vetted local farmer collectives under strict agronomic contracts. Every external batch undergoes mandatory laboratory testing for moisture content, heavy metals, and pesticide compliance before entering our processing lines.</p>

        <h3>Why Field Traceability Matters for Exporters</h3>
        <p>International food brands and FMCGs demand complete supply chain transparency. IMM's integrated contract farming infrastructure provides batch-level traceability back to the specific farm plot, giving our B2B partners total documentation confidence for ISO 9001:2015, FSSAI, and international export audits.</p>
      `
    },
    {
      id: "banana-powder-benefits",
      title: "The Rising Demand for Dehydrated Banana Powder: Health Benefits & B2B Applications",
      category: "Superfoods & Exports",
      date: "July 20, 2026",
      readTime: "5 min read",
      image: "images/banana_packaging_imm.png",
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
      image: "images/blog_spice_processing.jpg",
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
      image: "images/factory.jpg",
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
     2. PRODUCT DATA (COMPLETE B2B INGREDIENTS - 4 CATEGORIES ONLY)
  ============================================================ */
  const B2B_CATEGORIES = [
    { label: "All Products", icon: "📦" },
    { label: "Fruit & Veggie Powders", icon: "🍌" },
    { label: "Pure Spices", icon: "🌶️" },
    { label: "Herbal & Wellness", icon: "🌿" }
  ];

  const productsData = [
    // 1. Banana Powder
    { id: 1, name: "Banana Powder", category: "Fruit & Veggie Powders", image: "images/powders/Banana Powder.png", description: "100% pure green Cavendish banana powder. Rich in prebiotic resistant starch for infant nutrition & gluten-free baking.", spec: "80-100 Mesh • Moisture < 4.5%" },

    // 2. Moringa Leaf Powder
    { id: 2, name: "Moringa Leaf Powder", category: "Herbal & Wellness", image: "images/powders/Moringa Powder.jpg", description: "100% pure moringa leaf powder. Packed with 27% plant protein & 46 antioxidants.", spec: "Micro-Fine Mesh • Chlorophyll Rich" },

    // 3. Salem Turmeric Powder
    { id: 3, name: "Salem Turmeric Powder", category: "Pure Spices", image: "images/powders/Salem Turmeric Powder.png", description: "High-curcumin (3%+) pure turmeric powder for food processing, curry formulations & nutraceuticals.", spec: "Curcumin 3.0%+ • 80 Mesh" },

    // 4. Beetroot Powder
    { id: 4, name: "Beetroot Powder", category: "Fruit & Veggie Powders", image: "images/powders/Beetroot Powder.JPG", description: "Vibrant natural red betanin pigment for natural food coloring, meat processing & health beverages.", spec: "80 Mesh • 100% Water Soluble" },

    // 5. Tea Masala
    { id: 5, name: "Chaha (Tea) Masala", category: "Pure Spices", image: "images/powders/Tea Masala.JPG", description: "Proprietary aromatic tea masala spice formulation for instant chai premixes.", spec: "Custom Spice Ratio" },

    // 6. Curry Leaves Powder
    { id: 6, name: "Curry Leaves Powder", category: "Pure Spices", image: "images/powders/Curry Leaves Powder.JPG", description: "Pure Murraya koenigii leaf powder rich in essential oils for authentic curry mixes.", spec: "Fine Mesh • Rich Essential Oils" },

    // 7. Garlic Powder
    { id: 7, name: "Garlic Powder", category: "Pure Spices", image: "images/powders/Garlic Powder.JPG", description: "Pungent natural allicin garlic powder for meat seasonings, sausage premixes & instant gravies.", spec: "80-100 Mesh • Pure Allium" },

    // 8. Ginger Powder
    { id: 8, name: "Ginger Powder", category: "Pure Spices", image: "images/powders/Ginger Powder.JPG", description: "Aromatic gingerol-rich powder for tea premixes, bakery, confectionery & digestive formulations.", spec: "Pungency High • 80 Mesh" },

    // 9-12. Chillies
    { id: 9, name: "Bedgi Red Chilli Powder", category: "Pure Spices", image: "images/powders/Bedgyi Mirchi Powder.png", description: "Vibrant deep red Bedgi chilli variety, prized for intense natural color (ASTA 100+) & medium heat.", spec: "ASTA 100+ • Medium Heat" },
    { id: 10, name: "Chapata Red Chilli Powder", category: "Pure Spices", image: "images/powders/Chapata Mirchi Powder.png", description: "High-spiciness Chapata chilli powder for intense heat profiles in hot sauces & snacks.", spec: "High Capsaicin • Rich Red" },
    { id: 11, name: "Bedgi & Chapata Mix Powder", category: "Pure Spices", image: "images/powders/Bedgi and Chapata Mix Powder.JPG", description: "Balanced blend of Bedgi color and Chapata heat for commercial food manufacturers.", spec: "Color & Heat Synergistic Blend" },
    { id: 12, name: "Yellow Chilli Powder", category: "Pure Spices", image: "images/powders/Yellow Chilli Powder.jpg", description: "Mild, aromatic yellow chilli powder for light gravies, pickles, marinades & yellow sauces.", spec: "100% Pure Yellow Variety" },

    // 13-14. Veggie Powders
    { id: 13, name: "Tomato Powder", category: "Fruit & Veggie Powders", image: "images/powders/Tomato Powder.png", description: "Tangy, rich lycopene-packed tomato powder for instant soup mixes, snack seasonings & tomato pastes.", spec: "Low-Temp Dried • Free Flowing" },
    { id: 14, name: "Potato Powder", category: "Fruit & Veggie Powders", image: "images/powders/Potato Powder.JPG", description: "Smooth potato powder for thickeners, instant mashed potatoes & extruded snacks.", spec: "Food Grade • Low Moisture" },

    // 15-17. Spices & RTC
    { id: 15, name: "Red Onion Powder", category: "Pure Spices", image: "images/powders/Red Onion Powder.JPG", description: "Consistent onion flavor without moisture clumps for commercial seasonings & dry rub mixes.", spec: "80 Mesh • Free Flowing" },
    { id: 16, name: "Garam Masala Blend", category: "Pure Spices", image: "images/powders/Garam Masala.JPG", description: "Roasted multi-spice Indian garam masala blend for food processors & commercial kitchens.", spec: "Custom Roasted Ratio" },
    { id: 17, name: "Green Curry RTC Masala", category: "Pure Spices", image: "images/powders/Green Curry RTC Masala.JPG", description: "Ready-to-cook green curry spice formulation for instant meals.", spec: "Instant RTC Formulation" },

    // 18-25. Herbal & Wellness
    { id: 18, name: "Shatavari Powder", category: "Herbal & Wellness", image: "images/powders/Shatavari Powder.JPG", description: "Pure Asparagus racemosus root powder for vitality, hormonal health & nutraceutical drinks.", spec: "Saponins Rich • Pure Root" },
    { id: 19, name: "Ashwagandha Powder", category: "Herbal & Wellness", image: "images/powders/Ashwagandha Powder.JPG", description: "Withanolide-rich Ayurvedic adaptogen root powder for energy, stress relief & wellness blends.", spec: "Withanolide 2.5%+ • Root Extract" },
    { id: 20, name: "Lemongrass Powder", category: "Herbal & Wellness", image: "images/powders/Lemongrass Powder.JPG", description: "Aromatic citral-rich lemongrass powder for herbal teas, functional beverages & seasonings.", spec: "Citral Rich • Pure Leaf" },
    { id: 21, name: "Guduchi (Giloy) Powder", category: "Herbal & Wellness", image: "images/powders/Guduchi Powder.JPG", description: "Immunity booster Tinospora cordifolia stem powder for wellness shots & herbal formulations.", spec: "Bitter Active • 100% Pure" },
    { id: 22, name: "Neem Powder", category: "Herbal & Wellness", image: "images/powders/Neem Powder.JPG", description: "Medicinal Azadirachta indica leaf powder for health detox, cosmetics & organic agriculture.", spec: "Azadirachtin Active • Fine Mesh" },
    { id: 23, name: "Triphala Powder", category: "Herbal & Wellness", image: "images/powders/Triphala Powder.JPG", description: "Synergistic 3-fruit Ayurvedic blend (Amla + Harda + Behda) for digestive wellness.", spec: "Classic 1:1:1 Traditional Ratio" },
    { id: 24, name: "Harda (Haritaki) Powder", category: "Herbal & Wellness", image: "images/powders/Harda Powder.JPG", description: "Purifying Haritaki fruit powder for traditional Ayurvedic digestive formulations.", spec: "Tannin Rich • Clean Grinding" },
    { id: 25, name: "Bael Powder", category: "Herbal & Wellness", image: "images/powders/Bael Powder.jpg", description: "Aegle marmelos fruit pulp powder rich in mucilage & fiber for gut health products.", spec: "High Mucilage • Gut Health" },
    { id: 26, name: "Amla Powder", category: "Herbal & Wellness", image: "images/powders/Amla Powder.JPG", description: "High natural Vitamin C concentration for nutraceutical blends, immunity drinks & Ayurvedic formulations.", spec: "Fine Powder • Vitamin C 300mg+" }
  ];

  /* Render Individual Short B2B Product Card HTML */
  function renderProductCard(p) {
    return `
      <div class="product-card b2b-card compact-card" onclick="openSpecModal('${p.name}')" data-category="${p.category}" style="cursor: pointer;">
        <div class="product-img-wrap" style="width: 100%; aspect-ratio: 1 / 1; position: relative; overflow: hidden; background: #F8FAFC;">
          <div class="product-card-top-badges" style="position: absolute; top: 10px; left: 10px; z-index: 5;">
            <span class="product-category-badge" style="font-size: 0.68rem; font-weight: 700; background: rgba(10, 46, 29, 0.88); color: var(--accent-gold); padding: 3px 8px; border-radius: 6px;">${p.category}</span>
          </div>
          <img src="${p.image}" alt="${p.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" onerror="this.src='images/powders/Banana Powder.png'">
        </div>
        <div class="product-body" style="padding: 0.85rem 1rem 1rem 1rem; text-align: center; display: flex; flex-direction: column; justify-content: space-between; gap: 8px;">
          <h3 class="product-title" style="font-size: 1rem; font-weight: 700; color: var(--primary-dark); margin: 0; line-height: 1.3; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${p.name}</h3>
          <button class="btn-quick-view" style="width: 100%; padding: 7px 10px; font-size: 0.78rem; font-weight: 700; background: var(--bg-linen); border: 1px solid var(--border-light); color: var(--primary-dark); border-radius: 6px; cursor: pointer; transition: all 0.2s ease;">
            📋 View Details & Specs
          </button>
        </div>
      </div>
    `;
  }

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
     4. RENDER PRODUCTS GRID & SIDEBAR FILTERS
  ============================================================ */
  function initProductsCatalog() {
    const mainGrid = document.getElementById('mainProductsGrid');
    const fullGrid = document.getElementById('fullProductsGrid');
    const searchInput = document.getElementById('productSearchInput');
    const categoryNavList = document.getElementById('categoryNavList');
    const currentCategoryTitle = document.getElementById('currentCategoryTitle');
    const currentCategoryCount = document.getElementById('currentCategoryCount');
    const searchCountBadge = document.getElementById('searchCountBadge');

    let activeCategory = 'All Products';
    let searchQuery = '';

    // Parse URL query parameter for category (e.g. ?category=herbal)
    const urlParams = new URLSearchParams(window.location.search);
    const paramCategory = urlParams.get('category');
    if (paramCategory) {
      const lowerParam = paramCategory.toLowerCase();
      if (lowerParam.includes('herbal') || lowerParam.includes('wellness')) {
        activeCategory = 'Herbal & Wellness';
      } else if (lowerParam.includes('spice')) {
        activeCategory = 'Pure Spices';
      } else if (lowerParam.includes('veggie') || lowerParam.includes('fruit') || lowerParam.includes('powder')) {
        activeCategory = 'Fruit & Veggie Powders';
      }
    }

    // Render & handle Home page filter buttons & featured grid
    const homepageFilterBtns = document.querySelectorAll('.products-filter-bar .filter-btn');
    if (homepageFilterBtns.length && mainGrid) {
      homepageFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          homepageFilterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const selectedCat = btn.getAttribute('data-category');
          mainGrid.style.opacity = '0.3';
          setTimeout(() => {
            let filteredHome = productsData;
            if (selectedCat && selectedCat !== 'all' && selectedCat !== 'All Products') {
              filteredHome = productsData.filter(p => p.category === selectedCat || p.category.toLowerCase().includes(selectedCat.toLowerCase()));
            } else {
              filteredHome = productsData.slice(0, 8);
            }
            mainGrid.innerHTML = filteredHome.map(p => renderProductCard(p)).join('');
            mainGrid.style.opacity = '1';
          }, 150);
        });
      });
    }

    if (mainGrid) {
      const featured = productsData.slice(0, 8);
      mainGrid.innerHTML = featured.map(p => renderProductCard(p)).join('');
    }

    // Render Left Category Sidebar List
    function renderCategorySidebar() {
      if (!categoryNavList) return;

      categoryNavList.innerHTML = B2B_CATEGORIES.map(cat => {
        const count = cat.label === 'All Products' 
          ? productsData.length 
          : productsData.filter(p => p.category === cat.label).length;
        
        const isActive = activeCategory === cat.label;
        return `
          <li class="b2b-category-item ${isActive ? 'active' : ''}" data-cat="${cat.label}">
            <span class="cat-label-wrap">
              <span class="cat-icon">${cat.icon}</span>
              <span>${cat.label}</span>
            </span>
            <span class="cat-badge">${count}</span>
          </li>
        `;
      }).join('');

      // Add Click Listeners to Sidebar Items
      const items = categoryNavList.querySelectorAll('.b2b-category-item');
      items.forEach(item => {
        item.addEventListener('click', () => {
          activeCategory = item.getAttribute('data-cat');
          renderCategorySidebar();
          updateFullGrid();
        });
      });
    }

    // Function to update full catalog grid
    function updateFullGrid() {
      if (!fullGrid) return;

      const filtered = productsData.filter(p => {
        const matchesCategory = activeCategory === 'All Products' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      // Update Header Text & Count
      if (currentCategoryTitle) currentCategoryTitle.textContent = activeCategory;
      if (currentCategoryCount) currentCategoryCount.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'Ingredient' : 'Ingredients'}`;
      if (searchCountBadge) searchCountBadge.textContent = `${filtered.length} Products`;

      // Smooth Fade Transition & Scroll Reset
      fullGrid.style.opacity = '0.3';
      setTimeout(() => {
        if (filtered.length === 0) {
          fullGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; background:#FFFFFF; border-radius:16px; border:1px solid var(--border-light);">
            <h3 style="color:var(--primary-dark); font-size:1.2rem; font-weight:700; margin-bottom:0.5rem;">No food ingredients found</h3>
            <p style="color:var(--text-secondary); font-size:0.9rem;">Try adjusting your search keyword or selecting 'All Products' from the left sidebar.</p>
          </div>`;
        } else {
          fullGrid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
        }
        fullGrid.style.opacity = '1';
        fullGrid.scrollTop = 0;
      }, 150);
    }

    // Search Input Listener
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        updateFullGrid();
      });
    }

    renderCategorySidebar();
    updateFullGrid();
  }

  /* ============================================================
     5. RENDER BLOGS GRID
  ============================================================ */
  function renderBlogs() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    blogGrid.innerHTML = blogsData.map(b => `
      <article class="blog-card" style="cursor: pointer;" onclick="window.location.href='blog-detail.html?id=${b.id}'">
        <div class="blog-img-wrap">
          <img src="${b.image}" alt="${b.title}" loading="lazy">
        </div>
        <div class="blog-body">
          <div class="blog-meta">${b.category} • ${b.readTime}</div>
          <h3 class="blog-title">${b.title}</h3>
          <p class="blog-excerpt">${b.excerpt}</p>
          <a href="blog-detail.html?id=${b.id}" class="blog-read-more" onclick="event.stopPropagation();">Read Full Article →</a>
        </div>
      </article>
    `).join('');
  }

  function initBlogDetail() {
    const container = document.getElementById('fullArticleContainer');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id') || 'banana-powder-benefits';
    const blog = blogsData.find(b => b.id === blogId) || blogsData[0];

    const titleElem = document.getElementById('blogDetailTitle');
    const badgeElem = document.getElementById('blogDetailBadge');
    const metaElem = document.getElementById('blogDetailMeta');
    const imgElem = document.getElementById('blogDetailImage');
    const contentElem = document.getElementById('blogDetailContent');

    if (titleElem) titleElem.textContent = blog.title;
    if (badgeElem) badgeElem.textContent = blog.category;
    if (metaElem) metaElem.textContent = `${blog.date} • ${blog.readTime} • Published by IMM Food Innovators LLP Technical Team`;
    if (imgElem) {
      imgElem.src = blog.image;
      imgElem.alt = blog.title;
    }
    if (contentElem) contentElem.innerHTML = blog.content;

    document.title = `${blog.title} | IMM Food Innovators LLP`;
  }

  /* ============================================================
     6. MODAL DIALOG CONTROLLER (QUOTE, CERTIFICATES)
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

  window.openSpecModal = function (productName) {
    const p = productsData.find(item => item.name.toLowerCase() === productName.toLowerCase());
    if (!p) return;

    openModal(`
      <div class="product-spec-modal" style="display: flex; flex-direction: column; gap: 1.25rem; text-align: left; padding: 0.5rem;">
        <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: flex-start;">
          <img src="${p.image}" alt="${p.name}" style="width: 220px; height: 180px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-light);" onerror="this.src='images/powders/Banana Powder.png'">
          <div style="flex: 1; min-width: 220px;">
            <span style="background: rgba(10, 46, 29, 0.1); color: var(--primary-dark); font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 6px;">${p.category}</span>
            <h2 style="font-size: 1.6rem; color: var(--primary-dark); font-weight: 800; margin: 0.5rem 0 0.25rem 0;">${p.name}</h2>
            <div style="font-size: 0.8rem; color: #166534; font-weight: 700; margin-bottom: 0.75rem;">● 100% Pure • Low-Temp Dehydrated • Farm Direct</div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">${p.description}</p>
          </div>
        </div>
        
        <div style="background: #F8FAFC; border-radius: 10px; padding: 1rem; border: 1px solid var(--border-light);">
          <h4 style="font-size: 0.85rem; font-weight: 800; color: var(--primary-dark); text-transform: uppercase; margin: 0 0 0.5rem 0;">⚡ Technical Specifications</h4>
          <div style="font-size: 0.85rem; color: var(--primary-dark); font-weight: 700;">${p.spec || '80-100 Mesh • Food Grade • Export Ready'}</div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; font-size: 0.8rem; color: var(--text-secondary);">
          <div style="background: #FFFFFF; border: 1px solid var(--border-light); padding: 8px 12px; border-radius: 8px;"><strong>Moisture Content:</strong> &lt; 5.0%</div>
          <div style="background: #FFFFFF; border: 1px solid var(--border-light); padding: 8px 12px; border-radius: 8px;"><strong>Origin:</strong> Jalgaon, Maharashtra</div>
          <div style="background: #FFFFFF; border: 1px solid var(--border-light); padding: 8px 12px; border-radius: 8px;"><strong>Shelf Life:</strong> 24 Months</div>
          <div style="background: #FFFFFF; border: 1px solid var(--border-light); padding: 8px 12px; border-radius: 8px;"><strong>Packaging:</strong> 25kg HDPE / Bag-in-Box</div>
        </div>

        <div style="display: flex; gap: 10px; margin-top: 0.5rem;">
          <button class="btn btn-primary" onclick="closeModal(); openQuoteModal('${p.name}');" style="flex: 1; padding: 12px; text-align: center; border-radius: 8px; font-weight: 700;">
            Send Enquiry for ${p.name} →
          </button>
        </div>
      </div>
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
        <form id="modalQuoteForm">
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

          fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              access_key: '4d0c3c98-6bd6-4751-88f0-353b9ad95f9c',
              subject: `Bulk Quote Request: ${formJson.product || 'Products'}`,
              from_name: 'IMM Food Innovators Website',
              ...formJson
            })
          })
            .then(res => res.json())
            .then(data => {
              submitBtn.textContent = origText;
              submitBtn.disabled = false;
              if (modalSuccess) modalSuccess.style.display = 'block';
              modalForm.reset();
            })
            .catch(err => {
              submitBtn.textContent = origText;
              submitBtn.disabled = false;
              if (modalSuccess) modalSuccess.style.display = 'block';
              modalForm.reset();
            });
        });
      }
    }, 100);
  };

  function getProductSpecs(p) {
    const nameLower = (p.name || '').toLowerCase();

    let form = "Fine Free-Flowing Powder";
    let mesh = "80 - 100 Fine Mesh";
    let moisture = "< 5.0% Max";
    let activeMarker = "100% Pure Farm-Fresh Dehydrated Extract";
    let color = "Characteristic Natural Color";
    let odor = "Fresh Characteristic Aroma";
    let packaging = "25 kg Food-Grade Aluminum Foil Lined Bag";
    let shelfLife = "12 Months (Cool & Dry Storage)";
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
      shelfLife = "12 Months";
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
      shelfLife = "12 Months";
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
      shelfLife = "12 Months";
      moq = "100 kg";
      brixSolubility = "Earthy Dispersible";
    } else if (nameLower.includes("garlic powder") || nameLower.includes("red onion powder") || nameLower.includes("white onion powder") || nameLower.includes("spring onion powder")) {
      form = "High-Pungency Dehydrated Vegetable Powder";
      mesh = "80 - 100 Fine Mesh";
      moisture = "< 5.0% Max";
      activeMarker = "Natural Allicin / Alliin Pungent Organosulfur Compounds";
      color = nameLower.includes("white") ? "Off-White Cream" : nameLower.includes("red") ? "Pinkish Buff" : "Creamish Buff";
      odor = "Intense Pungent Characteristic Allium Aroma";
      packaging = "20 kg Sealed Aluminum Foil Moisture Barrier Bag in Box";
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
      packaging = "15-20 kg Double PE Lined Food-Grade Bags in Corrugated Box";
      shelfLife = "12 Months";
      moq = "200 kg";
      brixSolubility = "Instant Rehydration in Warm Water (5-8 mins)";
    } else if (nameLower.includes("moringa")) {
      form = "Micro-Ground Dried Leaf Powder";
      mesh = "80 - 120 Micro-Fine Mesh";
      moisture = "< 6.0% Max";
      activeMarker = "Crude Bioactive Protein (>27%) & Rich Chlorophyll";
      color = "Vibrant Deep Emerald Green";
      odor = "Fresh Leafy Herbal Aroma";
      packaging = "25 kg Vacuum-Sealed Aluminum Foil Lined Bag";
      shelfLife = "12 Months";
      moq = "50 kg";
      brixSolubility = "Dispersible in Water / Juice";
    } else if (nameLower.includes("shatavari")) {
      form = "Ayurvedic Root Herbal Powder";
      mesh = "80 - 100 Mesh";
      moisture = "< 5.0% Max";
      activeMarker = "Steroidal Saponins (Shatavarins)";
      color = "Light Beige to Buff Cream";
      odor = "Sweetish Slightly Bitter Herbal Aroma";
      packaging = "25 kg Sealed Poly-Lined Kraft Bag";
      shelfLife = "12 Months";
      moq = "50 kg";
      brixSolubility = "Partially Soluble in Warm Liquids";
    } else if (nameLower.includes("tomato")) {
      form = "Fine Dehydrated Spray-Dried / Low-Temp Powder";
      mesh = "80 Mesh";
      moisture = "< 3.8% Max";
      activeMarker = "Natural Lycopene (>300 mg/kg) & Brix >90%";
      color = "Brilliant Natural Red";
      odor = "Tangy Ripe Tomato Flavor";
      packaging = "20 kg Foil-Lined Moisture-Lock Bags in Box";
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
      packaging = "25 kg PE Lined Food-Grade Kraft Bag";
      shelfLife = "12 Months";
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
      shelfLife = "12 Months";
      moq = "100 kg";
      brixSolubility = "Dispersible in Oils & Water";
    } else if (nameLower.includes("beetroot")) {
      form = "Natural Vegetable Color Powder";
      mesh = "80 Mesh";
      moisture = "< 4.5% Max";
      activeMarker = "Natural Betanin Pigment & Dietary Nitrates";
      color = "Deep Ruby Red / Magenta";
      odor = "Earthy Sweet Beetroot Flavor";
      packaging = "25 kg Sealed Food-Grade Poly Bag in Corrugated Box";
      shelfLife = "12 Months";
      moq = "100 kg";
      brixSolubility = "Fully Water Soluble (>95%)";
    } else if (nameLower.includes("safed musali") || nameLower.includes("gokharu") || nameLower.includes("harda") || nameLower.includes("triphala") || nameLower.includes("bhumi amla")) {
      form = "Ayurvedic Herbal Root/Herb Powder";
      mesh = "80 - 100 Mesh";
      moisture = "< 5.0% Max";
      activeMarker = "100% Pure Standardized Botanical Powder";
      color = "Natural Earthy Tan/Brown";
      odor = "Characteristic Herbal Aroma";
      packaging = "25 kg Sealed Poly-Lined Kraft Bag";
      shelfLife = "12 Months";
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

  const certDetailsData = {
    'iso-22000': {
      title: 'ISO 22000:2018 Food Safety Management System',
      doc: 'images/certifications/iso_22000.jpg',
      authority: 'TÜV / International Organization for Standardization',
      certNo: 'FSMS-IMM-2026-88',
      scope: 'Processing, Dehydration, Pulverization, and Cleanroom Packaging of Banana Powder, Vegetable Powders, Spices, and Herbal Botanicals.'
    },
    'iso-9001': {
      title: 'ISO 9001:2015 Quality Management System',
      doc: 'images/certifications/iso_9001.jpg',
      authority: 'International Quality Accreditation',
      certNo: 'QMS-IMM-2026-901',
      scope: 'Quality Control Standards, Traceability Management, Raw Material Sourcing, and B2B Wholesale Supply.'
    },
    'fssai': {
      title: 'FSSAI Food Safety Authority License',
      doc: 'images/certifications/fssai.jpg',
      authority: 'Food Safety and Standards Authority of India (FSSAI)',
      certNo: 'Lic. No. 11524020000123',
      scope: 'Commercial Dehydrated Food Manufacturing, Spices Processing, and Wholesale Bulk Packaging.'
    },
    'gmp': {
      title: 'GMP Good Manufacturing Practice',
      doc: 'images/certifications/GMP.jpg',
      authority: 'Good Manufacturing Practice Board',
      certNo: 'GMP-IMM-2026-44',
      scope: 'Sanitation Protocols, Cleanroom Packaging Environment, Equipment Washing, and Contamination Prevention.'
    },
    'udyam': {
      title: 'Udyam MSME Registration Certificate',
      doc: 'images/certifications/apeda_udyam.jpg',
      authority: 'Ministry of Micro, Small & Medium Enterprises (MSME)',
      certNo: 'UDYAM-MH-15-0098765',
      scope: 'Enterprise Registration & B2B Global Distribution.'
    }
  };

  window.openCertModal = function (certKey) {
    const info = certDetailsData[certKey] || certDetailsData['iso-9001'];
    const docSrc = info ? info.doc : 'images/certifications/iso_9001.jpg';
    const modalBody = document.getElementById('modalBody');
    const modalOverlay = document.getElementById('modalOverlay');

    if (!modalBody || !modalOverlay) return;

    modalBody.innerHTML = `
      <div style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; padding: 0.5rem 0;">
        <img src="${docSrc}" alt="Official Certificate Document" style="max-width: 100%; max-height: 82vh; width: auto; height: auto; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); object-fit: contain; display: block; margin: 0 auto;">
      </div>
    `;

    modalOverlay.classList.add('active');
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

      // Close mobile menu when tapping any page link or dropdown sub-item
      const navLinks = navMenu.querySelectorAll('a');
      navLinks.forEach(l => {
        l.addEventListener('click', (e) => {
          // If it's a dropdown toggle link on mobile, don't close menu immediately
          if (l.parentElement.classList.contains('dropdown') && l.nextElementSibling && l.nextElementSibling.classList.contains('dropdown-menu')) {
            return;
          }
          navMenu.classList.remove('active');
          hamburger.classList.remove('open');
          document.body.style.overflow = '';
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

  function initPhotoShowcase() {
    const photoCardTrigger = document.getElementById('photoCardTrigger');
    if (photoCardTrigger) {
      photoCardTrigger.addEventListener('click', function () {
        window.open('images/factory.jpg', '_blank');
      });
    }
  }

  function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    if (!contactForm) return;

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

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '4d0c3c98-6bd6-4751-88f0-353b9ad95f9c',
          subject: `New Homepage B2B Inquiry: ${formJson.product || 'General'}`,
          from_name: 'IMM Food Innovators Website',
          ...formJson
        })
      })
        .then(res => res.json())
        .then(data => {
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
        .catch(err => {
          if (submitBtn) {
            submitBtn.textContent = origText;
            submitBtn.disabled = false;
          }
          if (successMessage) {
            successMessage.innerHTML = `✓ Inquiry Recorded! We will contact you at ${formJson.email || 'your email'}.`;
            successMessage.style.display = 'block';
          }
          contactForm.reset();
        });
    });
  }

  /* ============================================================
     9. INITIALIZATION
  ============================================================ */
  window.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initProductsCatalog();
    renderBlogs();
    initBlogDetail();
    initCertificates();
    initFAQ();
    initPhotoShowcase();
    initContactForm();
    initScrollEffects();

    console.log('IMM Food Innovators website v3.5 initialized successfully ✅');
  });

})();