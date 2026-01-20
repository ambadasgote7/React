## Ep09 - Optimizing our App

---

## 1. What is the Single Responsibility Principle (SRP)?
The Single Responsibility Principle states that a function, class, or component should have only one responsibility. If a component does multiple things, it should be broken into smaller components, each handling one task.

**Example:**
A <Header /> component should only be responsible for displaying the header, not fetching data or handling business logic.

---

## 2. What is Modularity?
Modularity means breaking the application into small, independent modules or components. Each module focuses on a single responsibility, making the code easier to manage, test, and scale.

---

## 3. What is a Custom Hook?
A custom hook is a reusable JavaScript function that contains React hook logic. It allows us to extract and reuse stateful logic and side effects across multiple components.

**Example:**
```js 
import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;
```

---

## 4. Why do we use Custom Hooks?

Custom hooks are used for:
   - Code reusability – same logic across multiple components
   - Cleaner components – UI logic stays separate
   - Separation of concerns – logic and UI are decoupled

---

5. Example: Separating logic using a Custom Hook

❌ Before (Component does two jobs)

- Fetching data
- Displaying data

✅ After (Single responsibility)

- Custom hook → fetch data
- Component → display data

---

## 6. Example: Custom Hook for fetching data
```js
const useDemo = () => {
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json())
      .then(data => setItemDetails(data));
  }, []);

  return itemDetails;
};
```

**Usage in component:**
```js
const Home = () => {
  const itemDetails = useDemo();
  return <div>{itemDetails}</div>;
};
```

---

## 7. Create a Custom Hook to check online/offline status
```js
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  return isOnline;
};
```

---

## 8. Why should we name hooks starting with use?
- It is a React naming convention
- Linters depend on this naming to validate hooks
- Makes it clear that the function is a React hook

**Example:**
useOnlineStatus();

---

## 9. Why do we need Code Splitting / Chunking?
Large applications should be split into smaller bundles to reduce initial load time. Loading everything in one bundle makes the app slow.

**This process is called:**
- Chunking
- Code Splitting
- Dynamic Bundling
- Lazy Loading
- On-demand Loading

---

## 10. Example of On-Demand Loading

**In an e-commerce app:**
- Main bundle → entire app except Cart
- Cart bundle → loaded only when user visits /cart
- This improves performance.

---

## 11. When and why do we need lazy()?
lazy() is used to load components only when needed, reducing the initial bundle size and improving performance in large applications.

**Example:**
const Cart = React.lazy(() => import("./Cart"));

---

## 12. Advantages of Lazy Loading
- Reduces initial load time
- Improves performance
- Optimizes resource usage
- Better user experience on slow networks

---

## 13. Disadvantages of Lazy Loading
- Not useful for small apps
- Requires fallback UI
- Extra server requests
- Can affect SEO

---

## 14. What is Suspense?
Suspense is a React component that allows us to show a fallback UI while a lazy-loaded component or data is loading.

---

## 15. Example: lazy() with Suspense
```js
<Suspense fallback={<Shimmer />}>
  <Cart />
</Suspense>
```

---

## 16. Why do we need Suspense?

**Suspense is used when:**
- Components are lazy-loaded
- Data is still being fetched
- It prevents UI crashes and improves user experience by showing a fallback UI.