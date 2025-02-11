// tìm kiếm elements trong document
// const demoDome = document.getElementById("demoDom");

// const getByTagName = document.getElementsByTagName("div");

// const convertToArray= Array.from(getByTagName)

// demoDome.innerText = "12313";
// demoDome.style.color = "red";
// demoDome.style.textDecoration = "underline";

// const nodeChild = document.createElement("table");
// const th = document.createElement("th");
// const tr = document.createElement("tr");
// const tdHead1 = document.createElement("td");
// const tdHead2 = document.createElement("td");
// const tdRow1 = document.createElement("td");
// const tdRow2 = document.createElement("td");

// tdHead1.textContent = "STT";
// tdHead2.textContent = "Họ tên";
// tdRow1.textContent = "1";
// tdRow2.textContent = "Doanh nguyễn";

// th.append(tdHead1, tdHead2);
// tr.append(tdRow1, tdRow2);
// nodeChild.append(th, tr);
// nodeChild.style.border = "1px solid gray";
// nodeChild.style.borderCollapse = "collapse";
// tdHead1.remove();
// demoDome.appendChild(nodeChild);

// console.log(demoDome.innerHTML);

// let items = document.querySelectorAll(".favorite-list-item");
// items.forEach((item) => {
//   item.textContent = "I love this thing";
//   item.style.color = "red";
// });

// function addItem() {
//   let input = document.getElementById("newItem");
//   let text = input.value;

//   if (text) {
//     let newLi = document.createElement("li");
//     newLi.textContent = text;
//     document.getElementById("favorite-list").appendChild(newLi);
//     input.value = "";
//   }
// }

// btn.addEventListener("click", sayHello);
// btn.addEventListener("click", function () {
//   console.log("another event");
// });

// btn.removeEventListener("click", sayHello);

// function sum(b) {
//   return b();
// }

// sum(function () {
//   return b;
// });

// arrow function
// TODO:TEST

const a = {
  age: 1232,
  name: "Doanh",
};

localStorage.setItem("user", JSON.stringify(a));

const parse = JSON.parse(localStorage.getItem("user"));
console.log(parse);

console.log(location.href);
