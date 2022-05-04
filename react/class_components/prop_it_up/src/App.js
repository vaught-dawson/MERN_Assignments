import Person from "./components/Person";

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
  {
    lastName: "Fillmore",
    firstName: "Millard",
    age: 50,
    hairColor: "Brown",
  },
  {
    lastName: "Smith",
    firstName: "Maria",
    age: 62,
    hairColor: "Brown",
  },
];

function App() {
  return (
    <div className="App">
      {people.map((p, i) => (
        <Person person={p} key={i} />
      ))}
    </div>
  );
}

export default App;
