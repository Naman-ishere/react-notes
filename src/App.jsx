import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('No action yet.')
  const [query, setQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setSubmittedQuery(query.trim())
  }

  return (
    <main className="lesson">
      <header className="lesson-header">
        <p className="eyebrow">REACT FUNDAMENTALS · 03</p>
        <h1>Events</h1>
        <p>Respond to clicks, typing, and form submissions with event handlers.</p>
      </header>
      <section className="lesson-section" aria-labelledby="example-title">
        <h2 id="example-title">Handle user actions</h2>
        <p>React event props such as <code>onClick</code>, <code>onChange</code>, and <code>onSubmit</code> receive functions.</p>
        <div className="demo-grid">
          <article className="concept-card">
            <p className="eyebrow">CLICK</p>
            <button type="button" onClick={() => setMessage('The button was clicked!')}>Click me</button>
            <p className="response" aria-live="polite">{message}</p>
          </article>
          <article className="concept-card">
            <p className="eyebrow">CHANGE</p>
            <label htmlFor="event-input">Type something</label>
            <input id="event-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Your text appears below" />
            <p className="response" aria-live="polite">{query || 'Waiting for input…'}</p>
          </article>
          <article className="concept-card">
            <p className="eyebrow">SUBMIT</p>
            <form className="stack" onSubmit={handleSubmit}>
              <label htmlFor="search-input">Search this lesson</label>
              <input id="search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Enter a phrase" />
              <button type="submit">Submit</button>
            </form>
            <p className="response" aria-live="polite">
              {submittedQuery ? `Submitted: ${submittedQuery}` : 'Submit a phrase to see the result.'}
            </p>
          </article>
        </div>
      </section>
      <section className="lesson-section">
        <h2>What to remember</h2>
        <ul className="lesson-list">
          <li>Pass a function to an event prop: <code>{'onClick={handleClick}'}</code>.</li>
          <li>React calls the handler when that interaction happens.</li>
          <li>Handlers can read the event object, such as <code>event.target.value</code>.</li>
          <li>Call <code>event.preventDefault()</code> to stop a form's browser navigation when needed.</li>
        </ul>
        <pre><code>{'function handleSubmit(event) {\n  event.preventDefault()\n  // process the form\n}'}</code></pre>
      </section>
    </main>
  )
}

export default App
