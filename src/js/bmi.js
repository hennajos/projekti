const lowBmi = "BMI alle 18,5 viittaa alipainoon.";
const normalBmi = "BMI 18,5-25 on normaalipainossa.";
const highBmi = "BMI viittaa ylipainoon.";

const bmiForm = document.querySelector("form");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const calculateButton = document.querySelector(".calculate");
const bmiScoreElement = document.querySelector(".bmi-score");
const analysisElement = document.querySelector(".analysis");

calculateButton.addEventListener("click", (event) => {
    console.log("Haetaan tietoja");
    event.preventDefault();
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);
    console.log(weight, height);

    if (!weight || !height) {
        analysisElement.innerText =
        "Et antanut kahta arvoa";
        return;
    }
    calculateBMI(weight, height);
});

function calculateBMI(weight, height) {
    const bmi = (weight / (height / 100) ** 2).toFixed(1);
    bmiScoreElement.innerText = bmi;

    if (bmi < 18.5) {
        document.querySelector(".bmi0-19").classList.add("lowBmi");
        document.querySelector(".bmi19-25").classList.remove("normalBmi");
        document.querySelector(".bmi25-40").classList.remove("highBmi");
        analysisElement.innerText = lowBmi;
    } else if (bmi > 25) {
        document.querySelector(".bmi0-19").classList.remove("lowBmi");
        document.querySelector(".bmi19-25").classList.remove("normalBmi");
        document.querySelector(".bmi25-40").classList.add("highBmi");
        analysisElement.innerText = highBmi;
    } else {
        document.querySelector(".bmi0-19").classList.remove("lowBmi");
        document.querySelector(".bmi19-25").classList.add("normalBmi");
        document.querySelector(".bmi25-40").classList.remove("highBmi");
        analysisElement.innerText = normalBmi;
    }
};