import React, { useState, useMemo } from 'react';
import { 
  FaLayerGroup, 
  FaLemon, 
  FaPepperHot, 
  FaLeaf, 
  FaBoxesStacked, 
  FaSearch, 
  FaArrowRight,
  FaFileLines
} from 'react-icons/fa6';

// 4 Exact Core Categories
const CATEGORIES = [
  { label: "All Products", icon: FaBoxesStacked, desc: "Explore our full range of export-quality food ingredients." },
  { label: "Fruit & Veggie Powders", icon: FaLemon, desc: "100% pure dehydrated fruit & vegetable ingredients for food processing." },
  { label: "Pure Spices", icon: FaPepperHot, desc: "High-essential oil ground spices & RTC seasonings." },
  { label: "Herbal & Wellness", icon: FaLeaf, desc: "Bio-active Ayurvedic herbal powders for nutraceuticals." }
];

// Product Data Portfolio
const PRODUCTS_DATA = [
  // 1. Banana Powder
  { id: 1, name: "Banana Powder", category: "Fruit & Veggie Powders", image: "/images/powders/Banana Powder.png", description: "100% pure green Cavendish banana powder. Rich in prebiotic resistant starch for infant nutrition & gluten-free baking.", specification: "80-100 Mesh • Moisture < 4.5%" },

  // 2. Moringa Leaf Powder
  { id: 2, name: "Moringa Leaf Powder", category: "Herbal & Wellness", image: "/images/powders/Moringa Powder.jpg", description: "100% pure moringa leaf powder. Packed with 27% plant protein & 46 antioxidants.", specification: "Micro-Fine Mesh • Chlorophyll Rich" },

  // 3. Salem Turmeric Powder
  { id: 3, name: "Salem Turmeric Powder", category: "Pure Spices", image: "/images/powders/Salem Turmeric Powder.png", description: "High-curcumin (3%+) pure turmeric powder for food processing, curry formulations & nutraceuticals.", specification: "Curcumin 3.0%+ • 80 Mesh" },

  // 4. Beetroot Powder
  { id: 4, name: "Beetroot Powder", category: "Fruit & Veggie Powders", image: "/images/powders/Beetroot Powder.JPG", description: "Vibrant natural red betanin pigment for natural food coloring, meat processing & health beverages.", specification: "80 Mesh • 100% Water Soluble" },

  // 5. Tea Masala
  { id: 5, name: "Chaha (Tea) Masala", category: "Pure Spices", image: "/images/powders/Tea Masala.JPG", description: "Proprietary aromatic tea masala spice formulation for instant chai premixes.", specification: "Custom Spice Ratio" },

  // 6. Curry Leaves Powder
  { id: 6, name: "Curry Leaves Powder", category: "Pure Spices", image: "/images/powders/Curry Leaves Powder.JPG", description: "Pure Murraya koenigii leaf powder rich in essential oils for authentic curry mixes.", specification: "Fine Mesh • Rich Essential Oils" },

  // 7. Garlic Powder
  { id: 7, name: "Garlic Powder", category: "Pure Spices", image: "/images/powders/Garlic Powder.JPG", description: "Pungent natural allicin garlic powder for meat seasonings, sausage premixes & instant gravies.", specification: "80-100 Mesh • Pure Allium" },

  // 8. Ginger Powder
  { id: 8, name: "Ginger Powder", category: "Pure Spices", image: "/images/powders/Ginger Powder.JPG", description: "Aromatic gingerol-rich powder for tea premixes, bakery, confectionery & digestive formulations.", specification: "Pungency High • 80 Mesh" },

  // 9-12. Chillies
  { id: 9, name: "Bedgi Red Chilli Powder", category: "Pure Spices", image: "/images/powders/Bedgyi Mirchi Powder.png", description: "Vibrant deep red Bedgi chilli variety, prized for intense natural color (ASTA 100+) & medium heat.", specification: "ASTA 100+ • Medium Heat" },
  { id: 10, name: "Chapata Red Chilli Powder", category: "Pure Spices", image: "/images/powders/Chapata Mirchi Powder.png", description: "High-spiciness Chapata chilli powder for intense heat profiles in hot sauces & snacks.", specification: "High Capsaicin • Rich Red" },
  { id: 11, name: "Bedgi & Chapata Mix Powder", category: "Pure Spices", image: "/images/powders/Bedgi and Chapata Mix Powder.JPG", description: "Balanced blend of Bedgi color and Chapata heat for commercial food manufacturers.", specification: "Color & Heat Synergistic Blend" },
  { id: 12, name: "Yellow Chilli Powder", category: "Pure Spices", image: "/images/powders/Yellow Chilli Powder.jpg", description: "Mild, aromatic yellow chilli powder for light gravies, pickles, marinades & yellow sauces.", specification: "100% Pure Yellow Variety" },

  // 13-14. Veggie Powders
  { id: 13, name: "Tomato Powder", category: "Fruit & Veggie Powders", image: "/images/powders/Tomato Powder.png", description: "Tangy, rich lycopene-packed tomato powder for instant soup mixes, snack seasonings & tomato pastes.", specification: "Low-Temp Dried • Free Flowing" },
  { id: 14, name: "Potato Powder", category: "Fruit & Veggie Powders", image: "/images/powders/Potato Powder.JPG", description: "Smooth potato powder for thickeners, instant mashed potatoes & extruded snacks.", specification: "Food Grade • Low Moisture" },

  // 15-17. Spices & RTC
  { id: 15, name: "Red Onion Powder", category: "Pure Spices", image: "/images/powders/Red Onion Powder.JPG", description: "Consistent onion flavor without moisture clumps for commercial seasonings & dry rub mixes.", specification: "80 Mesh • Free Flowing" },
  { id: 16, name: "Garam Masala Blend", category: "Pure Spices", image: "/images/powders/Garam Masala.JPG", description: "Roasted multi-spice Indian garam masala blend for food processors & commercial kitchens.", specification: "Custom Roasted Ratio" },
  { id: 17, name: "Green Curry RTC Masala", category: "Pure Spices", image: "/images/powders/Green Curry RTC Masala.JPG", description: "Ready-to-cook green curry spice formulation for instant meals.", specification: "Instant RTC Formulation" },

  // 18-25. Herbal & Wellness
  { id: 18, name: "Shatavari Powder", category: "Herbal & Wellness", image: "/images/powders/Shatavari Powder.JPG", description: "Pure Asparagus racemosus root powder for vitality, hormonal health & nutraceutical drinks.", specification: "Saponins Rich • Pure Root" },
  { id: 19, name: "Ashwagandha Powder", category: "Herbal & Wellness", image: "/images/powders/Ashwagandha Powder.JPG", description: "Withanolide-rich Ayurvedic adaptogen root powder for energy, stress relief & wellness blends.", specification: "Withanolide 2.5%+ • Root Extract" },
  { id: 20, name: "Lemongrass Powder", category: "Herbal & Wellness", image: "/images/powders/Lemongrass Powder.JPG", description: "Aromatic citral-rich lemongrass powder for herbal teas, functional beverages & seasonings.", specification: "Citral Rich • Pure Leaf" },
  { id: 21, name: "Guduchi (Giloy) Powder", category: "Herbal & Wellness", image: "/images/powders/Guduchi Powder.JPG", description: "Immunity booster Tinospora cordifolia stem powder for wellness shots & herbal formulations.", specification: "Bitter Active • 100% Pure" },
  { id: 22, name: "Neem Powder", category: "Herbal & Wellness", image: "/images/powders/Neem Powder.JPG", description: "Medicinal Azadirachta indica leaf powder for health detox, cosmetics & organic agriculture.", specification: "Azadirachtin Active • Fine Mesh" },
  { id: 23, name: "Triphala Powder", category: "Herbal & Wellness", image: "/images/powders/Triphala Powder.JPG", description: "Synergistic 3-fruit Ayurvedic blend (Amla + Harda + Behda) for digestive wellness.", specification: "Classic 1:1:1 Traditional Ratio" },
  { id: 24, name: "Harda (Haritaki) Powder", category: "Herbal & Wellness", image: "/images/powders/Harda Powder.JPG", description: "Purifying Haritaki fruit powder for traditional Ayurvedic digestive formulations.", specification: "Tannin Rich • Clean Grinding" },
  { id: 25, name: "Bael Powder", category: "Herbal & Wellness", image: "/images/powders/Bael Powder.jpg", description: "Aegle marmelos fruit pulp powder rich in mucilage & fiber for gut health products.", specification: "High Mucilage • Gut Health" },
  { id: 26, name: "Amla Powder", category: "Herbal & Wellness", image: "/images/powders/Amla Powder.JPG", description: "High natural Vitamin C concentration for nutraceutical blends, immunity drinks & Ayurvedic formulations.", specification: "Fine Powder • Vitamin C 300mg+" }
];

export default function ProductsSection({ onSelectProduct, onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  // Get Active Category Info
  const activeCategoryObj = useMemo(() => {
    return CATEGORIES.find(c => c.label === activeCategory) || CATEGORIES[0];
  }, [activeCategory]);

  // Filter Products Dynamically
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(product => {
      const matchesCategory = activeCategory === "All Products" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-12 bg-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-900/10 text-emerald-950 border border-emerald-950/20">
            <FaBoxesStacked className="text-amber-500" /> OUR PRODUCTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-2">
            Premium Food Ingredients for Industrial Applications
          </h2>
        </div>

        {/* TWO-COLUMN B2B CATALOG CONTAINER (STICKY SIDEBAR, NO INNER SCROLLBAR) */}
        <div className="products-layout flex flex-col md:flex-row gap-6 items-start">
          
          {/* LEFT — CATEGORY SIDEBAR (FULL SCREEN VIEWPORT HEIGHT, STICKY) */}
          <aside className="category-sidebar w-full md:w-[280px] flex-shrink-0 bg-white rounded-2xl border border-slate-200 shadow-md p-5 sticky top-24 h-auto md:h-[calc(100vh-115px)] min-h-[600px] flex flex-col justify-between z-10">
            <div>
              <div className="pb-3 mb-4 border-b border-slate-200 flex items-center justify-between">
                <h3 className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-2">
                  <FaLayerGroup className="text-amber-500" /> Categories
                </h3>
              </div>

              {/* VERTICAL CATEGORY NAV */}
              <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const count = cat.label === "All Products"
                    ? PRODUCTS_DATA.length
                    : PRODUCTS_DATA.filter(p => p.category === cat.label).length;
                  const isActive = activeCategory === cat.label;

                  return (
                    <button
                      key={cat.label}
                      onClick={() => setActiveCategory(cat.label)}
                      className={`flex-shrink-0 flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-emerald-950 text-white shadow-md border-l-4 border-amber-500 font-bold'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-emerald-950'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className={isActive ? 'text-amber-400' : 'text-slate-500'} />
                        <span className="whitespace-nowrap">{cat.label}</span>
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-emerald-950'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* BOTTOM B2B QUOTE BOX */}
            <div className="hidden md:block bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center mt-6">
              <span className="text-2xl block mb-1">📦</span>
              <h4 className="text-xs font-bold text-emerald-950 uppercase">Bulk Export Orders</h4>
              <p className="text-[11px] text-slate-600 mt-1">Ready in 25kg Bag-in-Box & HDPE Drums.</p>
              <button 
                onClick={() => onOpenQuote && onOpenQuote()}
                className="mt-3 w-full py-2 px-3 bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
              >
                Inquire Bulk Quote
              </button>
            </div>
          </aside>

          {/* RIGHT — PRODUCT PANEL (NATURAL PAGE SCROLL, NO INNER SCROLLBAR) */}
          <div className="product-panel flex-1 bg-white rounded-2xl border border-slate-200 shadow-md p-6 min-w-0">
            
            {/* CATEGORY HEADING & SEARCH BAR */}
            <div className="pb-4 mb-5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">CATEGORY VIEW</span>
                <h3 className="text-xl font-extrabold text-emerald-950">{activeCategory}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{activeCategoryObj.desc}</p>
              </div>

              <div className="flex items-center gap-3">
                {/* SEARCH INPUT */}
                <div className="relative w-64">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search ingredient..."
                    className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs outline-none focus:border-emerald-950 focus:bg-white transition-colors"
                  />
                </div>

                <span className="bg-emerald-950/10 text-emerald-950 border border-emerald-950/20 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  Showing {filteredProducts.length} Items
                </span>
              </div>
            </div>

            {/* PRODUCT GRID (4 COLUMNS IN 1 ROW ON DESKTOP) */}
            <div className="product-scroll-area grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full py-12 text-center bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="text-sm font-bold text-emerald-950">No products found</h4>
                  <p className="text-xs text-slate-500 mt-1">Try searching for another keyword or select 'All Products'.</p>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div 
                    key={product.id}
                    onClick={() => onSelectProduct && onSelectProduct(product)}
                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-950/30 transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {/* SQUARE PRODUCT IMAGE WRAPPER (1:1 RATIO) */}
                    <div className="relative aspect-square w-full bg-slate-50 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = '/images/powders/Banana Powder.png'; }}
                      />
                      <span className="absolute top-2 left-2 bg-emerald-950/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>

                    {/* COMPACT PRODUCT BODY */}
                    <div className="p-3.5 flex flex-col items-center text-center justify-between gap-2.5">
                      <h4 className="text-sm font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors truncate w-full">
                        {product.name}
                      </h4>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct && onSelectProduct(product);
                        }}
                        className="w-full py-1.5 px-2 text-[11px] font-bold text-emerald-950 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-md transition-colors flex items-center justify-center gap-1.5"
                      >
                        <FaFileLines className="text-amber-600 text-[10px]" /> View Details & Specs
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
