---
title: React Testing Library
tags:
  - React
  - Testing
  - Testing Library
emoji: 🔥
link: https://www.robinwieruch.de/react-testing-library
---

React Testing Library (RTL) by Kent C. Dodds got released as alternative to Airbnb's Enzyme.

While Enzyme gives React developers utilities to test internals of React components, React Testing Library takes a step back and questions us "how to test React components to get full confidence in our React components": Rather than testing a component's implementation details, React Testing Library puts the developer in the shoes of an end user of an React application.

```js
describe("true is truthy and false is falsy", () => {
  test("true is truthy", () => {
    expect(true).toBe(true);
  });

  test("false is falsy", () => {
    expect(false).toBe(false);
  });
});
```
