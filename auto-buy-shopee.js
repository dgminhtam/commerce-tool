// ==UserScript==
// @name        Auto buy shopee
// @namespace   Violentmonkey Scripts
// @match       https://shopee.vn/product/1018372499/25788628832
// @grant       none
// @version     1.0.0
// @author      -
// @description 11/15/2024, 8:27:15 PM
// ==/UserScript==

(function() {
    window.onload = function() {
        const validate = () => {
            const observer = new MutationObserver(() => {
                const button = [...document.querySelectorAll('button')].find(btn => btn.textContent.trim().toLowerCase() === 'mua ngay'.toLowerCase());
                if (button) {
                    console.log("Button found.");
                    if (button.getAttribute('aria-disabled') !== 'true') {
                        button.click();
                        observer.disconnect();
                        clickButtonHasText('mua hàng');
                        clickButtonHasText('đặt hàng');
                    } else {
                        observer.disconnect();
                        location.reload();
                    }
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });

        };

        const clickButtonHasText = (btnText) => {
            const observer = new MutationObserver(() => {
                const button = [...document.querySelectorAll('button')]
                .find(btn => btn.textContent.trim().toLowerCase() === btnText.toLowerCase());
                if (button) {
                    button.click();
                    observer.disconnect();
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        };
        validate();
    };
})();