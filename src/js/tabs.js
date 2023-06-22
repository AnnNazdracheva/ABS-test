export function initTabs() {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.nav-product__item')) {
      const tabNavItem = targetElement.closest('.nav-product__item');
      if (!tabNavItem.classList.contains('nav-product__item_active')) {
        const activeTabNavItem = document.querySelector('.nav-product__item_active');
        activeTabNavItem.classList.remove('nav-product__item_active');
        tabNavItem.classList.add('nav-product__item_active');
  
        const tabItems = document.querySelectorAll('.product-groups__tab');
        const activeTabItem = document.querySelector('.product-groups__tab_active');
  
        activeTabItem.classList.remove('product-groups__tab_active');
        tabItems[getIndex(tabNavItem)].classList.add('product-groups__tab_active');
      }
    }
    function getIndex(el) {
      return Array.from(el.parentNode.children).indexOf(el);
    }
  }   
}