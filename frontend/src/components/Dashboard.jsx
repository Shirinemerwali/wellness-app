import '../styles/Dashboard.css';

function Dashboard({ setCurrentPage, setToken }) {

  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem('token');

    setToken(null);

  };

  return (

    <div className="dashboard">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h2 className="dashboard-logo">
          EssenceFlow
        </h2>

        <ul className="sidebar-links">

          <li
            onClick={() => setCurrentPage("workouts")}
          >
            Workouts
          </li>

          <li
            onClick={() => setCurrentPage("nutrition")}
          >
            Nutrition
          </li>

          <li
            onClick={() => setCurrentPage("journal")}
          >
            Journal
          </li>

        </ul>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}

      <div className="dashboard-content">

        <div className="dashboard-header">

          <h1>
            Welcome Back
          </h1>

          <p>
            Ready to move today?
          </p>

        </div>

        {/* CARDS */}

        <div className="dashboard-cards">

          {/* WORKOUTS */}

          <div
            className="dashboard-card"
            onClick={() => setCurrentPage("workouts")}
          >

            <h2>
              Online workouts
            </h2>

            <p>
              Easy and free access
            </p>

          </div>

          {/* NUTRITION */}

          <div
            className="dashboard-card"
            onClick={() => setCurrentPage("nutrition")}
          >

            <h2>
              Nutrition
            </h2>

            <p>
              Fuel your body.
            </p>

          </div>

          {/* JOURNAL */}

          <div
            className="dashboard-card"
            onClick={() => setCurrentPage("journal")}
          >

            <h2>
              Journal
            </h2>

            <p>
              Reflect and manifest.
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;