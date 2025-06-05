const customers = [
  { cart: "1234567890", pin: "1234", name: "John", balance: 0 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

let currentCustomer = null;

function login() {
  const cardInput = document.getElementById("cardNumber").value.trim();
  const pinInput = document.getElementById("pin").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const customer = customers.find(
    (c) => c.cart === cardInput && c.pin === pinInput
  );

  if (customer) {
    currentCustomer = customer;
    document.querySelector(".atm-box").style.display = "none";
    document.getElementById("welcomeBox").style.display = "block";
    document.getElementById("userName").textContent = customer.name;
    document.getElementById("balanceDisplay").textContent = `Balance: ${customer.balance}`;
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Invalid card number or PIN.";
  }
}

function handleTransaction() {
  const action = document.getElementById("actionType").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (action === "Deposit") {
    currentCustomer.balance += amount;
  } else if (action === "Withdraw") {
    if (currentCustomer.balance >= amount) {
      currentCustomer.balance -= amount;
    } else {
      alert("Insufficient balance.");
      return;
    }
  }

  document.getElementById("balanceDisplay").textContent = `Balance: ${currentCustomer.balance}`;
  document.getElementById("amount").value = "";
}

function logout() {
  document.querySelector(".atm-box").style.display = "block";
  document.getElementById("welcomeBox").style.display = "none";
  document.getElementById("cardNumber").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("errorMsg").textContent = "";
  currentCustomer = null;
}