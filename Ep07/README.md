## Ep07 - Finding the Path

----

## ** What are various ways to add images to our app?**

There are multiple ways to add images in a React application depending on the use case.

### **1. Importing images using ES6 modules**

This is the most common approach for small to medium apps. Images are imported like JavaScript modules and bundled by the build tool.

`import myImage from  "./my_image.jpg"; <img  src={myImage}  alt="My Image" />` 

----------

### **2. Using the public folder**

Images placed in the `public` folder can be accessed directly without importing. This is useful for large assets or static files.

`<img src={process.env.PUBLIC_URL + "/my_image.jpg"} alt="My Image" />` 

----------

### **3. Loading images from a remote source**

Images can be loaded directly from an external URL or backend API.

`<img src="https://example.com/image.jpg" alt="My Image" />` 

----------

### **4. Using images in CSS**

Images can be used as background images via CSS.

`.container { background-image: url("/my_image.jpg");
}` 

----------

## ** What would happen if we do `console.log(useState())`?**

Calling `useState()` returns an array containing two values: the current state and a function to update that state. Logging `useState()` directly will log something like:

`[initialState, function]` 

This is not recommended; instead, we destructure the values for clarity.

`const [count, setCount] = useState(0);` 

----------


## **1. What happens if `useEffect` does not have a dependency array?**

If `useEffect` does not have a dependency array, it runs **after every render**, including the initial render and all re-renders. This can cause performance issues if heavy logic is inside it.

**Example:**

`useEffect(() => { console.log("Runs on every render");
});` 

----------

## **2. What happens if the dependency array in `useEffect` is empty?**

When the dependency array is empty, the effect runs **only once after the initial render**. It behaves like `componentDidMount`.

**Example:**

`useEffect(() => { fetchData();
}, []);` 

----------

## **3. What happens if the dependency array in `useEffect` is not empty?**

The effect runs after the initial render and **again whenever any dependency value changes**.

**Example:**

`useEffect(() => { console.log("Count changed");
}, [count]);` 

----------

## **4. Why should we never create a state variable using `useState` outside a functional component?**

Hooks rely on React’s render cycle. Calling `useState` outside a component breaks React’s hook tracking and results in errors.

❌ Invalid:

`const [count, setCount] = useState(0);` 

----------

## **5. Why is `useState` used to create local state inside a functional component?**

`useState` creates **component-specific state** that React tracks and uses to trigger re-renders when the state changes.

**Example:**

`const [count, setCount] = useState(0);` 

----------

## **6. Why should we never create a state variable inside `if`, `for`, or nested functions?**

Hooks must be called in the **same order on every render**. Conditional or loop-based hooks break this order and cause runtime errors.

❌ Invalid:

`if (isLoggedIn) { const [user, setUser] = useState(null);
}` 

----------

## **7. Where should state variables always be created in a functional component?**

State variables must always be created **at the top level of the component**, before any return or logic.

✅ Correct:

`const  Component = () => { const [count, setCount] = useState(0);
};` 

----------

## **8. What is routing in React?**

Routing in React is the process of showing different UI components **based on the URL** without reloading the page.

----------

## **9. What is routing configuration?**

Routing configuration defines which component should render for a specific route path.

**Example:**

`{ path: "/about", element: <About />
}` 

----------

## **10. What is `createBrowserRouter` and why is it used?**

`createBrowserRouter` creates a routing configuration using the browser’s history API for SPA navigation.

**Example:**

`const router = createBrowserRouter([
  { path: "/", element: <Home /> }
]);` 

----------

## **11. Why is creating routing configuration alone not enough?**

Because React needs a provider to **activate and manage routing**. Configuration alone does nothing unless connected to the app.

----------

## **12. What is `RouterProvider` and why do we need it?**

`RouterProvider` supplies routing context to the app and enables navigation, matching, and rendering.

**Example:**

`<RouterProvider router={router} />` 

----------

## **13. Why do we need a component for anonymous or invalid routes?**

To handle **404 errors** or unknown URLs gracefully instead of showing a blank screen.

----------

## **14. What is `useRouteError` hook?**

`useRouteError` gives access to routing errors when a route fails to load or match.

----------

## **15. How can we show route error information on the UI using `useRouteError`?**

**Example:**

`const error = useRouteError(); return  <h1>{error.statusText}</h1>;` 

----------

## **16. What are children routes in React Router?**

Children routes are **nested routes** rendered inside a parent route layout.

----------

## **17. Why do we need `<Outlet />`?**

`<Outlet />` is a placeholder where child routes render inside the parent component.

----------

## **18. How does `<Outlet />` work internally?**

React Router matches the child route and injects its component into the `<Outlet />` position.

----------

## **19. What are the two types of routing?**

1.  Client-Side Routing
    
2.  Server-Side Routing
    

----------

## **20. What is Client-Side Routing?**

Routing handled in the browser using JavaScript without reloading the page.

----------

## **21. What is Server-Side Routing?**

Routing handled on the server where each route loads a new HTML page.

----------

## **22. Why is Client-Side Routing faster?**

Because only data is fetched from the server, not a full HTML page, avoiding page reloads.

----------

## **23. Why is SPA beneficial?**

SPAs provide faster navigation, smoother UX, and reduced server load after the initial page load.

----------

## **24. What is Dynamic Routing?**

Dynamic routing allows route parameters to change dynamically based on the URL.

**Example:**

`path: "/restaurant/:resId"` 

----------

## **25. How do we extract dynamic route parameters?**

By using the `useParams` hook provided by React Router.

----------

## **26. What is `useParams` hook?**

`useParams` returns an object containing dynamic parameters from the URL.

----------

## **27. How do we access `resId` using `useParams`?**

**Example:**

`const { resId } = useParams();`