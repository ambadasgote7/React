## Ep10 – Jo Dikhta Hai Wo Bikta Hai

----

## 1. What are the different ways of writing CSS in React?
There are multiple ways to style React applications depending on scalability and use case.

---

## 2. Inline CSS
Inline CSS is written directly inside JSX using the style attribute. A better practice is to define styles as an object and pass it to style.

**Example:**
```js
const headingStyle = {
  color: "red",
  fontSize: "20px"
};

<h1 style={headingStyle}>Hello World</h1>
```

---

## 3. Importing External Stylesheet
We can create a separate CSS file and import it into the component. This approach is simple and commonly used.

**Example:**
```js
/* styles.css */
.title {
  color: blue;
}

import "./styles.css";

<h1 className="title">Hello World</h1>
```

---

## 4. CSS Modules
CSS Modules scope CSS locally to the component, preventing class name conflicts.

**Steps:**
- Create a file with .module.css
- Import it into the component
- Use styles via object reference

**Example:**
```js
/* styles.module.css */
.heading {
  color: green;
}

import styles from "./styles.module.css";

<h1 className={styles.heading}>Hello</h1>

```
---

## 5. Styled Components
Styled Components allow us to write CSS inside JavaScript using template literals. This is useful for dynamic styling.

**Example:**
```js
import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: white;
`;
```

`<Button>Click</Button>`

---

## 6. Conditional Styling
Conditional styling is used to apply styles based on a condition.

**Example:**
```js
<h1 className={isActive ? "active" : "inactive"}>
  Status
</h1>
```

---

## 7. How do we configure Tailwind CSS?

**Steps:**
- Install Tailwind CSS and dependencies
- Create tailwind.config.js
- Configure PostCSS
- Add Tailwind directives
- Run the build process
- Ensure CSS is loaded in `<head>`

---

## 8. Tailwind CSS Directives

**Example:**
@tailwind base;
@tailwind components;
@tailwind utilities;

---

## 9. What do keys in tailwind.config.js mean?
- content
    Specifies the files Tailwind scans for class names to generate optimized CSS.

- theme
    Used to customize default colors, spacing, fonts, etc.

- extend
    Used to extend the default theme without overriding it completely.

- plugins
    Used to add additional Tailwind functionality via plugins.

---

## 10. Why do we have a .postcssrc or postcss.config.js file?
The PostCSS config file defines which PostCSS plugins are used during the build process.

---

## 11. Role of PostCSS in Tailwind
- Processes Tailwind CSS
- Adds vendor prefixes using Autoprefixer
- Optimizes and minifies CSS
- Improves cross-browser compatibility

---

## 12. Example: postcss.config.js
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```