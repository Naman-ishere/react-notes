# React Events

This Vite app demonstrates how **event handlers** let a React component respond to user actions.

## What the app demonstrates

In `src/App.jsx`, the click button uses `onClick` to update a message. The controlled text field uses `onChange` to read `event.target.value`. The form uses `onSubmit`; its handler calls `event.preventDefault()` so submitting does not navigate or reload the page, then displays the submitted phrase.

A handler is a function passed to an event prop:

```jsx
function handleSubmit(event) {
  event.preventDefault()
  // process the form
}

<form onSubmit={handleSubmit}>...</form>
```

Use camelCase names such as `onClick` and `onChange`, and pass a function rather than calling it while rendering (for example, `onClick={handleClick}`).

## Run the app

```sh
npm install
npm run dev
```

The lesson is implemented in `src/App.jsx`; `src/App.css` and `src/index.css` provide its layout and theme.
