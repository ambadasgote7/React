## Ep12 – Let’s Build Our Store

---

## 1. Is Redux mandatory in React applications?
No. Redux is not mandatory. Small and mid-scale applications can manage state using React’s useState, useReducer, or Context. Redux becomes useful when the application is large, has many features, and shared global state.

---

## 2. Is Redux part of React?
No. Redux and React are separate libraries. Redux can be used with other frameworks as well, and React apps can be built completely without Redux.

---

## 3. What is Redux used for?
Redux is used for global state management. It stores application state in a central place (store) so multiple components can access and update it consistently.

---

## 4. What are the Redux libraries provided by the Redux team?
- react-redux – acts as a bridge between React and Redux
- @reduxjs/toolkit – modern, recommended way to write Redux logic

---

## 5. What is a Redux Store?
The Redux store is a central JavaScript object that holds the entire state of the application.

---

## 6. Is it a good idea to store all data in one store?
Yes. Redux promotes a single source of truth. To avoid the store becoming too large, Redux uses Slices.

---

## 7. What is a Slice in Redux?
A slice is a logical partition of the Redux store. Each slice manages state related to a specific feature like cart, user, or orders.

---

## 8. Why do we use Slices?

**Slices help:**
- Organize state logically
- Keep store manageable
- Separate concerns

---

## 9. Can we directly modify Redux state?
No. Redux does not allow direct modification of state. State changes happen only through actions and reducers.

---

## 10. What is the Redux data flow?
User Action → Dispatch Action → Reducer → Slice Updated → UI Updates

---

## 11. What is a Reducer?
A reducer is a function that updates state based on an action.

---

## 12. How do we read data from the Redux store?
We read data using selectors. This process is called subscribing to the store.

---

## 13. What does “subscribing to the store” mean?
When a component uses a selector, it stays in sync with the store and re-renders whenever the selected data changes.

---

## 14. Installing Redux
- npm install @reduxjs/toolkit
- npm install react-redux

---

## 15. Creating / Configuring the Store
```js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
```

---

## 16. Providing the Store to the App
```js
import { Provider } from "react-redux";
import store from "./store";

<Provider store={store}>
  <App />
</Provider>
```

---

## 17. Creating a Slice
```js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
```

---


## 18. Adding Slice to Store
```js
reducer: {
  cart: cartReducer,
}
```
---

## 19. Subscribing to the Store using useSelector
```js
import { useSelector } from "react-redux";

const cartItems = useSelector((store) => store.cart.items);
```
- 📌 Subscribing to cart.items avoids unnecessary re-renders.

---

## 20. Dispatching an Action
```js
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const dispatch = useDispatch();

dispatch(addItem("apple"));
```

---

## 21. Action Object Structure
```js
{
  payload: "apple"
}
```

---

## 22. Difference between onClick syntaxes

✅ onClick={handleAddItem}
- Calls function without arguments on click.

✅ onClick={() => handleAddItem(item)}
- Correct way to pass arguments on click.

❌ onClick={handleAddItem(item)}

❌ Incorrect – function executes immediately on render.

---

## 23. Why is state mutation allowed in Redux Toolkit?
Earlier Redux required immutable updates. Redux Toolkit uses Immer internally, allowing us to write mutable-looking code safely.

state.items.push(item);

Redux still keeps immutability behind the scenes.