// ==UserScript==
// @name        Auto Buy lazada
// @namespace   Violentmonkey Scripts
// @match       https://www.lazada.vn/i2621371183-s12788125436.html
// @grant       none
// @version     1.0.1
// @author      dgminhtam
// @description 11/30/2024, 3:29:40 PM
// ==/UserScript==

(function() {
  const buy = () => {
    const buttonArea = document.querySelector('#module_add_to_cart');
    if (buttonArea) {
      const buttons = buttonArea.querySelectorAll('button.add-to-cart-buy-now-btn');
      const button = Array.from(buttons).find(btn => btn.textContent.trim() === 'Mua ngay');
      if (button) {
        button.click();
      } else {
        location.reload();
      }
    }
  };
  window.onload = function() {
    buy();
  };
})();