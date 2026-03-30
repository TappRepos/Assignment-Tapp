// My SDK - A simple utility library

/**
 * Initializes the SDK with a configuration object.
 * Must be called before using any other SDK method.
 */
function initialize(config) {
  if (!config || !config.apiKey) {
    throw new Error("initialize() requires a config object with an 'apiKey' property");
  }
  console.log("SDK initialized successfully");
  return { status: "initialized", apiKey: config.apiKey };
}

/**
 * Greets a user by name.
 */
function sayHello(name) {
  if (!name) {
    return "Hello, stranger!";
  }
  return "Hello, " + name + "!";
}

/**
 * Adds two numbers together.
 */
function add(a, b) {
  return a + b;
}

/**
 * Multiplies two numbers together.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Converts a string to uppercase.
 */
function toUpperCase(text) {
  if (typeof text !== "string") {
    throw new Error("toUpperCase() expects a string");
  }
  return text.toUpperCase();
}

/**
 * Reverses a string.
 */
function reverseString(text) {
  if (typeof text !== "string") {
    throw new Error("reverseString() expects a string");
  }
  return text.split("").reverse().join("");
}

/**
 * Returns the current timestamp.
 * NOTE: returns a number (milliseconds since epoch), not a formatted string.
 */
function getTimestamp() {
  return Date.now();
}

/**
 * Checks if a value is a valid email address.
 * Uses a simple regex check.
 */
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

/**
 * Calculates the average of an array of numbers.
 * BUG: uses Math.floor so it always returns an integer, not the true average.
 */
function calculateAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("calculateAverage() expects a non-empty array of numbers");
  }
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return Math.floor(sum / numbers.length);
}

/**
 * Filters an array to keep only unique values.
 */
function uniqueValues(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("uniqueValues() expects an array");
  }
  return [...new Set(arr)];
}

/**
 * Truncates a string to a given length and adds "..." at the end.
 * If the string is shorter than the limit, returns it unchanged.
 */
function truncate(text, maxLength) {
  if (typeof text !== "string") {
    throw new Error("truncate() expects a string as first argument");
  }
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}

module.exports = {
  initialize,
  sayHello,
  add,
  multiply,
  toUpperCase,
  reverseString,
  getTimestamp,
  isValidEmail,
  calculateAverage,
  uniqueValues,
  truncate,
};
