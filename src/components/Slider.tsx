import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function NonLinearSlider({
  title,
  min,
  max,
  step,
}: {
  title: string;
  min: number;
  max: number;
  step: number;
}) {
  const [value, setValue] = React.useState<number>(20);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id={title + "-slider"} gutterBottom>
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
