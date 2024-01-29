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
  return (
    <div>
      <h1>Timer</h1>
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar
          value={duration}
          maxValue={time}
          text={`${Math.floor(duration / 60000)}:${(
            (duration % 60000) /
            1000
          ).toFixed(0)}`}
        />
      </div>
    </div>
  );
}
