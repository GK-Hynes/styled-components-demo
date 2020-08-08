# styled-components demo

Getting better at styled-components with a little practice.

styled-components creates scoped, reusable React components using tagged template literals.

It outputs the element you specify and generates a unique class to style it.

### Props

Like with other React components, you can pass props to a styled-component. You do this using string interpolation and an arrow function:

```js
const Button = styled.button`
  background: ${({ type }) => (type === `cancel` ? `red` : `blue`)};
`;
```

### styled-components vs CSS preprocessors

Since styled-components are built on top of JavaScript, it has access to functions and variables. It also supports nesting and takes care of vendor prefixing.

```js
const AppWrapper = styled.div`
  header {
    background: teal;
    &:hover {
      background: aqua;
    }
  }
`;
```

