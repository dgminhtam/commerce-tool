// ==UserScript==
// @name        Auto checkout cart shopee
// @namespace   Violentmonkey Scripts
// @match       https://shopee.vn/cart/*
// @grant       none
// @version     1.0.0
// @author      dgminhtam
// @description 11/15/2024, 8:27:15 PM
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function() {
        const productId = '25033918016';
        const validate = () => {
            const observer = new MutationObserver(() => {
                const link = document.querySelector(`a[href*='${productId}']`);
                if (link) {
                    console.log('link found.');
                    observer.disconnect();
                    const section = link.closest('section');
                    if (section) {
                        console.log('Section found.');
                        const outOfStockElement = Array.from(section.querySelectorAll('*'))
                        .find(element => element.textContent.trim() === 'hết hàng');
                        if (outOfStockElement) {
                            console.log('Out of stock, Reload.');
                            location.reload();
                        } else {
                            selectCheckbox(section);
                        }
                    } else {
                        console.log('Section not found.');
                    }
                } else {
                    console.log('Link not found.');
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        };

        const selectCheckbox = (section) => {
            const checkbox = section.querySelector('input.stardust-checkbox__input');
            if (checkbox) {
                const checked = checkbox.getAttribute('aria-checked');
                if (checked === 'false') {
                    checkbox.click();
                    console.log('Checkbox selected.');
                }
                clickBuyButton();
            } else if (checkbox) {
                console.log('Checkbox is already selected.');
                clickButtonHasText('mua hàng');
                clickButtonHasText('đặt hàng');
            } else {
                console.log('Checkbox not found.');
            }
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