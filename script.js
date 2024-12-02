const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const wt = document.querySelector("#wt");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please Enter a Valid Value";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please Enter a Valid Value";
  } else {
    const bmi = (weight / (height * height)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.5) {
      wt.innerHTML = "You are UNDER WEIGHT";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      wt.innerHTML = "You are PERFECT";
    } else {
      wt.innerHTML = "You are OVER WEIGHT";
    }
  }
});
