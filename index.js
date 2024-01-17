// getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
// getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
// getIsDeepEqual(
//   { a: 1, b: 2, obj: { test: "12", }, },
//   { a: 1, b: 2, obj: { test: "12", }, }
// ); // true
// getIsDeepEqual(
//   { a: 1, b: 2, test: [1,2,3], obj: { test: "12", }, },
//   { a: 1, b: 2, test: [1,2,3], obj: { test: "12", }, }
// ); // true

function getIsDeepEqual(obj1, obj2) {
  if (
    typeof obj1 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return obj1 === obj2;
  }

  const text1 = Object.keys(obj1);
  const text2 = Object.keys(obj2);
  if (
    text1.length !== text2.length ||
    !text1.every((key) => text2.includes(key))
  ) {
    return false;
  }
  //   console.log(text1);
  return text1.every((key) => getIsDeepEqual(obj1[key], obj2[key]));
}

let a = getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
console.log(a);

let b = getIsDeepEqual(
  { a: 1, b: 2, obj: { test: "12" } },
  { a: 1, b: 2, obj: { test: "12" } }
); // true

console.log(b);

let c = getIsDeepEqual(
  { at: 1, bt: 2, test: [1, 2, 3], obj: { test: "12" } },
  { at: 1, bt: 2, test: [1, 2, 3], obj: { test: "12" } }
); // true

console.log(c);

let d = getIsDeepEqual(
  { at: 1, bt: 2, test: [1, 2], obj: { test: "12" } },
  { at: 1, bt: 2, test: [1, 2, 3], obj: { test: "12" } }
); // false

console.log(d);

let e = getIsDeepEqual(
  { at: 1, bt: 2, test: [1, 2, 3, { hi: "hi" }], obj: { test: "12" } },
  { at: 1, bt: 2, test: [1, 2, 3, { hi: "hello" }], obj: { test: "12" } }
); // false

console.log(e);

let g = getIsDeepEqual(
  { test: [1, 2, 3, { hi: "hello" }, null], obj: { test: "12" } },
  { test: [1, 2, 3, { hi: "hello" }, null], obj: { test: "12" } }
); // false

console.log(g);
