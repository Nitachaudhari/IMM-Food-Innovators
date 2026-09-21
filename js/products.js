/*!
 * IMM Food Innovators LLP — products.js v4.0
 * Product Catalog Controller: Grid Rendering, Search Filtering,
 * Category Sidebar, Technical Data Sheet (TDS) Spec Modal.
 */

(function () {
  'use strict';

  /* Render Short B2B Product Card HTML */
  function renderProductCard(p) {
    return `
      <div class="product-card b2b-card compact-card" onclick="openSpecModal('${p.name.replace(/'/g, "\\'")}')" data-category="${p.category}" style="cursor: pointer;">
        <div class="product-img-wrap" style="width: 100%; aspect-ratio: 1 / 1; position: relative; overflow: hidden; background: #F8FAFC;">
          <div class="product-card-top-badges" style="position: absolute; top: 10px; left: 10px; z-index: 5;">
            <span class="product-category-badge" style="font-size: 0.68rem; font-weight: 700; background: rgba(10, 46, 29, 0.88); color: var(--accent-gold); padding: 3px 8px; border-radius: 6px;">${p.category}</span>
          </div>
          <img src="${p.image}" alt="${p.name} - Dehydrated Powder Manufacturer IMM Food Innovators" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" onerror="this.src='images/powders/Banana Powder.png'">
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

  /* Open Product Technical Specification Modal (TDS Sheet) */
  window.openSpecModal = function (productName) {
    const productsData = window.productsData || [];
    const p = productsData.find(item => item.name.toLowerCase() === productName.toLowerCase()) || {
      name: productName,
      category: 'Fruit & Veggie Powders',
      image: 'images/powders/Banana Powder.png',
      description: 'Premium low-temperature dehydrated ingredient processed in Jalgaon facility.',
      spec: '80 Mesh • Food Grade',
      details: {
        form: 'Fine Micro-Ground Powder',
        mesh: '80 - 100 Fine Mesh',
        moisture: '< 5.0% Max',
        activeMarker: '100% Pure Natural Extract',
        color: 'Characteristic Natural Color',
        odor: 'Fresh Natural Aroma',
        packaging: '25 kg Food-Grade HDPE Bag',
        shelfLife: '12 Months',
        moq: '100 kg',
        solubility: 'Water Dispersible'
      }
    };

    const d = p.details || {};
    const docId = 'TDS-IMM-' + p.name.replace(/[^a-zA-Z0-9]/g, '-').toUpperCase();

    if (window.openModal) {
      window.openModal(`
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
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Physical Form / Cut:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${d.form || 'Fine Micro-Ground Powder'}</strong></div>
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Particle Mesh Size:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${d.mesh || '80-100 Mesh'}</strong></div>
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Natural Color:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${d.color || 'Natural Color'}</strong></div>
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Aroma & Taste:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${d.odor || 'Characteristic Aroma'}</strong></div>
          </div>

          <!-- SECTION 2: CHEMICAL & QUALITY STANDARDS -->
          <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary-dark); margin-bottom: 0.75rem; border-left: 4px solid var(--accent-gold); padding-left: 10px; font-weight: 800;">2. Chemical & Quality Standards</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem;">
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Moisture Limit:</span><strong style="color: #D97706; font-size: 0.88rem;">${d.moisture || '< 5.0% Max'}</strong></div>
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Bioactive Marker / Key Content:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${d.activeMarker || '100% Pure Extract'}</strong></div>
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Solubility / Rehydration:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${d.solubility || 'Water Dispersible'}</strong></div>
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Microbial Safety:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">TPC &lt; 50,000 CFU/g | Salmonella/E.Coli Absent</strong></div>
          </div>

          <!-- SECTION 3: COMMERCIAL LOGISTICS & PACKAGING -->
          <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary-dark); margin-bottom: 0.75rem; border-left: 4px solid var(--accent-gold); padding-left: 10px; font-weight: 800;">3. B2B Packaging & Dispatch Logistics</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 1.75rem;">
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Standard B2B Packaging:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${d.packaging || '25 kg HDPE Bag'}</strong></div>
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Shelf Life:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${d.shelfLife || '12 Months'}</strong></div>
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Dispatch MOQ:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">${d.moq || '100 kg'}</strong></div>
            <div style="background: var(--bg-alt); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-light);"><span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Plant Origin:</span><strong style="color: var(--primary-dark); font-size: 0.88rem;">Yawal, Jalgaon, Maharashtra, India</strong></div>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="btn-primary" style="flex: 1; padding: 14px;" onclick="closeModal(); openQuoteModal('${p.name.replace(/'/g, "\\'")}');">Request Price Quote & Batch COA Spec →</button>
          </div>
        </div>
      `);
    }
  };

  /* Initialize Catalog System */
  function initProductsCatalog() {
    const productsData = window.productsData || [];
    const B2B_CATEGORIES = window.B2B_CATEGORIES || [
      { label: "All Products", icon: "📦" },
      { label: "Fruit & Veggie Powders", icon: "🍌" },
      { label: "Pure Spices", icon: "🌶️" },
      { label: "Herbal & Wellness", icon: "🌿" }
    ];

    const mainGrid = document.getElementById('mainProductsGrid');
    const fullGrid = document.getElementById('fullProductsGrid');
    const searchInput = document.getElementById('productSearchInput');
    const categoryNavList = document.getElementById('categoryNavList');
    const currentCategoryTitle = document.getElementById('currentCategoryTitle');
    const currentCategoryCount = document.getElementById('currentCategoryCount');
    const searchCountBadge = document.getElementById('searchCountBadge');

    let activeCategory = 'All Products';
    let searchQuery = '';

    const urlParams = new URLSearchParams(window.location.search);
    const paramCategory = urlParams.get('category');
    const paramSearch = urlParams.get('search');

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

    if (paramSearch) {
      searchQuery = paramSearch;
      if (searchInput) searchInput.value = paramSearch;
    }

    // Homepage Filter Buttons
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

    // Render Category Sidebar
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

      const items = categoryNavList.querySelectorAll('.b2b-category-item');
      items.forEach(item => {
        item.addEventListener('click', () => {
          activeCategory = item.getAttribute('data-cat');
          renderCategorySidebar();
          updateFullGrid();
        });
      });
    }

    // Update Catalog Grid
    function updateFullGrid() {
      if (!fullGrid) return;

      const filtered = productsData.filter(p => {
        const matchesCategory = activeCategory === 'All Products' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      if (currentCategoryTitle) currentCategoryTitle.textContent = activeCategory;
      if (currentCategoryCount) currentCategoryCount.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'Ingredient' : 'Ingredients'}`;
      if (searchCountBadge) searchCountBadge.textContent = `${filtered.length} Products`;

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
      }, 150);
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        updateFullGrid();
      });
    }

    renderCategorySidebar();
    updateFullGrid();
  }

  window.addEventListener('DOMContentLoaded', () => {
    initProductsCatalog();
    console.log('IMM Food Innovators v4.0 products.js loaded ✅');
  });

})();
