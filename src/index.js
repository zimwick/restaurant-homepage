"use strict";
import "./style.css";
import homeHtml from "./home.js";
import menuHtml from "./menu.js";
import contactHtml from "./contact.js";

const onLoad = (function () {
  let content = document.getElementById("content");
  const homeBtn = document.getElementById("home-btn");
  const menuBtn = document.getElementById("menu-btn");
  const contactBtn = document.getElementById("contact-btn");
  content.innerHTML = homeHtml;

  homeBtn.addEventListener("click", function () {
    content.innerHTML = homeHtml;
  });

  menuBtn.addEventListener("click", function () {
    content.innerHTML = menuHtml;
  });

  contactBtn.addEventListener("click", function () {
    content.innerHTML = contactHtml;
  });
})();
