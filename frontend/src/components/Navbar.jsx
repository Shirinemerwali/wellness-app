function Navbar({ setShowLogin, setAuthMode }) {

  return (

    <nav className="navbar">

      <h2 className="logo">
        EssenceFlow
      </h2>

      <ul className="nav-links">

        

      </ul>

      <div className="nav-buttons">

        <button className="login-btn"
        onClick={() =>{
          setShowLogin (true);
          setAuthMode ('login');
        }}
        
        >
        Login
        </button>


        <button className = "started-btn"
          onClick= { () => {
            setShowLogin (true);
            setAuthMode ('register');
          }}

           >
         Get started
        </button>

      </div>

    </nav>

  );

}

export default Navbar;