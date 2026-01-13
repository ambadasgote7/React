# Ep04 – Talk is Cheap, Show Me the Code

---

## 1. Is JSX mandatory for React?
JSX is **not mandatory** for React.

**Key points:**
- React can be written using `React.createElement`
- JSX is syntactic sugar
- JSX improves readability and developer experience

**One-liner:**  
JSX is optional but recommended.

---

## 2. Is ES6 mandatory for React?
ES6 is **not mandatory**, but it is strongly recommended.

**Why ES6 is preferred:**
- Cleaner syntax
- Features like `const`, `let`, arrow functions
- Makes React code easier to write and maintain

**One-liner:**  
React works without ES6, but modern React uses ES6.

---

## 3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

**`{TitleComponent}`**
- Refers to the function itself
- Does NOT render the component

**`{<TitleComponent />}`**
- Correct way to render a component
- Self-closing syntax

**`{<TitleComponent></TitleComponent>}`**
- Same as self-closing
- Used when passing children

**Rule:**  
To render a component, always use `<TitleComponent />`.

---

## 5. What is <React.Fragment></React.Fragment> and <> </>?
Fragments allow grouping multiple elements without adding extra DOM nodes.

**Why used?**
- Avoid unnecessary 
- Cleaner DOM structure

**Shorthand:**
<>
  <h1>Hello</h1>
  <p>World</p>
</>

---  

## 6. What is Reconciliation in React?
Reconciliation is the process React uses to update the DOM efficiently.

**How it works:**
- Compares old Virtual DOM with new Virtual DOM
- Finds differences
- Updates only the changed parts

---

## 7. What is React Fiber?
React Fiber is React’s internal reconciliation engine.

**Why Fiber was introduced:**
- Better performance
- Incremental rendering
- Supports features like Suspense and concurrent rendering

**One-liner:**
Fiber makes React faster and more responsive.

---

## 8. Why do we need keys in React?
Keys help React identify elements in a list uniquely.

**Why important:**
- Efficient DOM updates
- Prevents unnecessary re-renders
- Maintains component state correctly

---

## 9. Can we use index as keys in React?
Yes, but it is not recommended.

**Problems with index as key:**
- Causes incorrect UI updates
- Breaks component state
- Leads to performance issues

**Safe to use only when:**
- List is static
- No reordering, insertion, or deletion

--- 

## 10. What is props in React?
Props are inputs passed from parent to child components.

**Key points:**
- Short for properties
- Read-only
- Used to make components dynamic

**Ways to use props:**
- Normal props
- props.children
- Destructured props

---

## 11. What is Config Driven UI?
Config Driven UI means the UI is controlled by configuration data, not hardcoded logic.

**Examples:**
- Backend-driven layouts
- Feature flags
- API-based UI rendering

**Why used?**
- Dynamic UI updates
- Better scalability
- Fewer frontend code changes

----

## 4. How can I write comments in JSX?
JSX comments are written inside curly braces.

**Syntax:**
```jsx
{/* This is a JSX comment */}

/*{
    this is multi line
    This is how
} */ 