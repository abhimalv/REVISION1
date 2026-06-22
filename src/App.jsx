function App() {
  return (
    <div className="app-shell">
      <header className="hero-section">
        <h1>Welcome to Your React Website</h1>
        <p>Fast, modern, and ready to customize.</p>
        <a href="#features" className="cta-button">Explore Features</a>
      </header>

      <section id="features" className="feature-grid">
        <article>
          <h2>Built with React</h2>
          <p>Use components, hooks, and modern UI patterns.</p>
        </article>
        <article>
          <h2>Powered by Vite</h2>
          <p>Lightning-fast development server with HMR.</p>
        </article>
        <article>
          <h2>Easy to Extend</h2>
          <p>Add pages, routes, or state management as needed.</p>
        </article>
      </section>
    </div>
  );
}

export default App;
