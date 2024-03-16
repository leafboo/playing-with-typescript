"use strict";
const descriptionElement = document.querySelector('.description');
const pressMeElement = document.querySelector('.pressMe');
console.log('hello');
if (descriptionElement && pressMeElement) {
    pressMeElement === null || pressMeElement === void 0 ? void 0 : pressMeElement.addEventListener('click', () => {
        descriptionElement.textContent = "You pressed the button";
    });
}
//# sourceMappingURL=index.js.map