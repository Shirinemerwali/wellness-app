import { useState } from "react";

function Register({ setToken }) {

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");


  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(

        "http://localhost:3001/api/users/register",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json"

          },

          body: JSON.stringify({

            email,

            password

          })

        }

      );

      const data = await response.json();

      console.log(data);

      // SAVE TOKEN

      localStorage.setItem(
        "token",
        data.token
      );

      setToken(data.token);

      alert("Account created");

    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div>

      

      <form onSubmit={handleRegister}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Register
        </button>

      </form>

    </div>

  );

}

export default Register;