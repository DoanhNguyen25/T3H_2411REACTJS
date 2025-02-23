const arr = [1, 2, 3, 4, 4, 5];
const arr2 = [7, 8, 9];
const arr3 = [...arr, ...arr2];
console.log(arr);
console.log(arr2);
console.log(arr3);

const a = {
  id: "1",
  name: 2,
};
const b = {
  age: "12",
};

const c = {
  ...a,
  ...b,
};

// destructuring;

// const { id, name, age } = c;
const { id, ...rest } = c;
console.log(rest);
