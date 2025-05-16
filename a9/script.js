  
const fruits = ["apple", "banana", "mango", "grapes", "orange", "kiwi"];


const checkAvailability = () => {
  const input = document.getElementById("fruitInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  result.textContent = fruits.includes(input)
    ? `${input} is available!`
    : `${input} is not available!!`;
};

document.getElementById("checkBtn").addEventListener("click", checkAvailability);