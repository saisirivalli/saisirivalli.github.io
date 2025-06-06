const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const cart = {};

const addToCart = (id) => {
  //insert id and quantity as 1 ie {1:1} if add button
  // on box 1 is clicked, then if add button on box 3 is clicked then
  //cart object should be {1:1,3:1}
  // write code here....
  cart[id] = 1;
  // console.log(cart);
};

const increment = (id) => {
  cart[id] = cart[id] + 1;
  dispCart()
};

const decrement = (id) => {
  cart[id] = cart[id] - 1;
   dispCart()
};

const dispCart = () => {
  let str = `<h2 style="text-align:center;">Cart</h2><div class="container-2">`;

  let isEmpty = true;

  products.forEach((value) => {
    if (cart[value.id]) {
      isEmpty = false;
      str += `
        <div class="p1"style="text-align:center;">
          <h4>${value.name}</h4>
          <h5>Price: $${value.price}</h5>
          <div style="margin: 10px 0;">
            <button class="btn" onclick="decrement(${value.id})">-</button>
            <span style="margin: 0 10px;">${cart[value.id]}</span>
            <button class="btn" onclick="increment(${value.id})">+</button>
          </div>
          <h5>Total: $${value.price * cart[value.id]}</h5>
        </div>
      `;
    }
  });
  str += `<h4 id='orderValue'></h4>`;
  root.innerHTML = str;
  dispOrderValue();
};

const dispOrderValue = () => {
  const grandTotal = products.reduce((sum, value) => {
    return sum + value.price * (cart[value.id] ?? 0);
  },0);
  orderValue.innerHTML = `Order Value: ${grandTotal}`;


  if (isEmpty) {
    str += `<p style="text-align:center; width: 100%;">Your cart is empty.</p>`;
  }

  str += `</div>`; // Close container-2

  document.getElementById("root").innerHTML = str;
};



const showProducts = () => {
  let str = "";
  products.map((value) => {
    str += `<div>
      <h3>${value.name}</h3>
      <h4>${value.price}</h4>
      <button onclick='addToCart(${value.id})'>Add to Cart</button>
     </div>
    `;
  });
  root.innerHTML = "<div class='row'>" + str + "</div>";
};