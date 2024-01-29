import { useEffect, useRef, useState } from "react";

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
      <h2>
        {Math.floor(duration / 60000)}:{((duration % 60000) / 1000).toFixed(0)}
      </h2>
    </div>
  );
}
