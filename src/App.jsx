import './App.css'

function ProfileCard({ name, role, location, children }) {
  return (
    <article className="concept-card">
      <p className="eyebrow">PROFILE CARD</p>
      <h2>{name}</h2>
      <p>{role}</p>
      <p className="muted">Based in {location}</p>
      {children}
    </article>
  )
}

function App() {
  return (
    <main className="lesson">
      <header className="lesson-header">
        <p className="eyebrow">REACT FUNDAMENTALS · 01</p>
        <h1>Props</h1>
        <p>Pass information from a parent component to a child component.</p>
      </header>

      <section className="lesson-section" aria-labelledby="example-title">
        <h2 id="example-title">A component configured with props</h2>
        <p>
          <code>App</code> supplies a name, role, and location to each
          <code> ProfileCard</code>. The card receives them as one props object
          and renders the values.
        </p>
        <div className="card-grid">
          <ProfileCard name="Ada Lovelace" role="Frontend developer" location="London">
            <p className="highlight">Currently exploring accessible UI.</p>
          </ProfileCard>
          <ProfileCard name="Grace Hopper" role="Software engineer" location="New York">
            <p className="highlight">Favorite topic: making code clearer.</p>
          </ProfileCard>
        </div>
      </section>

      <section className="lesson-section">
        <h2>What to remember</h2>
        <ul className="lesson-list">
          <li>Props are inputs supplied when a component is used.</li>
          <li>Destructuring names the values the component needs.</li>
          <li>Props are read-only; a child should not modify them.</li>
          <li><code>children</code> is a special prop for nested JSX.</li>
        </ul>
        <pre><code>{'<ProfileCard name="Ada Lovelace" role="Developer" />'}</code></pre>
      </section>
    </main>
  )
}

export default App
