/*!
 * IMM Food Innovators LLP — Products Data & Technical Specifications
 * 
 * TO ADD A NEW PRODUCT:
 * Simply copy one product object below, paste it at the end of the array,
 * update the id, name, category, image, description, and details specs.
 */

const B2B_CATEGORIES = [
  { label: "All Products", icon: "📦" },
  { label: "Fruit & Veggie Powders", icon: "🍌" },
  { label: "Pure Spices", icon: "🌶️" },
  { label: "Herbal & Wellness", icon: "🌿" }
];

const productsData = [
  {
    id: 1,
    name: "Banana Powder",
    category: "Fruit & Veggie Powders",
    image: "images/powders/Banana Powder.webp",
    isHero: true,
    description: "100% pure Cavendish Green & Ripe banana powder varieties from Jalgaon. Packed with prebiotic resistant starch (~82%) and low moisture (<4.0%), ideal for infant nutrition/baby cereals, gluten-free baking, and functional foods.",
    spec: "80-100 Mesh • Prebiotic Starch ~82% • Moisture < 4.0%",
    details: {
      form: "Fine Micro-Ground Powder (Cavendish Green & Ripe Varieties)",
      mesh: "80 - 100 Fine Mesh",
      moisture: "< 4.0% Max (Low Moisture Processed)",
      microbial: "Total Plate Count: 70 CFU/g | Yeast & Mould: Absent",
      activeMarker: "Prebiotic Resistant Starch (~82%) & Natural Potassium (>1,200 mg/100g)",
      color: "Off-White to Pale Creamy Yellow",
      odor: "Sweet Natural Cavendish Banana Aroma",
      packaging: "25 kg / 50 kg Moisture-Barrier HDPE Bags with PE Liner (Nitrogen Flushed)",
      shelfLife: "12 Months",
      moq: "100 kg",
      harvestSeason: "Year-Round (Peak Nov - March)",
      solubility: "Smooth Dispersible / Non-Clumping in Infant & Bakery Formulations"
    }
  },
  {
    id: 2,
    name: "Moringa Leaf Powder",
    category: "Herbal & Wellness",
    image: "images/powders/Moringa Powder.webp",
    isHero: true,
    description: "Micro-ground high-chlorophyll Moringa oleifera leaf powder processed with 50°C controlled dehydration and zero stem tolerance. Rich in plant protein & essential micronutrients, perfect for health beverages and nutraceuticals.",
    spec: "80-120 Mesh • 50°C Controlled Dehydration • Zero Stem Tolerance",
    details: {
      form: "Micro-Ground Dried Leaf Powder (50°C Controlled Dehydration, Zero Stem)",
      mesh: "80 - 120 Micro-Fine Mesh",
      moisture: "< 6.0% Max",
      microbial: "TPC < 50,000 CFU/g | E. Coli & Salmonella Absent",
      activeMarker: "Bioactive Plant Protein & High Natural Chlorophyll",
      color: "Vibrant Deep Emerald / Olive Green",
      odor: "Fresh Leafy Herbal Aroma",
      packaging: "25 kg / 50 kg Sealed Food-Grade HDPE Bags with PE Liner",
      shelfLife: "12 Months",
      moq: "50 kg",
      harvestSeason: "July to February",
      solubility: "100% Water-Dispersible in Beverages, Juices & Green Smoothies"
    }
  },
  {
    id: 3,
    name: "Salem Turmeric Powder",
    category: "Pure Spices",
    image: "images/powders/Salem Turmeric Powder.webp",
    isHero: true,
    description: "Premium pure Salem turmeric powder derived from 3.5%+ natural curcumin Khandesh clusters. Features unadulterated grinding and deep yellow hue, ideal for seasonings, curry bases, and nutraceutical blending.",
    spec: "Curcumin 3.5%+ • Khandesh Clusters • Unadulterated",
    details: {
      form: "Unadulterated Ground Salem Rhizome Powder (Khandesh Clusters)",
      mesh: "60 - 80 Standard Spice Mesh",
      moisture: "< 8.0% Max (ASTA / FSSAI Grade)",
      microbial: "TPC < 50,000 CFU/g | Yeast & Mould < 1,000 CFU/g",
      activeMarker: "3.5%+ Natural Active Curcuminoids",
      color: "Deep Yellow / Vibrant Golden Hue",
      odor: "Warm, Pungent & Earthy Spice Aroma",
      packaging: "25 kg / 50 kg Moisture-Proof HDPE Bags with Inner PE Liner",
      shelfLife: "12 Months",
      moq: "100 kg",
      harvestSeason: "January to April",
      solubility: "Ideal for Seasoning Powders, Warm Water & Oil Blending"
    }
  },
  {
    id: 4,
    name: "Shatavari Powder",
    category: "Herbal & Wellness",
    image: "images/powders/Shatavari Powder.webp",
    isHero: true,
    description: "Ayurvedic beverage grade Asparagus racemosus pure root powder with standardized active steroidal saponins (>5.0%). Ideal for vitality & female hormonal wellness formulations, tonic beverages, and nutraceutical extracts.",
    spec: "Pure Root Extract • Active Saponins > 5.0% • Ayurvedic Grade",
    details: {
      form: "Pure Root Extract Powder (Asparagus Racemosus)",
      mesh: "80 - 100 Mesh",
      moisture: "< 7.0% Max",
      microbial: "TPC < 50,000 CFU/g | E. Coli & Salmonella Absent",
      activeMarker: "Active Steroidal Saponins (Shatavarins > 5.0%)",
      color: "Light Beige to Amber Cream",
      odor: "Sweetish Slightly Bitter Herbal Aroma",
      packaging: "25 kg / 50 kg Poly-Lined Food-Grade HDPE Bags with PE Liner",
      shelfLife: "12 Months",
      moq: "50 kg",
      harvestSeason: "October to February",
      solubility: "Ayurvedic Beverage Grade — Smooth Dispersible in Warm Liquids & Milk"
    }
  },
  {
    id: 5,
    name: "Beetroot Powder",
    category: "Fruit & Veggie Powders",
    image: "images/powders/Beetroot Powder.webp",
    description: "Vibrant natural red betanin pigment for natural food coloring, meat processing & health beverages.",
    spec: "80 Mesh • 100% Water Soluble",
    details: {
      form: "Natural Vegetable Color Powder",
      mesh: "80 Mesh",
      moisture: "< 4.5% Max",
      activeMarker: "Natural Betanin Pigment & Dietary Nitrates",
      color: "Deep Ruby Red / Magenta",
      odor: "Earthy Sweet Beetroot Flavor",
      packaging: "25 kg / 50 kg Sealed Food-Grade Poly HDPE Bag",
      shelfLife: "12 Months",
      moq: "100 kg",
      solubility: "Fully Water Soluble (>95%)"
    }
  },
  {
    id: 6,
    name: "Chaha (Tea) Masala",
    category: "Pure Spices",
    image: "images/powders/Tea Masala.webp",
    description: "Proprietary aromatic tea masala spice formulation for instant chai premixes.",
    spec: "Custom Spice Ratio",
    details: {
      form: "Ground Multi-Spice Tea Premix Powder",
      mesh: "60 - 80 Fine Mesh",
      moisture: "< 6.0% Max",
      activeMarker: "Cardamom, Clove, Ginger & Cinnamon Spice Oils",
      color: "Warm Medium Brown",
      odor: "Intensely Aromatic Spice Aroma",
      packaging: "25 kg Food-Grade HDPE Bag",
      shelfLife: "12 Months",
      moq: "50 kg",
      solubility: "Infusible / Dispersible in Hot Tea & Milk"
    }
  },
  {
    id: 7,
    name: "Curry Leaves Powder",
    category: "Pure Spices",
    image: "images/powders/Curry Leaves Powder.webp",
    description: "Pure Murraya koenigii leaf powder rich in essential oils for authentic curry mixes.",
    spec: "Fine Mesh • Rich Essential Oils",
    details: {
      form: "Micro-Ground Leaf Spice Powder",
      mesh: "80 Mesh",
      moisture: "< 6.0% Max",
      activeMarker: "Volatile Essential Oils & Natural Iron",
      color: "Deep Natural Green",
      odor: "Characteristic Fresh Curry Leaf Aroma",
      packaging: "25 kg Poly-Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "50 kg",
      solubility: "Dispersible in Food Bases"
    }
  },
  {
    id: 8,
    name: "Garlic Powder",
    category: "Pure Spices",
    image: "images/powders/Garlic Powder.webp",
    description: "Pungent natural allicin garlic powder for meat seasonings, sausage premixes & instant gravies.",
    spec: "80-100 Mesh • Pure Allium",
    details: {
      form: "High-Pungency Dehydrated Vegetable Powder",
      mesh: "80 - 100 Fine Mesh",
      moisture: "< 5.0% Max",
      activeMarker: "Natural Allicin / Alliin Pungent Organosulfur Compounds",
      color: "Creamish Buff",
      odor: "Intense Pungent Characteristic Allium Aroma",
      packaging: "20 kg / 25 kg Sealed HDPE Bag in Corrugated Box",
      shelfLife: "12 Months (Hygroscopic - Keep Sealed)",
      moq: "200 kg",
      solubility: "Instant Water Dispersible"
    }
  },
  {
    id: 9,
    name: "Ginger Powder",
    category: "Pure Spices",
    image: "images/powders/Ginger Powder.webp",
    description: "Aromatic gingerol-rich powder for tea premixes, bakery, confectionery & digestive formulations.",
    spec: "Pungency High • 80 Mesh",
    details: {
      form: "Pure Ground Ginger Root Powder",
      mesh: "60 - 80 Spice Mesh",
      moisture: "< 7.0% Max",
      activeMarker: "Active Gingerols (>1.5%) & Volatile Essential Oils (>1.8%)",
      color: "Light Tan to Pale Buff Yellow",
      odor: "Strong Spicy Pungent Aroma",
      packaging: "25 kg / 50 kg Moisture-Proof Poly-Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "100 kg",
      solubility: "Earthy Dispersible"
    }
  },
  {
    id: 10,
    name: "Bedgi Red Chilli Powder",
    category: "Pure Spices",
    image: "images/powders/Bedgyi Mirchi Powder.webp",
    description: "Vibrant deep red Bedgi chilli variety, prized for intense natural color (ASTA 100+) & medium heat.",
    spec: "ASTA 100+ • Medium Heat",
    details: {
      form: "Ground Spice Powder",
      mesh: "50 - 80 Spice Mesh",
      moisture: "< 7.5% Max",
      activeMarker: "High Natural Color (ASTA 100+) & Medium Capsaicin",
      color: "Deep Vibrant Crimson Red",
      odor: "Mild Pungent Fruity Spice Aroma",
      packaging: "25 kg / 50 kg Moisture Barrier Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "100 kg",
      solubility: "Dispersible in Oils & Water"
    }
  },
  {
    id: 11,
    name: "Chapata Red Chilli Powder",
    category: "Pure Spices",
    image: "images/powders/Chapata Mirchi Powder.webp",
    description: "High-spiciness Chapata chilli powder for intense heat profiles in hot sauces & snacks.",
    spec: "High Capsaicin • Rich Red",
    details: {
      form: "Ground High-Heat Spice Powder",
      mesh: "50 - 80 Spice Mesh",
      moisture: "< 7.5% Max",
      activeMarker: "High Capsaicin Heat (35,000 - 50,000 SHU)",
      color: "Bright Rich Red",
      odor: "Intense Pungent Sharp Heat",
      packaging: "25 kg / 50 kg Moisture Barrier Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "100 kg",
      solubility: "Dispersible in Oils & Water"
    }
  },
  {
    id: 12,
    name: "Bedgi & Chapata Mix Powder",
    category: "Pure Spices",
    image: "images/powders/Bedgi and Chapata Mix Powder.webp",
    description: "Balanced blend of Bedgi color and Chapata heat for commercial food manufacturers.",
    spec: "Color & Heat Synergistic Blend",
    details: {
      form: "Blended Spice Powder",
      mesh: "50 - 80 Spice Mesh",
      moisture: "< 7.5% Max",
      activeMarker: "Synergistic ASTA Color & Capsaicin Balance",
      color: "Deep Fiery Red",
      odor: "Pungent Rich Spice Aroma",
      packaging: "25 kg / 50 kg Moisture Barrier Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "100 kg",
      solubility: "Dispersible in Oils & Water"
    }
  },
  {
    id: 13,
    name: "Yellow Chilli Powder",
    category: "Pure Spices",
    image: "images/powders/Yellow Chilli Powder.webp",
    description: "Mild, aromatic yellow chilli powder for light gravies, pickles, marinades & yellow sauces.",
    spec: "100% Pure Yellow Variety",
    details: {
      form: "Ground Yellow Spice Powder",
      mesh: "60 - 80 Spice Mesh",
      moisture: "< 7.5% Max",
      activeMarker: "Capsaicin & Natural Xanthophyll Pigments",
      color: "Bright Sunshine Yellow",
      odor: "Tangy Mild Spicy Aroma",
      packaging: "25 kg / 50 kg Poly-Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "100 kg",
      solubility: "Dispersible in Gravy Bases"
    }
  },
  {
    id: 14,
    name: "Tomato Powder",
    category: "Fruit & Veggie Powders",
    image: "images/powders/Tomato Powder.webp",
    description: "Tangy, rich lycopene-packed tomato powder for instant soup mixes, snack seasonings & tomato pastes.",
    spec: "Low-Temp Dried • Free Flowing",
    details: {
      form: "Fine Dehydrated Spray-Dried / Low-Temp Powder",
      mesh: "80 Mesh",
      moisture: "< 3.8% Max",
      activeMarker: "Natural Lycopene (>300 mg/kg) & Brix >90%",
      color: "Brilliant Natural Red",
      odor: "Tangy Ripe Tomato Flavor",
      packaging: "20 kg / 25 kg Moisture-Lock HDPE Bag in Box",
      shelfLife: "12 Months",
      moq: "200 kg",
      solubility: "High Water Solubility (>92%)"
    }
  },
  {
    id: 15,
    name: "Potato Powder",
    category: "Fruit & Veggie Powders",
    image: "images/powders/Potato Powder.webp",
    description: "Smooth potato powder for thickeners, instant mashed potatoes & extruded snacks.",
    spec: "Food Grade • Low Moisture",
    details: {
      form: "Fine Starch-Rich Vegetable Powder",
      mesh: "80 Mesh",
      moisture: "< 5.0% Max",
      activeMarker: "Natural Soluble Potato Starch & Fiber",
      color: "Pale Off-White Cream",
      odor: "Neutral Mild Potato Aroma",
      packaging: "25 kg Food-Grade HDPE Bag",
      shelfLife: "12 Months",
      moq: "200 kg",
      solubility: "Smooth Thickening Dispersibility"
    }
  },
  {
    id: 16,
    name: "Red Onion Powder",
    category: "Pure Spices",
    image: "images/powders/Red Onion Powder.webp",
    description: "Consistent onion flavor without moisture clumps for commercial seasonings & dry rub mixes.",
    spec: "80 Mesh • Free Flowing",
    details: {
      form: "High-Pungency Dehydrated Vegetable Powder",
      mesh: "80 - 100 Fine Mesh",
      moisture: "< 5.0% Max",
      activeMarker: "Natural Allium Organosulfur Flavor Compounds",
      color: "Pinkish Buff",
      odor: "Intense Pungent Sweet Onion Aroma",
      packaging: "20 kg / 25 kg Sealed HDPE Bag in Box",
      shelfLife: "12 Months",
      moq: "200 kg",
      solubility: "Instant Water Dispersible"
    }
  },
  {
    id: 17,
    name: "Garam Masala Blend",
    category: "Pure Spices",
    image: "images/powders/Garam Masala.webp",
    description: "Roasted multi-spice Indian garam masala blend for food processors & commercial kitchens.",
    spec: "Custom Roasted Ratio",
    details: {
      form: "Blended Roasted Spice Powder",
      mesh: "60 - 80 Spice Mesh",
      moisture: "< 7.0% Max",
      activeMarker: "Rich Volatile Essential Oils from Whole Spices",
      color: "Deep Warm Brown",
      odor: "Rich Roasted Warm Spice Aroma",
      packaging: "25 kg Poly-Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "100 kg",
      solubility: "Dispersible in Warm Oils & Gravies"
    }
  },
  {
    id: 18,
    name: "Green Curry RTC Masala",
    category: "Pure Spices",
    image: "images/powders/Green Curry RTC Masala.webp",
    description: "Ready-to-cook green curry spice formulation for instant meals.",
    spec: "Instant RTC Formulation",
    details: {
      form: "Ready-To-Cook Spice & Herb Blend",
      mesh: "60 - 80 Mesh",
      moisture: "< 6.0% Max",
      activeMarker: "Coriander, Green Chilli, Lemongrass & Spices",
      color: "Vibrant Herb Green",
      odor: "Fresh Spicy Savory Aroma",
      packaging: "25 kg Sealed Poly HDPE Bag",
      shelfLife: "12 Months",
      moq: "100 kg",
      solubility: "Instant Curry Dispersible"
    }
  },
  {
    id: 19,
    name: "Ashwagandha Powder",
    category: "Herbal & Wellness",
    image: "images/powders/Ashwagandha Powder.webp",
    description: "Withanolide-rich Ayurvedic adaptogen root powder for energy, stress relief & wellness blends.",
    spec: "Withanolide 2.5%+ • Root Extract",
    details: {
      form: "Ayurvedic Adaptogenic Root Powder",
      mesh: "80 - 100 Mesh",
      moisture: "< 5.0% Max",
      activeMarker: "Active Withanolides (>2.5%)",
      color: "Pale Creamy Brown",
      odor: "Characteristic Horse-like Earthy Herbal Aroma",
      packaging: "25 kg Poly-Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "50 kg",
      solubility: "Dispersible in Warm Milk & Water"
    }
  },
  {
    id: 20,
    name: "Lemongrass Powder",
    category: "Herbal & Wellness",
    image: "images/powders/Lemongrass Powder.webp",
    description: "Aromatic citral-rich lemongrass powder for herbal teas, functional beverages & seasonings.",
    spec: "Citral Rich • Pure Leaf",
    details: {
      form: "Micro-Ground Dried Grass Powder",
      mesh: "80 Mesh",
      moisture: "< 6.0% Max",
      activeMarker: "Natural Citral Essential Oil",
      color: "Pale Yellowish Green",
      odor: "Fresh Citrusy Lemon Aroma",
      packaging: "25 kg Sealed HDPE Bag",
      shelfLife: "12 Months",
      moq: "50 kg",
      solubility: "Tea Infusible & Dispersible"
    }
  },
  {
    id: 21,
    name: "Guduchi (Giloy) Powder",
    category: "Herbal & Wellness",
    image: "images/powders/Guduchi Powder.webp",
    description: "Immunity booster Tinospora cordifolia stem powder for wellness shots & herbal formulations.",
    spec: "Bitter Active • 100% Pure",
    details: {
      form: "Ayurvedic Stem Powder",
      mesh: "80 Mesh",
      moisture: "< 5.0% Max",
      activeMarker: "Bitter Diterpenoid Compounds & Alkaloids",
      color: "Light Buff Brown",
      odor: "Intensely Bitter Herbal Aroma",
      packaging: "25 kg Poly-Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "50 kg",
      solubility: "Water Dispersible"
    }
  },
  {
    id: 22,
    name: "Neem Powder",
    category: "Herbal & Wellness",
    image: "images/powders/Neem Powder.webp",
    description: "Medicinal Azadirachta indica leaf powder for health detox, cosmetics & organic agriculture.",
    spec: "Azadirachtin Active • Fine Mesh",
    details: {
      form: "Micro-Ground Leaf Powder",
      mesh: "80 - 100 Fine Mesh",
      moisture: "< 5.0% Max",
      activeMarker: "Azadirachtin & Bitter Limonoids",
      color: "Deep Olive Green",
      odor: "Characteristic Strong Bitter Herbal Aroma",
      packaging: "25 kg Sealed HDPE Bag",
      shelfLife: "12 Months",
      moq: "50 kg",
      solubility: "Herbal Dispersible"
    }
  },
  {
    id: 23,
    name: "Triphala Powder",
    category: "Herbal & Wellness",
    image: "images/powders/Triphala Powder.webp",
    description: "Synergistic 3-fruit Ayurvedic blend (Amla + Harda + Behda) for digestive wellness.",
    spec: "Classic 1:1:1 Traditional Ratio",
    details: {
      form: "Blended Ayurvedic Fruit Powder",
      mesh: "80 Mesh",
      moisture: "< 5.5% Max",
      activeMarker: "Gallic Acid, Tannins & Vitamin C",
      color: "Tan Brownish Green",
      odor: "Astringent Sour Herbal Aroma",
      packaging: "25 kg Poly-Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "50 kg",
      solubility: "Water Dispersible"
    }
  },
  {
    id: 24,
    name: "Harda (Haritaki) Powder",
    category: "Herbal & Wellness",
    image: "images/powders/Harda Powder.webp",
    description: "Purifying Haritaki fruit powder for traditional Ayurvedic digestive formulations.",
    spec: "Tannin Rich • Clean Grinding",
    details: {
      form: "Pure Fruit Powder",
      mesh: "80 Mesh",
      moisture: "< 5.5% Max",
      activeMarker: "Chebulinic Acid & Natural Tannins",
      color: "Yellowish Tan Brown",
      odor: "Astringent Bitter Sweet Taste",
      packaging: "25 kg Poly-Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "50 kg",
      solubility: "Water Dispersible"
    }
  },
  {
    id: 25,
    name: "Bael Powder",
    category: "Herbal & Wellness",
    image: "images/powders/Bael Powder.webp",
    description: "Aegle marmelos fruit pulp powder rich in mucilage & fiber for gut health products.",
    spec: "High Mucilage • Gut Health",
    details: {
      form: "Dehydrated Fruit Pulp Powder",
      mesh: "80 Mesh",
      moisture: "< 5.0% Max",
      activeMarker: "Marmelosin & Dietary Soluble Mucilage Fiber",
      color: "Warm Orangish Brown",
      odor: "Sweet Tangy Aromatic Fruit Aroma",
      packaging: "25 kg Poly-Lined HDPE Bag",
      shelfLife: "12 Months",
      moq: "50 kg",
      solubility: "Mucilaginous Dispersible in Liquids"
    }
  },
  {
    id: 26,
    name: "Amla Powder",
    category: "Herbal & Wellness",
    image: "images/powders/Amla Powder.webp",
    description: "High natural Vitamin C concentration for nutraceutical blends, immunity drinks & Ayurvedic formulations.",
    spec: "Fine Powder • Vitamin C 300mg+",
    details: {
      form: "Raw Herbal Fruit Powder",
      mesh: "80 Mesh",
      moisture: "< 6.0% Max",
      activeMarker: "Natural Vitamin C (>4000 mg/100g) & Gallic Acid",
      color: "Tan Brownish Green",
      odor: "Astringent Sour Taste",
      packaging: "25 kg / 50 kg PE Lined Food-Grade HDPE Bag",
      shelfLife: "12 Months",
      moq: "100 kg",
      solubility: "Water Dispersible"
    }
  }
];

// Make accessible globally
window.B2B_CATEGORIES = B2B_CATEGORIES;
window.productsData = productsData;
