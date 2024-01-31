import Timer from "./components/timer";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Timer work={1} breakTime={0.2} />
    </div>
  );
}

export default App;
