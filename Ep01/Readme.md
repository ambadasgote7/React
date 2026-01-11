# Frontend Basics – Interview Ready of Ep01 - Inception

---

## 1. What is Emmet?
Emmet is a tool in code editors that lets us write **short abbreviations** which expand into full HTML or CSS.

**Why used?**
- Saves time
- Reduces typing
- Improves productivity

---

## 2. Difference Between Library and Framework

**Library:**  
You control the flow. You call the library when needed.  
Example: React

**Framework:**  
Framework controls the flow. You must follow its structure.  
Example: Angular

**One-liner:**  
Library → You call it  
Framework → It calls you

---

## 3. What is CDN? Why do we use it?
CDN (Content Delivery Network) is a network of servers that delivers files from the **nearest location** to the user.

**Why CDN?**
- Faster loading
- Reduced server load
- Better performance

---

## 4. What is React JS?
React JS is a **JavaScript library** used to build **fast and interactive user interfaces**, mainly for single-page applications.

**Key points:**
- Component-based
- Uses Virtual DOM
- UI updates when state changes

**One-liner:**
React JS is a library for building reusable UI components efficiently.

---

## 5. Why is React called React?
React is called React because it **reacts to changes in state or data** and updates the UI automatically.

**Key idea:**  
UI is a function of state.

---

## 6. What is `crossorigin` in script tag?
`crossorigin` allows the browser to load scripts from **another domain safely**.

**Why needed?**
- Proper error reporting
- Avoids CORS issues
- Used with CDN scripts

---

## 7. Difference Between React and ReactDOM

**React:**  
Used to create components, manage state, and application logic.

**ReactDOM:**  
Used to render React components into the browser DOM.

**Simple:**
React → What to build  
ReactDOM → Where to show

---

## 8. react.development.js vs react.production.js

**Development build:**
- Used while learning/debugging
- Shows warnings
- Slower

**Production build:**
- Used in live applications
- Optimized and fast
- No warnings

**Rule:**  
Never use development build in production.

---

## 9. async vs defer

### async
- Script loads and runs immediately
- Execution order not guaranteed
- DOM may not be ready

**Use for:** Analytics, ads

---

### defer
- Script loads in background
- Runs after HTML loads
- Execution order preserved

**Use for:** Main application scripts

---

### One-line Difference
async → Fast but unpredictable  
defer → Safe and predictable

