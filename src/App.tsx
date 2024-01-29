import ButtonDiv from "./components/ButtonDiv";
import Timer from "./components/timer";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Timer time={20} />
      <ButtonDiv />
    </div>
  );
}

export default App;
