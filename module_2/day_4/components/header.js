import { CardComponent } from "./card.js";

function HeaderComponent() {
  return CardComponent() + "hihihi";
}
const headerElements = document.getElementsByTagName("HeaderComponent"); // array

console.log(headerElements);
for (let item of headerElements) {
  item.innerHTML = HeaderComponent();
}
