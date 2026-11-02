# React Props

This Vite app is a small lesson about **props**: values a parent component passes to a child component to configure what it renders.

## What the app demonstrates

In `src/App.jsx`, the parent `App` renders two `ProfileCard` components with different `name`, `role`, and `location` props. `ProfileCard` destructures those values from its props object and displays them. The nested paragraphs are passed through the special `children` prop.

```jsx
function ProfileCard({ name, role, location, children }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>Based in {location}</p>
      {children}
    </article>
  )
}

<ProfileCard name="Ada Lovelace" role="Frontend developer" location="London">
  <p>Currently exploring accessible UI.</p>
</ProfileCard>
```

Props are read-only inputs. To change something in response to interaction, use state in the component that owns that data and pass values or callbacks down as props.

## Run the app

```sh
npm install
npm run dev
```

The lesson is implemented in `src/App.jsx`; `src/App.css` and `src/index.css` provide the starter visual design.
