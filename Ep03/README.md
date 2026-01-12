# Frontend Basics – Interview Ready of Ep03 – Laying the Foundation

---

## 1. What is JSX?
JSX (JavaScript XML) is a **syntax extension for JavaScript** used in React to write UI code similar to HTML.

**Key idea:**
- JSX makes UI code readable
- It is not HTML
- Browsers do not understand JSX directly

---

## 2. React.createElement vs JSX

**React.createElement:**
- Pure JavaScript
- Hard to read and write
- Verbose syntax

**JSX:**
- HTML-like syntax
- Cleaner and readable
- Easier to maintain

**One-liner:**  
JSX is syntactic sugar over `React.createElement`.

---

## 3. Benefits of JSX

**Why JSX?**
- Better readability
- Less code
- Easier debugging
- Familiar HTML-like syntax
- Prevents injection attacks (safe by default)

---

## 4. Behind the Scenes of JSX
- JSX is converted into `React.createElement()` calls.
- This conversion happens before the code reaches the browser.
- JSX never runs directly in the browser.

**Flow:**
JSX → React.createElement → Virtual DOM → Real DOM

---

## 5. Babel & Parcel Role in JSX

**Babel:**
- Transpiles JSX into JavaScript
- Converts modern JS to browser-compatible JS

**Parcel:**
- Uses Babel internally
- Handles JSX without manual configuration
- Bundles final output for the browser

---

## 6. Components
Components are **independent, reusable pieces of UI**.

**Key points:**
- Everything in React is a component
- Helps break UI into small parts
- Improves maintainability

---

## 7. Functional Components
Functional components are **JavaScript functions** that return JSX.

**Key points:**
- Simple and readable
- No `this` keyword
- Preferred in modern React

**Rule:**  
A component name must start with a capital letter.

---

## 8. Composing Components
Composing means **using one component inside another**.

**Why used?**
- Reusability
- Clean structure
- Better separation of concerns

---

## 9. Theory Assignment: What is JSX?
JSX is a syntax extension that allows writing **HTML-like code inside JavaScript**, which React converts into JavaScript objects.

---

## 10. Theory Assignment: Superpowers of JSX

**Superpowers:**
- Write HTML-like syntax in JS
- Embed JavaScript expressions using `{ }`
- Prevents XSS attacks
- Improves code readability
- Easier component composition

---

## 11. Role of `type` attribute in `<script>` tag
The `type` attribute tells the browser **how to treat the script**.

**Common options:**
- `text/javascript` → Default
- `module` → Enables ES modules
- `application/javascript` → Legacy usage

---

## 12. `{TitleComponent}` vs `{<TitleComponent />}` vs `{<TitleComponent></TitleComponent>}`

**`{TitleComponent}`**
- Refers to the function itself
- Does NOT render the component

**`{<TitleComponent />}`**
- Correct way to render a component
- Self-closing syntax

**`{<TitleComponent></TitleComponent>}`**
- Same as self-closing
- Used when children are needed

**Rule:**  
To render a component, always use `<ComponentName />`.
