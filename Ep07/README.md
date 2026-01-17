## Ep07 - Finding the Path

----

## **1. What are various ways to add images to our app?**

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

## **2. What would happen if we do `console.log(useState())`?**

Calling `useState()` returns an array containing two values: the current state and a function to update that state. Logging `useState()` directly will log something like:

`[initialState, function]` 

This is not recommended; instead, we destructure the values for clarity.

`const [count, setCount] = useState(0);` 

----------

## **3. How will `useEffect` behave if we don’t add a dependency array?**

If `useEffect` is used **without a dependency array**, it runs **after every render**, including the initial render and all re-renders. This can cause performance issues if the effect contains expensive operations.

`useEffect(() => { console.log("Runs on every render");
});` 

----------

## **4. How does `useEffect` behave with different dependency cases?**

### **Case 1: No dependency array**

Runs after **every render**.

### **Case 2: Empty dependency array `[]`**

Runs **only once after the initial render**.

`useEffect(() => { console.log("Runs once");
}, []);` 

### **Case 3: Dependency array with variables**

Runs after the initial render and whenever the dependency changes.

`useEffect(() => { console.log("Runs when count changes");
}, [count]);` 

----------

## **5. What is SPA (Single Page Application)?**

A Single Page Application loads a single HTML page initially and updates the content dynamically using JavaScript without reloading the page. This results in faster navigation and a smoother user experience.

----------

## **6. Difference between Client-Side Routing and Server-Side Routing**

### **Client-Side Routing**

Routing is handled in the browser using JavaScript. Only data is fetched from the server, and the page does not reload.

Used in SPAs like React applications.

----------

### **Server-Side Routing**

Routing is handled on the server. Each route request returns a new HTML page, causing a full page reload.

Used in traditional multi-page websites.

----------

### **Key Difference**

Client-side routing provides faster navigation and better UX, while server-side routing is more SEO-friendly by default.