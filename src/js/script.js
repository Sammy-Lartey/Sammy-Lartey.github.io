'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // element toggle function
  const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

  // sidebar variables
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // sidebar toggle functionality for mobile
  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
  } else {
    console.error("Sidebar Button not found!");
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
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  // add click event to all modal items if they exist
  if (testimonialsItem.length > 0) {
    testimonialsItem.forEach(item => {
      item.addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        testimonialsModalFunc();
      });
    });
  } else {
    console.error("Testimonials items not found!");
  }

  // add click event to modal close button if it exists
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  } else {
    console.error("Modal Close Button not found!");
  }

  if (overlay) {
    overlay.addEventListener("click", testimonialsModalFunc);
  } else {
    console.error("Overlay not found!");
  }

  // custom select variables
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  if (select) {
    select.addEventListener("click", function () { elementToggleFunc(this); });
  } else {
    console.error("Select element not found!");
  }

  // add event in all select items if they exist
  if (selectItems.length > 0) {
    selectItems.forEach(item => {
      item.addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    });
  } else {
    console.error("Select items not found!");
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
  }

  // add event in all filter button items for large screen
  let lastClickedBtn = filterBtn[0];

  if (filterBtn.length > 0) {
    filterBtn.forEach(btn => {
      btn.addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      });
    });
  } else {
    console.error("Filter buttons not found!");
  }

  // contact form variables
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  // add event to all form input fields if they exist
  if (formInputs.length > 0) {
    formInputs.forEach(input => {
      input.addEventListener("input", function () {
        // check form validation
        formBtn.disabled = !form.checkValidity();
      });
    });
  } else {
    console.error("Form inputs not found!");
  }

  // page navigation variables
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // add event to all nav links if they exist
  if (navigationLinks.length > 0 && pages.length > 0) {
    navigationLinks.forEach((link, i) => {
      link.addEventListener("click", function () {
        pages.forEach((page, j) => {
          const isActive = link.innerHTML.toLowerCase() === page.dataset.page;
          page.classList.toggle("active", isActive);
          navigationLinks[j].classList.toggle("active", isActive);
        });
        window.scrollTo(0, 0);
      });
    });
  } else {
    console.error("Navigation links or pages not found!");
  }
});
