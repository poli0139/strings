"use strict";
window.addEventListener("DOMContentLoaded", settingUp);
let select = document.querySelector("#select").value;
let output = document.querySelector("#output");
let input = document.querySelector("#input").value;
let result;

function settingUp() {
  document.querySelector("#select").addEventListener("change", readSelect);
  document.querySelector("#input").addEventListener("input", readInput);
  document.querySelector("#generate").addEventListener("click", generateOutput);
}
function readInput() {
  input = document.querySelector("#input").value;
  //   console.log(input);
}
function readSelect() {
  select = document.querySelector("#select").value;
  console.log(select);
}
function generateOutput(event) {
  event.preventDefault();
  console.log("works");
  if (select === "firstName") {
    result = input[0].toUpperCase() + input.substring(1).toLowerCase();
    console.log(result);
  }
  if (select === "fullName_findFirst") {
    result = input.substring(input.indexOf(" "), input.lastIndexOf());
  }
  if (select === "fullName_findlenght") {
    result = input.substring(input.indexOf(" "), input.lastIndexOf()).length;
    console.log(result);
  }
  if (select === "fullName_middle") {
    result = input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "));
    console.log(result);
  }
  if (select === "filename") {
    result = input.endsWith(".jpg") + input.endsWith(".png");
    if (result == 1) {
      result = true;
    } else {
      result = false;
    }
    console.log(result);
  }

  if (select === "any_third") {
    result =
      input.substring(0, 2).toLowerCase() +
      input[2].toUpperCase() +
      input.substring(3).toLowerCase();
  }

  showResult();
}
function showResult() {
  document.querySelector("#output").value = result;
  console.log("works");
}
