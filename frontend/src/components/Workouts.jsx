import "../styles/Workouts.css";

import yogaImg from "../assets/yoga.jpg";
import pilatesImg from "../assets/pilates.jpg";
import strengthImg from "../assets/styrka.jpg";

function Workouts({ setCurrentPage }) {

  return (

    <div className="workouts-page">

      {/* BACK BUTTON */}

      <button
        className="dashboard-btn"
        onClick={() => setCurrentPage("dashboard")}
      >
        ← Dashboard
      </button>

      {/* HEADER */}

      <div className="workouts-header">

        <h1>
          Workouts
        </h1>

        <p>
          Find your flow. Move your body.
          Feel your best.
        </p>

      </div>

      {/* WORKOUT CARDS */}

      <div className="workout-grid">

        {/* PILATES */}

        <div
          className="workout-card"
          onClick={() =>
            window.open(
              "https://www.youtube.com/watch?v=lCg_gh_fppI"
            )
          }
        >

          <img
            src={pilatesImg}
            alt="Pilates"
          />

          <div className="workout-content">

            <h2>
              Pilates
            </h2>

            <p>
              Strengthen, lengthen and tone your body.
            </p>

            <button>
              Start workout →
            </button>

          </div>

        </div>

        {/* YOGA */}

        <div
          className="workout-card"
          onClick={() =>
            window.open(
              "https://www.youtube.com/watch?v=v7AYKMP6rOE"
            )
          }
        >

          <img
            src={yogaImg}
            alt="Yoga"
          />

          <div className="workout-content">

            <h2>
              Yoga
            </h2>

            <p>
              Stretch, relax and find your balance.
            </p>

            <button>
              Start workout →
            </button>

          </div>

        </div>

        {/* STRENGTH */}

        <div
          className="workout-card"
          onClick={() =>
            window.open(
              "https://www.youtube.com/watch?v=UIPvIYsjfpo"
            )
          }
        >

          <img
            src={strengthImg}
            alt="Strength"
          />

          <div className="workout-content">

            <h2>
              Strength
            </h2>

            <p>
              Build muscle and feel stronger.
            </p>

            <button>
              Start workout →
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Workouts;