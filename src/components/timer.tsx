import { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  startBreak,
  startLongBreak,
  pause,
  startWorking,
} from "../store/action-slice";

function Timer() {
  const dispatch = useDispatch();

  const { workTime, breakTime, longBreakTime } = useSelector(
    (state: any) => state.timeSlice
  );

  const mode = useSelector((state: any) => state.actionSlice.mode);

  const theme = useSelector((state: any) => state.modeToggle.value);

  const [duration, setDuration] = useState(workTime * 60 * 1000);
  useEffect(() => {
    setDuration(workTime * 60 * 1000);
  }, [workTime, breakTime, longBreakTime]);

  const [isRunning, setIsRunning] = useState(false);
  const [countBreak, setCountBreak] = useState(0);
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
    if (mode.includes("wait")) {
    }
  }

  function handleReset() {
    setDuration(workTime * 60 * 1000);
    setIsRunning(false);
  }

  function setLongBreakTime() {
    dispatch(startLongBreak());
  }

  function setShortBeakTime() {
    dispatch(startBreak());
  }

  function startWork() {
    dispatch(startWorking());
  }

  if (duration === 0) {
    if (countBreak === 3 && mode === "work") {
      setLongBreakTime();
      setDuration(longBreakTime * 60 * 1000);
      setCountBreak(0);
    } else if (mode === "work") {
      setShortBeakTime;
      setDuration(breakTime * 60 * 1000);
      setCountBreak((prev) => prev + 1);
    } else if (mode === "break") {
      startWork();
      setDuration(workTime * 60 * 1000);
    } else if (mode === "longBreak") {
      startWork();
      setDuration(workTime * 60 * 1000);
      setCountBreak(0);
    }
  }

  const hours = Math.floor(duration / 3600000);
  const minutes = Math.floor((duration % 3600000) / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);

  const formattedTime = `${
    hours ? String(hours).padStart(2, "0") + ":" : ""
  }${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const classBtn = isRunning
    ? theme === "light"
      ? "text-indigo-600 w-64 m-6 p-2 rounded-lg text-center border-2 border-indigo-600"
      : "bg-orange-400 text-black w-64 m-6 p-2 rounded-lg text-center "
    : theme === "light"
    ? "bg-indigo-600 text-stone-200 w-64 m-6 p-2 rounded-lg text-center border-2 border-indigo-600"
    : "text-orange-400 w-64 m-6 p-2 rounded-lg text-center border-2 border-orange-400";

  const bgCol = mode === "work" ? "#4F46E5" : "#71f871";
  const textCol = theme === "light" ? "#000000" : "#FFFFFF";

  return (
    <div className="flex flex-col items-center ">
      <div style={{ width: 250, height: 250 }}>
        <CircularProgressbar
          counterClockwise
          value={duration}
          maxValue={
            mode === "work" || "wait"
              ? workTime * 60 * 1000
              : breakTime * 60 * 1000
          }
          text={formattedTime}
          styles={{
            text: { fill: textCol },
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
