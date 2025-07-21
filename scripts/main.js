import { ScreenEffects } from "./animations.js";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("body");
  const botones = document.querySelectorAll(".menuText");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      ScreenEffects.screenShake(body, 300);
    });
  });
});