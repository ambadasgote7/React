##  Ep11 – Data is the New Oil

--- 

## 1. What is a Higher Order Component (HOC)?
A Higher Order Component is a function that takes a component as input and returns an enhanced component. It adds extra functionality without modifying the original component, which makes it a pure function.

**Example:**
```js
const withLogger = (Component) => {
  return (props) => {
    console.log("Component rendered");
    return <Component {...props} />;
  };
};
```

----

## 2. What are Uncontrolled Components?
An uncontrolled component manages its own state internally, and the parent component has no control over its behavior.

**Example:**
```js
const ItemCard = () => {
  const [showHeading, setShowHeading] = useState(false);

  return (
    <>
      <button onClick={() => setShowHeading(!showHeading)}>Toggle</button>
      {showHeading && <h1>Hello</h1>}
    </>
  );
};
```

---

## 3. What are Controlled Components?
A controlled component does not manage its own state. Instead, its state and behavior are controlled by the parent component via props.

**Example:**
```js
const ItemCard = ({ showHeading }) => {
  return showHeading && <h1>Hello</h1>;
};
```

---

## 4. What is Lifting the State Up?
Lifting the state up means moving the state from a child component to its parent so that the parent can control the child’s behavior.

**Example:**
```js
const ItemCardList = () => {
  const [showHeading, setShowHeading] = useState(false);

  return <ItemCard onShow={() => setShowHeading(true)} />;
};
```

---

## 5. What is Prop Drilling?
Prop drilling happens when data is passed through multiple intermediate components that do not need the data, just to reach a deeply nested component.

---

## 6. Why is Prop Drilling a problem?
- Makes code harder to read
- Increases coupling between components
- Becomes unmanageable in deep component trees

---

## 7. What is React Context?
React Context provides a way to share data globally across components without passing props manually at every level.

---

## 8. When should we use Context?

**Context is useful when:**

    - Data is needed by many components
    - Component tree has multiple levels
    - Prop drilling becomes complex

---

## 9. How do we create Context?

**Example:**
```js
import { createContext } from "react";

const CartContext = createContext({ items: [] });
export default CartContext;
```

---

## 10. What is Context Provider?
A Context Provider supplies the context value to all child components inside it.

**Example:**
```js
<CartContext.Provider value={{ items }}>
  <App />
</CartContext.Provider>
```

---

## 11. What is Context Consumer?
Context Consumer is an older way of accessing context values. It is rarely used now because useContext is simpler.

---

## 12. How do we consume Context using useContext?

**Example:**
```js
const { items } = useContext(CartContext);
```

---

## 13. How does React find the context value?
React searches the component tree upward and uses the nearest matching Provider for that context.

---

## 14. What is the one-way data flow in React?
Data flows only from parent to child. Child components cannot directly change parent state; they must notify the parent via callbacks.