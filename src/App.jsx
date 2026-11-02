import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <main className="lesson">
      <header className="lesson-header">
        <p className="eyebrow">REACT FUNDAMENTALS · 02</p>
        <h1>State</h1>
        <p>Keep track of values that change over time and update the UI.</p>
      </header>
      <section className="lesson-section" aria-labelledby="example-title">
        <h2 id="example-title">State in action</h2>
        <p>Each value below is component state. Use the controls to change it; React renders the updated value.</p>
        <div className="demo-grid">
          <article className="concept-card">
            <p className="eyebrow">COUNTER</p>
            <p className="state-value" aria-live="polite">{count}</p>
            <div className="control-row">
              <button type="button" onClick={() => setCount((current) => current - 1)}>− Decrease</button>
              <button type="button" onClick={() => setCount((current) => current + 1)}>+ Increase</button>
            </div>
            <button className="text-button" type="button" onClick={() => setCount(0)}>Reset count</button>
          </article>
          <article className="concept-card">
            <p className="eyebrow">TEXT INPUT</p>
            <label htmlFor="name-input">Your name</label>
            <input id="name-input" value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your name" />
            <p className="response" aria-live="polite">
              {name ? `Hello, ${name}!` : 'Your greeting will appear here.'}
            </p>
          </article>
          <article className="concept-card">
            <p className="eyebrow">BOOLEAN</p>
            <p>{isSubscribed ? 'You are subscribed.' : 'You are not subscribed yet.'}</p>
            <button type="button" onClick={() => setIsSubscribed((current) => !current)}>
              {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
            </button>
          </article>
        </div>
      </section>
      <section className="lesson-section">
        <h2>What to remember</h2>
        <ul className="lesson-list">
          <li><code>useState(initialValue)</code> returns the current value and a setter.</li>
          <li>Call the setter to request a render with the new value.</li>
          <li>Use the functional form when the next value depends on the previous one.</li>
          <li>State belongs to a component and is private to that component instance.</li>
        </ul>
        <pre><code>{'const [count, setCount] = useState(0)\nsetCount(current => current + 1)'}</code></pre>
      </section>
    </main>
  )
}

export default App
