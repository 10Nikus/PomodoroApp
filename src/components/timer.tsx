import { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Timer({ time }: { time: number }) {
  const [duration, setDuration] = useState(time * 60 * 1000);

  const timerRef: any = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDuration((prevTime) => prevTime - 1000);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const timer = `${Math.floor(duration / 60000)}:${(
    (duration % 60000) /
    1000
  ).toFixed(0)}`;

  const paddedTime = timer
    .split(":")
    .map((e) => `0${e}`.slice(-2))
    .join(":");
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-7xl mb-8">Pomodoro</h1>
      <div style={{ width: 250, height: 250 }}>
        <CircularProgressbar
          counterClockwise
          value={duration}
          maxValue={time * 60 * 1000}
          text={paddedTime}
        />
      </div>
    </div>
  );
}
