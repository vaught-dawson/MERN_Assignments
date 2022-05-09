import TabMenu from "./components/TabMenu";

const tabs = [
  {
    name: "Tab 1",
    content: "This is content for tab 1.",
  },
  {
    name: "Tab 2",
    content: "This is content for tab 2.",
  },
  {
    name: "Tab 3",
    content: "This is content for tab 3.",
  },
];

function App() {
  return (
    <div className="App">
      <TabMenu tabs={tabs} />
    </div>
  );
}

export default App;
