'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); };

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
} else {
  console.warn("Sidebar or Sidebar Button not found!");
}

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer) modalContainer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
};

// add click event to all modal items if they exist
if (testimonialsItem.length > 0) {
  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      if (modalImg && modalTitle && modalText) {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        testimonialsModalFunc();
      } else {
        console.warn("Modal image, title, or text element not found!");
      }
    });
  });
} else {
  console.warn("Testimonials items not found!");
}

// add click event to modal close button if it exists
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
} else {
  console.warn("Modal Close Button not found!");
}

if (overlay) {
  overlay.addEventListener("click", testimonialsModalFunc);
} else {
  console.warn("Overlay not found!");
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select && selectValue) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
} else {
  console.warn("Select or Select Value not found!");
}

// add event in all select items if they exist
if (selectItems.length > 0) {
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
} else {
  console.warn("Select items not found!");
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// add event in all filter button items for large screen if they exist
if (filterBtn.length > 0) {
  let lastClickedBtn = filterBtn[0];
  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });
} else {
  console.warn("Filter buttons not found!");
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input fields if they exist
if (form && formInputs.length > 0 && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
} else {
  console.warn("Form, form inputs, or form button not found!");
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links if they exist
if (navigationLinks.length > 0 && pages.length > 0) {
  navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
      pages.forEach(page => {
        if (this.innerHTML.toLowerCase() === page.dataset.page) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });
      navigationLinks.forEach(nav => nav.classList.remove("active"));
      this.classList.add("active");
      window.scrollTo(0, 0);
    });
  });
} else {
  console.warn("Navigation links or pages not found!");
}
