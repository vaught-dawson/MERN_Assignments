import PersonCard from "./components/PersonCard";
import "./App.css";

const people = [
  {
    lastName: "Doe",
    firstName: "Jane",
    age: 45,
    hairColor: "Black",
  },
  {
    lastName: "Smith",
    firstName: "John",
    age: 88,
    hairColor: "Brown",
  },
];

function App() {
  return (
    <div className="App">
      {people.map((p, i) => (
        <PersonCard key={i} person={p} />
      ))}
    </div>
  );
}

export default App;
