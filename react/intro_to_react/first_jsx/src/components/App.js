const lst = [
  "Learn React",
  "Climb Mt. Everest",
  "Run a marathon",
  "Feed the dogs",
];

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>
        {lst.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
