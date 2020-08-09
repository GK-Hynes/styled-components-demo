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

### Extending styles

styled components lets you extend the properties of one component into another.

```js
const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background: blue;
  color: #fff;
  border-radius: 0.25rem;
  border: none;
`;

const CancelButton = styled(Button)`
  background: red;
`;
```

You can reference one styled-component inside another by referencing the variable name.

```js
const AppWrapper = styled.div`
  header {
    background: teal;
    ${Button} {
      margin-bottom: 2rem;
    }
  }
`;
```

### Styling any component

You can use the `styled` method on React components too, as long as you pass the `className` prop to the DOM element.

```js
const DemoComponent = ({ className }) => (
  <h2 className={className}>I'm a demo component</h2>
);

const StyledDemo = styled(DemoComponent)`
  color: red;
`;
```

### Media queries

With styled-components you can nest media queries inside your styled-component.

```js
const ColorChanger = styled.section`
  background: papayawhip;

  @media (min-width: 768px) {
    background: mediumseagreen;
  }
`;
```

You can also create a breakpoints function which uses reduce to output a media query based off the properties of a breakpoints object. This requires styled-components' `css` method.

```js
const sizes = {
  small: 640,
  medium: 768,
  large: 1024,
  extraLarge: 1280
};

const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const Heading = styled.h1`
  font-size: 2rem;
  ${above.medium`
  font-size: 3rem;
  `}
`;
```
