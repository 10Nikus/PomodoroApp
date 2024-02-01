import { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

function Timer() {
  const { workTime, breakTime, longBreakTime } = useSelector(
    (state: any) => state.timeSlice
  );

  const isOpen = useSelector((state: any) => state.modalSlice.value);

  const [duration, setDuration] = useState(workTime * 60 * 1000);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work");
  const timerRef: any = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (isRunning) {
        setDuration((prevTime) => prevTime - 1000);
      }
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  function handleClick() {
    setIsRunning((prev) => !prev);
  }

  function handleReset() {
    setDuration(workTime * 60 * 1000);
    setIsRunning(false);
  }

  if (duration === 0) {
    setMode((prev) => (prev === "work" ? "break" : "work"));
    setDuration(mode === "work" ? breakTime * 60 * 1000 : workTime * 60 * 1000);
  }

  const timer = `${Math.floor(duration / 60000)}:${(
    (duration % 60000) /
    1000
  ).toFixed(0)}`;

  const paddedTime = timer
    .split(":")
    .map((e) => `0${e}`.slice(-2))
    .join(":");

  const classBtn = isRunning
    ? "text-indigo-600 w-64 m-6 p-2 rounded-lg text-center border-2 border-indigo-600"
    : "bg-indigo-600 text-stone-200 w-64 m-6 p-2 rounded-lg text-center ";

  const bgCol = mode === "work" ? "#4F46E5" : "#71f871";

  return (
    <div className="flex flex-col items-center ">
      {isOpen && <h1>Pomodoro</h1>}
      <div style={{ width: 250, height: 250 }}>
        <CircularProgressbar
          counterClockwise
          value={duration}
          maxValue={
            mode === "work" ? workTime * 60 * 1000 : breakTime * 60 * 1000
          }
          text={paddedTime}
          styles={{
            text: { fill: "#141010" },
            background: { fill: "#606470" },
            path: { stroke: bgCol },
          }}
        />
      </div>
      <button className={classBtn} onClick={handleClick}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        className="absolute right-3 bottom-2 bg-red-500 rounded-lg p-2 text-white"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;
