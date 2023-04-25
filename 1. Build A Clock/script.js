"use strict";

const hourHand = document.querySelector(".hand--hour");
const minuteHand = document.querySelector(".hand--minute");
const secondHand = document.querySelector(".hand--second");

const setClock = function () {
  const currentDate = new Date();

  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
};

setInterval(setClock, 1000);

const setRotation = function (element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
};

setClock();
