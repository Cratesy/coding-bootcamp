const bodyEl = document.body;
const h1El = document.createElement("h1");
const infoEl = document.createElement("div");
const imgEl = document.createElement("img");
const kittenEl = document.createElement("div");
const nameEl = document.createElement("div");
const favoriteEl = document.createElement("div");
const listEl = document.createElement("ol");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
li1.textContent = "Apples 🍎 ";
li2.textContent = "Pizza 🍕 ";
li3.textContent = "Dumplings 🥟 ";
li4.textContent = "Cupcakes 🧁 ";

bodyEl.appendChild(h1El);
bodyEl.appendChild(infoEl);
bodyEl.appendChild(favoriteEl);

infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);

favoriteEl.appendChild(listEl);

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("class", "heading");
infoEl.setAttribute("class", "info");
nameEl.setAttribute("class", "name");
kittenEl.setAttribute("class", "kitten");
favoriteEl.setAttribute("class", "favorite");
listEl.setAttribute("class", "list");
li1.setAttribute("class", "list-item");
li2.setAttribute("class", "list-item");
li3.setAttribute("class", "list-item");
li4.setAttribute("class", "list-item");

li1.setAttribute("style", "background-color:#666666");
li2.setAttribute("style", "background-color:#777777");
li3.setAttribute("style", "background-color:#888888");
li4.setAttribute("style", "background-color:#999999");

imgEl.setAttribute("src", "http://placekitten.com/200/300");
