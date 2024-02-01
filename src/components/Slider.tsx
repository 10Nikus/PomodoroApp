import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function NonLinearSlider({
  title,
  min,
  max,
  step,
  id,
  setNewTime,
}: {
  title: string;
  min: number;
  max: number;
  step: number;
  id: string;
  setNewTime: Function;
}) {
  const initVal = useSelector((state: any) => state.timeSlice[id]);
  const [value, setValue] = useState<number>(initVal);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      setNewTime((prev: any) => ({ ...prev, [id]: newValue }));
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id={title.split(" ").join("-") + "-slider"} gutterBottom>
        {title} : {value}min
      </Typography>
      <Slider
        value={value}
        min={min}
        step={step}
        max={max}
        onChange={handleChange}
        sx={{ color: "#4F46E5" }}
      />
    </Box>
  );
}
