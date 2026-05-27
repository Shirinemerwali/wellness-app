import "../styles/Journal.css";

import { useEffect, useState } from "react";

function Journal({ setCurrentPage }) {

  const [quote, setQuote] = useState("");

  // FETCH QUOTE

  useEffect(() => {

    const fetchQuote = async () => {

      try {

        const response = await fetch(
          "https://zenquotes.io/api/random"
        );

        const data = await response.json();

        setQuote(
          data[0].q
        );

      } catch (error) {

        console.log(error);

        setQuote(
          "Believe in your own growth."
        );

      }

    };

    fetchQuote();

  }, []);

  return (

    <div className="journal-page">

      {/* BACK BUTTON */}

      <button
        className="journal-back-btn"
        onClick={() => setCurrentPage("dashboard")}
      >
        ← Dashboard
      </button>

      {/* HEADER */}

      <div className="journal-header">

        <h1>
          Journal
        </h1>

        <p>
          A space for reflection and growth.
        </p>

      </div>

      {/* QUOTE CARD */}

      <div className="quote-card">

        <h2>
          "{quote}"
        </h2>

        <p>
          — Zen Quotes
        </p>

      </div>

      {/* MOOD TRACKER */}

      <div className="mood-card">

        <h2>
          How are you feeling today?
        </h2>

        <div className="mood-options">

          <button>😢</button>

          <button>😕</button>

          <button>😐</button>

          <button>🙂</button>

          <button>😁</button>

        </div>

      </div>

      {/* JOURNAL */}

      <div className="journal-card">

        <h2>
          Write in your journal
        </h2>

        <textarea
          placeholder="Write about your day, your thoughts, or anything on your mind..."
        />

        <button>
          Save Entry
        </button>

      </div>

      {/* RECENT ENTRIES */}

      <div className="entries-section">

        <h2>
          Recent Entries
        </h2>

        <div className="entry-card">

          <h3>
            May 20, 2025
          </h3>

          <p>
            Today was a productive day. I got a lot done and also took time for myself.
          </p>

        </div>

        <div className="entry-card">

          <h3>
            May 19, 2025
          </h3>

          <p>
            Felt a bit overwhelmed today, but a long walk helped me clear my mind.
          </p>

        </div>

      </div>

    </div>

  );

}

export default Journal;
