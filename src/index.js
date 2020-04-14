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

function div(a, b) {
  console.log("foobar");
  return a / b;
}

function mod(a, b) {
  console.log("foobaz");
  return a % b;
}

function pow(a) {
  return a * a;
}

module.exports = { add, sub, multi, div, mod, pow };
