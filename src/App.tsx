import Timer from "./components/timer";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Timer work={2} breakTime={0.5} />
    </div>
  );
}

export default App;
