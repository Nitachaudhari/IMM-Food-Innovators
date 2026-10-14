/*!
 * IMM Food Innovators LLP — products.js v4.0
 * Product Catalog Controller: Grid Rendering, Search Filtering,
 * Category Sidebar, Technical Data Sheet (TDS) Spec Modal.
 */

(function () {
  'use strict';

  /* Render Short B2B Product Card HTML */
  function renderProductCard(p) {
    const heroBadgeHtml = p.isHero ? `<span class="product-hero-badge">★ FLAGSHIP</span>` : '';
    const specHtml = p.spec ? `<div class="product-card-spec" style="font-size: 0.74rem; font-weight: 600; color: #047857; background: #ECFDF5; padding: 4px 10px; border-radius: 6px; border: 1px solid #A7F3D0; margin-bottom: 8px; display: flex; align-items: center; gap: 5px; width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing: border-box;"><span style="font-size: 0.78rem;">⚡</span> <span style="overflow: hidden; text-overflow: ellipsis;">${p.spec}</span></div>` : '';
    const descHtml = p.description ? `<p class="product-desc" style="font-size: 0.83rem; color: #475569; line-height: 1.45; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-align: left;">${p.description}</p>` : '';

    const safeImgSrc = encodeURI(p.image);
    const escapedName = p.name.replace(/'/g, "\\'");

    return `
      <div class="product-card b2b-card compact-card" onclick="openSpecModal('${escapedName}')" data-category="${p.category}" style="cursor: pointer;">
        <div class="product-img-wrap">
          <div class="product-card-top-badges">
            <span class="product-category-badge">${p.category}</span>
            ${heroBadgeHtml}
          </div>
          <img src="${safeImgSrc}" alt="${p.name} - Dehydrated Powder Manufacturer IMM Food Innovators" decoding="async" onerror="this.onerror=null;this.src='images/powders/Banana%20Powder.webp';">
        </div>
        <div class="product-body">
          <h3 class="product-title" style="text-align: left; font-size: 1.1rem; font-weight: 700; color: var(--primary-dark); margin: 0 0 6px 0;">${p.name}</h3>
          ${specHtml}
          ${descHtml}
          <div class="product-action-bar" style="margin-top: auto; padding-top: 4px;">
            <button type="button" class="btn-primary-card" style="width: 100%; cursor: pointer;" onclick="event.stopPropagation(); openSpecModal('${escapedName}');">
              <span>📄 View Details & Specs</span>
              <span class="arrow">→</span>
            </button>
          </div>
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
      image: 'images/powders/Banana Powder.webp',
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
    const heroBadgeHtml = p.isHero ? `<span class="product-hero-badge" style="font-size: 0.68rem; padding: 3px 8px; border-radius: 4px;">★ FLAGSHIP</span>` : '';
    const specHighlightHtml = p.spec ? `<div class="spec-tds-spec-badge" style="font-size: 0.76rem; font-weight: 600; color: #047857; background: #ECFDF5; padding: 5px 12px; border-radius: 6px; border: 1px solid #A7F3D0; margin-bottom: 0.65rem; display: inline-flex; align-items: center; gap: 6px; width: fit-content;"><span style="font-size: 0.82rem;">⚡</span> <span>${p.spec}</span></div>` : '';

    const safeModalImg = encodeURI(p.image);

    if (window.openModal) {
      window.openModal(`
        <div class="spec-tds-container" style="text-align: left; max-width: 720px; margin: 0 auto;">
          <!-- TOP DOCUMENT HEADER -->
          <div class="spec-tds-header-bar" style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem; border-bottom: 2px solid var(--accent-gold); padding-bottom: 0.75rem; padding-right: 2.5rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 4px;">
                <span class="section-badge badge-gold" style="font-size: 0.7rem; padding: 4px 10px; margin: 0;">TECHNICAL DATA SHEET (TDS)</span>
                ${heroBadgeHtml}
              </div>
              <h2 class="spec-tds-title" style="font-size: 1.65rem; color: var(--primary-dark); margin: 0; font-weight: 800; line-height: 1.2;">${p.name}</h2>
            </div>
          </div>

          <!-- PRODUCT OVERVIEW: IMAGE + BULLET POINTS (NO BOXES) -->
          <div class="spec-tds-overview-section" style="display: flex; gap: 1.5rem; align-items: flex-start; margin-bottom: 1.5rem; padding-bottom: 1.25rem; border-bottom: 1px solid var(--border-light);">
            <!-- LEFT: PRODUCT IMAGE -->
            <div class="spec-tds-image-frame-wrap" style="flex: 0 0 250px; width: 250px; max-width: 100%;">
              <div class="spec-tds-image-frame" style="position: relative; width: 100%; height: 180px; border-radius: 10px; overflow: hidden; background: #FFFFFF; border: 1px solid var(--border-light); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); display: flex; align-items: center; justify-content: center;">
                <img src="${safeModalImg}" alt="${p.name} - Technical Data Sheet IMM Food Innovators" class="spec-tds-img" style="width: 100%; height: 100%; object-fit: contain; padding: 6px; display: block;" onerror="this.onerror=null;this.src='images/powders/Banana%20Powder.webp';">
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 0.72rem;">
                <span style="font-weight: 700; color: var(--primary-dark); background: #F8FAFC; padding: 3px 8px; border-radius: 4px; border: 1px solid var(--border-light);">${p.category}</span>
                <span style="color: #047857; font-weight: 700;">● Direct Farm Tested</span>
              </div>
            </div>

            <!-- RIGHT: DESCRIPTION & BULLET POINTS -->
            <div class="spec-tds-overview-info" style="flex: 1; min-width: 0;">
              ${specHighlightHtml}
              <p class="spec-tds-desc" style="color: var(--text-secondary); margin: 0 0 12px 0; font-size: 0.88rem; line-height: 1.55;">${p.description}</p>
              
              <!-- BULLET POINTS LIST (NO BOXES) -->
              <ul class="spec-tds-bullet-list" style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px;">
                <li style="display: flex; align-items: baseline; gap: 8px; font-size: 0.85rem; color: #334155; line-height: 1.45;">
                  <span style="color: var(--accent-gold); font-size: 1rem; line-height: 1;">•</span>
                  <span><strong style="color: var(--primary-dark);">Physical Form:</strong> ${d.form || 'Fine Micro-Ground Powder'}</span>
                </li>
                <li style="display: flex; align-items: baseline; gap: 8px; font-size: 0.85rem; color: #334155; line-height: 1.45;">
                  <span style="color: var(--accent-gold); font-size: 1rem; line-height: 1;">•</span>
                  <span><strong style="color: var(--primary-dark);">Particle Mesh Size:</strong> ${d.mesh || '80-100 Mesh'}</span>
                </li>
                <li style="display: flex; align-items: baseline; gap: 8px; font-size: 0.85rem; color: #334155; line-height: 1.45;">
                  <span style="color: var(--accent-gold); font-size: 1rem; line-height: 1;">•</span>
                  <span><strong style="color: var(--primary-dark);">Moisture Limit:</strong> <span style="color: #D97706; font-weight: 700;">${d.moisture || '< 5.0% Max'}</span></span>
                </li>
                <li style="display: flex; align-items: baseline; gap: 8px; font-size: 0.85rem; color: #334155; line-height: 1.45;">
                  <span style="color: var(--accent-gold); font-size: 1rem; line-height: 1;">•</span>
                  <span><strong style="color: var(--primary-dark);">Standard B2B Packaging:</strong> ${d.packaging || '25 kg HDPE Bag with Inner PE Liner'}</span>
                </li>
                ${d.activeMarker ? `
                <li style="display: flex; align-items: baseline; gap: 8px; font-size: 0.85rem; color: #334155; line-height: 1.45;">
                  <span style="color: var(--accent-gold); font-size: 1rem; line-height: 1;">•</span>
                  <span><strong style="color: var(--primary-dark);">Bioactive Marker:</strong> ${d.activeMarker}</span>
                </li>` : ''}
              </ul>
            </div>
          </div>

          <!-- SPECIFICATION TABLE (REPLACES ALL SECTION BOXES) -->
          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary-dark); margin: 0 0 0.75rem 0; font-weight: 800; display: flex; align-items: center; gap: 8px;">
              <span style="display: inline-block; width: 4px; height: 16px; background: var(--accent-gold); border-radius: 2px;"></span>
              Complete Technical Data Sheet Specifications
            </h4>
            <div class="spec-tds-table-container" style="border: 1px solid var(--border-light); border-radius: 8px; overflow: hidden; background: #FFFFFF; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">
              <table class="spec-tds-table" style="width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: left;">
                <thead>
                  <tr style="background: var(--primary-dark); color: #FFFFFF;">
                    <th style="padding: 10px 14px; font-weight: 700; width: 42%; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">Technical Parameter</th>
                    <th style="padding: 10px 14px; font-weight: 700; width: 58%; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">Specification Standard</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- 1. Physical & Organoleptic Parameters -->
                  <tr style="background: #F8FAFC; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
                    <td colspan="2" style="padding: 7px 14px; font-weight: 800; font-size: 0.76rem; color: var(--primary-dark); text-transform: uppercase; letter-spacing: 0.5px; background: #F1F5F9;">
                      1. Physical & Organoleptic Parameters
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Physical Form / Cut</td>
                    <td style="padding: 9px 14px; color: var(--primary-dark); font-weight: 600;">${d.form || 'Fine Micro-Ground Powder'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Particle Mesh Size</td>
                    <td style="padding: 9px 14px; color: var(--primary-dark); font-weight: 600;">${d.mesh || '80-100 Mesh'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Natural Color</td>
                    <td style="padding: 9px 14px; color: var(--primary-dark); font-weight: 600;">${d.color || 'Characteristic Natural Color'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Aroma & Taste</td>
                    <td style="padding: 9px 14px; color: var(--primary-dark); font-weight: 600;">${d.odor || 'Characteristic Aroma'}</td>
                  </tr>

                  <!-- 2. Chemical & Microbiological Standards -->
                  <tr style="background: #F8FAFC; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
                    <td colspan="2" style="padding: 7px 14px; font-weight: 800; font-size: 0.76rem; color: var(--primary-dark); text-transform: uppercase; letter-spacing: 0.5px; background: #F1F5F9;">
                      2. Chemical & Microbiological Standards
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Moisture Limit</td>
                    <td style="padding: 9px 14px; color: #D97706; font-weight: 700;">${d.moisture || '< 5.0% Max'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Bioactive Marker / Key Content</td>
                    <td style="padding: 9px 14px; color: var(--primary-dark); font-weight: 600;">${d.activeMarker || '100% Pure Natural Extract'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Solubility / Rehydration</td>
                    <td style="padding: 9px 14px; color: var(--primary-dark); font-weight: 600;">${d.solubility || 'Water Dispersible'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Microbial Safety Limits</td>
                    <td style="padding: 9px 14px; color: var(--primary-dark); font-weight: 600;">${d.microbial || 'TPC < 50,000 CFU/g | Salmonella & E.Coli Absent'}</td>
                  </tr>

                  <!-- 3. B2B Packaging, Customs & Logistics -->
                  <tr style="background: #F8FAFC; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
                    <td colspan="2" style="padding: 7px 14px; font-weight: 800; font-size: 0.76rem; color: var(--primary-dark); text-transform: uppercase; letter-spacing: 0.5px; background: #F1F5F9;">
                      3. B2B Packaging, Customs & Logistics
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">HS Customs Tariff Code</td>
                    <td style="padding: 9px 14px; color: #047857; font-weight: 700;">${d.hsCode || '0803.90 / 0712.90'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Standard B2B Packaging</td>
                    <td style="padding: 9px 14px; color: var(--primary-dark); font-weight: 600;">${d.packaging || '25 kg Food-Grade HDPE Bag with Inner PE Liner'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Shelf Life & Season</td>
                    <td style="padding: 9px 14px; color: var(--primary-dark); font-weight: 600;">${d.shelfLife || '12 Months'}${d.harvestSeason ? ' (' + d.harvestSeason + ')' : ''}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Dispatch MOQ</td>
                    <td style="padding: 9px 14px; color: var(--primary-dark); font-weight: 700;">${d.moq || '100 kg'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 9px 14px; color: var(--text-secondary); font-weight: 600;">Plant Origin & Traceability</td>
                    <td style="padding: 9px 14px; color: var(--primary-dark); font-weight: 600;">${d.origin || 'Yawal, Jalgaon, Maharashtra, India'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
