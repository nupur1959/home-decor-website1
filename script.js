  const items = [
  // LAMPS (4)
  {name: "Wooden Lamp", price: "₹1200", category: "lamp", img: "lamp.jpg"},
  {name: "Modern Lamp", price: "₹1500", category: "lamp", img: "lamp1.jpg"},
  {name: "Bedside Lamp", price: "₹1000", category: "lamp", img: "lamp2.jpg"},
  {name: "Book Lamp", price: "₹1800", category: "lamp", img: "lamp3.jpg"},

  // WALL ART (4)
  {name: "Wall Frame Art", price: "₹900", category: "wall", img: "art.jpg"},
  {name: "Abstract Wall Art", price: "₹1100", category: "wall", img: "art1.jpg"},
  {name: "Canvas Painting", price: "₹1400", category: "wall", img: "art2.jpg"},
  {name: "Vintage Wall Clock", price: "₹1600", category: "wall", img: "art3.jpg"},

  // DECOR (4)
  {name: "Decor Vase", price: "₹700", category: "decor", img: "vase.jpg"},
  {name: "Luxury Vase", price: "₹1300", category: "decor", img: "vase1.jpg"},
  {name: "Showpiece Sculpture", price: "₹1500", category: "decor", img: "vase2.jpg"},
  {name: "Table Decor Set", price: "₹1200", category: "decor", img: "vase3.jpg"}
];


const container = document.getElementById("shop-items");

function displayItems(filteredItems) {
  container.innerHTML = "";

  filteredItems.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${item.img}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <button>Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

/* FILTER FUNCTION */
function filterItems(category) {
  if (category === "all") {
    displayItems(items);
  } else {
    const filtered = items.filter(item => item.category === category);
    displayItems(filtered);
  }
}

/* LOAD ALL ITEMS */
if(container){
  displayItems(items);
}