import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsIcon from "@mui/icons-material/Settings";
import { toggleMode } from "../store/mode-slice";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const colorMode = useSelector((state: any) => state.modeToggle.value);
  const dispatch = useDispatch();

  function handleMode() {
    dispatch(toggleMode());
  }

  return (
    <nav className="flex w-full justify-between">
      <div onClick={handleMode} className="">
        {colorMode === "light" ? <ModeNightIcon /> : <LightModeIcon />}
      </div>
      <h1 className="text-7xl mb-8">Pomodoro</h1>
      <SettingsIcon />
    </nav>
  );
}
