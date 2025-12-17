/**
 * Publication Category Filtering
 *
 * Filters articles by category using the sticky subnav.
 * Articles are shown/hidden based on their data-tags attribute.
 *
 * Usage:
 * - Each article card should have: data-tags="tag1 tag2"
 * - Category links should have: data-filter="tagname" or data-filter="all"
 * - The "all" filter shows all articles
 */

document.addEventListener('DOMContentLoaded', function() {
  // Support both old (filter-btn) and new (category-link) class names
  const categoryLinks = document.querySelectorAll('.category-link, .filter-btn');
  const articleCards = document.querySelectorAll('.article-card, .post-card');
  const noArticlesMessage = document.getElementById('no-articles-message') || document.getElementById('no-posts-message');

  // Exit early if no category links found
  if (categoryLinks.length === 0) return;

  /**
   * Filter articles by the selected category
   * @param {string} filter - The category to filter by, or 'all' for all articles
   */
  function filterArticles(filter) {
    let visibleCount = 0;

    articleCards.forEach(function(card) {
      const tags = card.getAttribute('data-tags') || '';
      const tagArray = tags.split(' ').filter(Boolean);

      // Show article if filter is 'all' or if article has the matching tag
      const shouldShow = filter === 'all' || tagArray.includes(filter);

      if (shouldShow) {
        card.classList.remove('hidden');
        card.removeAttribute('aria-hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
        card.setAttribute('aria-hidden', 'true');
      }
    });

    // Show/hide "no articles" message
    if (noArticlesMessage) {
      if (visibleCount === 0) {
        noArticlesMessage.hidden = false;
      } else {
        noArticlesMessage.hidden = true;
      }
    }
  }

  /**
   * Update active state on category links
   * @param {HTMLElement} activeLink - The link that was clicked
   */
  function updateActiveLink(activeLink) {
    categoryLinks.forEach(function(link) {
      link.classList.remove('active');
      link.setAttribute('aria-pressed', 'false');
    });
    activeLink.classList.add('active');
    activeLink.setAttribute('aria-pressed', 'true');
  }

  // Add click handlers to category links
  categoryLinks.forEach(function(link) {
    // Set initial aria-pressed state
    link.setAttribute('aria-pressed', link.classList.contains('active') ? 'true' : 'false');

    link.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      updateActiveLink(this);
      filterArticles(filter);
    });
  });

  // Add keyboard navigation for category subnav
  const categoryNav = document.querySelector('.category-subnav-inner, .filter-bar');
  if (categoryNav) {
    categoryNav.addEventListener('keydown', function(e) {
      const links = Array.from(categoryLinks);
      const currentIndex = links.indexOf(document.activeElement);

      if (currentIndex === -1) return;

      let newIndex;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          newIndex = (currentIndex + 1) % links.length;
          links[newIndex].focus();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          newIndex = (currentIndex - 1 + links.length) % links.length;
          links[newIndex].focus();
          break;
        case 'Home':
          e.preventDefault();
          links[0].focus();
          break;
        case 'End':
          e.preventDefault();
          links[links.length - 1].focus();
          break;
      }
    });
  }
});
