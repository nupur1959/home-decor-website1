function filterProducts() {
let search = document.getElementById("search").value.toLowerCase();
let category = document.getElementById("category").value;
let items = document.querySelectorAll("#products .card");

items.forEach(item => {
let name = item.dataset.name.toLowerCase();
let cat = item.dataset.cat;

if ((name.includes(search)) && (category === "all" || cat === category)) {
item.style.display = "block";
} else {
item.style.display = "none";
}
});
}