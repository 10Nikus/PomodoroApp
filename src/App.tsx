import { useSelector } from "react-redux";
import Header from "./components/Header";
import Timer from "./components/timer";
import NestedModal from "./components/Modal";

function App() {
  const colorMode = useSelector((state: any) => state.modeToggle.value);

  const appClass =
    colorMode === "light"
      ? "flex flex-col items-center justify-center bg-white text-black w-screen h-screen"
      : "flex flex-col items-center justify-center bg-stone-900 text-white w-screen h-screen";

  return (
    <div className={appClass}>
      <Header />
      <Timer />
      <NestedModal />
    </div>
  );
}

export default App;
