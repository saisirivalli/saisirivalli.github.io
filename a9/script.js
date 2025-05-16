  let fruits=["apple","orange","mango","banana"];
let result=fruits.filter((value) => orange);
document.getElementById(res).value=+result;
const fruits = ["apple", "banana", "mango", "grapes", "orange", "kiwi"];

let result=fruits.filter((value) => apple);
console.log(result);
let result=fruits.filter((value) => mango);
console.log(result);
let result=fruits.filter((value) => banana);
console.log(result);
const checkAvailability = () => {
  const input = document.getElementById("fruitInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  result.textContent = fruits.includes(input)
    ? `${input} is available!`
    : `${input} is not available!!`;
};

document.getElementById("checkBtn").addEventListener("click", checkAvailability);