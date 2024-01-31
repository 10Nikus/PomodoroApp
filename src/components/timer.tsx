import { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Timer() {
  const [duration, setDuration] = useState(20 * 60 * 1000);
  const [isRunning, setIsRunning] = useState(false);
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
    setDuration(20 * 60 * 1000);
    setIsRunning(false);
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
    ? "bg-white text-indigo-600 w-64 m-6 p-2 rounded-lg text-center border-2 border-indigo-600"
    : "bg-indigo-600 text-stone-200 w-64 m-6 p-2 rounded-lg text-center ";

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-7xl mb-8">Pomodoro</h1>
      <div style={{ width: 250, height: 250 }}>
        <CircularProgressbar
          counterClockwise
          value={duration}
          maxValue={20 * 60 * 1000}
          text={paddedTime}
          styles={{
            text: { fill: "#141010" },
            background: { fill: "#606470" },
            path: { stroke: "#4F46E5" },
          }}
        />
      </div>
      <button className={classBtn} onClick={handleClick}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        className="absolute right-3 top-2 bg-red-500 rounded-lg p-2 text-white"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
