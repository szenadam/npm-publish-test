function add(a, b) {
  console.log("foo");
  return a + b;
}

function sub(a, b) {
  console.log("bar");
  return a - b;
}

function multi(a, b) {
  console.log("baz");
  return a * b;
}

module.exports = { add, sub, multi };
