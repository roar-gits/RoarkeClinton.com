/**
 * Blog Post Tag Filtering
 *
 * Simple vanilla JavaScript for filtering blog posts by tag/category.
 * Posts are shown/hidden based on their data-tags attribute.
 *
 * Usage:
 * - Each post card should have: data-tags="tag1 tag2"
 * - Filter buttons should have: data-filter="tagname" or data-filter="all"
 * - The "all" filter shows all posts
 *
 * This will be replaced/enhanced when a CMS is added later.
 */

document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const postCards = document.querySelectorAll('.post-card');
  const noPostsMessage = document.getElementById('no-posts-message');

  // Exit early if no filter buttons found (e.g., on non-blog pages)
  if (filterButtons.length === 0) return;

  /**
   * Filter posts by the selected tag
   * @param {string} filter - The tag to filter by, or 'all' for all posts
   */
  function filterPosts(filter) {
    let visibleCount = 0;

    postCards.forEach(function(card) {
      const tags = card.getAttribute('data-tags') || '';
      const tagArray = tags.split(' ').filter(Boolean);

      // Show post if filter is 'all' or if post has the matching tag
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

    // Show/hide "no posts" message
    if (noPostsMessage) {
      if (visibleCount === 0) {
        noPostsMessage.hidden = false;
      } else {
        noPostsMessage.hidden = true;
      }
    }
  }

  /**
   * Update active state on filter buttons
   * @param {HTMLElement} activeButton - The button that was clicked
   */
  function updateActiveButton(activeButton) {
    filterButtons.forEach(function(btn) {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    activeButton.classList.add('active');
    activeButton.setAttribute('aria-pressed', 'true');
  }

  // Add click handlers to filter buttons
  filterButtons.forEach(function(button) {
    // Set initial aria-pressed state
    button.setAttribute('aria-pressed', button.classList.contains('active') ? 'true' : 'false');

    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      updateActiveButton(this);
      filterPosts(filter);
    });
  });

  // Add keyboard navigation for filter bar
  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    filterBar.addEventListener('keydown', function(e) {
      const buttons = Array.from(filterButtons);
      const currentIndex = buttons.indexOf(document.activeElement);

      if (currentIndex === -1) return;

      let newIndex;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          newIndex = (currentIndex + 1) % buttons.length;
          buttons[newIndex].focus();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
          buttons[newIndex].focus();
          break;
        case 'Home':
          e.preventDefault();
          buttons[0].focus();
          break;
        case 'End':
          e.preventDefault();
          buttons[buttons.length - 1].focus();
          break;
      }
    });
  }
});
