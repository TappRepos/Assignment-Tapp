# My SDK — API Reference

This document lists all the public functions available in `my-sdk`.

---

## `initialize(config)`

Initializes the SDK. Must be called before any other method.

**Parameters:**
- `config` (Object) — configuration object
  - `config.apiKey` (String) — your API key

**Returns:** An object with `{ status, apiKey }`

**Example:**
```js
const sdk = require("my-sdk");
sdk.initialize({ apiKey: "your-key-here" });
```

---

## `greet(name)`

Greets a user by name.

**Parameters:**
- `name` (String) — the name of the user

**Returns:** A greeting string like `"Hello, Alice!"`

**Example:**
```js
sdk.greet("Alice"); // "Hello, Alice!"
```

---

## `add(a, b)`

Adds two numbers together.

**Parameters:**
- `a` (Number)
- `b` (Number)

**Returns:** The sum of `a` and `b`

**Example:**
```js
sdk.add(2, 3); // 5
```

---

## `subtract(a, b)`

Subtracts `b` from `a`.

**Parameters:**
- `a` (Number)
- `b` (Number)

**Returns:** The result of `a - b`

**Example:**
```js
sdk.subtract(10, 4); // 6
```

---

## `multiply(a, b)`

Multiplies two numbers.

**Parameters:**
- `a` (Number)
- `b` (Number)

**Returns:** The product of `a` and `b`

**Example:**
```js
sdk.multiply(3, 4); // 12
```

---

## `toUpperCase(text)`

Converts a string to uppercase letters.

**Parameters:**
- `text` (String)

**Returns:** The uppercase version of the string

**Example:**
```js
sdk.toUpperCase("hello"); // "HELLO"
```

---

## `reverseString(text)`

Reverses the characters in a string.

**Parameters:**
- `text` (String)

**Returns:** The reversed string

**Example:**
```js
sdk.reverseString("hello"); // "olleh"
```

---

## `getTimestamp()`

Returns the current time as a formatted date string.

**Parameters:** None

**Returns:** A formatted string like `"2024-01-15 10:30:00"`

**Example:**
```js
sdk.getTimestamp(); // "2024-01-15 10:30:00"
```

---

## `isValidEmail(email)`

Checks if a string is a valid email address.

**Parameters:**
- `email` (String)

**Returns:** `true` if valid, `false` otherwise

**Example:**
```js
sdk.isValidEmail("user@example.com"); // true
sdk.isValidEmail("not-valid"); // false
```

---

## `calculateAverage(numbers)`

Calculates the average of an array of numbers.

**Parameters:**
- `numbers` (Array of Numbers)

**Returns:** The precise average value (a decimal number)

**Example:**
```js
sdk.calculateAverage([10, 20, 30]); // 20
sdk.calculateAverage([1, 2]); // 1.5
```

---

## `formatDate(date)`

Formats a JavaScript Date object into a human-readable string.

**Parameters:**
- `date` (Date) — a JavaScript Date object

**Returns:** A formatted string like `"January 15, 2024"`

**Example:**
```js
sdk.formatDate(new Date()); // "January 15, 2024"
```

---

## `truncate(text, maxLength)`

Truncates a string to a given length and adds "..." at the end.

**Parameters:**
- `text` (String) — the string to truncate
- `maxLength` (Number) — the maximum number of characters

**Returns:** The truncated string with "..." appended, or the original string if shorter than `maxLength`

**Note:** The total returned length (including "...") will be `maxLength + 3`.

**Example:**
```js
sdk.truncate("Hello, world!", 5); // "Hello..."
```

---

*End of API Reference*
