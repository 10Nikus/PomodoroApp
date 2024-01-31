import { useSelector } from "react-redux";
import Header from "./components/Header";
import Timer from "./components/timer";

function App() {
  const colorMode = useSelector((state: any) => state.modeToggle.value);

  const appClass =
    colorMode === "light"
      ? "flex flex-col items-center justify-center bg-white text-black w-screen h-screen"
      : "flex flex-col items-center justify-center bg-stone-900 text-white w-screen h-screen";

  return (
    <div className={appClass}>
      <Header />
      <Timer work={1} breakTime={0.2} />
    </div>
  );
}

export default App;
