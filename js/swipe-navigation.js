/**
 * Mobile Swipe Navigation
 * Enables swipe gestures to navigate between pages on mobile devices
 */
(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    mobileBreakpoint: 767,
    minSwipeDistance: 50,
    maxSwipeTime: 300,
    edgeZone: 30, // pixels from edge to initiate swipe
    feedbackOpacity: 0.6
  };

  // Main pages in navigation order
  const MAIN_PAGES = [
    { path: '/', name: 'Insights' },
    { path: '/about.html', name: 'About' },
    { path: '/contact.html', name: 'Connect' }
  ];

  // Post pages in order (as they appear on homepage)
  const POST_PAGES = [
    { path: '/posts/product-metrics-guide.html', name: 'Guide to Product Metrics' },
    { path: '/posts/product-metrics-journey.html', name: 'The Product Metrics Journey' },
    { path: '/posts/post-1.html', name: 'Product Leadership Strategy' },
    { path: '/posts/post-2.html', name: 'Customer-Centric Product Development' },
    { path: '/posts/post-3.html', name: 'Empowered Teams' },
    { path: '/posts/post-4.html', name: 'How to Validate Product Ideas' },
    { path: '/posts/post-5.html', name: 'Building a Product Roadmap' }
  ];

  // State
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;
  let isSwiping = false;
  let swipeIndicator = null;

  /**
   * Check if we're on mobile viewport
   */
  function isMobile() {
    return window.innerWidth <= CONFIG.mobileBreakpoint;
  }

  /**
   * Get current page path normalized
   */
  function getCurrentPath() {
    let path = window.location.pathname;
    // Normalize paths
    if (path === '' || path === '/index.html') {
      path = '/';
    }
    return path;
  }

  /**
   * Determine which page list to use based on current page
   */
  function getPageList() {
    const path = getCurrentPath();
    if (path.includes('/posts/')) {
      return POST_PAGES;
    }
    return MAIN_PAGES;
  }

  /**
   * Find current page index in the page list
   */
  function getCurrentPageIndex(pages) {
    const currentPath = getCurrentPath();
    return pages.findIndex(page => {
      // Handle both exact matches and variations
      const normalizedPagePath = page.path;
      const normalizedCurrentPath = currentPath;

      // Direct match
      if (normalizedPagePath === normalizedCurrentPath) return true;

      // Handle index.html variations
      if (normalizedPagePath === '/' &&
          (normalizedCurrentPath === '/index.html' || normalizedCurrentPath === '')) {
        return true;
      }

      // Handle relative paths in posts
      if (currentPath.includes('/posts/') && page.path.includes('/posts/')) {
        const currentFile = currentPath.split('/').pop();
        const pageFile = page.path.split('/').pop();
        return currentFile === pageFile;
      }

      return false;
    });
  }

  /**
   * Get adjacent page based on direction
   */
  function getAdjacentPage(direction) {
    const pages = getPageList();
    const currentIndex = getCurrentPageIndex(pages);

    if (currentIndex === -1) return null;

    const newIndex = direction === 'left' ? currentIndex + 1 : currentIndex - 1;

    if (newIndex < 0 || newIndex >= pages.length) {
      return null;
    }

    return pages[newIndex];
  }

  /**
   * Create swipe indicator element
   */
  function createSwipeIndicator() {
    if (swipeIndicator) return;

    swipeIndicator = document.createElement('div');
    swipeIndicator.className = 'swipe-indicator';
    swipeIndicator.innerHTML = `
      <div class="swipe-indicator-content">
        <span class="swipe-indicator-arrow"></span>
        <span class="swipe-indicator-text"></span>
      </div>
    `;
    document.body.appendChild(swipeIndicator);
  }

  /**
   * Show swipe indicator
   */
  function showSwipeIndicator(direction, page) {
    if (!swipeIndicator) createSwipeIndicator();

    const arrow = swipeIndicator.querySelector('.swipe-indicator-arrow');
    const text = swipeIndicator.querySelector('.swipe-indicator-text');

    arrow.textContent = direction === 'left' ? '→' : '←';
    text.textContent = page.name;

    swipeIndicator.classList.add('visible');
    swipeIndicator.classList.remove('left', 'right');
    swipeIndicator.classList.add(direction === 'left' ? 'right' : 'left');
  }

  /**
   * Hide swipe indicator
   */
  function hideSwipeIndicator() {
    if (swipeIndicator) {
      swipeIndicator.classList.remove('visible');
    }
  }

  /**
   * Navigate to page
   */
  function navigateToPage(page) {
    if (!page) return;

    // Add transition class for exit animation
    document.body.classList.add('swipe-navigating');

    // Navigate after brief delay for visual feedback
    setTimeout(() => {
      // Handle relative paths for posts
      let targetPath = page.path;
      if (getCurrentPath().includes('/posts/') && !page.path.includes('/posts/')) {
        targetPath = '..' + page.path;
      } else if (!getCurrentPath().includes('/posts/') && page.path.includes('/posts/')) {
        targetPath = '.' + page.path;
      } else if (getCurrentPath().includes('/posts/') && page.path.includes('/posts/')) {
        targetPath = page.path.split('/').pop();
      }

      window.location.href = targetPath;
    }, 150);
  }

  /**
   * Check if touch is on an interactive element that should prevent swipe
   */
  function isInteractiveElement(element) {
    const interactiveSelectors = [
      'a', 'button', 'input', 'textarea', 'select',
      '[role="button"]', '[role="tab"]', '[role="tabpanel"]',
      '.tabs-container', '.quick-nav-scroll', '.booking-cards'
    ];

    return interactiveSelectors.some(selector => element.closest(selector));
  }

  /**
   * Handle touch start
   */
  function handleTouchStart(e) {
    if (!isMobile()) return;

    // Don't interfere with interactive elements
    if (isInteractiveElement(e.target)) return;

    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
    isSwiping = false;
  }

  /**
   * Handle touch move
   */
  function handleTouchMove(e) {
    if (!isMobile() || touchStartX === 0) return;

    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    const deltaX = touchX - touchStartX;
    const deltaY = touchY - touchStartY;

    // Only trigger if horizontal movement is dominant
    if (Math.abs(deltaX) < Math.abs(deltaY)) return;

    // Determine swipe direction
    const direction = deltaX > 0 ? 'right' : 'left';
    const adjacentPage = getAdjacentPage(direction);

    if (adjacentPage && Math.abs(deltaX) > CONFIG.minSwipeDistance / 2) {
      isSwiping = true;
      showSwipeIndicator(direction, adjacentPage);
    } else {
      hideSwipeIndicator();
    }
  }

  /**
   * Handle touch end
   */
  function handleTouchEnd(e) {
    if (!isMobile() || !isSwiping) {
      hideSwipeIndicator();
      touchStartX = 0;
      return;
    }

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const elapsedTime = Date.now() - touchStartTime;

    // Check if swipe is valid (fast enough and far enough)
    if (Math.abs(deltaX) >= CONFIG.minSwipeDistance && elapsedTime <= CONFIG.maxSwipeTime) {
      const direction = deltaX > 0 ? 'right' : 'left';
      const adjacentPage = getAdjacentPage(direction);

      if (adjacentPage) {
        navigateToPage(adjacentPage);
      }
    }

    hideSwipeIndicator();
    touchStartX = 0;
    isSwiping = false;
  }

  /**
   * Initialize swipe navigation
   */
  function init() {
    // Only initialize on mobile
    if (!isMobile()) return;

    // Create indicator
    createSwipeIndicator();

    // Add event listeners with passive option for better performance
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Re-check on resize
    window.addEventListener('resize', () => {
      if (!isMobile()) {
        hideSwipeIndicator();
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
