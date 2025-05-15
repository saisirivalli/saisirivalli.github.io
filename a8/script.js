 const getValues = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  return { num1, num2 };
};

function add() {
  const { num1, num2 } = getValues();
  document.getElementById("result").textContent = `Addition: ${num1 + num2}`;
}

const subtract = () => {
  const { num1, num2 } = getValues();
  document.getElementById("result").textContent = `Subtraction: ${num1 - num2}`;
};

const multiply = () => {
  const { num1, num2 } = getValues();
  document.getElementById("result").textContent = `Multiplication: ${num1 * num2}`;
};

const divide = () => {
  const { num1, num2 } = getValues();
  if (num2 === 0) {
    document.getElementById("result").textContent = "Error: Division by zero";
  } else {
    document.getElementById("result").textContent = `Division: ${num1 / num2}`;
  }
};