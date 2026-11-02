# React State

This Vite app demonstrates **state**: data a component remembers between renders and updates in response to interactions.

## What the app demonstrates

In `src/App.jsx`, `App` uses three independent state values:

- `count` drives a counter with increase, decrease, and reset controls.
- `name` tracks a controlled text input and updates a greeting as you type.
- `isSubscribed` stores a boolean that toggles the subscription message.

Each is declared with `useState`:

```jsx
const [count, setCount] = useState(0)
setCount((current) => current + 1)
```

The setter schedules a render with the new value. The functional setter form is useful when the next value depends on the previous value. Do not mutate state directly.

## Run the app

```sh
npm install
npm run dev
```

The lesson is implemented in `src/App.jsx`; `src/App.css` and `src/index.css` provide its layout and theme.
