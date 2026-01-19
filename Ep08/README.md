## Ep08 - Let's get classy

----

### Q: How do you create Nested Routes using `react-router-dom`?

Nested routes are created by defining **children routes** inside a parent route and rendering them using `<Outlet />`.\
This helps build layouts where child pages share common UI.

`const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> }
    ]
  }
]);`

`function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}`

⚠️ Interview note:\
`<Switch>` and nested `<Route>` JSX is **old v5** --- avoid mentioning it.

* * * * *

### Q: What is `createHashRouter`?

`createHashRouter` uses the URL **hash (`#`)** to manage routes.\
It's useful when the server does not support browser history routing.

`const router = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> }
]);`

* * * * *

### Q: What is `createMemoryRouter`?

`createMemoryRouter` stores routing history **in memory**, not in the URL.\
It is mainly used for **testing and non-browser environments**.

`const router = createMemoryRouter(
  [{ path: "/", element: <Home /> }],
  { initialEntries: ["/"] }
);`

* * * * *

### Q: What is the order of lifecycle methods in Class Components?

The lifecycle methods are called in this order:

1.  `constructor`

2.  `render`

3.  `componentDidMount`

4.  `componentDidUpdate`

5.  `componentWillUnmount`

`class Demo extends React.Component {
  constructor() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return <div />;
  }
}`

* * * * *

### Q: Why do we use `componentDidMount`?

`componentDidMount` is used to run **side effects after the first render**,\
like API calls, subscriptions, or DOM access.

`componentDidMount() {
  fetch("/api/data")
    .then(res => res.json())
    .then(data => this.setState({ data }));
}`

* * * * *

### Q: Why do we use `componentWillUnmount`? Show with example.

It is used to **clean up resources** before the component is removed.\
This prevents memory leaks.

`componentDidMount() {
  window.addEventListener("resize", this.handleResize);
}

componentWillUnmount() {
  window.removeEventListener("resize", this.handleResize);
}`

* * * * *

### Q: Why do we use `super(props)` in constructor?

`super(props)` calls the parent (`React.Component`) constructor.\
Without it, `this.props` will be `undefined` inside the constructor.

`class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}`

⚠️ Interview truth:\
If you don't use `props` in constructor, you can skip it entirely.

* * * * *

### Q: Why can't the `useEffect` callback be `async`?

Because `useEffect` expects **either nothing or a cleanup function**,\
but an `async` function returns a Promise.

❌ Wrong:

`useEffect(async () => {});`

✅ Correct pattern:

`useEffect(() => {
  async function fetchData() {
    const res = await fetch("/api");
    const data = await res.json();
    setData(data);
  }

  fetchData();
}, []);`