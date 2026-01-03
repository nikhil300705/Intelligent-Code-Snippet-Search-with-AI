import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [snippets, setSnippets] = useState([]);
  const [aiText, setAiText] = useState("");

  const handleSearch = async () => {
    const res = await fetch(
      `http://localhost:5001/api/snippets/search?q=${query}`
    );
    const data = await res.json();
    setSnippets(data);
    setAiText("");
  };

  const getAIHelp = async (snippet) => {
    const res = await fetch("http://localhost:5001/api/ai/suggest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: snippet.title,
        code: snippet.code,
      }),
    });

    const data = await res.json();
    setAiText(data.suggestion);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Code Snippet Search</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search snippets..."
      />
      <button onClick={handleSearch}>Search</button>

      {snippets.map((s) => (
        <div key={s._id} style={{ border: "1px solid #ccc", margin: 20, padding: 20 }}>
          <h3>{s.title}</h3>
          <p><b>Language:</b> {s.language}</p>
          <pre>{s.code}</pre>
          <p><b>Tags:</b> {s.tags.join(", ")}</p>

          <button onClick={() => getAIHelp(s)}>
            Ask AI
          </button>
        </div>
      ))}

      {aiText && (
        <div style={{ background: "#f4f4f4", padding: 20 }}>
          <h3>AI Suggestion</h3>
          <p>{aiText}</p>
        </div>
      )}
    </div>
  );
}

export default App;
