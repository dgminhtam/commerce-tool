// ==UserScript==
// @name        Auto Checkout Lazada
// @namespace   Violentmonkey Scripts
// @match       https://checkout.lazada.vn/shipping*
// @grant       none
// @version     1.0.1
// @author      dgminhtam
// @description 11/15/2024, 8:27:15 PM
// ==/UserScript==

(function() {
  const checkout = () => {
    const buttonPayArea = document.querySelector('div.checkout-order-total');
    if (buttonPayArea) {
      const buttons = buttonPayArea.querySelectorAll('div');
      const button = Array.from(buttons).find(btn => btn.textContent.trim() === 'Đặt hàng');
      if (button) {
        button.click();
      }
    }
  };
  window.onload = function() {
    checkout();
  };
})();