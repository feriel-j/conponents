import "./App.css";
import { Profil } from "./components/Profile/Profil";

function App() {
  const person = {
    name: "feriel",
    age: 25,
    bio: "full stack js developer",
  };

  const alertt = (x) => {
    alert(x);
  };

  return (
    <div className="container">
      <Profil person={person} alertt={alertt}>
        <h1>this is child props</h1>
      </Profil>
    </div>
  );
}

export default App;
