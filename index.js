import {
  breakfasts,
  mainDishes,
  westerns,
  addOns,
  beverages,
  desserts,
} from "./data.js";

const foods = breakfasts.concat(
  mainDishes,
  westerns,
  addOns,
  beverages,
  desserts
);
let orderedItemArr = [];

document.addEventListener("click", (e) => {
  if (e.target.dataset.add) {
    addToCart(e.target.dataset.add);
  } else if (e.target.id === "down-btn" || e.target.id === "down-icon") {
    closeContainer();
  } else if (e.target.id === "up-btn" || e.target.id === "up-icon") {
    openContainer();
  } else if (e.target.dataset.remove) {
    removeItem(e.target.dataset.remove);
  } else if (e.target.id === "complete-btn") {
    completeOrder();
  } else if (e.target.id === "close-modal-btn") {
    closeModal();
  } else if (e.target.id === "pay-btn") {
    completePayment();
  } else if (e.target.id === "continue-btn") {
    continueOrdering();
  }
});

function addToCart(foodId) {
  foods.forEach((food) => {
    if (food.id === foodId) {
      orderedItemArr.push(food);
    }
  });
  renderOrderedItem();
  totalPrice(foods);
}

function renderOrderedItem() {
  document.getElementById("order-container").innerHTML = "";

  orderedItemArr.forEach((item) => {
    document.getElementById("container").style.display = "block";
    document.getElementById("menu").style.paddingBottom = "250px";
    document.getElementById("order-container").innerHTML += `
            <div class="orders">
                <div class="item-container">
                    <div class="item">
                        <h3>${item.food}</h3>
                        <button class="remove-btn" data-remove="${
                          item.id
                        }">remove</button>
                    </div>
                    <h3>$${item.price.toFixed(2)}</h3>
                </div>
            </div>
        `;
  });
}

function totalPrice() {
  let totalPrice = 0;
  orderedItemArr.forEach((item) => {
    totalPrice += item.price;
  });
  const serviceTax = (totalPrice * 6) / 100;
  const finalPrice = totalPrice + serviceTax;

  document.getElementById("service-tax").textContent =
    "+$" + serviceTax.toFixed(2);
  document.getElementById("total-price").textContent =
    "$" + finalPrice.toFixed(2);
}

function closeContainer() {
  document.getElementById("item-container").style.display = "none";
  document.getElementById("service-container").style.display = "none";
  document.getElementById("up-icon").style.display = "block";
  document.getElementById("menu").style.paddingBottom = "170px";
}

function openContainer() {
  document.getElementById("item-container").style.display = "block";
  document.getElementById("service-container").style.display = "flex";
  document.getElementById("up-icon").style.display = "none";
  document.getElementById("menu").style.paddingBottom = "250px";
}

function removeItem(itemId) {
  let removedIndex = -1;

  orderedItemArr.forEach((item, index) => {
    if (item.id === itemId) {
      removedIndex = index;
    }
  });

  if (removedIndex !== -1) {
    orderedItemArr.splice(removedIndex, 1);
  }

  if (orderedItemArr.length === 0) {
    document.getElementById("container").style.display = "none";
    document.getElementById("menu").style.paddingBottom = "0";
  }

  totalPrice();
  renderOrderedItem();
}

function completeOrder() {
  document.getElementById("card-details-container").style.display = "block";
}

function closeModal() {
  document.getElementById("card-details-container").style.display = "none";
}

function completePayment() {
  orderedItemArr = [];
  document.getElementById("container").style.display = "none";
  document.getElementById("card-details-container").style.display = "none";
  document.getElementById("continue-container").style.display = "block";
  document.getElementById("message").innerHTML = `
       Thanks, <span class="name">${
         document.getElementById("name-input").value
       }</span>! Your order is on its way!
    `;
}

function continueOrdering() {
  document.getElementById("continue-container").style.display = "none";
}

function renderText(types, typeEl) {
  types.forEach((type) => {
    const { image, food, specification, price, id } = type;

    typeEl.innerHTML += `
        <div class="option">
        <div class="food">
        <img src=${image} class="imgs" draggable="false">
        <div class="details">
        <h3 class="food-name">${food}</h3>
        <p class="specification">${specification}</p>
        <h4 class="food-price">$${price.toFixed(2)}</h4>
        </div>
        </div>
        <button class="add-to-cart" data-add="${id}">+</button>
        </div>    
        `;
  });
}

function render() {
  renderBreakfast();
  renderMainDish();
  renderWestern();
  renderAddOns();
  renderBeverages();
  renderDesserts();
}

render();

function renderBreakfast() {
  const breakfastsEl = document.getElementById("breakfasts");
  breakfastsEl.innerHTML += `<h1 class="category-name">Breakfasts</h1>`;
  renderText(breakfasts, breakfastsEl);
}
function renderMainDish() {
  const mainDishesEl = document.getElementById("main-dishes");
  mainDishesEl.innerHTML += `<h1 class="category-name">Main Dishes</h1>`;
  renderText(mainDishes, mainDishesEl);
}
function renderWestern() {
  const westernsEl = document.getElementById("westerns");
  westernsEl.innerHTML += `<h1 class="category-name">Westerns</h1>`;
  renderText(westerns, westernsEl);
}
function renderAddOns() {
  const addOnsEl = document.getElementById("add-ons");
  addOnsEl.innerHTML += `<h1 class="category-name">Add-ons</h1>`;
  renderText(addOns, addOnsEl);
}
function renderBeverages() {
  const beveragesEl = document.getElementById("beverages");
  beveragesEl.innerHTML += `<h1 class="category-name">Beverages</h1>`;
  renderText(beverages, beveragesEl);
}
function renderDesserts() {
  const dessertsEl = document.getElementById("desserts");
  dessertsEl.innerHTML += `<h1 class="category-name">Desserts</h1>`;
  renderText(desserts, dessertsEl);
}