## Ep08 - Let's get classy

---

## Create a Class-Based Component
- A class-based component is created by extending `React.Component`.
- React creates an **instance of the class** when the component loads.

```js
`class UserClass extends React.Component {

  render() {
    return <h1>Hello</h1>;
  }
}
```

-------

## Loading Functional vs Class-Based Component
- Loading a **functional component** means invoking a function.
- Loading a **class-based component** means creating an instance of the class.

**Functional**
```js
function User() {
  return <h1>User</h1>;
}
```
**Class-based**
```js
class UserClass extends React.Component {

  render() {
    return <h1>User</h1>;
  }
}
```

-----

## Creating State Variables in Class-Based Components
In class components, state is initialized **inside the constructor** using `this.state`.

```js
class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
```

----

## Accessing and Destructuring State
Instead of repeatedly using `this.state.count`,
we can destructure state variables for cleaner code.

```js
const { count } = this.state;`
```
----

## Updating State Variables in Class Components
- We update state using `this.setState()`.
- React **merges state**, it does not replace it.

```js
this.setState({ count: this.state.count + 1 });`
```
----

## What if a Component Has Multiple State Variables?
If you update **one state variable**, React does **not affect the others**.

```js
this.state = {
  count: 0,
  name: "Aditya"
};

this.setState({ count: 1 }); // name remains unchanged`
```
-----

## What Does "Loading a Component" Mean?
- Loading a component means **mounting it to the DOM**.
- For class components, this triggers lifecycle methods.

----

## What Happens When a Class Component Loads?

When a class component is instantiated:

1\.  `constructor()` is called

2\.  `render()` is called

`constructor() {}

render() {}`

----

## How Does `componentDidMount` Execute? (Parent → Child)
Execution order when a parent renders a child:

```js
Constructor (Parent)
Render (Parent)
Constructor (Child)
Render (Child)
componentDidMount (Child)
componentDidMount (Parent)
```
```js
class Parent extends React.Component {

  componentDidMount() {
    console.log("Parent mounted");
  }
}
```
----

## What If Parent Has Multiple Children?
React completes **all render work first**, then runs `componentDidMount`.


**Execution order:**

```js
Constructor (Parent)
Render (Parent)
Constructor (Child 1)
Render (Child 1)
Constructor (Child 2)
Render (Child 2)
componentDidMount (Child 1)
componentDidMount (Child 2)
componentDidMount (Parent)
```
----

## React Lifecycle Phases

There are **two phases**:

### 1\. Render Phase

-   `constructor`

-   `render`

### 2\. Commit Phase

-   `componentDidMount`

-   DOM updates happen here

-----

## Why Is `componentDidMount` Called After All Renders?
- DOM updates are **expensive**.
- React batches all render work first, then updates the DOM once.

**That's why:**

-   All constructors & renders run first
-   `componentDidMount` runs last

----

## Why Is `componentDidMount` Used for API Calls?

**Because:**
- DOM is ready
- Component is mounted
- Safe place for side effects

```js
componentDidMount() {

  fetch("/api/data")

    .then(res => res.json())

    .then(data => this.setState({ data }));

}
```

----

### Q: How do you create Nested Routes using `react-router-dom`?
- Nested routes are created by defining **children routes** inside a parent route and rendering them using `<Outlet />`.
- This helps build layouts where child pages share common UI.

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> }
    ]
  }
]);
```

```js
function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
}
```

**⚠️ Interview note:**

`<Switch>` and nested `<Route>` JSX is **old v5** --- avoid mentioning it.

---

### Q: What is `createHashRouter`?
- `createHashRouter` uses the URL **hash (`#`)** to manage routes.
- It's useful when the server does not support browser history routing.

```js
const router = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> }
]);
```

---

### Q: What is `createMemoryRouter`?
- `createMemoryRouter` stores routing history **in memory**, not in the URL.
- It is mainly used for **testing and non-browser environments**.

```js
const router = createMemoryRouter(
  [{ path: "/", element: <Home /> }],
  { initialEntries: ["/"] }
);
```

---

### Q: What is the order of lifecycle methods in Class Components?
The lifecycle methods are called in this order:

1\.  `constructor`

2\.  `render`

3\.  `componentDidMount`

4\.  `componentDidUpdate`

5\.  `componentWillUnmount`

```js
class Demo extends React.Component {
  constructor() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return <div />;
  }
}
```
---

### Q: Why do we use `componentDidMount`?
`componentDidMount` is used to run **side effects after the first render**, like API calls, subscriptions, or DOM access.

```js
componentDidMount() {
  fetch("/api/data")
    .then(res => res.json())
    .then(data => this.setState({ data }));
}
```

---

### Q: Why do we use `componentWillUnmount`? Show with example.
It is used to **clean up resources** before the component is removed.

This prevents memory leaks.

```js
componentDidMount() {
  window.addEventListener("resize", this.handleResize);
}
```
```js
componentWillUnmount() {
  window.removeEventListener("resize", this.handleResize);
}
```

---

### Q: Why do we use `super(props)` in constructor?
- `super(props)` calls the parent (`React.Component`) constructor.
- Without it, `this.props` will be `undefined` inside the constructor.

```js
class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
}
```

**⚠️ Interview truth:**
If you don't use `props` in constructor, you can skip it entirely.

---

### Q: Why can't the `useEffect` callback be `async`?
Because `useEffect` expects **either nothing or a cleanup function**, but an `async` function returns a Promise.

**❌ Wrong:**
```js
useEffect(async () => {});
```

**✅ Correct pattern:**
```js
useEffect(() => {
  async function fetchData() {
    const res = await fetch("/api");
    const data = await res.json();
    setData(data);
  }
  fetchData();
}, []);

```