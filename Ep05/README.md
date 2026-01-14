## Ep05 - Let's get Hooked

---

## 1. What is Named export?
Named export is used when a file needs to export multiple values, and the importing file must use the same names. This makes the code clear and predictable.

**Example:**
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

---

## 2. What is Default export?
Default export is used when a file has one main thing to export, like a React component. The importing file can name it anything.

**Example:**
export default function Button() {
  return <button>Click</button>;
}

---

## 3. What is * as export?
* as export is used to re-export everything from another file under a namespace. It is mostly used in index or barrel files.

**Example:**
export * as Utils from "./utils";

---

## 4. What is Named import?
Named import is used to import specific exports and the names must exactly match the exported ones.

**Example:**
import { add, sub } from "./math";

---

## 5. What is Default import?
Default import is used to import the default export and allows flexible naming.

**Example:**
import Button from "./Button";

---

## 6. What is * as import?
* as import imports all exports into a single object, which is useful for utility files.

**Example:**
import * as Utils from "./utils";
Utils.formatDate();

---

## 7. What is the importance of config.js file?
The config.js file stores configuration values like API URLs in one place, avoiding hardcoding and making the app easier to maintain.

**Example:**
export const API_URL = "https://api.example.com";

---

## 8. What are React Hooks?
React Hooks allow functional components to use state and other React features without class components.

**Example:**
import { useState } from "react";

---

9. Important React Hooks

- useState → Manage state
- useEffect → Side effects (API calls, subscriptions)
- useContext → Global state access
- useRef → DOM access / persist values
- useMemo → Performance optimization
- useCallback → Prevent unnecessary re-renders

---

## 10. Why do we need useState Hook?
useState is needed because normal variables do not trigger re-rendering. It allows React to update the UI when data changes.

**Example:**

const [count, setCount] = useState(0);