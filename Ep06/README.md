## Ep06 - Exploring the World

---

## 1. What is a Microservice?
A microservice is an architectural style where an application is broken into small, independent services, each responsible for a specific feature. Each service runs independently, can have its own database, and can be deployed without affecting other services.

---

## 2. What is Monolith Architecture?
Monolith architecture is a traditional approach where the entire application is built as a single unit. All features, business logic, and database interactions are tightly coupled and deployed together.

---

## 3. Difference between Monolith and Microservice

**Monolith:**
- Single codebase
- Tightly coupled components
- Hard to scale specific features

**Microservice:**
- Multiple independent services
- Loosely coupled
- Easy to scale and maintain

**One-liner:**  
Monolith is one big app, Microservice is many small apps working together.

---

## 4. Why do we need the useEffect Hook?
useEffect is used to handle side effects in React functional components, such as API calls, subscriptions, or DOM updates. It runs after the component renders and allows us to control when the side effect should execute.

**Example:**
 ```js
useEffect(() => {
  fetchData();
}, []);
```

---

## 5. What is Optional Chaining?
Optional chaining (?.) is a JavaScript feature that allows safe access to nested object properties without causing runtime errors if a value is null or undefined.

**Example:**
```js
user?.profile?.name
```

----

## 6. What is Shimmer UI?
Shimmer UI is a loading placeholder UI shown while actual data is being fetched. It improves user experience by showing a skeleton layout instead of a blank screen or loader.

---

## 7. Difference between JS Expression and JS Statement
A JavaScript expression produces a value, while a JavaScript statement performs an action.

**Example:**
```js
// Expression
const sum = a + b;
```
```js
// Statement
if (sum > 10) {
  console.log("Greater than 10");
}
```

---

## 8. What is Conditional Rendering?
Conditional rendering means rendering UI elements based on a condition. In React, this is commonly done using if, ternary operators, or logical operators.

**Example:**
```js
{isLoggedIn ? <Dashboard /> : <Login />}
```

---

## 9. What is CORS?
CORS (Cross-Origin Resource Sharing) is a browser security mechanism that restricts API requests made from one domain to another. It prevents unauthorized access to server resources and must be enabled from the backend.

---

## 10. What is async and await?
async and await are JavaScript keywords used to handle asynchronous operations in a clean and readable way. async makes a function return a promise, and await pauses execution until the promise resolves.

**Example:**
```js
const data = await fetch(url);
```

## 11. What is the use of const json = await data.json() in getRestaurants()?
data.json() converts the raw HTTP response into usable JavaScript data. await ensures that the JSON parsing completes before the data is used further in the application.

**Example:**
```js
const response = await fetch(API_URL);
```
```js
const json = await response.json();
```