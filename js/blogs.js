/*!
 * IMM Food Innovators LLP — blogs.js v4.0
 * Blog Grid Controller & Article Detail Reader Page.
 */

(function () {
  'use strict';

  function renderBlogsGrid() {
    const blogsData = window.blogsData || [];
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    blogGrid.innerHTML = blogsData.map(b => {
      let targetUrl = 'dehydrated-powder-supplier-buyers-guide-india.html';
      if (b.id === 'contract-farming-quality-control') targetUrl = 'contract-farming-quality-control-jalgaon.html';
      else if (b.id === 'banana-powder-benefits') targetUrl = 'banana-powder-health-benefits-b2b.html';
      else if (b.id === 'private-label-food-startup') targetUrl = 'private-label-food-manufacturing-guide.html';
      else if (b.id === 'dehydration-technology-drying') targetUrl = 'low-temperature-dehydration-technology.html';

      return `
        <article class="blog-card" style="cursor: pointer;" onclick="window.location.href='${targetUrl}'">
          <div class="blog-img-wrap" style="position: relative;">
            <img src="${b.image}" alt="${b.title}" loading="lazy">
            ${b.id === 'dehydrated-powder-supplier-buyers-guide-india' ? '<span style="position: absolute; top: 12px; left: 12px; background: rgba(10, 46, 29, 0.9); color: var(--accent-gold); font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 6px;">NEW • FEATURED</span>' : ''}
          </div>
          <div class="blog-body">
            <div class="blog-meta">${b.category} • ${b.readTime}</div>
            <h3 class="blog-title">${b.title}</h3>
            <p class="blog-excerpt">${b.excerpt}</p>
            <a href="${targetUrl}" class="blog-read-more" onclick="event.stopPropagation();">Read Full Article →</a>
          </div>
        </article>
      `;
    }).join('');
  }

  function initBlogDetail() {
    const container = document.getElementById('fullArticleContainer');
    if (!container) return;

    const blogsData = window.blogsData || [];
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id') || 'dehydrated-powder-supplier-buyers-guide-india';
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

    document.title = `${blog.metaTitle || blog.title} | IMM Food Innovators LLP`;
    if (blog.metaDescription) {
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) descMeta.setAttribute('content', blog.metaDescription);
      const ogDescMeta = document.querySelector('meta[property="og:description"]');
      if (ogDescMeta) ogDescMeta.setAttribute('content', blog.metaDescription);
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    renderBlogsGrid();
    initBlogDetail();
    console.log('IMM Food Innovators v4.0 blogs.js loaded ✅');
  });

})();
